"use client";

import { motion } from "framer-motion";
import { publications } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import { PublicationCard } from "@/components/PublicationCard";

export function Research() {
  return (
    <section id="research" className="relative py-32 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15%" }}
          variants={stagger(0.08)}
        >
          <motion.div variants={fadeUp} className="flex items-baseline justify-between mb-12">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg-muted">
                <span className="text-accent">02 / </span> research &amp; publications
              </div>
              <h2 className="mt-3 font-serif text-display-md md:text-display-lg leading-none">
                Papers that shipped.
              </h2>
            </div>
            <div className="hidden md:block font-mono text-[11px] text-fg-muted uppercase tracking-[0.2em]">
              {publications.length} entries
            </div>
          </motion.div>

          <div>
            {publications.map((p, i) => (
              <PublicationCard key={p.title} pub={p} idx={i} />
            ))}
            <div className="border-t border-rule" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
