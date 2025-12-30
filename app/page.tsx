"use client";

import Footer from "@/src/components/Footer";
import HeaderSwitchModes from "@/src/components/Header";
import MainInput from "@/src/components/Editor";
import useClearTextOnTimer from "@/src/utils/useClearText";
import { Suspense } from "react";

export default function MainPage() {
  useClearTextOnTimer();
  return (
    <main className="flex flex-col">
      <Suspense fallback=<div>loading...</div>>
        <HeaderSwitchModes />
      </Suspense>
      <MainInput />
      <Footer />
    </main>
  );
}
