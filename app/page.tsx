"use client";

import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section_divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
    </main>
  );
}
