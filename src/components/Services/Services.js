import React, { useState } from "react";
import { SERVICES } from "../../data/siteData";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function Services() {
  const titleRef = useScrollReveal();
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#13181f] py-14 sm:py-20 lg:py-28"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-16 xl:gap-24">

          {/* ── LEFT: heading block ── */}
          <div ref={titleRef}>

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#3b82f6]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
                What We Offer
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-black leading-[1.1] text-white"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)" }}
            >
              Our Core{" "}
              <span className="lg:block">
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
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-[15px]">
              Innovative digital products and scalable technology services
              designed for startups, industries, and businesses.
            </p>

            {/* Divider */}
            <div className="my-6 h-px w-full bg-white/[0.07]" />

            {/* Stats row */}
            <div className="flex gap-6 sm:gap-8">
              <div>
                <p className="text-xl font-black text-white sm:text-2xl">
                  {SERVICES.length}
                </p>
                <p className="mt-0.5 text-[10px] uppercase tracking-widest text-slate-500">
                  Services
                </p>
              </div>
              <div className="w-px bg-white/[0.08]" />
              <div>
                <p className="text-xl font-black text-white sm:text-2xl">100%</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-widest text-slate-500">
                  Professional
                </p>
              </div>
            </div>

            {/* Feature checklist — fills the left side nicely on desktop */}
            <ul className="mt-6 hidden space-y-3 lg:block">
              {[
                "End-to-end project delivery",
                "Scalable, production-ready code",
                "Dedicated support & maintenance",
                "Startup to enterprise ready",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/15">
                    <i className="fas fa-check text-[8px] text-[#60a5fa]" />
                  </span>
                  <span className="text-sm text-slate-400">{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA — full width on mobile, auto on lg */}
            <a
              href="#contact"
              className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-full bg-[#3b82f6] px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#2563eb] hover:shadow-lg hover:shadow-blue-500/25 sm:inline-flex sm:w-auto"
            >
              Get Started
              <i className="fas fa-arrow-right text-xs" />
            </a>
          </div>

          {/* ── RIGHT: service rows ── */}
          <div>
            {SERVICES.map((s, i) => {
              const num = String(i + 1).padStart(2, "0");
              const isHovered = hovered === i;

              return (
                <a
                  key={s.title}
                  href={s.detailPath || "#"}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="group relative flex items-start gap-3 border-b border-white/[0.07] py-5 transition-all duration-300 first:border-t first:border-t-white/[0.07] sm:gap-5 sm:py-6 lg:py-7"
                >
                  {/* Number — hidden on very small, shown from xs up */}
                  <span
                    className="hidden min-w-[2rem] pt-0.5 font-mono text-xs font-black transition-colors duration-300 xs:block sm:min-w-[2.5rem] sm:text-sm"
                    style={{ color: isHovered ? "#60a5fa" : "#334155" }}
                  >
                    {num}
                  </span>

                  {/* Icon */}
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 sm:h-10 sm:w-10">
                    <i
                      className={`${s.icon} text-xs transition-colors duration-300 sm:text-sm`}
                      style={{ color: isHovered ? "#60a5fa" : "#64748b" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    {/* Number inline on mobile only */}
                    <div className="flex items-center gap-2 xs:hidden">
                      <span
                        className="font-mono text-[10px] font-black"
                        style={{ color: isHovered ? "#60a5fa" : "#334155" }}
                      >
                        {num}
                      </span>
                    </div>

                    <h3
                      className="text-[14px] font-bold leading-snug transition-colors duration-300 sm:text-[15px]"
                      style={{ color: isHovered ? "#ffffff" : "#e2e8f0" }}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:mt-1.5 sm:text-sm sm:leading-6">
                      {s.desc}
                    </p>

                    {/* Tags — 3 on mobile, 4 on sm+ */}
                    {s.tags?.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
                        {s.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-700 px-2 py-0.5 text-[9px] font-semibold text-slate-500 transition-all duration-200 group-hover:border-blue-500/30 group-hover:text-slate-400 sm:px-2.5 sm:text-[10px]"
                          >
                            {tag}
                          </span>
                        ))}
                        {s.tags.length > 3 && (
                          <span className="rounded-full border border-slate-800 px-2 py-0.5 text-[9px] font-semibold text-slate-600 sm:hidden">
                            +{s.tags.length - 3}
                          </span>
                        )}
                        {s.tags[3] && (
                          <span className="hidden rounded-full border border-slate-700 px-2.5 py-0.5 text-[10px] font-semibold text-slate-500 transition-all duration-200 group-hover:border-blue-500/30 group-hover:text-slate-400 sm:inline-block">
                            {s.tags[3]}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Arrow */}
                  <div className="mt-0.5 flex-shrink-0 self-center">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.07] transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/10 group-active:scale-90 sm:h-8 sm:w-8">
                      <i
                        className="fas fa-arrow-right text-[9px] transition-colors duration-300 sm:text-[10px]"
                        style={{ color: isHovered ? "#60a5fa" : "#475569" }}
                      />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}