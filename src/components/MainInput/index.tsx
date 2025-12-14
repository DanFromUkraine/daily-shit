"use client";

import { mainTextAtom } from "@/src/jotai/mainInput";
import { useAtom } from "jotai";
import { ChangeEventHandler, RefObject, useEffect, useRef } from "react";

function useAutosizeTextArea({
    textAreaRef,
    _value,
}: {
    textAreaRef: RefObject<HTMLTextAreaElement | null>;
    _value: string;
}) {
    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "0px";
            const scrollHeight = textAreaRef.current.scrollHeight;
            console.log({ scrollHeight });
            textAreaRef.current.style.height = scrollHeight + "px";
        }
    }, [textAreaRef, _value]);
}

export default function MainInput() {
    const [inputText, setInputText] = useAtom(mainTextAtom);
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
