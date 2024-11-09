import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="pb-8 text-2xl sm:text-3xl capitalize text-center">
      {children}
    </h2>
  );
}
