"use client";

import { useAtom, useSetAtom, WritableAtom } from "jotai";
import { useEffect, useRef } from "react";
import { DAY_MS, MONTH_MS, WEEK_MS } from "../constants";
import {
    lastSessionStartDateLSAtom__Daily,
    lastSessionStartDateLSAtom__Monthly,
    lastSessionStartDateLSAtom__Weekly,
} from "../jotai/clearLogic";
import {
    clearDailyTextAtom,
    clearMonthlyTextAtom,
    clearWeeklyTextAtom,
} from "../jotai/textAtoms";
import { currTimeAtom } from "../jotai/timeLeft";
import calcTimeLeft from "./calcTimeLeft";

function useInterval(callback: () => void, delay: number) {
    const savedCallback = useRef<undefined | (() => void)>(undefined);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current();
            }
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

function getTimeUnitManager({
    clearFieldAtom,
    lastSessionAtom,
    timeUnit,
}: {
    clearFieldAtom: WritableAtom<null, [], void>;
    lastSessionAtom: WritableAtom<number, [number], void>;
    timeUnit: number;
}) {
    return function useGetTimeUnitTick() {
        const clearText = useSetAtom(clearFieldAtom);
        const [lastSession, setLastSession] = useAtom(lastSessionAtom);

        return ({ currTime }: { currTime: number }) => {
            const timeLeft = calcTimeLeft({
                currTime,
                roundedTimeToWait: timeUnit,
                sessionStartTime: lastSession,
            });

            if (timeLeft < 0) {
                clearText();
                setLastSession(currTime);
            }
        };
    };
}

const useGetDailyNoteManagerTick = getTimeUnitManager({
    clearFieldAtom: clearDailyTextAtom,
    lastSessionAtom: lastSessionStartDateLSAtom__Daily,
    timeUnit: DAY_MS,
});
const useGetWeeklyNoteManagerTick = getTimeUnitManager({
    clearFieldAtom: clearWeeklyTextAtom,
    lastSessionAtom: lastSessionStartDateLSAtom__Weekly,
    timeUnit: WEEK_MS,
});
const useGetMonthlyNoteManagerTick = getTimeUnitManager({
    clearFieldAtom: clearMonthlyTextAtom,
    lastSessionAtom: lastSessionStartDateLSAtom__Monthly,
    timeUnit: MONTH_MS,
});

export default function useClearTextOnTimer() {
    const dailyTickManager = useGetDailyNoteManagerTick(),
        weeklyTickManager = useGetWeeklyNoteManagerTick(),
        monthlyTickManager = useGetMonthlyNoteManagerTick();
    const upadeCurrTimeGlobal = useSetAtom(currTimeAtom);

    useInterval(() => {
        const currTime = Date.now();
        upadeCurrTimeGlobal(currTime);
        dailyTickManager({ currTime });
        weeklyTickManager({ currTime });
        monthlyTickManager({ currTime });
    }, 1000);
}
