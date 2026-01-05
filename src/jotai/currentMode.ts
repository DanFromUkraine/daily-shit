import getIdbWrappedAtom from "../utils/getIdbConnectedAtom";

export const {
  getAtom: getCurrentModeAtom,
  setAtom: setCurrentModeAtom,
  initActionAtom: initCurrentModeAtom,
} = getIdbWrappedAtom({
  startValue: "daily",
  key: "currentMode",
  storeName: "modes",
});
