"use client";

import useClearTextOnTimer from "./clear-text";
import { useInitIdbService } from "./idb";

export default function useServices() {
  useInitIdbService();
  useClearTextOnTimer();
}
