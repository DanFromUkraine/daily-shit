import { SvgOutlineParameters } from "@/src/types/svgs";
import clsx from "clsx";
import { ReactNode } from "react";

function getModeSpecificClassname({
    modeName,
    svgData,
}: {
    modeName: string;
    svgData: SvgOutlineParameters;
}) {
    if (modeName === "Daily") return svgData.dailyClassName;
    else if (modeName === "Weekly") return svgData.weeklyClassName;
    else if (modeName === "Monthly") return svgData.monthlyClassName;
}

export default function SvgOutline({
    children,
    isOutlineVisible,
    svgData,
    modeName,
}: {
    children: ReactNode;
    modeName: string;
    svgData: SvgOutlineParameters | undefined;
    isOutlineVisible: boolean;
}) {
    return (
        <div className="flex relative">
            {typeof svgData !== "undefined" && (
                <svgData.Svg
                    className={clsx(
                        "hidden absolute pointer-events-none w-full h-full",
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
