import React from "react";
import { WHY_POINTS, WHY_STATS } from "../../data/siteData";
import { useScrollReveal, useCounter } from "../../hooks/useScrollReveal";

function StatCard({ icon, num, label }) {
  const numRef = useCounter(num);
  const ref    = useScrollReveal();
  return (
    <div ref={ref} className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 text-center hover:border-cyan-400/40 hover:-translate-y-1 transition-all">
      <i className={`${icon} text-2xl text-cyan-400 mb-3 block`}></i>
      <div className="font-display font-extrabold text-4xl gradient-text mb-1">
        <span ref={numRef}>0</span>+
      </div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}

export default function WhyUs() {
  const leftRef  = useScrollReveal();
  const rightRef = useScrollReveal();
  return (
    <section id="why" className="py-24 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 blink"></span>
            Why Innotix
          </div>
          <h2 className="font-display font-extrabold text-white mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Why <span className="gradient-text">Choose Us?</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            We combine technical excellence with strategic thinking to deliver solutions that create lasting impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Points */}
          <div ref={leftRef} className="flex flex-col gap-4">
            {WHY_POINTS.map((p) => (
              <div
                key={p.num}
                className="flex gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/10
                  hover:border-cyan-400/40 hover:translate-x-1.5 transition-all"
              >
                <span className="font-display font-extrabold text-3xl text-cyan-400/30 leading-none w-10 flex-shrink-0">
                  {p.num}
                </span>
                <div>
                  <h4 className="font-display font-bold text-white mb-1">{p.title}</h4>
                  <p className="text-sm text-slate-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div ref={rightRef} className="grid grid-cols-2 gap-4">
            {WHY_STATS.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
