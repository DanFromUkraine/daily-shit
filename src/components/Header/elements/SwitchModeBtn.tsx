"use client";

import { ModeName } from "@/src/types/modes";
import { useAtomCallback } from "jotai/utils";
import { setCurrentModeAtom } from "../header.store";

type SwitchModeBtnProps = Readonly<{
  modeName: ModeName;
  isSelected: boolean;
}>;

export default function SwitchModeBtn({
  modeName,
  isSelected,
}: SwitchModeBtnProps) {
  const updateDataOnClick = useAtomCallback((_get, set) =>
    set(setCurrentModeAtom, modeName),
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
