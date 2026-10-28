import Image from "next/image"
import RelayMock from "@/components/RelayMock"
import { Rise, SectionMark } from "@/components/ui/primitives"
import { type Project, projects } from "@/lib/content"

export default function Work() {
  return (
    <section id="work" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionMark
        n="02"
        kicker="Selected work"
        title="Things I've built"
        note="Four shipped systems and two research methods — from firmware on buses and an Android TV app to multi-agent AI."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Rise key={p.title} delay={(i % 2) * 0.08} className={p.image ? undefined : "md:col-span-2"}>
            <article className="card card-hover group flex h-full flex-col overflow-hidden">
              <div
                className={`relative aspect-[16/10] overflow-hidden border-b border-line bg-panel-2 ${p.image ? "" : "md:aspect-[21/8]"}`}
              >
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`${p.title} — ${p.blurb}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover opacity-85 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                ) : p.mock === "relay" ? (
                  <RelayMock />
                ) : (
                  p.panel && <CodePanel {...p.panel} />
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

/** Stand-in visual for projects without a screenshot. First word of each line is highlighted. */
function CodePanel({ prompt, lines, result }: NonNullable<Project["panel"]>) {
  const head = (line: string) => {
    const [first, ...rest] = line.split(" ")
    return (
      <>
        <span className="text-signal">{first}</span> {rest.join(" ")}
      </>
    )
  }
  return (
    <div aria-hidden className="absolute inset-0 flex items-center justify-center p-6">
      <div className="bg-grid absolute inset-0" />
      <div className="relative w-full max-w-lg space-y-3 font-mono text-xs leading-relaxed sm:text-sm">
        <p className="text-fg-soft">
          <span className="text-accent">{prompt.split(" ")[0]}</span> {prompt.split(" ").slice(1).join(" ")}
        </p>
        <div className="space-y-0.5 rounded-lg border border-line bg-void/80 p-3 whitespace-pre-wrap text-muted">
          {lines.map((l) => (
            <p key={l}>{head(l)}</p>
          ))}
        </div>
        <p className="text-accent">{result}</p>
      </div>
    </div>
  )
}
