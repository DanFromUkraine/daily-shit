import Regular1Svg from "../svgs/regular1";
import Regular2Svg from "../svgs/regular2";
import ShockSvg from "../svgs/shock";
import SmileSvg from "../svgs/smile";
import BoxSvg from "../svgs/box";
import Regular3Svg from "../svgs/regular3";
import UpsetSvg from "../svgs/upset";
import { SvgOutlineParameters } from "./header";

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
