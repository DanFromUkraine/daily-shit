import {atomWithStorage} from "jotai/utils";

export type ModesAvailable = 'daily' | 'weekly' | 'monthly';

export const currentModeAtom = atomWithStorage<ModesAvailable>('lastModeSelected', 'daily');
export const sessionStartDateAtom = atomWithStorage('sessionStartDate', Date.now());


// data should always erase in 2 am

