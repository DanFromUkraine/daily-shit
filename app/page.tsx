"use client";

import MainInput from "@/src/components/Editor";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import useServices from "@/src/services";

export default function MainPage() {
  useServices();
  return (
    <main className="flex flex-col">
      <Header />
      <MainInput />
      <Footer />
    </main>
  );
}
