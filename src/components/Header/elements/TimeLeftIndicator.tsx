"use client";

import { currModeSelectedAtom } from "@/src/jotai/currentMode";
import { timeLeftIndicatorAtom } from "@/src/jotai/timeLeft";
import getTimeRounded from "@/src/utils/getTimeRounded";
import { useAtomValue } from "jotai";

export default function TimeLeftIndicator() {
  const timeLeftMs = useAtomValue(timeLeftIndicatorAtom);
  const roundedTime = getTimeRounded(timeLeftMs);
  const currMode = useAtomValue(currModeSelectedAtom);

  if (currMode === "Daily") {
    console.log({ timeLeftMs, roundedTime, currMode });
  }

  return (
    roundedTime !== undefined && (
      <h2 className="text-4xl">
        {roundedTime.amount} {roundedTime.timeUnit} left
      </h2>
    )
  );
}
