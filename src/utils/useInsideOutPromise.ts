"use client";

import { useRef } from "react";

export function useInsideOutPromise<T>() {
  type ResolveFn = (r: T) => void;
  type RejectFn = (e: Error) => void;
  type InsideOutPromise = {
    promise: Promise<T>;
    resolve: ResolveFn;
    reject: RejectFn;
  };

  const promiseApiRef = useRef<InsideOutPromise | null>(null);

  if (!promiseApiRef.current) {
    let resolveFn!: ResolveFn;
    let rejectFn!: RejectFn;

    const promise = new Promise<T>((res, rej) => {
      resolveFn = res;
      rejectFn = rej;
    });

    promiseApiRef.current = {
      promise,
      resolve: resolveFn,
      reject: rejectFn,
    };
  }

  return promiseApiRef.current;
}
