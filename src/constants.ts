import { WritableAtom } from "jotai";
import BoxSvg from "./components/svgs/box";
import Regular1Svg from "./components/svgs/regular1";
import Regular2Svg from "./components/svgs/regular2";
import Regular3Svg from "./components/svgs/regular3";
import ShockSvg from "./components/svgs/shock";
import SmileSvg from "./components/svgs/smile";
import UpsetSvg from "./components/svgs/upset";
import {
    dailyTextAtom,
    monthlyTextAtom,
    weeklyTextAtom,
} from "./jotai/textAtoms";
import { SetStateActionWithReset } from "./types/global";
import { ModeName } from "./types/modes";
import { SvgOutlineParameters } from "./types/svgs";
import {
    lastSessionStartDateLSAtom__Daily,
    lastSessionStartDateLSAtom__Monthly,
    lastSessionStartDateLSAtom__Weekly,
} from "./jotai/clearLogic";

export const DAY_MS = 1_000 * 60 * 60 * 24;
export const WEEK_MS = DAY_MS * 7;
export const MONTH_MS = DAY_MS * 30;

export const MODE_AND_TIME_TABLE = {
    Daily: 0,
    Weekly: WEEK_MS - DAY_MS,
    Monthly: MONTH_MS - DAY_MS,
} satisfies Record<ModeName, number>;

export const MODE_NAMES: ModeName[] = ["Daily", "Weekly", "Monthly"];

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
        svgClassName: "left-1.5",
        dailyClassName: "scale-220",
        weeklyClassName: "scale-180",
        monthlyClassName: "scale-200",
    },
    {
        Svg: BoxSvg,
        svgClassName: "top-1",
        dailyClassName: "scale-260 left-2",
        weeklyClassName: "scale-200 left-2",
        monthlyClassName: "scale-220 left-1.5",
    },
    {
        Svg: SmileSvg,
        svgClassName: "left-2",
        dailyClassName: "bottom-3 scale-280",
        weeklyClassName: "bottom-4 scale-320",
        monthlyClassName: "bottom-4 scale-360",
    },
    {
        Svg: ShockSvg,
        svgClassName: "left-1.5 bottom-4",
        dailyClassName: "scale-300",
        weeklyClassName: "scale-330",
        monthlyClassName: "scale-370",
    },
    {
        Svg: UpsetSvg,
        svgClassName: "",
        dailyClassName: "left-4 bottom-2.5 scale-300",
        weeklyClassName: "left-5.5 bottom-3.5 scale-340",
        monthlyClassName: "left-5.5 bottom-4 scale-370",
    },
] as const satisfies SvgOutlineParameters[];

export const NOTES_DEPENDENCIES: Record<
    ModeName,
    WritableAtom<string, [SetStateActionWithReset<string>], void>
> = {
    Daily: dailyTextAtom,
    Weekly: weeklyTextAtom,
    Monthly: monthlyTextAtom,
};

export const SESS_START_DATE_DEPENDECIES: Record<
    ModeName,
    WritableAtom<number, [SetStateActionWithReset<number>], void>
> = {
    Daily: lastSessionStartDateLSAtom__Daily,
    Weekly: lastSessionStartDateLSAtom__Weekly,
    Monthly: lastSessionStartDateLSAtom__Monthly,
};
