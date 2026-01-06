import { Mutex } from "async-mutex";
import { IDBPTransaction } from "idb";
import { atom } from "jotai";
import { DatabaseStructure, IdbSchema } from "../services/idb/types";
import { createDebounce } from "./createDebounce";
import { idbAtom } from "../services/idb/mainServiceAtom";

export default function getIdbWrappedAtom<
  StartTypeExtra extends null | undefined = never,
>() {
  return function <
    StoreName extends keyof DatabaseStructure,
    Record extends DatabaseStructure[StoreName],
  >({
    startValue,
    storeName,
    key,
  }: {
    startValue: Record["value"] | StartTypeExtra;
    storeName: StoreName;
    key: Record["key"];
  }) {
    const INIT_NOT_READY_ERROR =
      "Debounce atom-idb updated failed: initialization hasn't been finished yet";
    const hiddenAtom = atom(startValue);
    const mutex = new Mutex();
    const debounce = createDebounce(250);
    const lastIdbValueAtom = atom<Record["value"]>();
    const isInitReadyAtom = atom(false);

    const getAtom = atom((get) => {
      const initFinished = get(isInitReadyAtom);
      if (!initFinished) return startValue;
      return get(hiddenAtom);
    });

    const setIdbOnlyAtom = atom(
      null,
      async (get, set, newValue: Record["value"]) => {
        return await mutex.runExclusive(async () => {
          const idb = await get(idbAtom);
          await idb.put(storeName, newValue, key);
          set(lastIdbValueAtom, newValue);
        });
      },
    );

    const setAtom = atom(null, async (get, set, newValue: Record["value"]) => {
      const initFinished = get(isInitReadyAtom);
      if (!initFinished) return console.error(INIT_NOT_READY_ERROR);
      const lastIdbValue = get(lastIdbValueAtom);

      set(hiddenAtom, newValue);

      try {
        await set(setIdbOnlyAtom, newValue);
      } catch (e) {
        console.error(e);
        if (lastIdbValue) set(hiddenAtom, lastIdbValue);
      }
    });

    const setWithDebounceAtom = atom(
      null,
      async (get, set, newValue: Record["value"]) => {
        const initFinished = get(isInitReadyAtom);
        if (!initFinished) return console.error(INIT_NOT_READY_ERROR);

        set(hiddenAtom, newValue);

        debounce(set, [setIdbOnlyAtom, newValue], {
          onError: (e) => {
            console.error(e);
            const lastIdbValue = get(lastIdbValueAtom);
            if (lastIdbValue) set(hiddenAtom, lastIdbValue);
          },
        });
      },
    );

    const initActionAtom = atom(
      null,
      async (
        _get,
        set,
        tx: IDBPTransaction<
          IdbSchema,
          (keyof DatabaseStructure)[],
          "readwrite"
        >,
      ) => {
        const initValue = await tx.objectStore(storeName).get(key);
        set(isInitReadyAtom, true);

        if (initValue !== undefined) {
          set(hiddenAtom, initValue);
          set(lastIdbValueAtom, initValue);
        }
      },
    );

    const writeIdbWithStartValue = atom(
      null,
      async (
        get,
        _set,
        tx: IDBPTransaction<
          IdbSchema,
          (keyof DatabaseStructure)[],
          "readwrite"
        >,
      ) => {
        const isReadInitFinished = get(isInitReadyAtom);

        if (isReadInitFinished && startValue) {
          console.log({ storeName, startValue });

          await tx.objectStore(storeName).put(startValue, key);
        } else {
          console.error(
            "Write was aborted, because startValue is either null, or undefined",
          );
        }
      },
    );

    return {
      getAtom,
      setAtom,
      setWithDebounceAtom,
      initActionAtom,
      writeIdbWithStartValue,
      isInitReadyAtom,
      setIdbOnlyAtom
    };
  };
}
