import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const lastSessionStartDateLSAtom__Daily = atomWithStorage<number>(
    "last-session-daily",
    0,
    undefined,
    { getOnInit: true },
);
export const lastSessionStartDateLSAtom__Weekly = atomWithStorage<number>(
    "last-session-weekly",
    0,
    undefined,
    { getOnInit: true },
);
export const lastSessionStartDateLSAtom__Monthly = atomWithStorage<number>(
    "last-session-monthly",
    0,
    undefined,
    { getOnInit: true },
);

