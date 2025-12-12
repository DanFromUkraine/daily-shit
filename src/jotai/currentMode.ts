import { atomWithStorage } from "jotai/utils";
import { MODE_NAMES } from "../constants";
import { ModeName } from "../types/modes";

export const currModeSelectedAtom = atomWithStorage<ModeName>(
    "mode-selected",
    MODE_NAMES[0],
);
