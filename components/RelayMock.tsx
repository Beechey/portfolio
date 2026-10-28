/**
 * A drawn mock-up of the Relay Android TV interface. Every channel and programme
 * name is invented, so no real provider content ever appears on the site.
 * Sizes use container units (cqw) so the whole "screen" scales as one.
 */

const channels = [
  { n: "101", name: "Northfield News", now: "Evening Bulletin", p: 64 },
  { n: "102", name: "Atlas Docs", now: "Deep Ocean", p: 38, focused: true },
  { n: "103", name: "Kestrel Sport", now: "Matchday Live", p: 81 },
  { n: "104", name: "Meridian Movies", now: "The Long Road", p: 22 },
  { n: "105", name: "Lumen Music", now: "Night Sessions", p: 47 },
  { n: "106", name: "Harbour Kids", now: "Paper Planets", p: 70 },
]

const guide = [
  { ch: "Atlas", blocks: [{ t: "Deep Ocean", w: 3, now: true }, { t: "Wild Isles", w: 2 }, { t: "Skyward", w: 2 }] },
  { ch: "Kestrel", blocks: [{ t: "Matchday Live", w: 4, now: true }, { t: "Highlights", w: 3 }] },
  { ch: "Meridian", blocks: [{ t: "The Long Road", w: 5, now: true }, { t: "Late Film", w: 2 }] },
]

export default function RelayMock() {
  return (
    <div
      role="img"
      aria-label="Mock-up of the Relay TV app: a channel list, live preview and TV guide"
      className="absolute inset-0 flex items-center justify-center"
    >
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div
        aria-hidden
        className="@container relative aspect-video h-[84%] overflow-hidden rounded-[1.2cqw] border border-line-strong bg-[#0a0c10] shadow-[0_24px_70px_-18px_rgb(0_0_0/0.95)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
      >
        <div className="flex h-full text-[1.7cqw] leading-tight">
          {/* Navigation rail */}
          <div className="flex w-[7cqw] flex-col items-center gap-[2.2cqw] border-r border-line pt-[2.4cqw]">
            <span className="grid size-[3.4cqw] place-items-center rounded-[0.8cqw] bg-accent font-semibold text-void">
              R
            </span>
            {[true, false, false, false, false].map((active, i) => (
              <span
                key={i}
                className={
                  active
                    ? "size-[2.6cqw] rounded-[0.6cqw] bg-accent/25 ring-1 ring-accent/70"
                    : "size-[2.6cqw] rounded-[0.6cqw] bg-white/10"
                }
              />
            ))}
          </div>

          {/* Channel list */}
          <div className="flex w-[34cqw] flex-col gap-[0.7cqw] border-r border-line p-[1.6cqw]">
            <p className="mb-[0.4cqw] text-[1.3cqw] tracking-wide text-muted uppercase">Live TV · All channels</p>
            {channels.map((c) => (
              <div
                key={c.n}
                className={`flex items-center gap-[1.2cqw] rounded-[0.8cqw] px-[1.2cqw] py-[0.8cqw] ${
                  c.focused ? "bg-white/[0.07] ring-1 ring-accent shadow-[0_0_2cqw_-0.4cqw_rgb(196_245_74/0.5)]" : ""
                }`}
              >
                <span className="w-[3cqw] font-mono text-[1.3cqw] text-faint">{c.n}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-fg">{c.name}</p>
                  <p className="truncate text-[1.3cqw] text-muted">{c.now}</p>
                  <div className="mt-[0.5cqw] h-[0.3cqw] rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-accent/80" style={{ width: `${c.p}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Preview and guide */}
          <div className="flex min-w-0 flex-1 flex-col gap-[1.4cqw] p-[1.6cqw]">
            <div className="relative h-[54%] overflow-hidden rounded-[0.8cqw] bg-[radial-gradient(120%_90%_at_25%_20%,#1d4b5c_0%,#0f2230_45%,#070a10_100%)]">
              <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_80%,rgb(106_168_255/0.35),transparent)]" />
              <span className="absolute top-[1cqw] left-[1cqw] flex items-center gap-[0.5cqw] rounded-[0.5cqw] bg-black/50 px-[0.8cqw] py-[0.3cqw] text-[1.2cqw] font-semibold text-fg">
                <span className="size-[0.8cqw] rounded-full bg-[#ff4d4d]" />
                LIVE
              </span>
              <div className="absolute inset-x-[1cqw] bottom-[1cqw]">
                <p className="text-[2.1cqw] font-semibold text-fg">Deep Ocean</p>
                <p className="text-[1.3cqw] text-fg-soft">Atlas Docs · 21:00 – 22:30</p>
                <div className="mt-[0.7cqw] h-[0.35cqw] rounded-full bg-white/20">
                  <div className="h-full w-[38%] rounded-full bg-accent" />
                </div>
              </div>
            </div>

            <div className="relative flex flex-1 flex-col gap-[0.6cqw]">
              <div className="flex pl-[9cqw] font-mono text-[1.2cqw] text-faint">
                <span className="flex-1">21:00</span>
                <span className="flex-1">21:30</span>
                <span className="flex-1">22:00</span>
              </div>
              {guide.map((row) => (
                <div key={row.ch} className="flex flex-1 items-stretch gap-[0.5cqw]">
                  <span className="flex w-[8.5cqw] items-center text-[1.3cqw] text-muted">{row.ch}</span>
                  {row.blocks.map((b) => (
                    <span
                      key={b.t}
                      style={{ flexGrow: b.w }}
                      className={`flex basis-0 items-center truncate rounded-[0.5cqw] px-[0.8cqw] text-[1.3cqw] ${
                        b.now ? "bg-white/[0.08] text-fg" : "bg-white/[0.03] text-muted"
                      }`}
                    >
                      {b.t}
                    </span>
                  ))}
                </div>
              ))}
              {/* Now line */}
              <span className="absolute top-[1.6cqw] bottom-0 left-[calc(9cqw+28%)] w-[0.25cqw] rounded-full bg-accent shadow-[0_0_1cqw_rgb(196_245_74/0.8)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
