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
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const num = String(i + 1).padStart(2, "0");
            const isHovered = hovered === i;

            return (
              <a
                key={s.title}
                href={s.detailPath || "#"}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group flex flex-col gap-2.5 bg-[#13181f] p-5 transition-colors duration-200 hover:bg-[#1a2130] sm:p-6"
              >
                {/* Icon row */}
                <div className="flex items-start justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-200 group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
                    <i
                      className={`${s.icon} text-sm transition-colors duration-200`}
                      style={{ color: isHovered ? "#60a5fa" : "#64748b" }}
                    />
                  </div>
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-200"
                    style={{
                      borderColor: isHovered ? "rgba(96,165,250,0.4)" : "rgba(255,255,255,0.07)",
                      background: isHovered ? "rgba(96,165,250,0.1)" : "transparent",
                    }}
                  >
                    <i
                      className="fas fa-arrow-right text-[9px] transition-colors duration-200"
                      style={{ color: isHovered ? "#60a5fa" : "#475569" }}
                    />
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-sm font-bold leading-snug transition-colors duration-200 sm:text-[15px]"
                  style={{ color: isHovered ? "#ffffff" : "#e2e8f0" }}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {s.desc}
                </p>

                {/* Tags */}
                {s.tags?.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                    {s.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-800 px-2.5 py-0.5 text-[9px] font-semibold text-slate-500 transition-all duration-200 group-hover:border-blue-500/25 group-hover:text-slate-400 sm:text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
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