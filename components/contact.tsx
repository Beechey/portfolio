"use client";

import React from "react";
import SectionHeading from "./ui/SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import SlideReveal from "./ui/SlideReveal";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-28 max-w-[50rem] sm:mb-0 scroll-mt-32 pb-12">
      <SectionHeading>Contact me</SectionHeading>
      <SlideReveal>
        <p>
          Please contact me directly at{" "}
          <a
            href="mailto:mattbeechey@gmail.com"
            className="underline">
            mattbeechey@gmail.com
          </a>{" "}
          or by using this form.
        </p>
      </SlideReveal>

      <motion.form
        action={async (formData) => {
          await sendEmail(formData);
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col">
        <input
          type="email"
          name="email"
          className="h-12 rounded-lg border border-black-[0.1] text-black p-4"
          placeholder="Your email"
          required
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black-[0.1] text-black p-4"
          name="message"
          placeholder="Your message"
          required
        />
        <button
          type="submit"
          className="flex w-[8rem] bg-blue-800 text-white px-7 py-3 items-center gap-2 rounded-full outline-none hover:bg-blue-500 transition">
          Submit <FaPaperPlane />
        </button>
      </motion.form>
    </section>
  );
}
