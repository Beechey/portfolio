import { div } from "framer-motion/client";
import React from "react";
import SlideReveal from "./SlideReveal";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="flex justify-center">
      <SlideReveal>
        <h2 className="pb-8 text-3xl sm:text-6xl underline decoration-blue-500 capitalize font-semibold">
          {children}
          <span className="text-3xl sm:text-6xl text-blue-500">.</span>
        </h2>
      </SlideReveal>
    </div>
  );
}
