import { ReactNode } from "react";
import { Provider } from "jotai";
import { Caveat } from "next/font/google";
import "@/src/styles/main.css";
import { Metadata } from "next";
import IdbProvider from "@/src/idb/IdbProvider";

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
      <IdbProvider>
        <html lang="en" className={caveat.className}>
          <body className="p-20 max-sm:p-11 paperBg">{children}</body>
        </html>
      </IdbProvider>
    </Provider>
  );
}
