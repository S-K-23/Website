"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 38, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 38, mass: 0.4 });

  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const last = useRef({ t: 0 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) {
      setEnabled(false);
      return;
    }

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      last.current.t = performance.now();
    };

    const interactiveSel =
      "a, button, [role='button'], input, textarea, [data-cursor='hover']";

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest(interactiveSel);
      setHovering(!!el);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[200] pointer-events-none mix-blend-difference"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          animate={{
            width: hovering ? 44 : 8,
            height: hovering ? 44 : 8,
            borderRadius: 999,
            x: hovering ? -22 : -4,
            y: hovering ? -22 : -4,
            borderWidth: hovering ? 1 : 0,
            backgroundColor: hovering ? "transparent" : "#fff",
          }}
          transition={{ type: "spring", stiffness: 480, damping: 30 }}
          className="border border-white"
        />
      </motion.div>
      {/* Trailing crosshair tick (subtle) */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[199] pointer-events-none"
        style={{ x, y }}
      >
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-[1px] h-3 bg-accent/40"
          style={{ left: 0, top: 14 }}
        />
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-[1px] bg-accent/40"
          style={{ left: 14, top: 0 }}
        />
      </motion.div>
    </>
  );
}
