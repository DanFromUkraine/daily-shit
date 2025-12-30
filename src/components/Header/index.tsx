"use client";

import { MODE_NAMES } from "@/src/constants";
import SvgOutline from "./elements/SvgOutline";
import SwitchModeBtn from "./elements/SwitchModeBtn";
import TimeLeftIndicator from "./elements/TimeLeftIndicator";
import { useGetModeIsSelected, useGetRandomSvg } from "./header.hooks";
import { useIdbPromise } from "@/src/idb/IdbProvider";
import { use, useEffect, useState } from "react";

export default function HeaderSwitchModes() {
  const getIsSelected = useGetModeIsSelected();
  const svgData = useGetRandomSvg();

  // const examplePromise = useIdbPromise();

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const expectedData = use(examplePromise);
  //   console.log(expectedData);

  //   const interval = setInterval(() => {
  //     setCount((prev) => prev + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <header className="w-full flex justify-between items-center mb-30 max-[890px]:flex-col max-[890px]:items-start gap-8">
      {/* #REFACTOR */}
      <section className="flex gap-10 items-center">
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
        <h1 className="ml-8 max-[400px]:ml-3 max-[380px]:ml-0 underline text-5xl ">
          Shit
        </h1>
      </section>
      <TimeLeftIndicator />
    </header>
  );
}
