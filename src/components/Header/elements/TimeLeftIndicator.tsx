"use client";

import getTimeRounded from "@/src/utils/getTimeRounded";
import { useAtomValue } from "jotai";
import { timeLeftIndicatorAtom } from "../header.store";

export default function TimeLeftIndicator() {
  const timeLeftMs = useAtomValue(timeLeftIndicatorAtom);

  if (!timeLeftMs) return <h2 className="text-4xl">loading...</h2>;
  const roundedTime = getTimeRounded(timeLeftMs);

  return (
    roundedTime && (
      <h2 className="text-4xl shrink-0">
        {roundedTime.amount} {roundedTime.timeUnit} left
      </h2>
    )
  );
}
