import { ModeName } from "@/src/types/modes";
import { Atom, WritableAtom, PrimitiveAtom } from "jotai";
import { JSONContent } from "@tiptap/react";
import { WithInitialValue } from "@/src/types/global";

export type Notes = Readonly<{
  [K in ModeName | "stub_value"]: {
    getContentAtom: Atom<JSONContent | null>;
    setContentWithDebounceAtom: WritableAtom<
      null,
      [newValue: JSONContent],
      Promise<void>
    > &
      WithInitialValue<null>;
    isInitReadyAtom: PrimitiveAtom<boolean> & WithInitialValue<boolean>;
    setIdbOnlyAtom: WritableAtom<null, [newValue: JSONContent], Promise<void>> &
      WithInitialValue<null>;
  };
}>;

