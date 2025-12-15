import { ReactNode, RefObject, SVGAttributes } from "react";

export type MySvgComponent = (
    params: SVGAttributes<SVGSVGElement> & {
        ref: RefObject<SVGSVGElement | null>;
    },
) => ReactNode;
