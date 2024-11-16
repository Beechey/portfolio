"use client";

import { useRef } from "react";
import { experiencesData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ExperienceProps = (typeof experiencesData)[number];

export default function Experience({
  title,
  company,
  description,
  icon,
  date,
}: ExperienceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.15 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-8 last:mb-0">
      <section
        id="experiences"
        className="relative bg-gray-700 w-full sm:max-w-[45%] border border-white/5 overflow-hidden sm:h-[20rem] hover:bg-gray-500 transition rounded-lg sm:group-even:ml-[55%]">
        <div className="flex flex-col p-8 sm:max-w-full h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-300">
            {company}, {date}
          </p>
          <p className="mt-2 leading-relaxed text-gray-300">{description}</p>
        </div>
      </section>
    </motion.div>
  );
}
