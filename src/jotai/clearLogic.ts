import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const lastSessionStartDataLSAtom = atomWithStorage<number>(
    "last-session",
    0,
    undefined,
    {
        getOnInit: true,
    },
);

export const timeLeftMsAtom = atom(0);
