"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Fade-up on scroll into view. */
export function Rise({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: "div" | "li" | "section" | "span" | "tr"
}) {
  const reduced = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={reduced ? undefined : { opacity: 0, y: 18, filter: "blur(6px)" }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px -6% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  )
}

/** Section heading: `// 01 · kicker`, title, optional note. */
export function SectionMark({
  n,
  kicker,
  title,
  note,
  className,
}: {
  n: string
  kicker: string
  title: ReactNode
  note?: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <Rise>
        <p className="mono-label flex items-center gap-3">
          <span className="text-accent">{"//"} {n}</span>
          <span className="h-px w-8 bg-line-strong" />
          <span className="uppercase tracking-[0.14em]">{kicker}</span>
        </p>
      </Rise>
      <div className="mt-6 grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-16">
        <Rise delay={0.05}>
          <h2 className="text-gradient text-[clamp(2rem,4.4vw,3.25rem)]">{title}</h2>
        </Rise>
        {note && (
          <Rise delay={0.1}>
            <p className="max-w-md text-[0.9375rem] leading-relaxed text-muted md:pb-1">{note}</p>
          </Rise>
        )}
      </div>
    </div>
  )
}

/** Small mono caption under a figure. */
export function Caption({
  figure,
  children,
  className,
}: {
  figure: string
  children: ReactNode
  className?: string
}) {
  return (
    <p className={cn("text-[0.8125rem] leading-relaxed text-muted", className)}>
      <span className="font-mono text-[0.6875rem] text-accent">{figure.toLowerCase()} →</span>{" "}
      {children}
    </p>
  )
}

export function Button({
  href,
  children,
  download,
  external,
  tone = "solid",
  className,
}: {
  href: string
  children: ReactNode
  download?: boolean
  external?: boolean
  tone?: "solid" | "ghost"
  className?: string
}) {
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "group/b inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
        tone === "solid"
          ? "bg-accent text-void shadow-[0_0_0_1px_rgb(196_245_74/0.4),0_8px_30px_-6px_rgb(196_245_74/0.45)] hover:shadow-[0_0_0_1px_rgb(196_245_74/0.6),0_8px_40px_-4px_rgb(196_245_74/0.6)]"
          : "border border-line-strong bg-panel/60 text-fg backdrop-blur hover:border-fg/40",
        className,
      )}
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover/b:translate-x-0.5">
        →
      </span>
    </a>
  )
}

/** A window frame with traffic-light dots and a file-name tab. */
export function Window({
  title,
  children,
  className,
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("card overflow-hidden bg-panel", className)}>
      <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="size-2.5 rounded-full bg-[#28c840]/80" />
        </span>
        <span className="font-mono text-[0.6875rem] text-muted">{title}</span>
      </div>
      {children}
    </div>
  )
}
