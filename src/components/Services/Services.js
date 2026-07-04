import React, { useState } from "react";
import { SERVICES } from "../../data/siteData";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function Services() {
  const titleRef = useScrollReveal();
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#13181f] py-14 sm:py-20 lg:py-24"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ── TOP: heading + CTA ── */}
        <div ref={titleRef} className="mb-8 flex flex-wrap items-end justify-between gap-6 sm:mb-10">
          <div>
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-[#3b82f6]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
                What We Offer
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-black leading-[1.1] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              Our Core{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Services
              </span>
            </h2>

            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              Innovative digital products and scalable technology services
              designed for startups, industries, and businesses.
            </p>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#3b82f6] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#2563eb] hover:shadow-lg hover:shadow-blue-500/25"
          >
            Get Started
            <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>

        {/* ── GRID: service cards ── */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => {
            const num = String(i + 1).padStart(2, "0");
            const isHovered = hovered === i;

            return (
              <a
  key={s.title}
  href={s.detailPath || "#"}
  onMouseEnter={() => setHovered(i)}
  onMouseLeave={() => setHovered(null)}
  className="group flex flex-col rounded-3xl border border-cyan-500/20 bg-[#0f141a] p-8 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(15,183,197,0.15)]"
>
  {/* Icon */}
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/5 mb-6">
    <i
      className={`${s.icon} text-xl`}
      style={{ color: isHovered ? "#22d3ee" : "#60a5fa" }}
    />
  </div>

  {/* Title */}
  <h3 className="text-xl font-bold text-white mb-3">
    {s.title}
  </h3>

  {/* Description */}
  <p className="text-slate-400 leading-relaxed mb-6">
    {s.desc}
  </p>

  {/* Tags */}
  {s.tags?.length > 0 && (
    <div className="flex flex-wrap gap-2 border-t border-slate-800 pt-5">
      {s.tags.slice(0, 4).map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs"
        >
          {tag}
        </span>
      ))}
    </div>
  )}

  {/* Button */}
  <button
    className="
      mt-6
      w-full
      rounded-xl
      bg-slate-800
      py-3
      text-sm
      font-semibold
      text-white
      transition-all
      duration-300
      hover:bg-[#0fb7c5]
    "
  >
    Learn More →
  </button>
</a>
            );
          })}
        </div>

        {/* ── FOOTER: stats + checklist ── */}
        <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-white/[0.06] pt-5 sm:gap-8">
          {/* <div>
            <p className="text-xl font-black text-white sm:text-2xl">
              {SERVICES.length}
            </p>
            <p className="mt-0.5 text-[9px] uppercase tracking-widest text-slate-500">
              Services
            </p>
          </div>

          <div className="h-8 w-px bg-white/[0.08]" />

          <div>
            <p className="text-xl font-black text-white sm:text-2xl">100%</p>
            <p className="mt-0.5 text-[9px] uppercase tracking-widest text-slate-500">
              Professional
            </p>
          </div>

          <div className="h-8 w-px bg-white/[0.08]" /> */}

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              "End-to-end delivery",
              "Production-ready code",
              "Startup to enterprise",
            ].map((point) => (
              <span
                key={point}
                className="flex items-center gap-2 text-xs text-slate-500"
              >
                <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/15">
                  <i className="fas fa-check text-[7px] text-[#60a5fa]" />
                </span>
                {point}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}