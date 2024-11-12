import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="pb-8 text-3xl sm:text-6xl underline decoration-blue-500 capitalize text-center font-semibold">
      {children}
      <span className="text-3xl sm:text-6xl text-blue-500">.</span>
    </h2>
  );
}
