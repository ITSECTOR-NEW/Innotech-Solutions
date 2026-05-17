import React, { useState } from "react";
import { PORTFOLIO_ITEMS } from "../../data/siteData";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const FILTERS = [
  { key: "all",      label: "All Projects" },
  { key: "iot",      label: "IoT & Automation" },
  { key: "web",      label: "Web & Apps" },
  { key: "robotics", label: "Robotics & AI" },
];

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const titleRef = useScrollReveal();

  const visible = PORTFOLIO_ITEMS.filter((p) => active === "all" || p.cat === active);

  return (
    <section id="portfolio" className="bg-dark-800 py-14 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div ref={titleRef} className="mb-8 text-center sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 blink"></span>
            Our Work
          </div>
          <h2 className="font-display font-extrabold text-white mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            A showcase of our best work — from industrial automation systems to modern web applications.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2 sm:mb-8 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:pb-0">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`flex-shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-all sm:px-5 sm:text-sm
                ${active === f.key
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <div
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]
                hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50
                transition-all duration-300 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className={`relative flex aspect-[2/1] flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br sm:aspect-video sm:gap-3 ${p.bg}`}>
                <span className="text-4xl sm:text-5xl">{p.emoji}</span>
                <span className="text-xs text-slate-400">{p.catLabel}</span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-display font-bold text-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
              {/* Body */}
              <div className="p-4 sm:p-5">
                <div className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 mb-1.5">{p.catLabel}</div>
                <h3 className="font-display font-bold text-white text-sm mb-2">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
