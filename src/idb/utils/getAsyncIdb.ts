import { openDB, IDBPObjectStore } from "idb";
import { IDB, IdbSchema } from "../idb";

export default async function getAsyncIdb() {
  return openDB("application", undefined, { upgrade });
}

function upgrade(idb: IDB) {
  if (!idb.objectStoreNames.contains("images")) {
    idb.createObjectStore("images", { keyPath: "id" });
  }
  if (!idb.objectStoreNames.contains("text_data")) {
    idb.createObjectStore("text_data");
  }
  if (!idb.objectStoreNames.contains("session_date")) {
    idb.createObjectStore("session_date");
  }
  if (!idb.objectStoreNames.contains("modes")) {
    const store = idb.createObjectStore("modes");
    store.put("daily", "currentMode");
  }
  if (!idb.objectStoreNames.contains("auth_keys")) {
    idb.createObjectStore("auth_keys");
  }
}
