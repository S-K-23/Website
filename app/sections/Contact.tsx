"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { profile } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import { TerminalBlock } from "@/components/TerminalBlock";

const ASCII_SIG = `   _____    __ __
  / ___/   / //_/
  \\__ \\   / ,<
 ___/ /  / /| |
/____/  /_/ |_|  `;

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  }

  return (
    <section id="contact" className="relative py-32 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15%" }}
          variants={stagger(0.08)}
          className="grid md:grid-cols-12 gap-10"
        >
          {/* Big editorial CTA */}
          <motion.div variants={fadeUp} className="md:col-span-7 flex flex-col gap-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg-muted">
              <span className="text-accent">06 / </span> contact
            </div>
            <h2 className="font-serif text-display-md md:text-display-lg leading-[0.95]">
              Let&apos;s build something
              <br />
              <span className="text-accent italic">at the edge.</span>
            </h2>
            <p className="font-serif text-xl md:text-2xl text-fg/85 max-w-xl leading-snug">
              Open to research collaborations, internships, and freelance work in
              ML / systems / on-chain infra. Cold emails welcome — the weirder the
              question, the better.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <button
                onClick={copyEmail}
                data-cursor="hover"
                className="group inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/5 px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-accent hover:bg-accent/15 transition-colors"
              >
                {copied ? (
                  <>
                    <Check size={14} />
                    copied
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    {profile.email}
                  </>
                )}
              </button>
              <a
                href={`mailto:${profile.email}`}
                data-cursor="hover"
                className="inline-flex items-center gap-3 rounded-full border border-rule px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-fg-muted hover:text-fg hover:border-fg/30 transition-colors"
              >
                open mail ↗
              </a>
            </div>
          </motion.div>

          {/* Terminal block with links */}
          <motion.div variants={fadeUp} className="md:col-span-5">
            <TerminalBlock title="sohum@purdue:~/contact $">
              <div className="space-y-2 text-fg">
                <Line label="email" value={profile.email} href={`mailto:${profile.email}`} />
                <Line label="github" value="S-K-23" href={profile.links.github} />
                <Line label="linkedin" value="sohumkashyap" href={profile.links.linkedin} />
                <Line label="orcid" value="0009-0006-4854-1019" href={profile.links.orcid} />
                <Line label="location" value="West Lafayette, IN" />
              </div>
              <pre className="mt-6 text-accent/60 text-[10px] leading-tight select-none">
                {ASCII_SIG}
              </pre>
            </TerminalBlock>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-8 border-t border-rule flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted"
        >
          <div>
            © {new Date().getFullYear()} sohum kashyap · all rights reserved
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-pulse-soft" />
            built with next.js, three.js, framer-motion · 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Line({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-fg-muted w-20 shrink-0">{label}</span>
      <span className="text-fg-muted">::</span>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="text-fg hover:text-accent transition-colors break-all"
          data-cursor="hover"
        >
          {value}
        </a>
      ) : (
        <span className="text-fg">{value}</span>
      )}
    </div>
  );
}
