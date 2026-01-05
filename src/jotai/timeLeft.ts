import { atom } from "jotai";
import calcTimeLeft from "../utils/calcTimeLeft";
import {
  MODE_AND_TIME_TABLE,
  SESS_START_DATE_DEPENDENCIES,
} from "../constants";
import { getCurrentModeAtom } from "./currentMode";

export const currTimeAtom = atom(0);

export const timeLeftIndicatorAtom = atom(async (get) => {
  const currTime = get(currTimeAtom);
  const currMode = get(getCurrentModeAtom);
  const sessionStartTime = get(SESS_START_DATE_DEPENDENCIES[currMode]);

  console.log({
    startTime: sessionStartTime / 1000 / 60,
    ct: currTime / 1000 / 60,
    currMode,
    hasPassed: sessionStartTime > currTime,
  });

  if (currTime === 0) return 0;

  return calcTimeLeft({
    currTime,
    roundedTimeToWait: MODE_AND_TIME_TABLE[currMode],
    sessionStartTime,
  });
});
