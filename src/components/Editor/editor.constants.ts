import { JSONContent } from "@tiptap/react";

import { Notes } from "./editor";
import {
  getDailyNoteAtom,
  getMonthlyNoteAtom,
  getWeeklyNoteAtom,
  isDailyNotInitReadyAtom,
  isMonthlyNoteInitReadyAtom,
  isWeeklyNoteInitReadyAtom,
  setDailyNoteIdbOnlyAtom,
  setDailyNoteWithDebounceAtom,
  setMonthlyNoteIdbOnlyAtom,
  setMonthlyNoteWithDebounceAtom,
  setWeeklyNoteIdbOnlyAtom,
  setWeeklyNoteWithDebounceAtom,
} from "./editor.store";
import { atom } from "jotai";

export const EDITOR_INITIAL_CONTENT: JSONContent = {
  type: "doc",
  content: [
    {
      type: "paragraph",
    },
  ],
};

export const NOTES = {
  daily: {
    getContentAtom: getDailyNoteAtom,
    setContentWithDebounceAtom: setDailyNoteWithDebounceAtom,
    isInitReadyAtom: isDailyNotInitReadyAtom,
    setIdbOnlyAtom: setDailyNoteIdbOnlyAtom,
  },
  weekly: {
    getContentAtom: getWeeklyNoteAtom,
    setContentWithDebounceAtom: setWeeklyNoteWithDebounceAtom,
    isInitReadyAtom: isWeeklyNoteInitReadyAtom,
    setIdbOnlyAtom: setWeeklyNoteIdbOnlyAtom,
  },
  monthly: {
    getContentAtom: getMonthlyNoteAtom,
    setContentWithDebounceAtom: setMonthlyNoteWithDebounceAtom,
    isInitReadyAtom: isMonthlyNoteInitReadyAtom,
    setIdbOnlyAtom: setMonthlyNoteIdbOnlyAtom,
  },
  stub_value: {
    getContentAtom: atom(null),
    isInitReadyAtom: atom(false),
    setContentWithDebounceAtom: atom(null, async () => {}),
    setIdbOnlyAtom: atom(null, async () => {}),
  },
} satisfies Notes;
