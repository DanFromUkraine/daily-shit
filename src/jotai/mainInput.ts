import {atom} from "jotai";
import {atomWithStorage} from "jotai/utils";


export const mainTextAtom = atomWithStorage('main-inp', '');
export const clearMainTextAtom = atom(null, (_get, set) => {
    set(mainTextAtom, '');
})