import React from "react";
import SectionHeading from "./ui/SectionHeading";
import Experience from "./ui/Experience";
import { experiencesData } from "@/lib/data";

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="mb-28 max-w-[50rem] sm:mb-0 scroll-mt-32">
      <SectionHeading>My Experience</SectionHeading>

      <div className="relative">
        <div className="absolute top-0 h-[100%] w-1 bg-blue-600"></div>
        <div>
          {experiencesData.toReversed().map((experience, index) => (
            <React.Fragment key={index}>
              <Experience {...experience} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
