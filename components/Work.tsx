import Image from "next/image"
import { Rise, SectionMark } from "@/components/ui/primitives"
import { projects } from "@/lib/content"

export default function Work() {
  return (
    <section id="work" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionMark
        n="02"
        kicker="Selected work"
        title="Things I've built"
        note="Three shipped systems and two methods. Each started because something in the real world refused to behave the way the literature said it would."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Rise key={p.title} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : undefined}>
            <article className="card card-hover group flex h-full flex-col overflow-hidden">
              <div
                className={`relative aspect-[16/10] overflow-hidden border-b border-line bg-panel-2 ${i === 0 ? "md:aspect-[21/8]" : ""}`}
              >
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`${p.title} — ${p.blurb}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover opacity-85 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                ) : (
                  <QueryPanel />
                )}
                <span className="chip absolute top-3 left-3 bg-void/80 backdrop-blur">{p.year}</span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl tracking-tight">{p.title}</h3>
                <p className="mt-1 font-mono text-xs text-accent">{p.blurb}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{p.detail}</p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto pt-6 font-mono text-xs text-fg hover:text-accent"
                  >
                    {p.hrefLabel} ↗
                  </a>
                )}
              </div>
            </article>
          </Rise>
        ))}
      </div>
    </section>
  )
}

/** Stand-in visual for projects without a screenshot: a question compiled to a traceable query. */
function QueryPanel() {
  return (
    <div aria-hidden className="bg-grid absolute inset-0 flex items-center justify-center p-6 [mask-image:none]">
      <div className="w-full max-w-lg space-y-3 font-mono text-xs leading-relaxed sm:text-sm">
        <p className="text-fg-soft">
          <span className="text-accent">?</span> which junctions saw the most incidents last quarter
        </p>
        <div className="rounded-lg border border-line bg-void/80 p-3 text-muted">
          <span className="text-signal">SELECT</span> junction_id, <span className="text-signal">COUNT</span>(*)
          <br />
          <span className="text-signal">FROM</span> incidents <span className="text-faint">@snapshot 2025-06-30</span>
          <br />
          <span className="text-signal">GROUP BY</span> 1 <span className="text-signal">ORDER BY</span> 2 <span className="text-signal">DESC</span>
        </div>
        <p className="text-accent">✓ every figure traced to source</p>
      </div>
    </div>
  )
}
