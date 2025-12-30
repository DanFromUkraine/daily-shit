"use client";

import { createContext, ReactNode, useContext, useEffect, useRef } from "react";
import getAsyncIdb from "./getAsyncIdb";
import { MyIDB } from "./idb";

const IdbPromiseContext = createContext<Promise<MyIDB> | null>(null);

type IdbProviderProps = Readonly<{ children: ReactNode }>;

export default function IdbProvider({ children }: IdbProviderProps) {
  const dbPromiseRef = useRef<{
    promise: Promise<MyIDB>;
    resolve: (value: MyIDB) => void;
    reject: (error: Error) => void;
  } | null>(null);
  const isInitStarted = useRef(false);

  if (!dbPromiseRef.current) {
    let resolveFn: (value: MyIDB) => void;
    let rejectFn: (error: Error) => void;

    const promise = new Promise<MyIDB>((res, rej) => {
      resolveFn = res;
      rejectFn = rej;
    });

    dbPromiseRef.current = {
      promise,
      resolve: resolveFn!,
      reject: rejectFn!,
    };
  }

  useEffect(() => {
    if (isInitStarted.current) return;
    isInitStarted.current = true;

    getAsyncIdb()
      .then((db) => {
        dbPromiseRef.current?.resolve(db);
      })
      .catch((err) => {
        dbPromiseRef.current?.reject(err);
      });
  }, []);

  return (
    <IdbPromiseContext.Provider value={dbPromiseRef.current?.promise ?? null}>
      {children}
    </IdbPromiseContext.Provider>
  );
}

export const useIdbPromise = () => {
  const promise = useContext(IdbPromiseContext);
  if (!promise)
    throw new Error("useIdbPromise must be used within IdbProvider");
  return promise;
};
