import React from "react";
import { INDUSTRIES } from "../../data/siteData";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function Industries() {
  const titleRef = useScrollReveal();
  const gridRef  = useScrollReveal();

  return (
    <section id="industries" className="py-24 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">

        <div ref={titleRef} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 blink"></span>
            Our Reach
          </div>
          <h2 className="font-display font-extrabold text-white mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Delivering innovation across diverse sectors with tailored technology solutions.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.title}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center
                hover:border-cyan-400/40 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-cyan-500/10
                transition-all"
            >
              <span className="text-4xl block mb-3">{ind.emoji}</span>
              <h4 className="font-display font-bold text-white text-sm mb-2">{ind.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
