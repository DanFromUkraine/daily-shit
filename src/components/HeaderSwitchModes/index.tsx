"use client";

import { MODES, SVG_OUTLINES } from "@/src/constants";
import { currModeSelectedAtom } from "@/src/jotai/currentMode";
import { SvgOutlineParameters } from "@/src/types/svgs";
import { ModeNames } from "@/src/types/timeModes";
import pickRandomFromList from "@/src/utils/pickRandomFromList";
import { useAtomValue } from "jotai";
import { useLayoutEffect, useState } from "react";
import SvgOutline from "./svgOutline";
import SwitchModeBtn from "./SwitchModeBtn";

function useGetModeIsSelected() {
    const currentMode = useAtomValue(currModeSelectedAtom);

    return (mode: ModeNames) => mode === currentMode;
}

function useGetRandomSvg() {
    const [data, setData] = useState<SvgOutlineParameters>();

    useLayoutEffect(() => {
        const newData = pickRandomFromList(SVG_OUTLINES);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setData(newData);
    }, []);

    return data;
}

export default function HeaderSwitchModes() {
    const getIsSelected = useGetModeIsSelected();
    const svgData = useGetRandomSvg();
    return (
        <header className="w-full flex gap-10 items-center">
            {MODES.map((mode) => (
                <SvgOutline
                    key={mode.modeName}
                    modeName={mode.modeName}
                    svgData={svgData}
                    isOutlineVisible={getIsSelected(mode.modeName)}
                >
                    <SwitchModeBtn
                        {...mode}
                        isSelected={getIsSelected(mode.modeName)}
                    />
                </SvgOutline>
            ))}
            <h1 className="underline text-5xl ">Shit</h1>
        </header>
    );
}
