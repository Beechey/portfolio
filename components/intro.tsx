"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLinkedin, BsMailbox } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import SlideReveal from "./ui/SlideReveal";

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex justify-center">
        <SlideReveal>
          <section className="flex flex-col">
            <div className="flex text-center justify-center">
              <div className="content-center hidden sm:block">
                <Image
                  src="/portrait.jpeg"
                  alt="Matt's portrait"
                  width="192"
                  height="192"
                  quality="95"
                  priority={true}
                  className="h-24 w-24 rounded-full object-cover border-[0.25rem] border-white shadow-xl"
                />
              </div>
              <h1 className="pl-5 font-medium !leading-[1.5] text-4xl sm:text-8xl">
                Hi, I&apos;m <span className="font-bold">Matt</span>
                <span className="font-bold text-blue-600">.</span>
              </h1>
            </div>
          </section>
        </SlideReveal>
      </div>

      <SlideReveal>
        <h2 className="pb-3 text-2xl sm:text-3xl">
          I&apos;m a{" "}
          <span className="font-bold text-blue-500">machine learning</span>{" "}
          engineer, <span className="font-bold text-blue-500">software</span>{" "}
          engineer and{" "}
          <span className="font-bold text-blue-500">researcher</span>.
        </h2>
      </SlideReveal>
      <SlideReveal>
        <h2 className="pb-10 text-md sm:text-xl">
          With almost a decade of experience, my focus is building{" "}
          <span className="underline">interesting products and models</span>. My
          interests span different areas, but are squarely focused around
          technology. I acquired a PhD in machine learning in 2023, and since
          then have been involved in hardware engineering, machine learning
          engineering, data science and web development.
        </h2>
      </SlideReveal>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.25,
          duration: 0.25,
        }}>
        <Link
          href="#contact"
          className="bg-blue-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-blue-500 active:scale-105 transition">
          Contact me <BsMailbox />
        </Link>
        <a
          href="/Dr Matthew Beechey Industry - CV.pdf"
          download
          className="bg-white text-gray-900  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-100 active:scale-105 transition border border-black/10">
          Download CV <HiDownload />
        </a>
        <div className="flex flex-row gap-3">
          <a
            href="https://www.linkedin.com/in/matthew-beechey-09091994"
            target="_blank"
            className="bg-white text-gray-700  p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-[1.15] hover:bg-gray-100 active:scale-105 transition border border-black/10">
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/Beechey"
            target="_blank"
            className="bg-white text-gray-700  p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-110 hover:bg-gray-100 active:scale-105 transition border border-black/10">
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
