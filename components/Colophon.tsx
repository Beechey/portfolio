import { nav, person } from "@/lib/content"

export default function Colophon() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-mono text-sm text-fg">
            <span className="text-accent">~/</span>beechey
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            {person.roleLine}. {person.location}.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
          {nav.map((item) => (
            <a key={item.hash} href={item.hash} className="text-muted hover:text-fg">
              {item.label.toLowerCase()}
            </a>
          ))}
          {[
            { label: "github", href: person.github },
            { label: "linkedin", href: person.linkedin },
            { label: "cv", href: person.cv },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-muted hover:text-accent"
            >
              {l.label} ↗
            </a>
          ))}
        </nav>
      </div>
      <div className="shell flex flex-col gap-2 border-t border-line py-5 font-mono text-[0.6875rem] text-faint sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {person.name}</p>
        <p>built with next.js · set in geist</p>
      </div>
    </footer>
  )
}
