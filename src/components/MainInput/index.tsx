"use client";

import { mainTextAtom } from "@/src/jotai/mainInput";
import { useAtom } from "jotai";
import { ChangeEventHandler } from "react";

export default function MainInput() {
    const [inputText, setInputText] = useAtom(mainTextAtom);
    const onInputChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setInputText(e.target.value);
    };

    return (
        <textarea
            title="main-input"
            name="main-input"
            value={inputText}
            onChange={onInputChange}
            data-testid="main-input"
            className="w-full h-full outline-none text-xl"
            placeholder="Here starts your story..."
        ></textarea>
    );
}
