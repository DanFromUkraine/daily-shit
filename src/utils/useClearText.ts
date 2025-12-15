"use client";

import { useAtom, useSetAtom, WritableAtom } from "jotai";
import { useEffect, useRef } from "react";
import { DAY_MS, MODE_AND_TIME_TABLE, MONTH_MS, WEEK_MS } from "../constants";
import {
    lastSessionStartDateLSAtom__Daily,
    lastSessionStartDateLSAtom__Monthly,
    lastSessionStartDateLSAtom__Weekly,
} from "../jotai/clearLogic";

import { currTimeAtom } from "../jotai/timeLeft";
import calcTimeLeft from "./calcTimeLeft";
import {
    dailyTextAtom,
    monthlyTextAtom,
    weeklyTextAtom,
} from "../jotai/textAtoms";

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
    fieldAtom,
    lastSessionAtom,
    timeUnit,
}: {
    fieldAtom: WritableAtom<string, [string], void>;
    lastSessionAtom: WritableAtom<number, [number], void>;
    timeUnit: number;
}) {
    return function useGetTimeUnitTick() {
        const setText = useSetAtom(fieldAtom);
        const [lastSession, setLastSession] = useAtom(lastSessionAtom);

        return ({ currTime }: { currTime: number }) => {
            const timeLeft = calcTimeLeft({
                currTime,
                roundedTimeToWait: timeUnit,
                sessionStartTime: lastSession,
            });

            const myDate = new Date(lastSession);
            const h = myDate.getHours(),
                m = myDate.getMinutes();

            console.log("daily hook ", {
                currTime,
                timeLeft,
                lastSession,
                h,
                m,
            });

            if (timeLeft < 0) {
                setText("");
                setLastSession(currTime);
            }
        };
    };
}

const useGetDailyNoteManagerTick = getTimeUnitManager({
    fieldAtom: dailyTextAtom,
    lastSessionAtom: lastSessionStartDateLSAtom__Daily,
    timeUnit: MODE_AND_TIME_TABLE["Daily"],
});
const useGetWeeklyNoteManagerTick = getTimeUnitManager({
    fieldAtom: weeklyTextAtom,
    lastSessionAtom: lastSessionStartDateLSAtom__Weekly,
    timeUnit: MODE_AND_TIME_TABLE["Weekly"],
});
const useGetMonthlyNoteManagerTick = getTimeUnitManager({
    fieldAtom: monthlyTextAtom,
    lastSessionAtom: lastSessionStartDateLSAtom__Monthly,
    timeUnit: MODE_AND_TIME_TABLE["Monthly"],
});

export default function useClearTextOnTimer() {
    const dailyTickManager = useGetDailyNoteManagerTick(),
        weeklyTickManager = useGetWeeklyNoteManagerTick(),
        monthlyTickManager = useGetMonthlyNoteManagerTick();
    const updateCurrTimeGlobal = useSetAtom(currTimeAtom);

    useInterval(() => {
        const currTime = Date.now();
        updateCurrTimeGlobal(currTime);
        dailyTickManager({ currTime });
        weeklyTickManager({ currTime });
        monthlyTickManager({ currTime });
    }, 1000);
}
