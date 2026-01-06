import { atom } from "jotai";
import { TIME_LEFT_ATOMS } from "./header.constants";
import getIdbWrappedAtom from "@/src/utils/getIdbWrappedAtom";

export const {
  getAtom: getCurrentModeAtom,
  setAtom: setCurrentModeAtom,
  initActionAtom: initCurrentModeAtom,
} = getIdbWrappedAtom<null>()({
  startValue: null,
  key: "currentMode",
  storeName: "modes",
});

export const timeLeftIndicatorAtom = atom((get) => {
  const currMode = get(getCurrentModeAtom);

  if (!currMode) return null;
  const timeLeftAtom = TIME_LEFT_ATOMS[currMode];
  return get(timeLeftAtom);
});

