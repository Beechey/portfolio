/**
 * A drawn mock-up of Seam: the Mac menu bar dropdown and the Android app, with a
 * clipboard item crossing between them. Shows only what is built today (pairing,
 * encryption, clipboard). Sizes use container units (cqw) so the scene scales as one.
 */

const CLIP = "Meeting moved to 3pm, room 2B"

function Lock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="2" y="5.5" width="8" height="5.5" rx="1.2" />
      <path d="M4 5.5V4a2 2 0 0 1 4 0v1.5" />
    </svg>
  )
}

export default function SeamMock() {
  return (
    <div
      role="img"
      aria-label="Mock-up of Seam: a Mac menu bar panel and an Android phone sharing a clipboard item over an encrypted link"
      className="absolute inset-0 flex items-center justify-center"
    >
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div
        aria-hidden
        className="@container relative aspect-video h-[86%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
      >
        {/* Font size lives inside the container so cqw resolves against it */}
        <div className="absolute inset-0 text-[1.6cqw] leading-tight">
        {/* Mac screen */}
        <div className="absolute top-[3cqw] left-[1cqw] h-[46cqw] w-[60cqw] overflow-hidden rounded-[1.2cqw] border border-line-strong bg-[radial-gradient(110%_90%_at_20%_10%,#1c3a4a_0%,#0e1a26_50%,#07090d_100%)] shadow-[0_24px_70px_-18px_rgb(0_0_0/0.95)]">
          {/* Menu bar */}
          <div className="flex h-[3cqw] items-center gap-[2cqw] bg-black/45 px-[1.6cqw] text-[1.25cqw] text-fg-soft">
            <span className="size-[1.3cqw] rounded-full bg-fg-soft/80" />
            <span className="font-semibold text-fg">Finder</span>
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span className="ml-auto grid size-[2cqw] place-items-center rounded-[0.4cqw] bg-accent/25 text-accent ring-1 ring-accent/60">
              <span className="h-[0.25cqw] w-[1.1cqw] rounded-full bg-accent" />
            </span>
            <span>Thu 14:02</span>
          </div>

          {/* Seam dropdown */}
          <div className="absolute top-[3.6cqw] right-[5cqw] w-[27cqw] rounded-[1cqw] border border-white/10 bg-[#15181e]/95 p-[1.4cqw] shadow-[0_16px_40px_-10px_rgb(0_0_0/0.9)] backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-fg">Seam</span>
              <span className="flex items-center gap-[0.5cqw] text-[1.2cqw] text-accent">
                <Lock className="size-[1.3cqw]" /> encrypted
              </span>
            </div>
            <div className="mt-[1cqw] flex items-center gap-[0.8cqw] rounded-[0.7cqw] bg-white/[0.04] px-[1cqw] py-[0.8cqw]">
              <span className="size-[0.9cqw] rounded-full bg-[#28c840]" />
              <div>
                <p className="text-fg">Galaxy S25 Ultra</p>
                <p className="text-[1.2cqw] text-muted">Paired · same Wi-Fi</p>
              </div>
            </div>
            <p className="mt-[1.2cqw] text-[1.15cqw] tracking-wide text-muted uppercase">Clipboard</p>
            <div className="mt-[0.6cqw] rounded-[0.7cqw] px-[1cqw] py-[0.8cqw] ring-1 ring-accent shadow-[0_0_2cqw_-0.4cqw_rgb(196_245_74/0.5)]">
              <p className="truncate text-fg">{CLIP}</p>
              <p className="mt-[0.3cqw] text-[1.2cqw] text-accent">From phone · just now</p>
            </div>
            <div className="mt-[0.6cqw] rounded-[0.7cqw] px-[1cqw] py-[0.8cqw] text-muted">
              <p className="truncate">github.com/aveterosystems/seam</p>
              <p className="mt-[0.3cqw] text-[1.2cqw] text-faint">From Mac · 2 min ago</p>
            </div>
          </div>
        </div>
        {/* Mac base */}
        <div className="absolute top-[49cqw] left-[-1cqw] h-[1.4cqw] w-[64cqw] rounded-b-[1cqw] bg-gradient-to-b from-[#2a2e35] to-[#15181d]" />

        {/* Encrypted link */}
        <div className="absolute top-[26cqw] left-[62cqw] w-[13cqw] border-t-[0.25cqw] border-dashed border-accent/70" />
        <span className="absolute top-[24.4cqw] left-[64.2cqw] flex items-center gap-[0.4cqw] rounded-full border border-accent/50 bg-void px-[0.9cqw] py-[0.3cqw] text-[1.15cqw] text-accent">
          <Lock className="size-[1.2cqw]" /> sealed
        </span>

        {/* Phone */}
        <div className="absolute top-[1cqw] left-[76cqw] h-[49cqw] w-[23cqw] overflow-hidden rounded-[2.6cqw] border-[0.5cqw] border-[#22262d] bg-[#0b0d11] shadow-[0_24px_70px_-18px_rgb(0_0_0/0.95)]">
          <div className="flex items-center justify-between px-[1.6cqw] pt-[1.2cqw] text-[1.1cqw] text-fg-soft">
            <span>14:02</span>
            <span className="size-[1cqw] rounded-full bg-black ring-1 ring-white/10" />
            <span className="h-[0.9cqw] w-[2cqw] rounded-[0.2cqw] border border-fg-soft/70" />
          </div>
          <div className="px-[1.6cqw] pt-[2cqw]">
            <p className="text-[2.2cqw] font-semibold text-fg">Seam</p>
            <p className="mt-[0.3cqw] flex items-center gap-[0.5cqw] text-[1.2cqw] text-muted">
              <span className="size-[0.8cqw] rounded-full bg-[#28c840]" /> Paired with MacBook Pro
            </p>

            <div className="mt-[2cqw] flex items-center justify-between rounded-[1.2cqw] bg-white/[0.05] px-[1.3cqw] py-[1.2cqw]">
              <span className="text-fg">Clipboard sync</span>
              <span className="flex h-[1.9cqw] w-[3.4cqw] items-center justify-end rounded-full bg-accent px-[0.3cqw]">
                <span className="size-[1.4cqw] rounded-full bg-void" />
              </span>
            </div>

            <div className="mt-[1.2cqw] rounded-[1.2cqw] bg-white/[0.05] px-[1.3cqw] py-[1.2cqw]">
              <p className="text-[1.15cqw] text-muted uppercase">Copied</p>
              <p className="mt-[0.5cqw] text-fg">{CLIP}</p>
              <p className="mt-[0.6cqw] flex items-center gap-[0.5cqw] text-[1.2cqw] text-accent">
                <Lock className="size-[1.2cqw]" /> Sent to Mac
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
