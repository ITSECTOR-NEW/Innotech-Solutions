import React from "react";
import { SERVICES } from "../../data/siteData";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function ServiceCard({ icon, title, desc, tags, gradient, delay }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="group relative p-7 rounded-2xl bg-white/[0.03] border border-white/10
        hover:border-white/20 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40
        transition-all duration-300 cursor-default overflow-hidden tilt-card"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

      {/* Icon */}
      <div className={`relative w-13 h-13 w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} grid place-items-center text-white text-xl mb-5`}>
        <i className={icon}></i>
      </div>

      <h3 className="relative font-display font-bold text-base text-white mb-2.5">{title}</h3>
      <p className="relative text-sm text-slate-400 leading-relaxed mb-4">{desc}</p>

      {/* Tags */}
      <div className="relative flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 group-hover:border-white/20 group-hover:text-slate-300 transition-all"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div className="absolute bottom-5 right-5 w-8 h-8 rounded-lg bg-white/5 border border-white/10 grid place-items-center text-slate-400 opacity-0 group-hover:opacity-100 group-hover:text-cyan-400 group-hover:border-cyan-400/40 transition-all">
        <i className="fas fa-arrow-right text-xs"></i>
      </div>
    </div>
  );
}

export default function Services() {
  const titleRef = useScrollReveal();
  return (
    <section id="services" className="py-24 bg-dark-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div ref={titleRef} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 blink"></span>
            What We Build
          </div>
          <h2 className="font-display font-extrabold mb-4 text-white" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            End-to-end technology services designed to accelerate your business growth and operational efficiency.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
