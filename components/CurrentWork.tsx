import { Rise, SectionMark } from "@/components/ui/primitives"
import { currentWork as w } from "@/lib/content"

export default function CurrentWork() {
  return (
    <section id="aptiq" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionMark
        n="01"
        kicker={`${w.org} · ${w.since}—present`}
        title={
          <>
            Making a model's answer
            <br />
            something you can defend.
          </>
        }
        note={w.standfirst}
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="space-y-6">
          {w.body.map((para, i) => (
            <Rise key={para.slice(0, 24)} delay={i * 0.06}>
              <p className="leading-[1.75]">{para}</p>
            </Rise>
          ))}

          <Rise delay={0.2}>
            <div className="flex flex-wrap gap-2 pt-2">
              {w.stack.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={w.href}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex font-mono text-sm text-accent hover:underline"
            >
              {w.org.toLowerCase()}.ai ↗
            </a>
          </Rise>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {w.contributions.map((c, i) => (
            <Rise key={c.title} delay={i * 0.06}>
              <div className="card card-hover h-full p-6">
                <p className="font-mono text-xs text-accent">0{i + 1}</p>
                <h3 className="mt-4 text-lg tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  )
}
