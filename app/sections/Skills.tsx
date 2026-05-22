"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import { TerminalBlock } from "@/components/TerminalBlock";

function SkillRow({ label, level }: { label: string; level: number }) {
  const pct = (level / 5) * 100;
  return (
    <motion.div
      variants={fadeUp}
      className="grid grid-cols-[1fr_auto] items-center gap-3 py-2"
    >
      <div className="flex items-center gap-3 min-w-0">
        <span className="font-mono text-xs text-fg-muted shrink-0">▹</span>
        <span className="font-mono text-sm text-fg truncate">{label}</span>
      </div>
      <div className="relative w-28 md:w-36 h-[3px] bg-rule rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="h-full bg-gradient-to-r from-accent to-accent-3 shadow-[0_0_12px_rgba(0,229,255,0.6)]"
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15%" }}
          variants={stagger(0.08)}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg-muted">
              <span className="text-accent">05 / </span> stack
            </div>
            <h2 className="mt-3 font-serif text-display-md md:text-display-lg leading-none">
              The toolbox.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {skillGroups.map((g) => (
              <motion.div key={g.title} variants={fadeUp}>
                <TerminalBlock title={`sohum@purdue:~ $ cat ${g.title.toLowerCase().replace(/\s+/g, "_")}.txt`}>
                  <motion.div variants={stagger(0.04)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    {g.items.map((it) => (
                      <SkillRow key={it.label} label={it.label} level={it.level} />
                    ))}
                  </motion.div>
                </TerminalBlock>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
