import React from "react";
import { SERVICES } from "../../data/siteData";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const serviceAccents = [
  {
    line: "from-emerald-400 to-cyan-500",
    icon: "border-emerald-100 bg-emerald-50 text-emerald-700",
    hover: "hover:border-emerald-300",
  },
  {
    line: "from-violet-500 to-sky-500",
    icon: "border-violet-100 bg-violet-50 text-violet-700",
    hover: "hover:border-violet-300",
  },
  {
    line: "from-amber-400 to-rose-500",
    icon: "border-amber-100 bg-amber-50 text-amber-700",
    hover: "hover:border-amber-300",
  },
  {
    line: "from-emerald-400 to-cyan-500",
    icon: "border-emerald-100 bg-emerald-50 text-emerald-700",
    hover: "hover:border-emerald-300",
  },
  {
    line: "from-pink-500 to-violet-600",
    icon: "border-pink-100 bg-pink-50 text-pink-700",
    hover: "hover:border-pink-300",
  },
  {
    line: "from-orange-400 to-cyan-500",
    icon: "border-orange-100 bg-orange-50 text-orange-700",
    hover: "hover:border-orange-300",
  },
];

function ServiceCard({
  icon,
  title,
  desc,
  tags = [],
  detailPath,
  accent,
}) {
  return (
    <a
      href={detailPath || "#"}
      className={`group flex h-full flex-col overflow-hidden
      rounded-xl border border-blue-100
      bg-gradient-to-br from-white via-sky-50/90 to-blue-50/80
      shadow-[0_12px_30px_rgba(15,23,42,0.05)]
      transition-colors duration-200 ${accent.hover}`}
    >
      <div className={`h-1 bg-gradient-to-r ${accent.line}`} />

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div
          className={`mb-3 flex h-10 w-10 items-center
          justify-center rounded-xl border ${accent.icon}`}
        >
          <i className={`${icon} text-lg`}></i>
        </div>

        <h3
          className="font-display text-lg font-bold
          leading-tight text-slate-900"
        >
          {title}
        </h3>

        <p
          className="mt-2 flex-1 text-[13px] leading-5
          text-slate-600"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {desc}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200
              bg-white/80 px-2.5 py-0.5 text-[11px] font-medium
              text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className={`mt-4 inline-flex w-fit items-center gap-2
          rounded-full bg-gradient-to-r ${accent.line}
          px-3.5 py-1.5 text-[13px] font-semibold text-white
          shadow-sm shadow-blue-500/15`}
        >
          Learn More
          <i className="fas fa-arrow-right text-xs"></i>
        </span>
      </div>
    </a>
  );
}

export default function Services() {
  const titleRef = useScrollReveal();

  return (
    <section
      id="services"
      className="relative overflow-hidden
      bg-[#edf4ff] py-10
      sm:py-14 lg:py-16"
    >

      {/* Background Glow */}
      <div
        className="absolute left-0 top-0
        h-[280px] w-[280px]
        rounded-full bg-cyan-300/30
        blur-[120px]"
      />

      <div
        className="absolute bottom-0 right-0
        h-[220px] w-[220px]
        rounded-full bg-blue-300/20
        blur-[120px]"
      />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(#0f172a 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <div
          ref={titleRef}
          className="mx-auto mb-7 max-w-3xl text-center sm:mb-9"
        >

          <div
            className="inline-flex items-center gap-2
  rounded-full border border-blue-200
  bg-gradient-to-r
  from-blue-500 to-cyan-500
  px-4 py-2 text-[10px]
  font-semibold uppercase
  tracking-[0.16em] text-white
  shadow-lg shadow-cyan-500/20"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1067/1067566.png"
              alt="services"
              className="h-4 w-4 object-contain"
            />

            Product & Services
          </div>

          <h2
            className="mt-3 font-display
            font-black leading-tight
            text-slate-900"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.8rem)",
            }}
          >
            Our <span className="gradient-text">Solutions</span>
          </h2>

          <p
            className="mx-auto mt-3
            max-w-2xl text-sm
            leading-6 text-slate-500
            sm:text-base sm:leading-7"
          >
            Innovative digital products and
            scalable technology services designed
            for startups, industries, and businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {SERVICES.map((s, i) => (
            <ServiceCard
              key={s.title}
              {...s}
              accent={serviceAccents[i % serviceAccents.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
