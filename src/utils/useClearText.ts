"use client";

import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { mainTextAtom } from "../jotai/mainInput";
import { useEffect, useRef } from "react";
import { currModeSelectedAtom } from "../jotai/currentMode";
import {
    lastSessionStartDataLSAtom,
    timeLeftMsAtom,
} from "../jotai/clearLogic";
import { MODE_AND_TIME_TABLE } from "../constants";
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

export default function useClearTextOnTimer() {
    const currentMode = useAtomValue(currModeSelectedAtom);
    const setTimeLeftMs = useSetAtom(timeLeftMsAtom);
    const setMainText = useSetAtom(mainTextAtom);
    const [lastSessionDate, setLastSessionDate] = useAtom(
        lastSessionStartDataLSAtom,
    );

    useInterval(() => {
        const currTime = Date.now();
        const timeLeft = calcTimeLeft({
            currTime,
            roundedTimeToWait: MODE_AND_TIME_TABLE[currentMode],
            sessionStartTime: lastSessionDate,
        });

        setTimeLeftMs(timeLeft);

        if (timeLeft < 0) {
            setMainText("");
            setLastSessionDate(currTime);
        }
    }, 1000);
}
