import { IDB } from "../types";

export function getStubIdb(): IDB {
  return {
    async get() {},
    async put() {},
    async getAll() {},
    async add() {},
  } as unknown as IDB;
}
