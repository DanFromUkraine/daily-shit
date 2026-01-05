import { createIdbApi } from "../actions";
import { IDB, IdbApi } from "../idb";

export function getStubIdb(): IDB {
  return {
    async get() {},
    async put() {},
    async getAll() {},
    async add() {},
  } as unknown as IDB;
}

export function getStubIdbApi(): IdbApi {
  return createIdbApi(getStubIdb());
}
