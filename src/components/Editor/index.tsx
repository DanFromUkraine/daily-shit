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
import { EditorContent, useEditor } from "@tiptap/react";

export default function MainInput() {
  // const currentMode = useAtomValue(currModeSelectedAtom);
  // const stableTextAtom = useMemo(
  //   () => NOTES_DEPENDENCIES[currentMode],
  //   [currentMode],
  // );
  // const [inputText, setInputText] = useAtom(stableTextAtom);
  // const textAreaRef = useRef<HTMLTextAreaElement>(null);
  // const onInputChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
  //   setInputText(e.target.value);
  // };

  // useAutosizeTextArea({ textAreaRef, _value: inputText });

  const editor = useEditor({
    immediatelyRender: false,
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
    ],
    editorProps: {
      attributes: {
        class: "focus-visible:outline-none!",
      },
    },
  });

  return <EditorContent editor={editor} />;
}

/*

<textarea
  title="main-input"
  name="main-input"
  value={inputText}
  onChange={onInputChange}
  data-testid="main-input"
  className="w-full outline-none text-2xl resize-none mb-3 overflow-hidden"
  placeholder="Your temporary story starts here..."
  ref={textAreaRef}
></textarea>
*/
