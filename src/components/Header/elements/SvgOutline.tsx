"use client";

import { ModeName } from "@/src/types/modes";
import clsx from "clsx";
import { ReactNode } from "react";
import { SvgOutlineParameters } from "../header";

type SvgOutlineProps = Readonly<{
  children: ReactNode;
  modeName: ModeName;
  isOutlineVisible: boolean;
  svgData: SvgOutlineParameters | undefined;
}>;

export default function SvgOutline({
  children,
  isOutlineVisible,
  modeName,
  svgData,
}: SvgOutlineProps) {
  return (
    <div className="flex relative">
      {svgData !== undefined && (
        <svgData.Svg
          className={clsx(
            "invisible absolute pointer-events-none w-full h-full capitalize",
            svgData.svgClassName,
            getModeSpecificClassname({ modeName, svgData }),
            {
              "visible max-phone:invisible": isOutlineVisible,
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
