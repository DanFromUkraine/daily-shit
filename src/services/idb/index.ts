"use client";

import { useSetAtom } from "jotai";
import { initIdbActionAtom } from "./mainServiceAtom";
import { useEffect } from "react";

export function useInitIdbService() {
  const initIdb = useSetAtom(initIdbActionAtom);

  useEffect(() => {
    initIdb();
  });
}
