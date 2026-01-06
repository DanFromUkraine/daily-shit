"use client";

import { useLayoutEffect, useState } from "react";
import { SvgOutlineParameters } from "./header";
import { SVG_OUTLINES } from "./header.constants";

export function useGetRandomSvg() {
  const [data, setData] = useState<SvgOutlineParameters>();

  useLayoutEffect(() => {
    const newData = pickRandomFromList(SVG_OUTLINES);
    setData(newData);
  }, []);

  return data;
}

function pickRandomFromList<T>(list: readonly T[]) {
  const randomIndex = Math.floor(list.length * Math.random());
  return list[randomIndex];
}
