import { atom } from "jotai";
import { currModeSelectedAtom } from "./currentMode";
import calcTimeLeft from "../utils/calcTimeLeft";
import { MODE_AND_TIME_TABLE, SESS_START_DATE_DEPENDECIES } from "../constants";

export const currTimeAtom = atom(0);

export const timeLeftIndicatorAtom = atom((get) => {
    const currTime = get(currTimeAtom);
    const currMode = get(currModeSelectedAtom);
    const sessionStartTime = get(SESS_START_DATE_DEPENDECIES[currMode]);

    console.debug({ currTime });

    return calcTimeLeft({
        currTime,
        roundedTimeToWait: MODE_AND_TIME_TABLE[currMode],
        sessionStartTime,
    });
});
