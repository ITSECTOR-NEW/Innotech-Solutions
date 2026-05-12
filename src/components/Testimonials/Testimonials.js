import React from "react";
import { TESTIMONIALS } from "../../data/siteData";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function Testimonials() {
  const titleRef = useScrollReveal();
  const gridRef  = useScrollReveal();

  return (
    <section id="testimonials" className="py-24 bg-dark-900">
      <div className="max-w-6xl mx-auto px-6">

        <div ref={titleRef} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 blink"></span>
            Client Stories
          </div>
          <h2 className="font-display font-extrabold text-white mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Real feedback from industry leaders, schools, and startups who trusted Innotix Solution.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="relative p-7 rounded-2xl bg-white/[0.03] border border-white/10
                hover:border-white/20 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/40
                transition-all"
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-6 text-5xl text-cyan-400/10 font-serif leading-none select-none">"</span>

              {/* Stars */}
              <div className="flex gap-1 text-orange-400 text-sm mb-4">
                {Array(t.stars).fill(0).map((_, i) => <span key={i}>★</span>)}
              </div>

              <p className="text-sm text-slate-400 italic leading-relaxed mb-5">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.grad} grid place-items-center font-display font-extrabold text-white text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-display font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
