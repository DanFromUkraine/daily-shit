import { Mode, IDB, LocalImage } from "./idb";
import { deleteRecord, getRecord, updateRecord } from "./utils/factories";

export function createIdbApi(idb: IDB) {
  return {
    getDailyNote: () =>
      getRecord({ idb, objectStore: "text_data", key: "daily_note" }),
    getWeeklyNote: () =>
      getRecord({ idb, objectStore: "text_data", key: "weekly_note" }),
    getMonthlyNote: () =>
      getRecord({ idb, objectStore: "text_data", key: "monthly_note" }),
    getLastDailySession: () =>
      getRecord({
        idb,
        objectStore: "session_date",
        key: "last_session_daily",
      }),
    getLastSessionWeekly: () =>
      getRecord({
        idb,
        objectStore: "session_date",
        key: "last_session_weekly",
      }),
    getLastSessionMonthly: () =>
      getRecord({
        idb,
        objectStore: "session_date",
        key: "last_session_monthly",
      }),
    getImage: (imageId: string) =>
      getRecord({ idb, objectStore: "images", key: imageId }),
    getCurrentMode: () =>
      getRecord({ idb, objectStore: "modes", key: "currentMode" }),
    getLocalAuthKey: () =>
      getRecord({ idb, objectStore: "auth_keys", key: "local" }),
    getPublicAuthKey: () =>
      getRecord({ idb, objectStore: "auth_keys", key: "public" }),

    setDailyNote: (newRecord: string) =>
      updateRecord({
        idb,
        objectStore: "text_data",
        key: "daily_note",
        newRecord,
      }),
    setWeeklyNote: (newRecord: string) =>
      updateRecord({
        idb,
        objectStore: "text_data",
        key: "weekly_note",
        newRecord,
      }),
    setMonthlyNote: (newRecord: string) =>
      updateRecord({
        idb,
        objectStore: "text_data",
        key: "monthly_note",
        newRecord,
      }),
    setLastDailySession: (newRecord: number) =>
      updateRecord({
        idb,
        objectStore: "session_date",
        key: "last_session_daily",
        newRecord,
      }),
    setLastWeeklySession: (newRecord: number) =>
      updateRecord({
        idb,
        objectStore: "session_date",
        key: "last_session_weekly",
        newRecord,
      }),
    setLastMonthlySession: (newRecord: number) =>
      updateRecord({
        idb,
        objectStore: "session_date",
        key: "last_session_monthly",
        newRecord,
      }),
    setImage: (newRecord: LocalImage) => {
      idb.put("images", newRecord);
    },
    setCurrentMode: (newRecord: Mode) =>
      updateRecord({
        idb,
        objectStore: "modes",
        key: "currentMode",
        newRecord,
      }),
    setLocalAuthKey: (newRecord: string) =>
      updateRecord({ idb, objectStore: "auth_keys", key: "local", newRecord }),
    setPublicAuthKey: (newRecord: string) =>
      updateRecord({ idb, objectStore: "auth_keys", key: "public", newRecord }),
    deleteLocalAuthKey: () =>
      deleteRecord({ idb, objectStore: "auth_keys", deleteKey: "local" }),
    deletePublicAuthKey: () =>
      deleteRecord({ idb, objectStore: "auth_keys", deleteKey: "public" }),
  };
}
