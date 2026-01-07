import { Editor, JSONContent } from "@tiptap/react";

import { atom } from "jotai";

import { Notes } from "./editor";
import {
  getDailyNoteAtom,
  getMonthlyNoteAtom,
  getWeeklyNoteAtom,
  isDailyNotInitReadyAtom,
  isMonthlyNoteInitReadyAtom,
  isWeeklyNoteInitReadyAtom,
  setDailyNoteIdbOnlyAtom,
  setDailyNoteWithDebounceAtom,
  setMonthlyNoteIdbOnlyAtom,
  setMonthlyNoteWithDebounceAtom,
  setWeeklyNoteIdbOnlyAtom,
  setWeeklyNoteWithDebounceAtom,
} from "./editor.store";

import {
  Bold,
  BracketsIcon,
  ChevronLeft,
  Forward,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Highlighter,
  List,
  ListChecks,
  ListOrdered,
  LucideIcon,
  Redo,
  Strikethrough,
  Underline,
  Undo,
  Undo2,
} from "lucide-react";
import Link from "@tiptap/extension-link";
import { ReactNode } from "react";

export const EDITOR_INITIAL_CONTENT: JSONContent = {
  type: "doc",
  content: [
    {
      type: "paragraph",
    },
  ],
};

export const NOTES = {
  daily: {
    getContentAtom: getDailyNoteAtom,
    setContentWithDebounceAtom: setDailyNoteWithDebounceAtom,
    isInitReadyAtom: isDailyNotInitReadyAtom,
    setIdbOnlyAtom: setDailyNoteIdbOnlyAtom,
  },
  weekly: {
    getContentAtom: getWeeklyNoteAtom,
    setContentWithDebounceAtom: setWeeklyNoteWithDebounceAtom,
    isInitReadyAtom: isWeeklyNoteInitReadyAtom,
    setIdbOnlyAtom: setWeeklyNoteIdbOnlyAtom,
  },
  monthly: {
    getContentAtom: getMonthlyNoteAtom,
    setContentWithDebounceAtom: setMonthlyNoteWithDebounceAtom,
    isInitReadyAtom: isMonthlyNoteInitReadyAtom,
    setIdbOnlyAtom: setMonthlyNoteIdbOnlyAtom,
  },
  stub_value: {
    getContentAtom: atom(null),
    isInitReadyAtom: atom(false),
    setContentWithDebounceAtom: atom(
      null,
      async (_get, _set, _a: JSONContent) => {},
    ),
    setIdbOnlyAtom: atom(null, async (_get, _set, _a: JSONContent) => {}),
  },
} satisfies Notes;

interface Tool {
  getAction: (e: Editor | null) => () => void;
  getIsActive: (e: Editor | null) => boolean;
  getIsDisabled: (e: Editor | null) => boolean;
  icon: LucideIcon;
  className: string;
  getMenuContent: () => ReactNode;
  uniqueKey: string;
}

