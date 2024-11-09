import React from "react";
import SectionHeading from "./section_heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-28 max-w-[50rem] sm:mb-0 scroll-mt-32">
      <SectionHeading>Projects and publications</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
