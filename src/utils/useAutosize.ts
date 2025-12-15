"use client";
import { RefObject, useEffect } from "react";

export function useAutosizeTextArea({
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
            // console.log({ scrollHeight });
            textAreaRef.current.style.height = scrollHeight + "px";
        }
    }, [textAreaRef, _value]);
}
