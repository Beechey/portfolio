"use client";

import About from "@/components/about";
import Experience from "@/components/experiences";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/ui/SectionDivider";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
    </main>
  );
}
