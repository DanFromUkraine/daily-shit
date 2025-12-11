"use client";

import { currentModeAtom, sessionStartDateAtom } from "@/src/jotai/clearLogic";
import { useAtomValue } from "jotai";
import { DAY_MS, MONTH_MS, WEEK_MS } from "@/src/constants";

export default function useGetTimeFor() {
    const currMode = useAtomValue(currentModeAtom);
    const startTime = useAtomValue(sessionStartDateAtom);

    if (currMode === "daily") return startTime + DAY_MS;
    else if (currMode === "weekly") return startTime + WEEK_MS;
    else return startTime + MONTH_MS;
}
