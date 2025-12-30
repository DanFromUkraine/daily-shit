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
  Daily: 0,
  Weekly: WEEK_MS - DAY_MS,
  Monthly: MONTH_MS - DAY_MS,
} satisfies Record<ModeName, number>;

export const MODE_NAMES: ModeName[] = ["Daily", "Weekly", "Monthly"];

export const NOTES_DEPENDENCIES: Record<
  ModeName,
  WritableAtom<string, [SetStateActionWithReset<string>], void>
> = {
  Daily: dailyTextAtom,
  Weekly: weeklyTextAtom,
  Monthly: monthlyTextAtom,
};

export const SESS_START_DATE_DEPENDENCIES: Record<
  ModeName,
  WritableAtom<number, [SetStateActionWithReset<number>], void>
> = {
  Daily: lastSessionStartDateLSAtom__Daily,
  Weekly: lastSessionStartDateLSAtom__Weekly,
  Monthly: lastSessionStartDateLSAtom__Monthly,
};
