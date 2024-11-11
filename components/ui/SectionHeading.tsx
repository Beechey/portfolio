import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="pb-8 text-2xl sm:text-6xl capitalize text-center font-semibold">
      {children}
    </h2>
  );
}
