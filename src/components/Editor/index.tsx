"use client";

import { Bold } from "@tiptap/extension-bold";
import { Document } from "@tiptap/extension-document";
import { HardBreak } from "@tiptap/extension-hard-break";
import { Heading } from "@tiptap/extension-heading";
import { Highlight } from "@tiptap/extension-highlight";
import { HorizontalRule } from "@tiptap/extension-horizontal-rule";
import { ListKit } from "@tiptap/extension-list";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Strike } from "@tiptap/extension-strike";
import { Text } from "@tiptap/extension-text";
import { Underline } from "@tiptap/extension-underline";
import { UndoRedo } from "@tiptap/extensions";
import { Typography } from "@tiptap/extension-typography";
import { Link } from "@tiptap/extension-link";
import { EditorContent, useEditor } from "@tiptap/react";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { getCurrentModeAtom } from "../Header/header.store";
import { LinkExtension, NOTES } from "./editor.constants";
import ToolbarList from "./elements/ToolbarList";
import { editorAtom } from "./editor.store";
import TextAlign from "@tiptap/extension-text-align";

export default function MainInput() {
  const currMode = useAtomValue(getCurrentModeAtom) || "stub_value";

  const { getContentAtom, isInitReadyAtom, setContentWithDebounceAtom } =
    NOTES[currMode];

  const content = useAtomValue(getContentAtom);
  const setContent = useSetAtom(setContentWithDebounceAtom);
  const isInitReady = useAtomValue(isInitReadyAtom);
  const [editable, setEditable] = useState(false);
  const setEditor = useSetAtom(editorAtom);

  const editor = useEditor({
    immediatelyRender: false,
    autofocus: true,
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
      UndoRedo,
      Typography,
      TextAlign,
      LinkExtension,
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

    onTransaction({ editor }) {
      setEditor({
        editor,
        timestamp: Date.now(),
      });
    },
  });

  useEffect(() => {
    if (!isInitReady || currMode === "stub_value") return;

    editor?.commands.setContent(content);

    editor?.setEditable(true);
    setEditable(true);
  }, [currMode, isInitReady]);

  return (
    <>
      <ToolbarList />
      <EditorContent editor={editor} />
    </>
  );
}
