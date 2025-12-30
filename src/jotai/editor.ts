import { Editor } from "@tiptap/react";
import { atom } from "jotai";

export const editorAtom = atom<Editor | null>(null);
