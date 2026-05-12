import React from "react";
import { TECH_STACK } from "../../data/siteData";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function TechStack() {
  const titleRef = useScrollReveal();
  const gridRef  = useScrollReveal();

  return (
    <section id="tech" className="py-24 bg-dark-900">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 blink"></span>
            Technology Stack
          </div>
          <h2 className="font-display font-extrabold text-white mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Built With the <span className="gradient-text">Best Tools</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            We leverage industry-leading technologies to build scalable, secure, and performant solutions.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {TECH_STACK.map((t, i) => (
            <div
              key={t.name}
              className="flex flex-col items-center gap-2.5 p-5 rounded-2xl bg-white/[0.03] border border-white/10
                hover:border-cyan-400/40 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-cyan-500/10
                transition-all cursor-default"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="text-3xl">{t.emoji}</span>
              <span className="text-[11px] text-slate-400 font-medium text-center">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
