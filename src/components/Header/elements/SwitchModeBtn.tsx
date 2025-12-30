"use client";

import { currModeSelectedAtom } from "@/src/jotai/currentMode";
import { ModeName } from "@/src/types/modes";
import { useAtomCallback } from "jotai/utils";
import { useCallback } from "react";

type SwitchModeBtnProps = Readonly<{
  modeName: string;
  isSelected: boolean;
}>;

export default function SwitchModeBtn({
  modeName,
  isSelected,
}: SwitchModeBtnProps) {
  const updateDataOnClick = useAtomCallback(
    useCallback(
      (get, set) => {
        if (isSelected) return;
        set(currModeSelectedAtom, modeName as ModeName);
      },
      [isSelected, modeName],
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
