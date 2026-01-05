"use client";

import { atom, useSetAtom } from "jotai";
import { ReactNode, useEffect, useRef } from "react";
import { IDB, IdbApi } from "./idb";
import getAsyncIdb from "./utils/getAsyncIdb";
import { getStubIdb, getStubIdbApi } from "./utils/getStubs";
import { initCurrentModeAtom } from "../jotai/currentMode";

export type IdbInitializerProps = Readonly<{ children: ReactNode }>;

export const idbAtom = atom<Promise<IDB>>(Promise.resolve(getStubIdb()));

export default function IdbInitializer({ children }: IdbInitializerProps) {
  const setIdbAtom = useSetAtom(idbAtom);
  const hasStartedRef = useRef(false);
  const initCurrMode = useSetAtom(initCurrentModeAtom);

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    const asyncIdb = getAsyncIdb();

    asyncIdb.then(async (idb) => {
      const tx = idb.transaction(
        ["text_data", "session_date", "images", "modes", "auth_keys"],
        "readonly",
      );

      await Promise.all([initCurrMode(tx)]);

      await tx.done;

      setIdbAtom(asyncIdb);
    });
  }, []);

  return children;
}
