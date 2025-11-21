import { SVG_OUTLINES } from "@/src/constants";
import pickRandomFromList from "@/src/utils/pickRandomFromList";
import Image from "next/image";

export default function SvgOutline({ children }: { children: string }) {
    const { svg, svgClassName } = pickRandomFromList(SVG_OUTLINES);

    return (
        <div className="flex relative">
            <Image src={svg} className={svgClassName} alt="selected" />
            {children}
        </div>
    );
}
