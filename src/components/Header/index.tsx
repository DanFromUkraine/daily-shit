"use client";

import { useAtomValue } from "jotai";
import SvgOutline from "./elements/SvgOutline";
import SwitchModeBtn from "./elements/SwitchModeBtn";
import TimeLeftIndicator from "./elements/TimeLeftIndicator";
import { useGetRandomSvg } from "./header.hooks";
import { MODE_NAMES } from "./header.constants";
import { getCurrentModeAtom } from "./header.store";

export default function HeaderSwitchModes() {
  const svgData = useGetRandomSvg();
  const currentMode = useAtomValue(getCurrentModeAtom);

  return (
    <header className="w-full flex justify-between items-start sm:items-center mb-30 max-sm:flex-col max-sm:gap-8">
      <section className="flex gap-5 phone:gap-10 items-center w-full">
        {MODE_NAMES.map((mode) => (
          <SvgOutline
            key={mode}
            modeName={mode}
            isOutlineVisible={currentMode === mode}
            svgData={svgData}
          >
            <SwitchModeBtn
              modeName={mode}
              isSelected={currentMode === mode}
            />
          </SvgOutline>
        ))}
        <h1 className="sm:ml-8 max-md:ml-0! underline text-5xl ">Shit</h1>
      </section>
      <TimeLeftIndicator />
    </header>
  );
}
