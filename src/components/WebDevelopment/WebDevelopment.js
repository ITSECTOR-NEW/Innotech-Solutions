import React, { useState } from "react";
import { Web_Development_Description, Web_Tech_Stack } from "../../data/siteData";

export default function WebDevelopment() {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredWhy, setHoveredWhy] = useState(null);

  const requestPricing = (serviceName) => {
    localStorage.setItem("selectedService", serviceName);
    const contact = document.querySelector("#contact");
    if (contact) { contact.scrollIntoView({ behavior: "smooth" }); return; }
    window.location.href = "/#contact";
  };

  const process = [
    { step: "01", title: "Discovery & Planning", desc: "We analyse your requirements, target audience, and business goals to build a project roadmap with clear milestones.", icon: "fas fa-search" },
    { step: "02", title: "Design & Prototyping", desc: "Wireframes, mockups, and interactive prototypes crafted to match your brand and delight users on every device.", icon: "fas fa-pencil-ruler" },
    { step: "03", title: "Development & Testing", desc: "Modern tech stack, clean code, and rigorous QA for performance, security, and cross-browser compatibility.", icon: "fas fa-code" },
    { step: "04", title: "Launch & Support", desc: "Smooth production deploy followed by ongoing support, monitoring, and continuous optimisation.", icon: "fas fa-rocket" },
  ];

  const whyUs = [
    { icon: "fas fa-expand-arrows-alt", text: "Responsive Design For All Devices" },
    { icon: "fas fa-search",            text: "SEO-Friendly Website Architecture" },
    { icon: "fas fa-paint-brush",       text: "Modern UI/UX That Converts" },
    { icon: "fas fa-tachometer-alt",    text: "Blazing Fast Load Performance" },
    { icon: "fas fa-shield-alt",        text: "Secure & Scalable Infrastructure" },
    { icon: "fas fa-th-large",          text: "Clean, Professional Layouts" },
  ];

  const qualityBars = [
    { label: "On-time Delivery",    value: 96, color: "#0ea5e9" },
    { label: "Client Satisfaction", value: 98, color: "#10b981" },
    { label: "Performance Score",   value: 95, color: "#8b5cf6" },
    { label: "Security Standards",  value: 100, color: "#38bdf8" },
  ];

  const miniStats = [
    { value: "8+",   label: "Projects Delivered", icon: "fas fa-check-circle", color: "#0ea5e9" },
    { value: "4.9★", label: "Average Rating",      icon: "fas fa-star",         color: "#f59e0b" },
    { value: "10+",  label: "Happy Clients",        icon: "fas fa-users",        color: "#10b981" },
    { value: "2 yrs",label: "In Business",          icon: "fas fa-calendar",     color: "#8b5cf6" },
  ];

  return (
    <main className="min-h-screen bg-[#13181f]" style={{ fontFamily: "inherit" }}>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#0d1117]">

  {/* Top divider */}
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

  {/* Glows */}
  <div className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-sky-600/10 blur-[140px]" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/8 blur-[120px]" />

  {/* Dot Grid */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "radial-gradient(#ffffff 1px, transparent 1px)",
      backgroundSize: "22px 22px",
    }}
  />

  {/* Back Button */}
  {/* Back Button */}
<div className="absolute left-3 top-20 z-30 sm:left-6 sm:top-28 lg:left-8 lg:top-32">
  <a
    href="/"
    className="
      flex items-center justify-center
      h-10 w-10
      sm:h-auto sm:w-auto
      sm:px-5 sm:py-2.5
      rounded-full
      border border-white/10
      bg-black/40
      backdrop-blur-md
      text-slate-300
      transition-all duration-300
      hover:border-sky-500/40
      hover:bg-sky-500/10
      hover:text-white
    "
  >
    <i className="fas fa-arrow-left text-sm" />

    <span className="hidden sm:inline ml-2 text-sm font-semibold">
      Back to Home
    </span>
  </a>
