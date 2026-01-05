import { Mutex } from "async-mutex";
import { IDBPTransaction } from "idb";
import { atom } from "jotai";
import { DatabaseStructure, IDB, IdbSchema } from "../idb/idb";
import { idbAtom } from "../idb/Initializer";

function createDebounce(wait: number) {
  let lastTimerId: ReturnType<typeof setTimeout> | null = null;

  return <T extends any[]>(
    action: (...args: T) => void | Promise<void>,
    args: T,
    options?: { onError: (e: any) => void },
  ) => {
    if (lastTimerId) clearTimeout(lastTimerId);

    lastTimerId = setTimeout(async () => {
      try {
        await action(...args);
      } catch (e) {
        options?.onError(e);
      } finally {
        lastTimerId = null;
      }
    }, wait);
  };
}
export default function getIdbWrappedAtom<
  StoreName extends keyof DatabaseStructure,
  Record extends DatabaseStructure[StoreName],
>({
  startValue,
  storeName,
  key,
}: {
  startValue: Record["value"];
  storeName: StoreName;
  key: Record["key"];
}) {
  const INIT_NOT_READY_ERROR =
    "Debounce atom-idb updated failed: initialization hasn't been finished yet";
  const hiddenAtom = atom<Record["value"]>(startValue);
  const hasInitializedAtom = atom(false);
  const getAtom = atom((get) => get(hiddenAtom));
  const mutex = new Mutex();
  const debounce = createDebounce(250);
  const lastIdbValueAtom = atom<Record["value"]>();

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
    const hasInitialized = get(hasInitializedAtom);
    if (!hasInitialized) return console.error(INIT_NOT_READY_ERROR);
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
      const hasInitialized = get(hasInitializedAtom);
      if (!hasInitialized) return console.error(INIT_NOT_READY_ERROR);

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
      tx: IDBPTransaction<IdbSchema, (keyof DatabaseStructure)[], "readonly">,
    ) => {
      const initValue = await tx.objectStore(storeName).get(key);

      if (initValue !== undefined) {
        set(hiddenAtom, initValue);
        set(lastIdbValueAtom, initValue);
      }

      set(hasInitializedAtom, true);
    },
  );

  return {
    getAtom,
    setAtom,
    setWithDebounceAtom,
    hasInitializedAtom,
    initActionAtom,
  };
}
