"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  link,
  description,
  image,
  tags,
}: ProjectProps) {
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
      <a
        href={link}
        target="_blank">
        <section
          id="projects"
          className="relative bg-gray-700 max-w-full border border-white/5 overflow-hidden sm:h-[20rem] hover:bg-gray-500 transition rounded-lg">
          <div className="flex flex-col p-8 sm:pt-10 sm:max-w-[50%] h-full sm:group-even:ml-[50%]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-300">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                  key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            className="absolute hidden sm:block top-8 -right-40 w-[32rem] rounded-t-lg shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105 transition group-even:group-hover:translate-x-3 group-even:-right-[initial] group-even:-left-40 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
            src={image}
            alt={description}
            quality={95}
          />
        </section>
      </a>
    </motion.div>
  );
}
