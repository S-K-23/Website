"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Experience } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

export function TimelineItem({
  item,
  idx,
  total,
}: {
  item: Experience;
  idx: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const dotScale = useTransform(scrollYProgress, [0, 0.4], [0.4, 1]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.4], [0.3, 1]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      style={{ position: "relative" }}
      className="grid grid-cols-[24px_1fr] md:grid-cols-[180px_24px_1fr] gap-4 md:gap-8 pb-16"
    >
      {/* Date column (md+) */}
      <div className="hidden md:flex flex-col items-end pt-1">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          {item.start}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
          → {item.end}
        </span>
        <span className="mt-2 font-mono text-[10px] text-fg-muted">
          {item.location}
        </span>
      </div>

      {/* Beam + dot column */}
      <div className="relative flex items-start justify-center">
        {/* Vertical beam */}
        {idx < total - 1 && (
          <div
            aria-hidden
            className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-[calc(100%+4rem)] bg-gradient-to-b from-accent/40 via-rule to-rule"
          />
        )}
        <motion.div
          style={{ scale: dotScale, opacity: dotOpacity }}
          className="relative z-10 mt-1 w-3 h-3 rounded-full bg-accent shadow-[0_0_18px_rgba(0,229,255,0.7)]"
        />
      </div>

      {/* Body column */}
      <div className="flex flex-col gap-3">
        {/* Mobile date row */}
        <div className="md:hidden font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
          <span className="text-accent">{item.start}</span> → {item.end} ·{" "}
          {item.location}
        </div>

        <h3 className="font-serif text-2xl md:text-3xl text-fg leading-tight">
          {item.org}
        </h3>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
          {item.role}
        </div>

        <ul className="mt-2 flex flex-col gap-2">
          {item.bullets.map((b, i) => (
            <li
              key={i}
              className="font-sans text-base text-fg/85 leading-relaxed pl-4 relative"
            >
              <span className="absolute left-0 top-[0.7em] w-2 h-px bg-fg-muted" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-3 flex flex-wrap gap-2">
          {item.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-rule bg-bg-elev/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-fg-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
