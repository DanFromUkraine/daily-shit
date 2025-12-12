// import { Patrick_Hand } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { Provider } from "jotai";
import { Caveat } from "next/font/google";

// Load Caveat font with specific weights and subsets
const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"], // Available weights: 400, 500, 600, 700
});

export default function layout({ children }: { children: ReactNode }) {
    return (
        <Provider>
            <html lang="en" className={caveat.className}>
                <body className="p-20 paperBg">{children}</body>
            </html>
        </Provider>
    );
}
