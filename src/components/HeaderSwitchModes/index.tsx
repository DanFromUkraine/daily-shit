"use client";

import { MODES } from "@/src/constants";
import SwitchModeBtn from "./SwitchModeBtn";

export default function HeaderSwitchModes() {
    return (
        <header className="w-full flex gap-4">
            {MODES.map((mode) => (
                <SwitchModeBtn key={mode.modeName} {...mode} />
            ))}
            <h1 className="underline text-5xl">Shit</h1>
        </header>
    );
}
