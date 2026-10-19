"use client";
import { useState } from "react";

export default function TerminalWindow({
  children,
  title = "arry@portfolio: ~",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section className="mt-5 max-w-[95vw] border border-white/10 bg-black/40 font-mono text-white">
      {/* title bar */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        aria-expanded={!collapsed}
        className="group flex w-full items-center gap-2 p-3 text-left"
      >
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs text-white/30">{title}</span>
        <span className="ml-auto text-xs text-white/30 transition-colors group-hover:text-fuchsia-400">
          {collapsed ? "expand +" : "collapse −"}
        </span>
      </button>

      {/* body */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          collapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-1 border-t border-white/10 p-8 text-sm md:text-base">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}