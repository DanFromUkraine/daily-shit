import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

export type WithInitialValue<Value> = {
  init: Value;
};

export type LucideIcon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;
