"use client";

import HeaderSwitchModes from "@/src/components/HeaderSwitchModes";
import MainInput from "@/src/components/MainInput";
import useClearTextOnTimer from "@/src/utils/useClearText";
import useInitDateInLS from "@/src/utils/useInitDataLS";

export default function MainPage() {
    useClearTextOnTimer();
    useInitDateInLS();
    return (
        <main className="flex flex-col gap-30 h-screen">
            <HeaderSwitchModes />
            <MainInput />
        </main>
    );
}
