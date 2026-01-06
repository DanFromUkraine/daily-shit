"use client";

import { Bold } from "@tiptap/extension-bold";
import { Document } from "@tiptap/extension-document";
import { HardBreak } from "@tiptap/extension-hard-break";
import { Heading } from "@tiptap/extension-heading";
import { HorizontalRule } from "@tiptap/extension-horizontal-rule";
import { ListKit } from "@tiptap/extension-list";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Strike } from "@tiptap/extension-strike";
import { Text } from "@tiptap/extension-text";
import { Underline } from "@tiptap/extension-underline";
import { Highlight } from "@tiptap/extension-highlight";
import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import { useAtomValue, useSetAtom, WritableAtom } from "jotai";
import { getCurrentModeAtom } from "../Header/header.store";
import { NOTES } from "./editor.constants";
import { useEffect, useRef, useState } from "react";
import { ModeName } from "@/src/types/modes";

export default function MainInput() {
  const currMode = useAtomValue(getCurrentModeAtom) || "stub_value";

  const { getContentAtom, isInitReadyAtom, setContentWithDebounceAtom } =
    NOTES[currMode];

  const content = useAtomValue(getContentAtom);
  const setContent = useSetAtom(setContentWithDebounceAtom);
  const isInitReady = useAtomValue(isInitReadyAtom);
  const [editable, setEditable] = useState(false);

  const editor = useEditor({
    immediatelyRender: false,
    editable,
    extensions: [
      Document,
      Text,
      Paragraph,
      ListKit,
      Bold,
      Underline,
      Heading,
      Strike,
      HardBreak,
      HorizontalRule,
      Highlight,
    ],
    editorProps: {
      attributes: {
        class: "focus-visible:outline-none!",
      },
    },
    onUpdate({ editor }) {
      if (editable) {
        setContent(editor.getJSON());
      }
    },
  });

  useEffect(() => {
    if (!isInitReady || currMode === "stub_value") return;

    editor?.commands.setContent(content);

    editor?.setEditable(true);
    setEditable(true);
  }, [currMode, isInitReady]);

  return <EditorContent editor={editor} />;
}
