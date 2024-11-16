"use client";

import { useRef } from "react";
import { experiencesData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { section } from "framer-motion/client";

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
    <div className="pb-8 last:pb-0">
      <div className="absolute w-5 h-5 bg-blue-600 -left-[0.5rem]"></div>

      <motion.div
        className="flex flex-col sm:max-w-full h-full pl-6"
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}>
        <div className="border border-white border-opacity-[10%] p-8 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-300">
            {company}, {date}
          </p>
          <p className="mt-2 leading-relaxed text-gray-300">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}
