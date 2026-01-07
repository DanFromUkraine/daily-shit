"use client";

import { ReactNode } from "react";
import { useFloating } from "@floating-ui/react";
import { IconType } from "react-icons/lib";
import clsx from "clsx";

type ToolbarBtnProps = Readonly<{
  onClickAction: () => void;

  isActive: boolean;
  isDisabled: boolean;
  menuContent: ReactNode;
  Icon: IconType;
  className: string;
}>;

export default function ToolbarBtn({
  onClickAction,
  isActive,
  isDisabled,
  menuContent,
  Icon,
  className,
}: ToolbarBtnProps) {
  const { refs, floatingStyles } = useFloating();

  return (
    <li>
      <button
        ref={refs.setReference}
        onClick={onClickAction}
        disabled={isDisabled}
        data-active={isActive}
        className={clsx(
          "text-2xl font-extrabold peer disabled:text-gray-500",
          className,
        )}
      >
        <Icon />
      </button>
      <div
        className="delay-75 opacity-0 duration-75 peer-hover:opacity-100 select-none"
        ref={refs.setFloating}
        style={floatingStyles}
      >
        {menuContent}
      </div>
    </li>
  );
}
