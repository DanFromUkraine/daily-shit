import type { TimeMode } from "./types/timeModes";

import { SvgOutlineParameters } from "./types/svgs";
import Regular1Svg from "./components/svgs/regular1";
import Regular2Svg from "./components/svgs/regular2";

const DAY_MS = 1_000 * 60 * 60 * 24;
const WEEK_MS = DAY_MS * 7;
const MONTH_MS = DAY_MS * 30;

export const MODES = [
    {
        modeName: "Daily",
        cleanTimeMS: DAY_MS,
    },
    {
        modeName: "Weekly",
        cleanTimeMS: WEEK_MS,
    },
    {
        modeName: "Monthly",
        cleanTimeMS: MONTH_MS,
    },
] as const satisfies TimeMode[];

export const SVG_OUTLINES = [
    // {
    //     Svg: Regular1Svg,

    //     svgClassName: "left-1",
    //     dailyClassName: "scale-190",
    //     weeklyClassName: "scale-220",
    //     monthlyClassName: "scale-240",
    // },
    {
        Svg: Regular2Svg,
        svgClassName: "top-3 right-1",
        dailyClassName: "scale-210",
        weeklyClassName: "scale-250",
        monthlyClassName: "",
    },
    // {
    //     Svg: Regular1Svg,
    //     svgClassName: "",
    // },
    // {
    //     svg: regular2SvgOutline,
    //     svgClassName: "top-[20%]! max-h-[100px]",
    // },
    // {
    //     svg: regular3SvgOutline,
    //     svgClassName: "",
    // },
    // {
    //     svg: boxSvgOutline,
    //     svgClassName: "left-2!",
    // },
    // {
    //     svg: smileSvgOutline,
    //     svgClassName: "-top-2! left-1! scale-120 max-h-[106px]",
    // },
    // {
    //     svg: shockSvgOutline,
    //     svgClassName: "-top-4!",
    // },
    // {
    //     svg: upsetSvgOutline,
    //     svgClassName: "left-[10%]! -top-3! scale-120",
    // },
] as const satisfies SvgOutlineParameters[];
