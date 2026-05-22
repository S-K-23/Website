"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import {
  projects as allProjects,
  categoryOrder,
  type Project,
  type ProjectCategory,
} from "@/lib/data";

type SortCol = "name" | "year" | "category";
type SortDir = "asc" | "desc";

const categoryAccent: Record<ProjectCategory, string> = {
  Blockchain: "text-accent-3",
  "AI/ML": "text-accent",
  Systems: "text-accent-2",
  Quant: "text-accent",
  iOS: "text-fg",
  Web: "text-accent-3",
};

export function ProjectTable() {
  const [sortCol, setSortCol] = useState<SortCol>("year");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  function toggleSort(col: SortCol) {
    if (sortCol === col) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortCol(col);
      setSortDir(col === "year" ? "desc" : "asc");
    }
  }

  // Group by category, sort within each group.
  const groups = useMemo(() => {
    const byCat = new Map<ProjectCategory, Project[]>();
    for (const p of allProjects) {
      const arr = byCat.get(p.category) ?? [];
      arr.push(p);
      byCat.set(p.category, arr);
    }

    const cmp = (a: Project, b: Project) => {
      let v = 0;
      if (sortCol === "name") v = a.name.localeCompare(b.name);
      else if (sortCol === "year") v = a.year - b.year;
      else if (sortCol === "category") v = a.category.localeCompare(b.category);
      return sortDir === "asc" ? v : -v;
    };

    return categoryOrder
      .map((cat) => ({
        cat,
        items: (byCat.get(cat) ?? []).slice().sort(cmp),
      }))
      .filter((g) => g.items.length > 0);
  }, [sortCol, sortDir]);

  const total = allProjects.length;

  return (
    <div className="mt-16">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg-muted">
            <span className="text-accent">▸ </span> complete catalog
          </div>
          <h3 className="mt-2 font-serif text-3xl md:text-4xl text-fg leading-tight">
            All projects, grouped by type.
          </h3>
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
          {total} repos · sorted by{" "}
          <button
            onClick={() => toggleSort(sortCol)}
            className="text-accent hover:text-fg transition-colors"
            data-cursor="hover"
          >
            {sortCol} {sortDir === "asc" ? "↑" : "↓"}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-rule bg-bg-elev/40 backdrop-blur-sm overflow-hidden">
        {/* Header row */}
        <div className="hidden md:grid grid-cols-[1.6fr_2.2fr_0.8fr_0.6fr_0.3fr] gap-4 px-6 py-3 border-b border-rule bg-black/30 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
          <SortHeader
            label="name"
            col="name"
            sortCol={sortCol}
            sortDir={sortDir}
            onClick={toggleSort}
          />
          <span>stack</span>
          <SortHeader
            label="type"
            col="category"
            sortCol={sortCol}
            sortDir={sortDir}
            onClick={toggleSort}
          />
          <SortHeader
            label="year"
            col="year"
            sortCol={sortCol}
            sortDir={sortDir}
            onClick={toggleSort}
          />
          <span className="text-right">↗</span>
        </div>

        {/* Body — grouped */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={`${sortCol}-${sortDir}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {groups.map((g) => (
              <div key={g.cat}>
                <GroupHeader category={g.cat} count={g.items.length} />
                {g.items.map((p) => (
                  <Row key={p.slug} project={p} />
                ))}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function SortHeader({
  label,
  col,
  sortCol,
  sortDir,
  onClick,
}: {
  label: string;
  col: SortCol;
  sortCol: SortCol;
  sortDir: SortDir;
  onClick: (c: SortCol) => void;
}) {
  const active = sortCol === col;
  return (
    <button
      onClick={() => onClick(col)}
      data-cursor="hover"
      className={`flex items-center gap-1.5 text-left transition-colors ${
        active ? "text-accent" : "text-fg-muted hover:text-fg"
      }`}
    >
      <span>{label}</span>
      {active ? (
        sortDir === "asc" ? (
          <ArrowUp size={11} />
        ) : (
          <ArrowDown size={11} />
        )
      ) : (
        <ArrowUpDown size={11} className="opacity-50" />
      )}
    </button>
  );
}

function GroupHeader({
  category,
  count,
}: {
  category: ProjectCategory;
  count: number;
}) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 border-b border-rule bg-black/20">
      <span className={`font-mono text-[11px] uppercase tracking-[0.25em] ${categoryAccent[category]}`}>
        ▮ {category}
      </span>
      <span className="font-mono text-[10px] text-fg-muted">
        ({String(count).padStart(2, "0")})
      </span>
      <span className="flex-1 h-px bg-rule" />
    </div>
  );
}

function Row({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      data-cursor="hover"
      className="group block px-6 py-4 border-b border-rule last:border-b-0 hover:bg-accent/[0.04] transition-colors"
    >
      <div className="grid md:grid-cols-[1.6fr_2.2fr_0.8fr_0.6fr_0.3fr] gap-2 md:gap-4 items-baseline">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <span className="font-serif text-lg md:text-xl text-fg group-hover:text-accent transition-colors">
            {project.name}
          </span>
          <span className="font-mono text-[11px] text-fg-muted leading-snug line-clamp-1">
            {project.tagline}
          </span>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 6).map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-muted border border-rule rounded-full px-2 py-0.5"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Category (mobile shows category inline) */}
        <div className={`hidden md:block font-mono text-[11px] uppercase tracking-[0.18em] ${categoryAccent[project.category]}`}>
          {project.category}
        </div>

        {/* Year */}
        <div className="hidden md:block font-mono text-[11px] tracking-[0.15em] text-fg-muted">
          {project.year}
        </div>

        {/* Arrow */}
        <div className="hidden md:flex justify-end">
          <ArrowUpRight
            size={16}
            className="text-fg-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
          />
        </div>

        {/* Mobile-only meta line */}
        <div className="md:hidden mt-1 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em]">
          <span className={categoryAccent[project.category]}>{project.category}</span>
          <span className="text-fg-muted">{project.year}</span>
          <ArrowUpRight size={12} className="ml-auto text-fg-muted group-hover:text-accent transition-colors" />
        </div>
      </div>
    </a>
  );
}
