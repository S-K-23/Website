"use client";

import { motion } from "framer-motion";

export function GlitchText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <motion.span
      whileHover="glitch"
      initial="idle"
      animate="idle"
      className={`relative inline-block ${className ?? ""}`}
      aria-label={children}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        aria-hidden
        variants={{
          idle: { x: 0, opacity: 0 },
          glitch: {
            x: [-2, 2, -1, 1, 0],
            opacity: [0, 0.85, 0.7, 0.85, 0],
          },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 text-accent mix-blend-screen pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)" }}
      >
        {children}
      </motion.span>
      <motion.span
        aria-hidden
        variants={{
          idle: { x: 0, opacity: 0 },
          glitch: {
            x: [2, -2, 1, -1, 0],
            opacity: [0, 0.7, 0.85, 0.7, 0],
          },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 text-accent-3 mix-blend-screen pointer-events-none"
        style={{ clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)" }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
