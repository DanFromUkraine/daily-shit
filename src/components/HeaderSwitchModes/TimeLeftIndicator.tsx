"use client";

import { timeLeftMsAtom } from "@/src/jotai/clearLogic";
import getTimeRounded from "@/src/utils/getTimeRounded";
import { useAtomValue } from "jotai";

export default function TimeLeftIndicator() {
    const timeLeftMs = useAtomValue(timeLeftMsAtom);
    const roundedTime = getTimeRounded(timeLeftMs);

    return (
        roundedTime !== undefined && (
            <h2 className="text-4xl">
                {roundedTime.amount} {roundedTime.timeUnit} left
            </h2>
        )
    );
}
