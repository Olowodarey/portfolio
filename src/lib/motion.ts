import type { Variants } from "framer-motion";

/** Shared viewport config: trigger once, when ~20% of the element is visible. */
export const viewportOnce = { once: true, amount: 0.2 } as const;

/** Headings: fade in while sliding down from above. */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/** Paragraphs: fade in with a slight upward motion. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/** Images: slide in from the left. */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/** Images: slide in from the right. */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/** Pick left/right alternating variant by index — for image grids. */
export function alternateSlide(index: number): Variants {
  return index % 2 === 0 ? slideInLeft : slideInRight;
}

/** Buttons: fade in with a slight scale pop. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/** Parent wrapper for staggered children (cards, chips, grids). */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

/** Cards: slide up from the bottom — used as a staggered child. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
