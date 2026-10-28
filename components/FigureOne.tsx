"use client"

import { motion, useReducedMotion } from "motion/react"
import { useMemo } from "react"

const W = 560
const H = 400
const PAD = 34

/** Deterministic PRNG, so the sample never reshuffles between renders. */
function mulberry(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Pt = { x: number; y: number; cls: 0 | 1; amb: boolean }

/**
 * Figure 1 — a two-class sample with a decision boundary and, either side of it,
 * the band where the classifier declines to commit. That band is the whole point
 * of the thesis this site belongs to: the region a confident model would guess in
 * and an evidential one flags instead.
 */
export default function FigureOne() {
  const reduced = useReducedMotion()

  const { points, boundary, upper, lower } = useMemo(() => {
    const rand = mulberry(19940909)
    const sx = (v: number) => PAD + v * (W - PAD * 2)
    const sy = (v: number) => H - PAD - v * (H - PAD * 2)

    // The boundary is a gentle sigmoid across the plate.
    const fx = (t: number) => 0.5 + 0.26 * Math.tanh((t - 0.5) * 5.2)
    const band = 0.085

    const pts: Pt[] = []
    for (let i = 0; i < 150; i++) {
      const x = rand()
      const y = rand()
      const edge = fx(x)
      const d = y - edge
      const amb = Math.abs(d) < band
      pts.push({ x: sx(x), y: sy(y), cls: d > 0 ? 1 : 0, amb })
    }

    const path = (offset: number) => {
      const steps = 60
      let d = ""
      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        const px = sx(t)
        const py = sy(Math.min(1, Math.max(0, fx(t) + offset)))
        d += `${i === 0 ? "M" : "L"}${px.toFixed(1)},${py.toFixed(1)}`
      }
      return d
    }

    return {
      points: pts,
      boundary: path(0),
      upper: path(band),
      lower: path(-band),
    }
  }, [])

  return (
    <figure className="w-full">
      <div className="relative bg-panel">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="block h-auto w-full"
          role="img"
          aria-label="Scatter plot of two classes separated by a decision boundary, with a shaded band of ambiguous samples either side"
        >
          <title>Decision boundary with an uncertainty band</title>

          {/* Plate frame and graticule */}
          <g stroke="rgb(255 255 255 / 0.06)" strokeWidth="1">
            {Array.from({ length: 7 }, (_, i) => {
              const x = PAD + (i * (W - PAD * 2)) / 6
              return <line key={`v${i}`} x1={x} y1={PAD} x2={x} y2={H - PAD} />
            })}
            {Array.from({ length: 5 }, (_, i) => {
              const y = PAD + (i * (H - PAD * 2)) / 4
              return <line key={`h${i}`} x1={PAD} y1={y} x2={W - PAD} y2={y} />
            })}
          </g>
          <rect
            x={PAD}
            y={PAD}
            width={W - PAD * 2}
            height={H - PAD * 2}
            fill="none"
            stroke="rgb(255 255 255 / 0.14)"
            strokeWidth="1"
          />

          {/* The band of refusal, hatched rather than filled */}
          <defs>
            <pattern id="hatch" width="7" height="7" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="7" stroke="#c4f54a" strokeWidth="1" opacity="0.34" />
            </pattern>
            <clipPath id="plate">
              <rect x={PAD} y={PAD} width={W - PAD * 2} height={H - PAD * 2} />
            </clipPath>
          </defs>

          <g clipPath="url(#plate)">
            {/* Hatch everything under the upper edge, then paint the region under
                the lower edge back to the panel colour — what survives is the band itself. */}
            <motion.g
              initial={reduced ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 1 }}
            >
              <path d={`${upper} L${W - PAD},${H - PAD} L${PAD},${H - PAD} Z`} fill="url(#hatch)" />
              <path
                d={`${lower} L${W - PAD},${H - PAD} L${PAD},${H - PAD} Z`}
                fill="var(--color-panel)"
              />
            </motion.g>

            {/* Samples */}
            {points.map((p, i) => (
              <motion.g
                key={`${p.x}-${p.y}`}
                initial={reduced ? undefined : { opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.35 + (i % 30) * 0.012,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: `${p.x}px ${p.y}px` }}
              >
                {p.cls === 1 ? (
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={p.amb ? 3.4 : 2.6}
                    fill={p.amb ? "#c4f54a" : "none"}
                    stroke={p.amb ? "#c4f54a" : "#6aa8ff"}
                    strokeWidth="1.2"
                    opacity={p.amb ? 1 : 0.75}
                  />
                ) : (
                  <path
                    d={`M${p.x - 2.6},${p.y - 2.6}L${p.x + 2.6},${p.y + 2.6}M${p.x + 2.6},${p.y - 2.6}L${p.x - 2.6},${p.y + 2.6}`}
                    stroke={p.amb ? "#c4f54a" : "#7d8592"}
                    strokeWidth={p.amb ? "1.8" : "1.2"}
                    opacity={p.amb ? 1 : 0.7}
                  />
                )}
              </motion.g>
            ))}

            {/* Band edges, dashed */}
            {[upper, lower].map((d, i) => (
              <motion.path
                key={`edge-${i}`}
                d={d}
                fill="none"
                stroke="#c4f54a"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.6"
                initial={reduced ? undefined : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.9, duration: 1.2, ease: "easeInOut" }}
              />
            ))}

            {/* The boundary itself, drawn last and drawn in */}
            <motion.path
              d={boundary}
              fill="none"
              stroke="#f2f4f7"
              strokeWidth="1.8"
              initial={reduced ? undefined : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </g>

          {/* Axis annotations, set like a journal plate */}
          <text x={PAD} y={PAD - 12} className="fill-muted" fontSize="10" fontFamily="var(--font-mono)">
            P(class)
          </text>
          <text
            x={W - PAD}
            y={H - PAD + 20}
            textAnchor="end"
            className="fill-muted"
            fontSize="10"
            fontFamily="var(--font-mono)"
          >
            feature xᵢ
          </text>
        </svg>

        {/* Key */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line px-4 py-3">
          {[
            { mark: "circle", colour: "#6aa8ff", filled: false, text: "class A" },
            { mark: "cross", colour: "#7d8592", filled: false, text: "class B" },
            {
              mark: "circle",
              colour: "#c4f54a",
              filled: true,
              text: "declined — uncertainty exceeds threshold",
            },
          ].map((k) => (
            <span
              key={k.text}
              className="flex items-center gap-2 font-mono text-[0.625rem] text-muted"
            >
              <svg width="10" height="10" aria-hidden>
                {k.mark === "circle" ? (
                  <circle
                    cx="5"
                    cy="5"
                    r="3.4"
                    fill={k.filled ? k.colour : "none"}
                    stroke={k.colour}
                    strokeWidth="1.3"
                  />
                ) : (
                  <path d="M1.5,1.5L8.5,8.5M8.5,1.5L1.5,8.5" stroke={k.colour} strokeWidth="1.3" />
                )}
              </svg>
              {k.text}
            </span>
          ))}
        </div>
      </div>
    </figure>
  )
}
