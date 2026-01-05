"use client";

import { MODE_NAMES } from "@/src/constants";
import SvgOutline from "./elements/SvgOutline";
import SwitchModeBtn from "./elements/SwitchModeBtn";
import { useGetModeIsSelected, useGetRandomSvg } from "./header.hooks";
import Regular1Svg from "../svgs/regular1";

export default function HeaderSwitchModes() {
  const getIsSelected = useGetModeIsSelected();

  console.debug("header render");

  return (
    <header className="w-full flex justify-between items-center mb-30 max-[890px]:flex-col max-[890px]:items-start gap-8">
      {/* #REFACTOR */}
      <section className="flex gap-10 items-center">
        {MODE_NAMES.map((modeName) => (
          <SvgOutline
            key={modeName}
            modeName={modeName}
            svgData={{
              Svg: Regular1Svg,
              svgClassName: "left-1",
              dailyClassName: "scale-190",
              weeklyClassName: "scale-220",
              monthlyClassName: "scale-240",
            }}
            isOutlineVisible={getIsSelected(modeName)}
          >
            <SwitchModeBtn
              modeName={modeName}
              isSelected={getIsSelected(modeName)}
            />
          </SvgOutline>
        ))}
        <h1 className="ml-8 max-[400px]:ml-3 max-[380px]:ml-0 underline text-5xl ">
          Shit
        </h1>
      </section>
      {/*<TimeLeftIndicator />*/}
    </header>
  );
}
