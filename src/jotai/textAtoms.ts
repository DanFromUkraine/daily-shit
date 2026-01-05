import { atomWithStorage } from "jotai/utils";

export const dailyTextAtom = atomWithStorage("daily-note", "");
export const weeklyTextAtom = atomWithStorage("weekly-note", "");
export const monthlyTextAtom = atomWithStorage("monthly-note", "");
