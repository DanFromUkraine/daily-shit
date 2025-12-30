import { openDB } from "idb";
import { MyIDB } from "./idb";

export default async function getAsyncIdb() {
  return openDB("application", undefined, { upgrade });
}

function upgrade(idb: MyIDB) {
  if (!idb.objectStoreNames.contains("images")) {
    idb.createObjectStore("images", { keyPath: "id" });
  }
  if (!idb.objectStoreNames.contains("text_data")) {
    idb.createObjectStore("text_data");
  }
  if (!idb.createObjectStore("session_date")) {
    idb.createObjectStore("session_date");
  }
}
