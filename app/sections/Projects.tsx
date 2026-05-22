"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectTable } from "@/components/ProjectTable";

// Curated set that renders as cards; everything else lives only in the table.
const CARD_SLUGS = new Set([
  "realestate-ai",
  "quanta",
  "receipt-ocr",
  "mvo",
  "calowrie",
]);

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured && CARD_SLUGS.has(p.slug));

  return (
    <section id="projects" className="relative py-32 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15%" }}
          variants={stagger(0.08)}
        >
          <motion.div variants={fadeUp} className="flex items-end justify-between mb-12 gap-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg-muted">
                <span className="text-accent">04 / </span> selected work
              </div>
              <h2 className="mt-3 font-serif text-display-md md:text-display-lg leading-none">
                Built, shipped,
                <br />
                <span className="text-fg-muted italic">on-chain &amp; otherwise.</span>
              </h2>
            </div>
            <a
              href="https://github.com/S-K-23?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted hover:text-accent transition-colors"
              data-cursor="hover"
            >
              all repos ↗
            </a>
          </motion.div>

          {/* Featured projects (3 large) */}
          <motion.div variants={stagger(0.08)} className="grid md:grid-cols-3 gap-5 mb-5">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} featured />
            ))}
          </motion.div>

          {/* Rest of the work */}
          <motion.div variants={stagger(0.06)} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </motion.div>

          {/* Complete catalog table */}
          <motion.div variants={fadeUp}>
            <ProjectTable />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
