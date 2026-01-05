import { DatabaseStructure, IDB } from "../idb";

export function getRecord<ObjectStore extends keyof DatabaseStructure>({
  idb,
  objectStore,
  key,
}: {
  idb: IDB;
  objectStore: ObjectStore;
  key: DatabaseStructure[ObjectStore]["key"];
}) {
  return idb.get(objectStore, key);
}

export function updateRecord<ObjectStore extends keyof DatabaseStructure>({
  idb,
  objectStore,
  newRecord,
  key,
}: {
  idb: IDB;
  objectStore: ObjectStore;
  newRecord: DatabaseStructure[ObjectStore]["value"];
  key: DatabaseStructure[ObjectStore]["key"];
}) {
  return idb.put(objectStore, newRecord, key);
}

export function deleteRecord<ObjectStore extends keyof DatabaseStructure>({
  idb,
  objectStore,
  deleteKey,
}: {
  idb: IDB;
  objectStore: ObjectStore;
  deleteKey: DatabaseStructure[ObjectStore]["key"];
}) {
  return idb.delete(objectStore, deleteKey);
}
