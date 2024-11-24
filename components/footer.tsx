import React from "react";

export default function Footer() {
  return (
    <footer className="my-10 px-4 text-center text-gray-300">
      <small className="mb-2 block">
        &copy; {new Date().getFullYear()} Matt Beechey. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website: </span>
        made with React and Next.js, TypeScript, Tailwind CSS, Framer Motion,
        React-Email & Resend
      </p>
    </footer>
  );
}
