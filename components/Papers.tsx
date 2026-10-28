import { Rise, SectionMark } from "@/components/ui/primitives"
import { papers, person } from "@/lib/content"

export default function Papers() {
  return (
    <section id="papers" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionMark
        n="03"
        kicker="Peer-reviewed"
        title="Two papers on what a model doesn't know"
        note="Both came out of the doctorate at Loughborough, and both rest on the same idea: a classifier that can quantify its own ignorance is more useful than one that is merely confident."
      />

      <ol className="mt-16 space-y-4">
        {papers.map((paper, i) => (
          <Rise as="li" key={paper.href} delay={i * 0.08}>
            <a
              href={paper.href}
              target="_blank"
              rel="noreferrer"
              className="card card-hover group grid gap-5 p-6 sm:p-8 md:grid-cols-[1fr_13rem] md:gap-10"
            >
              <div>
                <p className="font-mono text-xs text-accent">[{i + 1}]</p>
                <h3 className="mt-3 max-w-2xl text-xl tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
                  {paper.title}
                </h3>
                <p className="mt-3 font-mono text-xs text-muted">{paper.authors}</p>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fg-soft">{paper.abstract}</p>
              </div>

              <div className="flex flex-col gap-1 border-t border-line pt-5 md:border-t-0 md:border-l md:pt-0 md:pl-8">
                <p className="font-medium text-fg">{paper.venue}</p>
                <p className="font-mono text-xs text-muted">{paper.detail}</p>
                <p className="font-mono text-xs text-muted">{paper.year}</p>
                <span className="mt-auto pt-4 font-mono text-xs text-faint transition-colors group-hover:text-accent">
                  read paper ↗
                </span>
              </div>
            </a>
          </Rise>
        ))}
      </ol>

      <Rise delay={0.2}>
        <p className="mt-8 text-sm text-muted">
          Thesis: <span className="text-fg">Evidence Theory Based Machine Learning Approaches for Network Security</span>,
          Loughborough University, 2022. Further work on graph neural networks for beyond-5G networking is
          listed on{" "}
          <a href={person.linkedin} target="_blank" rel="noreferrer" className="link">
            LinkedIn
          </a>
          .
        </p>
      </Rise>
    </section>
  )
}
