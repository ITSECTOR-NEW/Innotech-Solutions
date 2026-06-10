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
}) {
  return (
    <a
      href={detailPath || "#"}
      className="
      group flex flex-col
      rounded-2xl
      border border-slate-200
      bg-white
      p-6
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-lg"
    >
      {/* Top */}
      <div className="flex items-start gap-4">

        <div
          className="
          flex h-12 w-12
          flex-shrink-0
          items-center justify-center
          rounded-xl
          bg-[#eff6ff]
          border border-[#bfdbfe]"
        >
          <i
            className={`${icon}
            text-[#0284c7]
            text-lg`}
          />
        </div>

        <div>
          <h3
            className="
            text-lg font-bold
            text-slate-900
            leading-snug"
          >
            {title}
          </h3>

          <p
            className="
            mt-2 text-sm
            leading-6
            text-slate-500"
          >
            {desc}
          </p>
        </div>

      </div>

      {/* Features */}
      {/* Key Features */}
<div className="mt-5">
  <p
    className="
    mb-3 text-[10px]
    font-black uppercase
    tracking-widest
    text-[#0284c7]"
  >
     Service Scope
  </p>

  <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
    {tags.slice(0, 4).map((tag) => (
      <div
        key={tag}
        className="flex items-center gap-2"
      >
        <span
          className="
          flex h-4 w-4
          flex-shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#0284c7]/10"
        >
          <i
            className="
            fas fa-check
            text-[8px]
            text-[#0284c7]"
          />
        </span>

        <span
          className="
          text-xs
          font-medium
          text-slate-600"
        >
          {tag}
        </span>
      </div>
    ))}
  </div>
</div>
      {/* Footer */}
      <div
        className="
        mt-5 flex items-center
        justify-between
        border-t border-slate-100
        pt-4"
      >
        <span
          className="
          text-xs font-semibold
          text-slate-400"
        >
          Professional Service
        </span>

        <span
          className="
          flex items-center gap-2
          text-sm font-bold
          text-[#0284c7]"
        >
          Read More...
          <i className="fas fa-arrow-right text-xs" />
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

            {/* Product & Services */}
            What We Offer
          </div>

          {/* <h2
            className="mt-3 font-display
            font-black leading-tight
            text-slate-900"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            }}
          >
            Our <span className="gradient-text">Services</span>
          </h2> */}

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
