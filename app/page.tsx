"use client";

import BottomBanner from "@/src/components/simpleUI/BottomBanner";
import HeaderSwitchModes from "@/src/components/HeaderSwitchModes";
import MainInput from "@/src/components/MainInput";
import useClearTextOnTimer from "@/src/utils/useClearText";
import useInitDateInLS from "@/src/utils/useInitDataLS";
import Hr from "@/src/components/simpleUI/Hr";

export default function MainPage() {
    useClearTextOnTimer();
    useInitDateInLS();
    return (
        <main className="flex flex-col">
            <HeaderSwitchModes />
            <MainInput />
            <Hr />
            <BottomBanner />
        </main>
    );
}
