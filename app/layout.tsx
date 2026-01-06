import { ReactNode } from "react";
import { Provider } from "jotai";
import { Caveat } from "next/font/google";
import "@/src/styles/main.css";
import { Metadata } from "next";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Daily-shit",
  description:
    "A simple site to store temporary thoughts that vanish automatically when you're done.",
};

export default function layout({ children }: { children: ReactNode }) {
  return (
    <Provider>
      <html lang="en" className={caveat.className}>
        <body>{children}</body>
      </html>
    </Provider>
  );
}
