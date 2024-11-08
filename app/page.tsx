"use client";

import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Publications from "@/components/publications";
import SectionDivider from "@/components/section_divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Publications />
    </main>
  );
}
