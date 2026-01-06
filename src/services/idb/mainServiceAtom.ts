import { atom } from "jotai";
import getAsyncIdb from "./utils/getAsyncIdb";
import { initCurrentModeAtom } from "@/src/components/Header/header.store";
import { IDB } from "./types";
import { getStubIdb } from "./utils/getStubIdb";
import { initDailyNoteAtom, initMonthlyNoteAtom, initWeeklyNoteAtom } from "@/src/components/Editor/editor.store";
import { initLastDailySessionAtom, initLastMonthlySessionAtom, initLastWeeklySessionAtom, initWriteDailyNoteSessionWithStartValueAtom, initWriteMonthlyNoteSessionWithStartValueAtom, initWriteWeeklyNoteSessionWithStartValueAtom } from "../clear-text/mainServiceAtom";

export const idbAtom = atom<Promise<IDB>>(Promise.resolve(getStubIdb()));

const initReadyAtom = atom(false);

export const initIdbActionAtom = atom(null, async (get, set) => {
  if (get(initReadyAtom)) return;
  const asyncIdb = getAsyncIdb();
  const idb = await asyncIdb;

  const tx = idb.transaction(
    ["text_data", "session_date", "images", "modes", "auth_keys"],
    "readwrite",
  );

  await Promise.all([
    set(initCurrentModeAtom, tx),
    set(initDailyNoteAtom, tx),
    set(initWeeklyNoteAtom, tx),
    set(initMonthlyNoteAtom, tx),
    set(initLastDailySessionAtom, tx),
    set(initLastWeeklySessionAtom, tx),
    set(initLastMonthlySessionAtom, tx),
  ]);

  await Promise.all([
    set(initWriteDailyNoteSessionWithStartValueAtom, tx),
    set(initWriteWeeklyNoteSessionWithStartValueAtom, tx),
    set(initWriteMonthlyNoteSessionWithStartValueAtom, tx),
  ]);

  await tx.done;

  set(idbAtom, asyncIdb);
  set(initReadyAtom, true);
});
