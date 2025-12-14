"use client";

import { NOTES_DEPENDENCIES } from "@/src/constants";
import { currModeSelectedAtom } from "@/src/jotai/currentMode";
import { useAutosizeTextArea } from "@/src/utils/useAutosize";
import { useAtom, useAtomValue } from "jotai";
import { ChangeEventHandler, useMemo, useRef } from "react";

export default function MainInput() {
    const currentMode = useAtomValue(currModeSelectedAtom);
    const stableTextAtom = useMemo(
        () => NOTES_DEPENDENCIES[currentMode],
        [currentMode],
    );
    const [inputText, setInputText] = useAtom(stableTextAtom);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const onInputChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setInputText(e.target.value);
    };

    useAutosizeTextArea({ textAreaRef, _value: inputText });

    return (
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
    );
}