export const TOOLS: Tool[][] = [
  [
    {
      uniqueKey: "undo",
      getAction: (e) => () => e?.chain().focus().undo().run(),
      getIsActive: () => false,
      getIsDisabled: (e) => !e?.can().undo(),
      getMenuContent: () => "hello",
      className: "disable:text-gray-500",
      icon: Undo,
    },
    {
      uniqueKey: "redo",
      getAction: (e) => () => e?.chain().focus().redo().run(),
      getIsActive: () => false,
      getIsDisabled: (e) => !e?.can().redo(),
      getMenuContent: () => "hello 2",
      className: "disable:text-gray-500",
      icon: Redo,
    },
  ],
  [
    {
      uniqueKey: "bold",
      getAction: (e) => () => e?.chain().focus().toggleBold().run(),
      getIsActive: (e) => !!e?.isActive("bold"),
      getIsDisabled: (e) => !e?.can().toggleBold(),
      getMenuContent: () => "hello 3",
      className: "",
      icon: Bold,
    },
    {
      uniqueKey: "underline",
      getAction: (e) => () => e?.chain().focus().toggleUnderline().run(),
      getIsActive: (e) => !!e?.isActive("underline"),
      getIsDisabled: (e) => !e?.can().toggleUnderline(),
      getMenuContent: () => "hello 4",
      className: "",
      icon: Underline,
    },
    {
      uniqueKey: "strike",
      getAction: (e) => () => !!e?.chain().focus().toggleStrike().run(),
      getIsActive: (e) => !!e?.isActive("strike"),
      getIsDisabled: (e) => !e?.can().toggleStrike(),
      getMenuContent: () => "hello 5",
      className: "",
      icon: Strikethrough,
    },
    {
      uniqueKey: "highlight",
      getAction: (e) => () => e?.chain().focus().toggleHighlight().run(),
      getIsActive: (e) => !!e?.isActive("highlight"),
      getIsDisabled: (e) => !e?.can().toggleHighlight(),
      getMenuContent: () => "hello 6",
      className: "",
      icon: Highlighter,
    },
  ],
  [
    {
      uniqueKey: "taskList",
      getAction: (e) => () => e?.chain().focus().toggleTaskList().run(),
      getIsActive: (e) => !!e?.isActive("taskList"),
      getIsDisabled: (e) => !e?.can().toggleTaskList(),
      getMenuContent: () => "hello 69",
      className: "",
      icon: ListChecks,
    },
    {
      uniqueKey: "bulletList",
      getAction: (e) => () => e?.chain().focus().toggleBulletList().run(),
      getIsActive: (e) => !!e?.isActive("bulletList"),
      getIsDisabled: (e) => !e?.can().toggleBulletList(),
      getMenuContent: () => "hello 7",
      className: "",
      icon: List,
    },
    {
      uniqueKey: "orderedList",
      getAction: (e) => () => e?.chain().focus().toggleOrderedList().run(),
      getIsActive: (e) => !!e?.isActive("orderedList"),
      getIsDisabled: (e) => !e?.can().toggleOrderedList(),
      getMenuContent: () => "hello 8",
      className: "",
      icon: ListOrdered,
    },
  ],
  [
    {
      uniqueKey: "heading1",
      getAction: (e) => () =>
        e?.chain().focus().toggleHeading({ level: 1 }).run(),
      getIsActive: (e) => !!e?.isActive("heading", { level: 1 }),
      getIsDisabled: (e) => !e?.can().toggleHeading({ level: 1 }),
      getMenuContent: () => "hello 9",
      className: "",
      icon: Heading1,
    },
    {
      uniqueKey: "heading2",
      getAction: (e) => () =>
        e?.chain().focus().toggleHeading({ level: 2 }).run(),
      getIsActive: (e) => !!e?.isActive("heading", { level: 2 }),
      getIsDisabled: (e) => !e?.can().toggleHeading({ level: 2 }),
      getMenuContent: () => "hello 10",
      className: "",
      icon: Heading2,
    },
    {
      uniqueKey: "heading3",
      getAction: (e) => () =>
        e?.chain().focus().toggleHeading({ level: 3 }).run(),
      getIsActive: (e) => !!e?.isActive("heading", { level: 3 }),
      getIsDisabled: (e) => !e?.can().toggleHeading({ level: 3 }),
      getMenuContent: () => "hello 11",
      className: "",
      icon: Heading3,
    },
    {
      uniqueKey: "heading4",
      getAction: (e) => () =>
        e?.chain().focus().toggleHeading({ level: 4 }).run(),
      getIsActive: (e) => !!e?.isActive("heading", { level: 4 }),
      getIsDisabled: (e) => !e?.can().toggleHeading({ level: 4 }),
      getMenuContent: () => "hello 12",
      className: "",
      icon: Heading4,
    },
  ],
];

export const LinkExtension = Link.configure({
  openOnClick: false,
  autolink: true,
  defaultProtocol: "https",
  protocols: ["http", "https"],
  isAllowedUri: (url, ctx) => {
    try {
      const parsedUrl = url.includes(":")
        ? new URL(url)
        : new URL(`${ctx.defaultProtocol}://${url}`);

      if (!ctx.defaultValidate(parsedUrl.href)) {
        return false;
      }

      const disallowedProtocols = ["ftp", "file", "mailto"];
      const protocol = parsedUrl.protocol.replace(":", "");

      if (disallowedProtocols.includes(protocol)) {
        return false;
      }

      const allowedProtocols = ctx.protocols.map((p) =>
        typeof p === "string" ? p : p.scheme,
      );

      if (!allowedProtocols.includes(protocol)) {
        return false;
      }

      const disallowedDomains = ["pornhub.com"];
      const domain = parsedUrl.hostname;

      if (disallowedDomains.includes(domain)) {
        return false;
      }

      return true;
    } catch {
      return false;
    }
  },
  shouldAutoLink: (url) => {
    try {
      const parsedUrl = url.includes(":")
        ? new URL(url)
        : new URL(`https://${url}`);

      const disallowedDomains = [
        "example-no-autolink.com",
        "another-no-autolink.com",
      ];
      const domain = parsedUrl.hostname;

      return !disallowedDomains.includes(domain);
    } catch {
      return false;
    }
  },
});
