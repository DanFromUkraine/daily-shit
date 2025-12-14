import { ReactNode } from "react";
import "./globals.css";
import { Provider } from "jotai";
import { Caveat } from "next/font/google";

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function layout({ children }: { children: ReactNode }) {
    return (
        <Provider>
            <html lang="en" className={caveat.className}>
                <body className="p-20 max-sm:p-11 paperBg">{children}</body>
            </html>
        </Provider>
    );
}
