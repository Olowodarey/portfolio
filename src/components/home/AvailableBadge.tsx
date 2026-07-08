"use client";

/**
 * AvailableBadge
 *
 * Animated "Available for work" status badge.
 *
 * Animation loop (total ≈ 7.2 s per cycle):
 *   0.0 s – 0.6 s  →  slide in from left + fade in
 *   0.6 s – 3.6 s  →  hold (visible for ~3 s)
 *   3.6 s – 4.2 s  →  slide out to right + fade out
 *   4.2 s – 5.2 s  →  off-screen pause (1 s)
 *   5.2 s           →  loop
 *
 * The badge sits in a zero-height overflow-visible wrapper so it never
 * displaces surrounding elements.
 *
 * Respects prefers-reduced-motion: animation is disabled for users who
 * prefer reduced motion (badge is shown statically instead).
 */

import { motion, useReducedMotion } from "framer-motion";

// ─── Framer Motion keyframes ─────────────────────────────────────────────────

const SLIDE_DURATION = 0.6; // seconds for enter / exit slide
const HOLD_DURATION = 3.0; // seconds badge stays visible
const PAUSE_DURATION = 1.0; // seconds off-screen before next loop

const TOTAL = SLIDE_DURATION + HOLD_DURATION + SLIDE_DURATION + PAUSE_DURATION;
// ≈ 5.2 s per cycle

/**
 * Build a multi-keyframe timeline as framer-motion arrays.
 * Each array has 5 entries matching the 5 waypoints:
 *   [start-offscreen, fully-visible, still-visible, exited-offscreen, still-offscreen]
 */
function buildKeyframes() {
  const t0 = 0;
  const t1 = SLIDE_DURATION / TOTAL; // ~0.115
  const t2 = (SLIDE_DURATION + HOLD_DURATION) / TOTAL; // ~0.692
  const t3 = (SLIDE_DURATION + HOLD_DURATION + SLIDE_DURATION) / TOTAL; // ~0.808
  const t4 = 1;

  return {
    times: [t0, t1, t2, t3, t4] as [number, number, number, number, number],
    x: ["-120%", "0%", "0%", "120%", "120%"],
    opacity: [0, 1, 1, 0, 0],
    // glow is handled by boxShadow on the same element
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

  // ── Reduced-motion: render badge statically with a subtle static glow ──
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

  // ── Full animation ─────────────────────────────────────────────────────────
  return (
    /*
     * Zero-height container: overflow-visible so the badge can travel outside
     * its natural flow position without pushing siblings.
     */
    <div className="relative mt-6 h-0 overflow-visible">
      <motion.div
        // Slide + fade + glow loop
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
        // Badge is off-screen at mount — initial matches first keyframe value
        initial={{
          x: "-120%",
          opacity: 0,
          boxShadow: "0 0 0px rgba(16,185,129,0)",
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
