import { atom, WritableAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { SetStateActionWithReset } from "../types/global";

export const dailyTextAtom = atomWithStorage("daily-note", "");
export const weeklyTextAtom = atomWithStorage("weekly-note", "");
export const monthlyTextAtom = atomWithStorage("monthly-note", "");
