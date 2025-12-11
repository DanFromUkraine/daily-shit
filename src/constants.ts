import type { TimeMode } from "./types/timeModes";

import { SvgOutlineParameters } from "./types/svgs";
import Regular1Svg from "./components/svgs/regular1";
import Regular2Svg from "./components/svgs/regular2";
import Regular3Svg from "./components/svgs/regular3";
import BoxSvg from "./components/svgs/box";
import SmileSvg from "./components/svgs/smile";
import ShockSvg from "./components/svgs/shock";
import UpsetSvg from "./components/svgs/upset";

export const DAY_MS = 1_000 * 60 * 60 * 24;
export const WEEK_MS = DAY_MS * 7;
export const MONTH_MS = DAY_MS * 30;

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
    {
        Svg: Regular1Svg,
        svgClassName: "left-1",
        dailyClassName: "scale-190",
        weeklyClassName: "scale-220",
        monthlyClassName: "scale-240",
    },
    {
        Svg: Regular2Svg,
        svgClassName: "top-3 right-1",
        dailyClassName: "scale-210",
        weeklyClassName: "scale-250",
        monthlyClassName: "scale-270",
    },
    {
        Svg: Regular1Svg,
        svgClassName: "left-1",
        dailyClassName: "scale-180",
        weeklyClassName: "scale-200",
        monthlyClassName: "scale-230",
    },
    {
        Svg: Regular2Svg,
        svgClassName: "top-3 right-1",
        dailyClassName: "scale-210",
        weeklyClassName: "scale-250",
        monthlyClassName: "scale-260",
    },
    {
        Svg: Regular3Svg,
        svgClassName: "",
        dailyClassName: "scale-220",
        weeklyClassName: "scale-180",
        monthlyClassName: "scale-190",
    },
    {
        Svg: BoxSvg,
        svgClassName: "top-1",
        dailyClassName: "scale-220 left-1",
        weeklyClassName: "scale-200 left-2",
        monthlyClassName: "scale-220 left-1.5",
    },
    {
        Svg: SmileSvg,
        svgClassName: "left-1",
        dailyClassName: "bottom-3 scale-280",
        weeklyClassName: "bottom-4 scale-320",
        monthlyClassName: "bottom-4 scale-360",
    },
    {
        Svg: ShockSvg,
        svgClassName: "left-1",
        dailyClassName: "bottom-3.5 scale-300",
        weeklyClassName: "bottom-3.5 scale-330",
        monthlyClassName: "bottom-4 scale-370",
    },
    {
        Svg: UpsetSvg,
        svgClassName: "",
        dailyClassName: "left-3.5 bottom-2 scale-290",
        weeklyClassName: "left-5 bottom-3 scale-340",
        monthlyClassName: "left-5 bottom-3.5 scale-370",
    },
] as const satisfies SvgOutlineParameters[];
