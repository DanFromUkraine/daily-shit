"use client";

import { SvgOutlineParameters } from "@/src/types/svgs";
import clsx from "clsx";
import gsap from "gsap";
import { ReactNode, useEffect, useRef } from "react";

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
}: Readonly<{
    children: ReactNode;
    modeName: string;
    svgData: SvgOutlineParameters | undefined;
    isOutlineVisible: boolean;
}>) {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;
        const paths = svgRef.current.children;
        gsap.fromTo(
            paths,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.5,
                stagger: 0.2,
            },
        );
    }, [isOutlineVisible]);

    return (
        <div className="flex relative">
            {svgData !== undefined && (
                <svgData.Svg
                    ref={svgRef}
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
