"use client";

import clsx from "clsx";
import { ReactNode } from "react";
import { SvgOutlineParameters } from "../header";
import { ModeName } from "@/src/types/modes";

type SvgOutlineProps = Readonly<{
  children: ReactNode;
  modeName: ModeName;
  svgData: SvgOutlineParameters | undefined;
  isOutlineVisible: boolean;
}>;

export default function SvgOutline({
  children,
  isOutlineVisible,
  svgData,
  modeName,
}: SvgOutlineProps) {
  return (
    <div className="flex relative">
      {svgData !== undefined && (
        <svgData.Svg
          className={clsx(
            "hidden absolute pointer-events-none w-full h-full capitalize",
            svgData.svgClassName,
            getModeSpecificClassname({ modeName, svgData }),
            {
              "flex!": isOutlineVisible,
            },
          )}
        />
      )}

      {children}
    </div>
  );
}

function getModeSpecificClassname({
  modeName,
  svgData,
}: Readonly<{
  modeName: ModeName;
  svgData: SvgOutlineParameters;
}>) {
  if (modeName === "daily") return svgData.dailyClassName;
  else if (modeName === "weekly") return svgData.weeklyClassName;
  else if (modeName === "monthly") return svgData.monthlyClassName;
}
