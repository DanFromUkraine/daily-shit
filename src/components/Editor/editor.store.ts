import { ModeName } from "@/src/types/modes";
import getIdbWrappedAtom from "@/src/utils/getIdbWrappedAtom";
import { Editor } from "@tiptap/react";
import { atom } from "jotai";
import { NOTES } from "./editor.constants";

export const {
  getAtom: getDailyNoteAtom,
  setAtom: setDailyNoteAtom,
  initActionAtom: initDailyNoteAtom,
  setWithDebounceAtom: setDailyNoteWithDebounceAtom,
  isInitReadyAtom: isDailyNotInitReadyAtom,
  setIdbOnlyAtom: setDailyNoteIdbOnlyAtom,
} = getIdbWrappedAtom<null>()({
  startValue: null,
  storeName: "text_data",
  key: "daily_note",
});

export const {
  getAtom: getWeeklyNoteAtom,
  setAtom: setWeeklyNoteAtom,
  initActionAtom: initWeeklyNoteAtom,
  setWithDebounceAtom: setWeeklyNoteWithDebounceAtom,
  isInitReadyAtom: isWeeklyNoteInitReadyAtom,
  setIdbOnlyAtom: setWeeklyNoteIdbOnlyAtom,
} = getIdbWrappedAtom<null>()({
  startValue: null,
  storeName: "text_data",
  key: "weekly_note",
});

export const {
  getAtom: getMonthlyNoteAtom,
  setAtom: setMonthlyNoteAtom,
  initActionAtom: initMonthlyNoteAtom,
  setWithDebounceAtom: setMonthlyNoteWithDebounceAtom,
  isInitReadyAtom: isMonthlyNoteInitReadyAtom,
  setIdbOnlyAtom: setMonthlyNoteIdbOnlyAtom,
} = getIdbWrappedAtom<null>()({
  startValue: null,
  storeName: "text_data",
  key: "monthly_note",
});
