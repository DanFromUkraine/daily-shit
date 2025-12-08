import { ReactNode, SVGAttributes } from "react";

export type MySvgComponent = (
    params: SVGAttributes<SVGSVGElement>,
) => ReactNode;
