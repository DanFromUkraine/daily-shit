import type { TimeMode } from "./types/timeModes";
import regular1SvgOutline from "@/public/regular1.svg";
import regular2SvgOutline from "@/public/regular2.svg";
import regular3SvgOutline from "@/public/regular 3.svg";
import boxSvgOutline from "@/public/box.svg";
import smileSvgOutline from "@/public/smile.svg";
import shockSvgOutline from "@/public/shock.svg";
import upsetSvgOutline from "@/public/upset.svg";

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
    {
        svg: regular1SvgOutline,
        svgClassName: "",
    },
] as const;
