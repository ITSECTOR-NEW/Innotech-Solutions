import React from "react";
import { SERVICES } from "../../data/siteData";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const serviceImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
];

function ServiceCard({
  title,
  detailPath,
  delay,
  image,
}) {
  const ref = useScrollReveal();

  return (
    <a
      ref={ref}
      href={detailPath || "#"}
      className="group relative overflow-hidden
      rounded-[26px] border border-white/10
      transition-all duration-300
      hover:-translate-y-1
      hover:border-cyan-400/20"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center
        transition-transform duration-700
        group-hover:scale-110"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {/* Lighter Overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/55"></div>

      {/* Gradient */}
      <div
        className="absolute inset-0
        bg-gradient-to-t
        from-[#0f172a]
        via-[#0f172a]/30
        to-transparent"
      ></div>

      {/* Hover Glow */}
      <div
        className="absolute inset-0 opacity-0
        transition-opacity duration-300
        group-hover:opacity-100"
      >
        <div
          className="absolute inset-0
          bg-gradient-to-br
          from-cyan-400/10
          to-transparent"
        ></div>
      </div>

      {/* Content */}
      <div
        className="relative flex h-[260px]
        items-end p-7"
      >
        <div>
          {/* Line */}
          <div
            className="mb-4 h-[3px] w-12
            rounded-full bg-cyan-400
            transition-all duration-300
            group-hover:w-20"
          ></div>

          {/* Title */}
          <h3
            className="font-display text-[22px]
            font-bold leading-tight text-white"
          >
            {title}
          </h3>
        </div>

        {/* Arrow */}
        <div
          className="absolute right-6 top-6
          flex h-10 w-10 items-center
          justify-center rounded-2xl
          border border-white/15
          bg-white/10 text-white
          opacity-0 backdrop-blur-md
          transition-all duration-300
          group-hover:opacity-100"
        >
          <i className="fas fa-arrow-up-right-from-square text-sm"></i>
        </div>
      </div>
    </a>
  );
}

export default function Services() {
  const titleRef = useScrollReveal();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#07111f] py-24"
    >
      {/* Background Glow */}
      <div
        className="absolute left-0 top-0
        h-[380px] w-[380px]
        rounded-full bg-cyan-500/10
        blur-[120px]"
      />

      <div
        className="absolute bottom-0 right-0
        h-[280px] w-[280px]
        rounded-full bg-blue-500/10
        blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div
          ref={titleRef}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div
            className="inline-flex items-center gap-2
            rounded-full border border-cyan-400/20
            bg-cyan-400/10 px-5 py-2
            text-xs font-bold uppercase
            tracking-[0.18em] text-cyan-300"
          >
            <span
              className="h-2 w-2 rounded-full
              bg-cyan-400 blink"
            ></span>

            Product & Services
          </div>

          <h2
            className="mt-5 font-display
            text-white font-black leading-tight"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            Our <span className="gradient-text">Solutions</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={s.title}
              {...s}
              image={serviceImages[i % serviceImages.length]}
              delay={i * 70}
            />
          ))}
        </div>
      </div>
    </section>
  );
}