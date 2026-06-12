import React, { useState } from "react";
import { WHY_CHOOSE_US } from "../../data/siteData";

const ACCENTS = [
  { glow: "bg-pink-500/10",   border: "group-hover:border-pink-500/40",   icon: "#ec4899", num: "#ec489933" },
  { glow: "bg-blue-500/10",   border: "group-hover:border-blue-500/40",   icon: "#3b82f6", num: "#3b82f633" },
  { glow: "bg-amber-500/10",  border: "group-hover:border-amber-500/40",  icon: "#f59e0b", num: "#f59e0b33" },
  { glow: "bg-emerald-500/10",border: "group-hover:border-emerald-500/40",icon: "#10b981", num: "#10b98133" },
  { glow: "bg-violet-500/10", border: "group-hover:border-violet-500/40", icon: "#8b5cf6", num: "#8b5cf633" },
  { glow: "bg-cyan-500/10",   border: "group-hover:border-cyan-500/40",   icon: "#06b6d4", num: "#06b6d433" },
];

const FEATURE_ICONS = [
  "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  "https://cdn-icons-png.flaticon.com/512/3135/3135673.png",
  "https://cdn-icons-png.flaticon.com/512/190/190411.png",
  "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
  "https://cdn-icons-png.flaticon.com/512/2784/2784461.png",
  "https://cdn-icons-png.flaticon.com/512/3281/3281289.png",
];

export default function WhyChoose() {
  const [hovered, setHovered] = useState(null);

  const requestDemo = () => {
    const contact = document.querySelector("#contact");
    if (contact) { contact.scrollIntoView({ behavior: "smooth" }); return; }
    window.location.href = "/#contact";
  };

  return (
    <section className="relative overflow-hidden bg-[#0d1117] py-16 sm:py-20 lg:py-28">

      {/* Ambient glows — different positions from Services */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[380px] w-[380px] translate-x-1/2 rounded-full bg-pink-600/8 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-violet-600/10 blur-[120px]" />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ── Centered header ── */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-pink-400">
              Why Choose Us
            </span>
          </div>

          <h2
            className="font-black leading-[1.15] text-white"
            style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)" }}
          >
            Technology Partner For{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f472b6 0%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Digital Growth
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-[15px]">
            We combine technology, innovation, and practical business
            understanding to deliver web, AI, automation, and Industrial IoT
            solutions that create measurable impact.
          </p>
        </div>

        {/* ── Feature grid ── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, i) => {
            const a = ACCENTS[i % ACCENTS.length];
            const isHovered = hovered === i;

            return (
              <div
                key={item.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.055] ${a.border} sm:p-7`}
              >
                {/* Top accent line */}
                <span
                  className="absolute left-0 top-0 h-[2px] w-full rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, ${a.icon}, transparent)` }}
                />

                {/* Large ghost number */}
                <span
                  className="pointer-events-none absolute right-4 top-2 select-none font-black leading-none text-white/[0.03] transition-all duration-300 group-hover:text-white/[0.06]"
                  style={{ fontSize: "5rem" }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] transition-all duration-300 group-hover:scale-105 ${a.glow}`}
                >
                  <img
                    src={FEATURE_ICONS[i % FEATURE_ICONS.length]}
                    alt=""
                    className="h-6 w-6 object-contain"
                    style={{ filter: isHovered ? `drop-shadow(0 0 6px ${a.icon})` : "none" }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="mb-2 text-[15px] font-bold leading-snug transition-colors duration-300"
                  style={{ color: isHovered ? "#ffffff" : "#e2e8f0" }}
                >
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-sm leading-6 text-slate-500">
                  {item.desc}
                </p>

                {/* Bottom read more */}
                <div className="mt-5 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5">
                  <span className="text-xs font-bold" style={{ color: a.icon }}>
                    Learn More
                  </span>
                  <i className="fas fa-arrow-right text-[9px]" style={{ color: a.icon }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-6 sm:flex-row sm:px-10">
          <div>
            <p className="text-base font-bold text-white">
              Turning Ideas Into{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f472b6 0%, #c084fc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Digital Innovation
              </span>
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Our innovative solutions help businesses stand out online.
            </p>
          </div>

          <button
            onClick={requestDemo}
            className="flex-shrink-0 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-pink-500/20 transition-all duration-200 hover:scale-105 hover:shadow-pink-500/30"
          >
            Get Free Consultation
            <i className="fas fa-arrow-right text-xs" />
          </button>
        </div>

      </div>
    </section>
  );
}