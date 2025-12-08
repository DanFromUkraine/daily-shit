"use client";

import {
    currModeSelectedAtom,
    timeToWaitFromLastUpdateAtom,
} from "@/src/jotai/currentMode";
import { ModeNames, TimeMode } from "@/src/types/timeModes";
import { useAtomCallback } from "jotai/utils";
import { useCallback } from "react";

export default function SwitchModeBtn({
    modeName,
    cleanTimeMS,
    isSelected,
}: TimeMode & { isSelected: boolean }) {
    const updateDataOnClick = useAtomCallback(
        useCallback(
            (get, set) => {
                if (isSelected) return;
                set(currModeSelectedAtom, modeName as ModeNames);
                set(timeToWaitFromLastUpdateAtom, cleanTimeMS);
            },
            [isSelected, cleanTimeMS, modeName],
        ),
    );

    return (
        <button
            type="button"
            data-testid="switch-mode-btn"
            onClick={updateDataOnClick}
            data-isselected={isSelected}
            className="data-[isselected=true]:italic text-3xl"
        >
            {modeName}
        </button>
    );
}
