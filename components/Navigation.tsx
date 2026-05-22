"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navSections, profile } from "@/lib/data";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navSections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-0 inset-x-0 z-[90] px-6 md:px-10 pt-4"
    >
      <div
        className={`mx-auto max-w-7xl flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "px-5 py-3 rounded-full border border-rule bg-bg/70 backdrop-blur-xl"
            : "px-2 py-3"
        }`}
      >
        <a
          href="#top"
          className="font-mono text-xs tracking-[0.2em] uppercase text-fg hover:text-accent transition-colors"
        >
          <span className="text-accent">▮</span> sohum_kashyap
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="relative px-3 py-1.5 text-xs font-mono uppercase tracking-[0.18em] text-fg-muted hover:text-fg transition-colors"
            >
              {s.label}
              <AnimatePresence>
                {active === s.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-[1] rounded-full border border-accent/50"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </AnimatePresence>
            </a>
          ))}
        </nav>

        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted hover:text-accent transition-colors"
        >
          github ↗
        </a>

        {/* Mobile: just a "menu" anchor-list trigger via details */}
        <details className="md:hidden relative">
          <summary className="list-none font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted cursor-pointer">
            menu
          </summary>
          <div className="absolute right-0 mt-3 w-44 rounded-xl border border-rule bg-bg-elev/95 backdrop-blur-xl p-2">
            {navSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block px-3 py-2 text-xs font-mono uppercase tracking-[0.18em] text-fg-muted hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </details>
      </div>
    </motion.header>
  );
}
