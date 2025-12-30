"use client";

import { currModeSelectedAtom } from "@/src/jotai/currentMode";
import { ModeName } from "@/src/types/modes";
import pickRandomFromList from "@/src/utils/pickRandomFromList";
import { useAtomValue } from "jotai";
import { useLayoutEffect, useState } from "react";
import { SVG_OUTLINES } from "./header.constants";
import { SvgOutlineParameters } from "./header";

export function useGetModeIsSelected() {
  const currentMode = useAtomValue(currModeSelectedAtom);

  return (mode: ModeName) => mode === currentMode;
}

export function useGetRandomSvg() {
  const [data, setData] = useState<SvgOutlineParameters>();

  useLayoutEffect(() => {
    const newData = pickRandomFromList(SVG_OUTLINES);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setData(newData);
  }, []);

  return data;
}
