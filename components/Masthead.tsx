"use client"

import { useMotionValueEvent, useScroll } from "motion/react"
import { useState } from "react"
import { nav, person } from "@/lib/content"
import { cn } from "@/lib/utils"

export default function Masthead() {
  const [stuck, setStuck] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (v) => setStuck(v > 24))

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-[74rem] items-center justify-between gap-6 rounded-full border px-5 transition-all duration-500",
          stuck
            ? "border-line-strong bg-panel/70 shadow-[0_10px_40px_-10px_rgb(0_0_0/0.8)] backdrop-blur-xl"
            : "border-transparent",
        )}
      >
        <a href="#top" className="font-mono text-sm text-fg" aria-label={`${person.name}, home`}>
          <span className="text-accent">~/</span>beechey
          <span aria-hidden className="animate-blink ml-0.5 text-accent">
            _
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item, i) => (
            <a
              key={item.hash}
              href={item.hash}
              className="rounded-full px-3 py-1.5 font-mono text-xs text-muted transition-colors duration-300 hover:bg-white/5 hover:text-fg"
            >
              <span className="text-faint">0{i + 1}.</span> {item.label.toLowerCase()}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-line-strong px-4 py-1.5 font-mono text-xs text-fg transition-colors hover:border-accent hover:text-accent"
        >
          contact
        </a>
      </div>
    </header>
  )
}
