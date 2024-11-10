"use client";

import React from "react";
import SectionHeading from "./section_heading";
import { skillsData } from "@/lib/data";

export default function Skills() {
  // const ref = useSectionInView("Skills");

  return (
    <section
      id="skills"
      className="max-w-[53rem] scroll-mt-28 text-center">
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-md text-gray-800">
        {skillsData.map((skill, index) => (
          <li
            className="bg-white border botder-black/[0.1] rounded-xl px-5 py-3"
            key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
