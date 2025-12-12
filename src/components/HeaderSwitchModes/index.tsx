"use client";

import { MODE_NAMES, SVG_OUTLINES } from "@/src/constants";
import { currModeSelectedAtom } from "@/src/jotai/currentMode";
import { SvgOutlineParameters } from "@/src/types/svgs";
import pickRandomFromList from "@/src/utils/pickRandomFromList";
import { useAtomValue } from "jotai";
import { useLayoutEffect, useState } from "react";
import SvgOutline from "./svgOutline";
import SwitchModeBtn from "./SwitchModeBtn";
import { ModeName } from "@/src/types/modes";

function useGetModeIsSelected() {
    const currentMode = useAtomValue(currModeSelectedAtom);

    return (mode: ModeName) => mode === currentMode;
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
            {MODE_NAMES.map((modeName) => (
                <SvgOutline
                    key={modeName}
                    modeName={modeName}
                    svgData={svgData}
                    isOutlineVisible={getIsSelected(modeName)}
                >
                    <SwitchModeBtn
                        modeName={modeName}
                        isSelected={getIsSelected(modeName)}
                    />
                </SvgOutline>
            ))}
            <h1 className="ml-8 underline text-5xl ">Shit</h1>
        </header>
    );
}
