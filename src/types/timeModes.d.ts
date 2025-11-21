import { MODES } from "../constants"

export interface TimeMode {
    modeName: string;
    cleanTimeMS: number;
}

export type ModeNames = (typeof MODES)[number]["modeName"];
