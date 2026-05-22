"use client";

import { motion } from "framer-motion";
import type { Publication } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

export function PublicationCard({ pub, idx }: { pub: Publication; idx: number }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-rule hover:border-accent/30 transition-colors"
    >
      <div className="md:col-span-1 font-mono text-[11px] text-fg-muted tracking-[0.2em]">
        {String(idx + 1).padStart(2, "0")}
      </div>
      <div className="md:col-span-2 flex flex-col gap-1">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          {pub.year}
        </span>
        <span className="font-mono text-[11px] text-fg-muted">{pub.role}</span>
      </div>
      <div className="md:col-span-9 flex flex-col gap-3">
        <h3 className="font-serif text-2xl md:text-3xl leading-snug text-fg group-hover:text-accent transition-colors">
          {pub.title}
        </h3>
        <p className="font-mono text-xs text-fg-muted uppercase tracking-[0.15em]">
          {pub.venue}
        </p>
        <p className="font-mono text-xs text-fg-muted leading-relaxed">
          {pub.authors}
        </p>
        <p className="font-sans text-base text-fg/80 leading-relaxed mt-1">
          {pub.contribution}
        </p>
      </div>
    </motion.article>
  );
}
