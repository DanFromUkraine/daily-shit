import { atomWithStorage } from "jotai/utils";
import { MODES } from "../constants";

export const currModeSelectedAtom = atomWithStorage<
    (typeof MODES)[number]["modeName"]
>("mode-selected", MODES[0].modeName);
export const timeToWaitFromLastUpdateAtom = atomWithStorage(
    "time-to-wait",
    MODES[0].cleanTimeMS,
);
