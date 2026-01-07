"use client";

import { useAtomValue } from "jotai";
import ToolbarBtn from "./ToolbarBtn";
import { TbBold } from "react-icons/tb";
import { editorAtom } from "../editor.store";
import { TOOLS } from "../editor.constants";

export default function ToolbarList() {
  const { editor } = useAtomValue(editorAtom);

  console.log(`

    segway`);

  return (
    <ul className="flex mb-10 gap-5">
      {TOOLS.map((group, i) => (
        <li key={i}>
          <ul className="flex gap-3">
            {group.map(
              ({
                uniqueKey,
                getAction,
                getIsActive,
                getIsDisabled,
                getMenuContent,
                className,
                icon,
              }) => (
                <ToolbarBtn
                  key={uniqueKey}
                  {...{
                    onClickAction: getAction(editor),
                    isActive: getIsActive(editor),
                    isDisabled: getIsDisabled(editor),
                    menuContent: getMenuContent(),
                    className,
                    Icon: icon,
                  }}
                />
              ),
            )}
          </ul>
        </li>
      ))}
    </ul>
  );
}
