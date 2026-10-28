import { Rise, SectionMark } from "@/components/ui/primitives"
import { career, education, person } from "@/lib/content"
import { cn } from "@/lib/utils"

export default function Career() {
  return (
    <section id="career" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionMark
        n="04"
        kicker="Career"
        title="Between the lab and the loading bay"
        note={`Based in ${person.location}. The pattern alternates on purpose — research that had to ship, and shipping that needed research.`}
      />

      <ol className="relative mt-16 border-l border-line-strong pl-6 sm:pl-10">
        {career.map((post, i) => (
          <Rise as="li" key={`${post.org}-${post.from}`} delay={Math.min(i, 3) * 0.05} className="relative pb-12 last:pb-0">
            <span
              aria-hidden
              className={cn(
                "absolute top-1.5 -left-[calc(1.5rem+5px)] size-2.5 rounded-full ring-4 ring-void sm:-left-[calc(2.5rem+5px)]",
                i === 0 ? "bg-accent shadow-[0_0_12px_rgb(196_245_74/0.8)]" : post.kind === "industry" ? "bg-fg-soft" : "bg-signal",
              )}
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
              <span className="text-fg">
                {post.from} — {post.to}
              </span>
              <span className={post.kind === "industry" ? "text-muted" : "text-signal"}>[{post.kind}]</span>
            </div>
            <h3 className="mt-2 text-xl tracking-tight sm:text-2xl">
              {post.role} <span className="text-muted">@ {post.org}</span>
            </h3>
            <ul className="mt-4 max-w-3xl space-y-2">
              {post.lines.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed">
                  <span aria-hidden className="font-mono text-accent">›</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Rise>
        ))}
      </ol>

      <div className="mt-20">
        <Rise>
          <p className="mono-label uppercase tracking-[0.14em]">Education</p>
        </Rise>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {education.map((e, i) => (
            <Rise key={e.award} delay={i * 0.06}>
              <div className="card h-full p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-2xl font-semibold tracking-tight text-fg">{e.award}</span>
                  <span className="font-mono text-xs text-muted">{e.years}</span>
                </div>
                <p className="mt-3 text-sm leading-snug text-fg-soft">{e.field}</p>
                <p className="mt-2 text-sm text-muted">{e.school}</p>
                {e.grade && <p className="mt-3 font-mono text-xs text-accent">{e.grade}</p>}
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  )
}
