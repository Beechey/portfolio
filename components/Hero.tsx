"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import FigureOne from "@/components/FigureOne"
import { Button, Caption, Window } from "@/components/ui/primitives"
import { currentWork, papers, person } from "@/lib/content"

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const reduced = useReducedMotion()
  const up = (delay: number) => ({
    initial: reduced ? undefined : { opacity: 0, y: 20, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.9, delay, ease: EASE },
  })

  const stats = [
    { k: "PhD", v: "ML for network security" },
    { k: `${papers.length}`, v: "journal papers" },
    { k: "10+", v: "years building & researching" },
  ]

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="shell relative pt-20 pb-24 sm:pt-28 sm:pb-32">
        <motion.a
          {...up(0)}
          href={currentWork.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-panel/70 py-1.5 pr-4 pl-3 font-mono text-xs text-fg-soft backdrop-blur transition-colors hover:border-accent/50"
        >
          <span className="relative flex size-2">
            <span className="animate-pulse-ring absolute inset-0 rounded-full bg-accent" />
            <span className="relative size-2 rounded-full bg-accent" />
          </span>
          {currentWork.role} @ {currentWork.org}
        </motion.a>

        <motion.h1
          {...up(0.08)}
          className="text-gradient mt-8 text-[clamp(2.75rem,8.5vw,6.5rem)] leading-[0.95] tracking-[-0.05em]"
        >
          {person.prefix} {person.name}
        </motion.h1>

        <motion.p {...up(0.16)} className="mt-6 font-mono text-sm text-accent sm:text-base">
          {"> "}
          {person.roleLine.toLowerCase()}
        </motion.p>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <motion.p {...up(0.24)} className="max-w-xl text-lg leading-relaxed text-fg-soft">
              {person.standfirst}
            </motion.p>

            <motion.div {...up(0.32)} className="mt-9 flex flex-wrap gap-3">
              <Button href="#contact">Get in touch</Button>
              <Button href={person.cv} tone="ghost" download>
                Download CV
              </Button>
            </motion.div>

            <motion.dl {...up(0.4)} className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
              {stats.map((s) => (
                <div key={s.v} className="bg-void p-4">
                  <dt className="text-2xl font-semibold tracking-tight text-fg">{s.k}</dt>
                  <dd className="mt-1 font-mono text-[0.6875rem] leading-snug text-muted">{s.v}</dd>
                </div>
              ))}
            </motion.dl>

            <motion.div {...up(0.48)} className="mt-8 flex items-center gap-4">
              <Image
                src="/portrait.jpeg"
                alt={person.name}
                width={96}
                height={96}
                quality={95}
                priority
                className="size-11 shrink-0 rounded-full object-cover ring-1 ring-line-strong"
              />
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "github", href: person.github },
                  { label: "linkedin", href: person.linkedin },
                  { label: "email", href: `mailto:${person.email}` },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="chip transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...up(0.2)}>
            <Window title="evidential_classifier.py — live" className="shadow-[0_30px_80px_-20px_rgb(0_0_0/0.9)]">
              <FigureOne />
            </Window>
            <Caption figure="Fig. 1" className="mt-4">
              A classifier that can decline. Points in the dashed band carry more epistemic
              uncertainty than the threshold allows, so an evidential model refuses them rather
              than guessing — the mechanism behind both papers below.
            </Caption>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
