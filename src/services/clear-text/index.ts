"use client";

import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { tickAtom } from "./mainServiceAtom";

export default function useClearTextOnTimer() {
  const tick = useSetAtom(tickAtom);
  useEffect(() => {
    const intervalId = setInterval(tick, 1_000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
}
