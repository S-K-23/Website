"use client";

import { motion } from "framer-motion";
import { GlitchText } from "@/components/GlitchText";
import { profile } from "@/lib/data";
import { ease, fadeUp, stagger } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden flex items-center scanlines"
    >
      {/* Subtle radial vignette to ground the hero copy over the global matrix */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 30% 50%, rgba(0,229,255,0.04), transparent 70%), radial-gradient(ellipse 50% 50% at 80% 60%, rgba(255,61,203,0.03), transparent 70%)",
        }}
      />

      {/* Soft bottom gradient so the hero blends into the next section */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg))",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-10 pt-32 pb-24">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-8"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-fg-muted"
          >
            <span className="h-px w-8 bg-accent" />
            <span>portfolio · v2026.05</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-display-xl leading-[0.95] tracking-tight"
          >
            <GlitchText>Sohum</GlitchText>{" "}
            <GlitchText>Kashyap.</GlitchText>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="font-mono text-sm md:text-base text-fg-muted max-w-2xl tracking-wide"
          >
            <span className="text-accent">{">"}</span> {profile.tagline}
          </motion.p>

          {/* Body line */}
          <motion.p
            variants={fadeUp}
            className="font-serif text-2xl md:text-3xl text-fg/90 max-w-3xl leading-snug"
          >
            Building agentic systems and ML infrastructure for science —
            <span className="text-accent"> from RNA structure prediction</span> to
            <span className="text-accent-3"> on-chain prediction markets.</span>
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/5 px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-accent hover:bg-accent/15 transition-colors"
              data-cursor="hover"
            >
              <span>explore work</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-rule px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-fg-muted hover:text-fg hover:border-fg/30 transition-colors"
              data-cursor="hover"
            >
              github ↗
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-rule px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-fg-muted hover:text-fg hover:border-fg/30 transition-colors"
              data-cursor="hover"
            >
              linkedin ↗
            </a>
          </motion.div>
        </motion.div>

        {/* Floating meta block bottom-right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease }}
          className="hidden md:flex absolute bottom-12 right-6 md:right-10 items-end gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted"
        >
          <div className="flex flex-col gap-1">
            <span className="text-accent">◢ location</span>
            <span className="text-fg">West Lafayette, IN</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-accent">◢ status</span>
            <span className="text-fg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-2 animate-pulse-soft" />
              available for sw &amp; research roles
            </span>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-fg-muted"
        >
          <span>scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
