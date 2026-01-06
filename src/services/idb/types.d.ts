import { DBSchema, IDBPDatabase } from "idb";
import { JSONContent } from "@tiptap/react";

export type TextKey = "daily_note" | "weekly_note" | "monthly_note";
export type SessionDateKey =
  | "last_session_daily"
  | "last_session_weekly"
  | "last_session_monthly";

export type Mode = "daily" | "weekly" | "monthly";

export type LocalImage = {
  id: string;
  blob: Blob;
  synced: boolean;
};

export type AuthKeyVariant = "public" | "local";

export interface DatabaseStructure {
  text_data: {
    key: TextKey;
    value: JSONContent;
  };
  session_date: {
    key: SessionDateKey;
    value: number;
  };
  images: {
    key: string;
    value: LocalImage;
  };
  modes: {
    /* I create separate object store for it for better typization */
    key: "currentMode";
    value: Mode;
  };
  auth_keys: {
    key: AuthKeyVariant;
    value: string;
  };
}

export type IdbSchema = DatabaseStructure & DBSchema;

export type IDB = IDBPDatabase<IdbSchema>;

type IdbBundle = {
  idb: IDB;
  api: IdbApi;
  isStub: boolean;
};
