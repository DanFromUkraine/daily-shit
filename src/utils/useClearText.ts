"use client";

import { useAtom, useAtomValue } from "jotai";
import { mainTextAtom } from "../jotai/mainInput";
import { useEffect } from "react";
import { currModeSelectedAtom } from "../jotai/currentMode";
import { lastSessionStartDataLSAtom } from "../jotai/clearLogic";
import { MODE_AND_TIME_TABLE } from "../constants";
import { useSetAtom } from "jotai";
import calcTimeLeft from "./calcTimeLeft";

export default function useClearTextOnTimer() {
    const currentMode = useAtomValue(currModeSelectedAtom);
    const setMainText = useSetAtom(mainTextAtom);
    const [lastSessionDate, setLastSessionDate] = useAtom(
        lastSessionStartDataLSAtom,
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currTime = Date.now();
            const timeLeft = calcTimeLeft({
                currTime,
                roundedTimeToWait: MODE_AND_TIME_TABLE[currentMode],
                sessionStartTime: lastSessionDate,
            });

            console.log(`Hours left: ${timeLeft / 1000 / 60 / 60}`);

            if (timeLeft < 0) {
                setMainText("");
                setLastSessionDate(currTime);
            }
        }, 1_000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentMode, setMainText, lastSessionDate, setLastSessionDate]);
}
