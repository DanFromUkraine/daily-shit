"use client";

import { setCurrentModeAtom } from "@/src/jotai/currentMode";
import { ModeName } from "@/src/types/modes";
import { useSetAtom } from "jotai";

type SwitchModeBtnProps = Readonly<{
  modeName: ModeName;
  isSelected: boolean;
}>;

export default function SwitchModeBtn({
  modeName,
  isSelected,
}: SwitchModeBtnProps) {
  const updateDataOnClick = useSetAtom(setCurrentModeAtom);

  return (
    <button
      type="button"
      data-testid="switch-mode-btn"
      onClick={() => updateDataOnClick(modeName)}
      data-isselected={isSelected}
      className="data-[isselected=true]:italic text-3xl"
    >
      {modeName}
    </button>
  );
}
