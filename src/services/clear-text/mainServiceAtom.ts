import getIdbWrappedAtom from "@/src/utils/getIdbWrappedAtom";
import { atom, Atom } from "jotai";
import calcTimeLeft from "./utils/calcTimeLeft";
import {
  setDailyNoteAtom,
  setMonthlyNoteAtom,
  setWeeklyNoteAtom,
} from "@/src/components/Editor/editor.store";
import { EDITOR_INITIAL_CONTENT } from "@/src/components/Editor/editor.constants";

export const {
  getAtom: getLastDailySessionAtom,
  setAtom: setLastDailySessionAtom,
  initActionAtom: initLastDailySessionAtom,
  writeIdbWithStartValue: initWriteDailyNoteSessionWithStartValueAtom,
} = getIdbWrappedAtom()({
  startValue: Date.now(),
  storeName: "session_date",
  key: "last_session_daily",
});

export const {
  getAtom: getLastWeeklySessionAtom,
  setAtom: setLastWeeklySessionAtom,
  initActionAtom: initLastWeeklySessionAtom,
  writeIdbWithStartValue: initWriteWeeklyNoteSessionWithStartValueAtom,
} = getIdbWrappedAtom()({
  startValue: Date.now(),
  storeName: "session_date",
  key: "last_session_weekly",
});

export const {
  getAtom: getLastMonthlySessionAtom,
  setAtom: setLastMonthlySessionAtom,
  initActionAtom: initLastMonthlySessionAtom,
  writeIdbWithStartValue: initWriteMonthlyNoteSessionWithStartValueAtom,
} = getIdbWrappedAtom()({
  startValue: Date.now(),
  storeName: "session_date",
  key: "last_session_monthly",
});

const resetDailyNoteAtom = atom(null, async (_get, set) => {
  await set(setLastDailySessionAtom, Date.now());
  await set(setDailyNoteAtom, EDITOR_INITIAL_CONTENT);
});

const resetWeeklyNoteAtom = atom(null, async (_get, set) => {
  await set(setLastWeeklySessionAtom, Date.now());
  await set(setWeeklyNoteAtom, EDITOR_INITIAL_CONTENT);
});

const resetMonthlyNoteAtom = atom(null, async (_get, set) => {
  await set(setLastMonthlySessionAtom, Date.now());
  await set(setMonthlyNoteAtom, EDITOR_INITIAL_CONTENT);
});

function getCalcTimeLeftAtom({
  daysToAdd,
  lastSessionAtom,
}: {
  daysToAdd: number;
  lastSessionAtom: Atom<number>;
}) {
  return atom((get) =>
    calcTimeLeft({
      daysToAdd: daysToAdd,
      startTimeInMs: get(lastSessionAtom),
    }),
  );
}

export const timeLeftForDailyNoteAtom = getCalcTimeLeftAtom({
    daysToAdd: 0,
    lastSessionAtom: getLastDailySessionAtom,
  }),
  timeLeftForWeeklyNoteAtom = getCalcTimeLeftAtom({
    daysToAdd: 6,
    lastSessionAtom: getLastWeeklySessionAtom,
  }),
  timeLeftForMonthlyNoteAtom = getCalcTimeLeftAtom({
    daysToAdd: 30,
    lastSessionAtom: getLastMonthlySessionAtom,
  });

export const tickAtom = atom(null, (get, set) => {
  const timeLeftForDaily = get(timeLeftForDailyNoteAtom),
    timeLeftForWeekly = get(timeLeftForWeeklyNoteAtom),
    timeLeftForMonthly = get(timeLeftForMonthlyNoteAtom);

  console.debug({ timeLeftForDaily, timeLeftForWeekly, timeLeftForMonthly });

  if (timeLeftForDaily < 0) set(resetDailyNoteAtom);
  if (timeLeftForWeekly < 0) set(resetWeeklyNoteAtom);
  if (timeLeftForMonthly < 0) set(resetMonthlyNoteAtom);
});