</div>

  {/* Content */}
  <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-24">

    <div className="mx-auto max-w-4xl text-center">

      {/* Pill */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-400">
          Web Development Services
        </span>
      </div>

      {/* Heading */}
      <h1
        className="font-black leading-[1.05] text-white"
        style={{
          fontSize: "clamp(2.2rem, 5vw, 4.8rem)",
        }}
      >
        We Build Websites That

        <span
          className="block mt-1"
          style={{
            background:
              "linear-gradient(135deg, #38bdf8 0%, #22d3ee 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Drive Real Growth
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
        Modern, scalable web solutions delivered fast.
        From landing pages to enterprise applications —
        designed for performance, built for results.
      </p>

            {/* Hero stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-14">
              {[
                { value: "8+",    label: "Projects Delivered" },
                { value: "4.9★",  label: "Client Rating" },
                { value: "1–2 mo",label: "Avg. Delivery" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p
                    className="font-black"
                    style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      background: "linear-gradient(135deg, #38bdf8 0%, #22d3ee 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => requestPricing("Website Development")}
                className="inline-flex items-center gap-2 rounded-full bg-[#0ea5e9] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-[#38bdf8] hover:shadow-sky-400/40"
              >
                Get Free Quote
                <i className="fas fa-arrow-right text-xs" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white/[0.09]">
                View Portfolio
                <i className="fas fa-external-link-alt text-xs" />
              </button>
              {/* <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-slate-400 backdrop-blur-sm transition-all hover:border-white/20 hover:text-white"
              >
                <i className="fas fa-arrow-left text-xs" />
                Back to Home
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES GRID
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#13181f] py-20">

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-[350px] w-[350px] translate-x-1/2 rounded-full bg-sky-600/8 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-400">What We Build</span>
            </div>
            <h2
              className="font-black leading-[1.15] text-white"
              style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)" }}
            >
              Our Web Development{" "}
              <span style={{ background: "linear-gradient(135deg, #38bdf8 0%, #22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Services
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-[15px]">
              End-to-end web solutions designed to be powerful, scalable, and user-friendly.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Web_Development_Description.map((item, i) => {
              const isHov = hoveredService === i;
              return (
                <div
                  key={item.title}
                  onMouseEnter={() => setHoveredService(i)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-white/[0.055]"
                >
                  {/* Top accent line */}
                  <span className="absolute left-0 top-0 h-[2px] w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "linear-gradient(90deg, #0ea5e9, transparent)" }} />

                  {/* Ghost number */}
                  <span className="pointer-events-none absolute right-4 top-2 select-none font-black leading-none text-white/[0.03] transition-all duration-300 group-hover:text-white/[0.06]"
                    style={{ fontSize: "5rem" }} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-sky-500/10 transition-all duration-300 group-hover:scale-105 group-hover:border-sky-500/30">
                      <i className={`${item.icon} text-base transition-colors duration-300`}
                        style={{ color: isHov ? "#38bdf8" : "#64748b" }} />
                    </div>
                    <h3
                      className="text-[15px] font-bold leading-snug transition-colors duration-300"
                      style={{ color: isHov ? "#ffffff" : "#e2e8f0" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.desc}</p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 px-6 pb-5">
                    <p className="mb-3 text-[9px] font-black uppercase tracking-[0.18em] text-sky-400">Key Features</p>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                      {item.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/10">
                            <i className="fas fa-check text-[7px] text-sky-400" />
                          </span>
                          <span className="text-xs text-slate-400">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Freebies for every customer*/}

                  {item.freeIncluded && (
                    <div className="mx-6 mb-4">
                      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
                        <i className="fas fa-gift text-[10px] text-emerald-400" />
                        <span className="text-[10px] font-bold uppercase tracking-wide text-emerald-400">
                          Free {item.freeIncluded}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="mx-6 border-t border-white/[0.05]" />
                  <div className="flex items-center justify-between gap-3 px-6 py-4">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <i className="far fa-clock text-[10px]" />
                      <span className="text-[11px] font-medium">{item.timeline}</span>
                    </div>
                    <button
                      onClick={() => requestPricing(item.title)}
                      className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-[11px] font-bold text-sky-400 transition-all hover:bg-sky-500/20 hover:text-white"
                    >
                      Request Pricing
                      <i className="fas fa-arrow-right text-[9px]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TECH STACK
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0d1117] py-20">

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="pointer-events-none absolute left-0 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/8 blur-[130px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            {/* Left */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-cyan-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">Technology Expertise</span>
              </div>
              <h2
                className="font-black leading-tight text-white"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
              >
                Technologies Behind
                <span
                  className="block"
                  style={{ background: "linear-gradient(135deg, #22d3ee 0%, #38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  Every Digital Solution
                </span>
              </h2>
              <div className="my-5 h-px w-full bg-white/[0.06]" />
              <p className="text-sm leading-7 text-slate-400">
                We combine trusted frameworks, modern development tools, and scalable cloud
                technologies to build secure, high-performance, and future-ready digital products.
              </p>

              {/* Mini checklist */}
              <ul className="mt-6 space-y-3">
                {["Battle-tested production stacks", "Cloud-native & containerised", "Security-first architecture", "Continuous integration & delivery"].map((pt) => (
                  <li key={pt} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/15">
                      <i className="fas fa-check text-[8px] text-cyan-400" />
                    </span>
                    <span className="text-sm text-slate-400">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="space-y-4">
              {Web_Tech_Stack.map((stack) => (
                <div
                  key={stack.category}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-500/25 hover:bg-white/[0.055] sm:p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border bg-gradient-to-br ${stack.color} ${stack.border}`}>
                      <i className={`${stack.icon} text-base ${stack.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white sm:text-[15px]">{stack.category}</h3>
                      <p className="text-[11px] text-slate-500">Production Ready Technologies</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {stack.items.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${stack.tagBorder} ${stack.tagBg} ${stack.tagText}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#13181f] py-20">

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-[300px] w-[300px] translate-x-1/3 rounded-full bg-sky-600/8 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-400">How We Work</span>
            </div>
            <h2
              className="font-black leading-[1.15] text-white"
              style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)" }}
            >
              Our{" "}
              <span style={{ background: "linear-gradient(135deg, #38bdf8 0%, #22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Development Process
              </span>
            </h2>
          </div>

          <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {/* Dashed connector */}
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[38px] hidden h-px border-t border-dashed border-sky-500/20 lg:block" />

            {process.map((step, idx) => (
              <div
                key={step.step}
                className="group relative flex flex-col items-center rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 pt-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-white/[0.055]"
              >
                {/* Top accent line on hover */}
                <span className="absolute left-0 top-0 h-[2px] w-full rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(90deg, #0ea5e9, transparent)" }} />

                {/* Step badge */}
                <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] transition-all duration-300 group-hover:border-sky-500/40 group-hover:bg-sky-500/10">
                  <i className={`${step.icon} text-lg text-slate-500 transition-colors duration-300 group-hover:text-sky-400`} />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20 text-[9px] font-black text-sky-300">
                    {step.step}
                  </span>
                </div>

                {/* Chevron connector */}
                {idx < process.length - 1 && (
                  <div className="absolute -right-3 top-[38px] z-10 hidden h-6 w-6 items-center justify-center lg:flex">
                    <i className="fas fa-chevron-right text-[10px] text-sky-500/30" />
                  </div>
                )}

                <h3 className="text-sm font-black text-white">{step.title}</h3>
                <p className="mt-3 text-xs leading-5 text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY CHOOSE
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0d1117] py-20">

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/35 to-transparent" />
        <div className="pointer-events-none absolute left-0 top-1/3 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-sky-600/8 blur-[130px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-sky-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">Why Choose Us</span>
              </div>
              <h2
                className="font-black leading-tight text-white"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
              >
                Why Choose Our{" "}
                <span style={{ background: "linear-gradient(135deg, #38bdf8 0%, #22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Web Solutions?
                </span>
              </h2>
              <div className="my-5 h-px w-full bg-white/[0.06]" />
              <p className="text-sm leading-7 text-slate-400">
                We combine technical depth, design precision, and business strategy to build websites
                that perform — not just look good. Here's what sets us apart.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {whyUs.map((item, i) => {
                  const isHov = hoveredWhy === i;
                  return (
                    <div
                      key={item.text}
                      onMouseEnter={() => setHoveredWhy(i)}
                      onMouseLeave={() => setHoveredWhy(null)}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5 transition-all duration-200 hover:border-sky-500/30 hover:bg-sky-500/5"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-sky-500/10 transition-all duration-200">
                        <i className={`${item.icon} text-xs transition-colors duration-200`}
                          style={{ color: isHov ? "#38bdf8" : "#64748b" }} />
                      </div>
                      <span className="text-sm font-semibold text-slate-300">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => requestPricing("Website Development")}
                className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-[#0ea5e9] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-[#38bdf8] hover:shadow-sky-400/30"
              >
                Start Your Project
                <i className="fas fa-arrow-right text-xs" />
              </button>
            </div>

            {/* Right — quality panel */}
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 sm:p-8">
              <p className="mb-6 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                Our Commitment To Quality
              </p>

              {qualityBars.map((bar) => (
                <div key={bar.label} className="mb-5">
                  <div className="mb-2 flex justify-between">
                    <span className="text-sm font-semibold text-slate-300">{bar.label}</span>
                    <span className="text-sm font-black text-white">{bar.value}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/[0.06]">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ width: `${bar.value}%`, background: bar.color }}
                    />
                  </div>
                </div>
              ))}

              <div className="mt-8 grid grid-cols-2 gap-3">
                {miniStats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-center transition-all duration-200 hover:border-sky-500/20 hover:bg-sky-500/5"
                  >
                    <i className={`${s.icon} text-lg`} style={{ color: s.color }} />
                    <p className="mt-2 text-xl font-black text-white">{s.value}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA BANNER
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#13181f] py-14">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] w-[600px] rounded-full bg-sky-600/8 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-sky-500/15 bg-sky-500/[0.03] px-6 py-8 text-center sm:px-10 md:flex-row md:text-left">
            <div>
              <p className="font-black text-white" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}>
                Ready To Build Something{" "}
                <span style={{ background: "linear-gradient(135deg, #38bdf8 0%, #22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Remarkable?
                </span>
              </p>
              <p className="mt-1.5 text-sm text-slate-500">
                Let's turn your idea into a high-performing web product.
              </p>
            </div>
            <button
              onClick={() => requestPricing("Website Development")}
              className="inline-flex flex-shrink-0 items-center gap-2.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition-all hover:scale-105 hover:shadow-sky-500/30"
            >
              Get Free Quote
              <i className="fas fa-arrow-right text-xs" />
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}