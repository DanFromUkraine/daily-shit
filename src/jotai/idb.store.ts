import { atom } from "jotai";
import { MyIDB } from "../idb/idb";

export const idbAtom = atom<Promise<MyIDB>>();
