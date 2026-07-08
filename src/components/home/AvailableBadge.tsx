"use client";

/**
 * AvailableBadge
 *
 * Animated "Available for work" status badge.
 *
 * Animation loop (total ≈ 5.2 s per cycle):
 *   0.0 s – 0.6 s  →  slide in from left + fade in
 *   0.6 s – 3.6 s  →  hold visible (~3 s)
 *   3.6 s – 4.2 s  →  slide out to right + fade out
 *   4.2 s – 5.2 s  →  off-screen pause (1 s)
 *   5.2 s           →  loop
 *
 * The badge sits in a fixed-height clipping wrapper so it never
 * overlaps surrounding elements (no h-0 / overflow-visible trick).
 *
 * Respects prefers-reduced-motion: animation disabled for users who
 * prefer reduced motion — badge shown statically instead.
 */

import { motion, useReducedMotion } from "framer-motion";

// ─── Timeline constants ───────────────────────────────────────────────────────

const SLIDE = 0.6; // enter / exit duration (s)
const HOLD = 3.0; // visible hold (s)
const PAUSE = 1.0; // off-screen pause (s)
const TOTAL = SLIDE + HOLD + SLIDE + PAUSE; // 5.2 s

function buildKeyframes() {
  const t0 = 0;
  const t1 = SLIDE / TOTAL;
  const t2 = (SLIDE + HOLD) / TOTAL;
  const t3 = (SLIDE + HOLD + SLIDE) / TOTAL;
  const t4 = 1;

  return {
    times: [t0, t1, t2, t3, t4] as [number, number, number, number, number],
    x: ["-110%", "0%", "0%", "110%", "110%"],
    opacity: [0, 1, 1, 0, 0],
    boxShadow: [
      "0 0 0px rgba(16,185,129,0)",
      "0 0 16px rgba(16,185,129,0.35)",
      "0 0 16px rgba(16,185,129,0.35)",
      "0 0 0px rgba(16,185,129,0)",
      "0 0 0px rgba(16,185,129,0)",
    ],
  };
}

// ─── Component ───────────────────────────────────────────────────────────────

export function AvailableBadge() {
  const prefersReduced = useReducedMotion();
  const kf = buildKeyframes();

  // Reduced-motion: static badge, no animation
  if (prefersReduced) {
    return (
      <div
        className="mt-6 flex items-center justify-center gap-2.5 rounded-xl border border-border bg-foreground/5 px-4 py-3"
        style={{ boxShadow: "0 0 12px rgba(16,185,129,0.2)" }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-xs font-medium text-foreground">
          Available for work
        </span>
      </div>
    );
  }

  return (
    /*
     * Clipping wrapper: overflow-hidden keeps the sliding badge inside the
     * sidebar column so it never bleeds over adjacent elements.
     * The fixed padding-top reserves the badge's height so siblings aren't
     * displaced while the badge is off-screen.
     */
    <div className="mt-6 overflow-hidden rounded-xl">
      <motion.div
        initial={{
          x: "-110%",
          opacity: 0,
          boxShadow: "0 0 0px rgba(16,185,129,0)",
        }}
        animate={{
          x: kf.x,
          opacity: kf.opacity,
          boxShadow: kf.boxShadow,
        }}
        transition={{
          duration: TOTAL,
          times: kf.times,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0,
        }}
        className="flex items-center justify-center gap-2.5 rounded-xl border border-border bg-foreground/5 px-4 py-3"
        style={{ willChange: "transform, opacity, box-shadow" }}
      >
        {/* Independently pulsing green dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>

        <span className="text-xs font-medium text-foreground">
          Available for work
        </span>
      </motion.div>
    </div>
  );
}
