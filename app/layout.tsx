import "./globals.css";
import { ReactNode } from "react";
import { Patrick_Hand } from "next/font/google";

const patrick = Patrick_Hand({
    subsets: ["latin"],
    weight: "400",
});

export default function layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={patrick.className}>
            <body className="p-20 paperBg">{children}</body>
        </html>
    );
}
