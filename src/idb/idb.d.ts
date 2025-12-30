import { DBSchema, IDBPDatabase } from "idb";

export type TextKey = "daily_note" | "weekly_note" | "monthly_note";
export type SessionDateKey =
  | "last_session_daily"
  | "last_session_weekly"
  | "last_session_monthly";

export type LocalImage = {
  id: string;
  blob: Blob;
  synced: boolean;
};

export interface MyIdbSchema extends DBSchema {
  text_data: {
    key: TextVariant;
    value: string;
  };
  session_date: {
    key: SessionDateKey;
    value: number;
  };
  images: {
    key: string;
    value: LocalImage;
  };
}

export type MyIDB = IDBPDatabase<MyIdbSchema>;
