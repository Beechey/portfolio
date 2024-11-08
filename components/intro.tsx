"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLinkedin, BsMailbox } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}>
            <Image
              src="/portrait.jpeg"
              alt="Matt's portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.25rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute top-0 -right-2 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}>
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="pb-10 pt-5 px-5 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        Hi, I&apos;m <span className="font-bold">Matt</span>! I&apos;m a{" "}
        <span className="font-bold">machine learning</span> engineer,{" "}
        <span className="font-bold">software</span> engineer and{" "}
        <span className="font-bold">researcher</span> with almost a decade of
        experience. My focus is building{" "}
        <span className="underline">interesting products and models</span>.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}>
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
          Contact me <BsMailbox />
        </Link>
        <a
          href="/Dr Matthew Beechey - CV.pdf"
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
