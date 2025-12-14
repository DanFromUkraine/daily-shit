import { atom, WritableAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { SetStateActionWithReset } from "../types/global";

export const dailyTextAtom = atomWithStorage("daily-note", "");
export const weeklyTextAtom = atomWithStorage("weekly-note", "");
export const monthlyTextAtom = atomWithStorage("monthly-note", "");

export const getClearTextAtom = (
    targetAtom: WritableAtom<string, [SetStateActionWithReset<string>], void>,
) =>
    atom(null, (get, set) => {
        set(targetAtom, "");
    });
export const clearDailyTextAtom = getClearTextAtom(dailyTextAtom),
    clearWeeklyTextAtom = getClearTextAtom(weeklyTextAtom),
    clearMonthlyTextAtom = getClearTextAtom(monthlyTextAtom);
