import { Rise, SectionMark } from "@/components/ui/primitives"
import { person, toolkit } from "@/lib/content"

export default function Toolkit() {
  return (
    <section id="toolkit" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionMark
        n="05"
        kicker="Toolkit"
        title="From PCB traces to transformers"
        note="Listed by what I have shipped with rather than what I have read about. A model is worth very little if nothing is measuring the world for it."
      />

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {toolkit.map((group, i) => (
          <Rise key={group.group} delay={Math.min(i, 3) * 0.05}>
            <div className="card card-hover h-full p-6">
              <h3 className="font-mono text-xs font-normal tracking-normal text-accent">
                {group.group.toLowerCase().replace(/ & /g, "_").replace(/ /g, "_")}
                <span className="text-faint">[]</span>
              </h3>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Rise>
        ))}
      </div>

      <Rise delay={0.2}>
        <p className="mt-8 max-w-2xl text-sm text-muted">
          Alongside the technical work I have completed advanced training in leadership, strategic
          innovation and project management. Full detail is in the{" "}
          <a href={person.cv} download className="link">
            CV
          </a>
          .
        </p>
      </Rise>
    </section>
  )
}
