import { WritableAtom } from "jotai";
import {
  lastSessionStartDateLSAtom__Daily,
  lastSessionStartDateLSAtom__Monthly,
  lastSessionStartDateLSAtom__Weekly,
} from "./jotai/clearLogic";
import {
  dailyTextAtom,
  monthlyTextAtom,
  weeklyTextAtom,
} from "./jotai/textAtoms";
import { SetStateActionWithReset } from "./types/global";
import { ModeName } from "./types/modes";

export const DAY_MS = 1_000 * 60 * 60 * 24;
export const WEEK_MS = DAY_MS * 7;
export const MONTH_MS = DAY_MS * 30;

export const MODE_AND_TIME_TABLE = {
  daily: 0,
  weekly: WEEK_MS - DAY_MS,
  monthly: MONTH_MS - DAY_MS,
} satisfies Record<ModeName, number>;

export const MODE_NAMES: ModeName[] = ["daily", "weekly", "monthly"];

export const NOTES_DEPENDENCIES: Record<
  ModeName,
  WritableAtom<string, [SetStateActionWithReset<string>], void>
> = {
  daily: dailyTextAtom,
  weekly: weeklyTextAtom,
  monthly: monthlyTextAtom,
};

export const SESS_START_DATE_DEPENDENCIES: Record<
  ModeName,
  WritableAtom<number, [SetStateActionWithReset<number>], void>
> = {
  daily: lastSessionStartDateLSAtom__Daily,
  weekly: lastSessionStartDateLSAtom__Weekly,
  monthly: lastSessionStartDateLSAtom__Monthly,
};


