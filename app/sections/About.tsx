"use client";

import { motion } from "framer-motion";
import { manifesto, stats } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15%" }}
          variants={stagger(0.1)}
          className="grid md:grid-cols-12 gap-x-10 gap-y-12"
        >
          {/* Section label */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-3 md:sticky md:top-32 self-start"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg-muted">
              <span className="text-accent">01 / </span> manifesto
            </div>
            <div className="rule mt-4" />
            <p className="mt-4 font-mono text-xs text-fg-muted leading-relaxed">
              A short read of how I think about the work.
            </p>
          </motion.div>

          {/* Body */}
          <div className="md:col-span-9 flex flex-col gap-10">
            {manifesto.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="font-serif text-2xl md:text-[28px] leading-snug text-fg/90"
              >
                {p}
              </motion.p>
            ))}

            <motion.blockquote
              variants={fadeUp}
              className="relative pl-6 border-l-2 border-accent text-fg italic font-serif text-3xl md:text-4xl leading-tight"
            >
              <span className="absolute -left-1 -top-2 text-accent text-5xl select-none leading-none">
                “
              </span>
              {manifesto.pullQuote}
            </motion.blockquote>

            {/* Stat strip */}
            <motion.div
              variants={fadeUp}
              className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group relative rounded-xl border border-rule p-5 bg-bg-elev/40 backdrop-blur-sm hover:border-accent/40 transition-colors"
                >
                  <div className="font-serif text-4xl md:text-5xl text-fg leading-none">
                    {s.value}
                  </div>
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    {s.label}
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-fg-muted">
                    {s.caption}
                  </div>
                  <div
                    aria-hidden
                    className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
