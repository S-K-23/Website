"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

const categoryAccent: Record<Project["category"], string> = {
  Blockchain: "text-accent-3 border-accent-3/30",
  "AI/ML": "text-accent border-accent/30",
  Systems: "text-accent-2 border-accent-2/30",
  Quant: "text-accent border-accent/30",
  iOS: "text-fg border-rule",
  Web: "text-accent-3 border-accent-3/30",
};

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 22 });
  const sy = useSpring(y, { stiffness: 250, damping: 22 });
  const rotateY = useTransform(sx, [-1, 1], [6, -6]);
  const rotateX = useTransform(sy, [-1, 1], [-5, 5]);
  const glowX = useTransform(sx, (v) => `${(v + 1) * 50}%`);
  const glowY = useTransform(sy, (v) => `${(v + 1) * 50}%`);
  const glowBg = useTransform(
    [glowX, glowY] as const,
    ([gx, gy]) =>
      `radial-gradient(380px circle at ${gx} ${gy}, rgba(0,229,255,0.10), transparent 60%)`,
  );

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = ((e.clientX - r.left) / r.width) * 2 - 1;
    const py = ((e.clientY - r.top) / r.height) * 2 - 1;
    x.set(px);
    y.set(py);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noreferrer"
      data-cursor="hover"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      whileHover={{ scale: featured ? 1.005 : 1.01 }}
      className={`group neon-edge relative block rounded-2xl border border-rule bg-bg-elev/50 backdrop-blur-sm overflow-hidden transition-colors hover:border-accent/30 ${
        featured ? "p-8 md:p-10 md:col-span-2 md:row-span-2" : "p-6 md:p-7"
      }`}
    >
      {/* Subtle inner glow that tracks cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: glowBg }}
      />

      <div className="relative z-10 flex flex-col h-full gap-5">
        <header className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-full border ${categoryAccent[project.category]} w-fit`}
            >
              {project.category}
            </span>
            <h3
              className={`font-serif text-fg leading-tight ${
                featured ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
              }`}
            >
              {project.name}
            </h3>
          </div>
          <ArrowUpRight
            size={featured ? 28 : 20}
            className="text-fg-muted group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
          />
        </header>

        <p
          className={`font-serif text-fg/85 leading-snug ${
            featured ? "text-xl md:text-2xl" : "text-lg"
          }`}
        >
          {project.tagline}
        </p>

        {featured && (
          <p className="font-sans text-sm text-fg/70 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-muted border border-rule rounded-full px-2 py-1"
            >
              {s}
            </span>
          ))}
        </div>

        {project.metric && (
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
            {project.metric}
          </div>
        )}
      </div>
    </motion.a>
  );
}
