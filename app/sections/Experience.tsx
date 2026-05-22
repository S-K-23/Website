"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import { TimelineItem } from "@/components/TimelineItem";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15%" }}
          variants={stagger(0.06)}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg-muted">
              <span className="text-accent">03 / </span> experience
            </div>
            <h2 className="mt-3 font-serif text-display-md md:text-display-lg leading-none">
              Labs, startups,
              <br />
              <span className="text-fg-muted italic">side quests.</span>
            </h2>
          </motion.div>

          <motion.div variants={stagger(0.1)} className="relative">
            {experience.map((item, i) => (
              <TimelineItem
                key={item.org}
                item={item}
                idx={i}
                total={experience.length}
              />
            ))}
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeUp} className="mt-20 pt-12 border-t border-rule">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg-muted mb-6">
              <span className="text-accent">▸ </span> education
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((e) => (
                <div
                  key={e.school}
                  className="rounded-xl border border-rule bg-bg-elev/40 p-6 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl text-fg">{e.school}</h3>
                  </div>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {e.degree}
                  </p>
                  <p className="mt-3 font-sans text-sm text-fg/80 leading-relaxed">
                    {e.detail}
                  </p>
                  <p className="mt-4 font-mono text-[11px] text-fg-muted uppercase tracking-[0.15em]">
                    {e.start} → {e.end} · {e.location}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
