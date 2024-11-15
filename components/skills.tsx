"use client";

import React from "react";
import SectionHeading from "./ui/SectionHeading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
  // const ref = useSectionInView("Skills");

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.025 * index,
      },
    }),
  };

  return (
    <section
      id="skills"
      className="mb-28 max-w-[50rem] sm:mb-0 scroll-mt-32">
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-md text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-gray-600 text-gray-200 border border-white/[0.1] rounded-xl px-5 py-3 hover:bg-gray-500 transition"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}>
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
