"use client";

export function TerminalBlock({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-xl border border-rule bg-bg-elev/60 backdrop-blur-sm overflow-hidden ${
        className ?? ""
      }`}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-rule bg-black/30">
        <span className="term-dot bg-[#ff5f56]" />
        <span className="term-dot bg-[#ffbd2e]" />
        <span className="term-dot bg-[#27c93f]" />
        <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.18em] text-fg-muted">
          {title}
        </span>
      </div>
      <div className="p-5 font-mono text-sm">{children}</div>
    </div>
  );
}
