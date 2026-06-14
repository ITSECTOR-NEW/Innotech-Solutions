import React, { useState } from "react";
import { App_Dev_Description, App_Tech_Stack } from "../../data/siteData";

const ACCENT = {
  primary: "#0ea5e9",
  secondary: "#38bdf8",

  gradient:
    "linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)",

  gradientText:
    "linear-gradient(135deg, #38bdf8 0%, #22d3ee 100%)",

  glow: "bg-sky-600/10",
  glowAlt: "bg-cyan-500/8",

  border: "border-sky-500/20",

  pill: "border-sky-500/20 bg-sky-500/10",
  pillText: "text-sky-400",
  pillDot: "bg-sky-400",

  divider: "via-sky-400/50",

  cardHover:
    "hover:border-sky-500/30 hover:bg-white/[0.055]",

  iconBg: "bg-sky-500/10",

  iconHover: "#38bdf8",

  tagBorder: "border-sky-500/20",
  tagBg: "bg-sky-500/5",
  tagText: "text-sky-300",

  btnBg: "bg-[#0ea5e9]",
  btnHover: "hover:bg-[#38bdf8]",

  shadow: "shadow-sky-500/20",
};

export default function MobileApp() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredWhy, setHoveredWhy] = useState(null);
  const [activePlat, setActivePlat] = useState(0);

  const requestDemo = (name = "Mobile App Development") => {
    localStorage.setItem("selectedService", name);
    const contact = document.querySelector("#contact");
    if (contact) { contact.scrollIntoView({ behavior: "smooth" }); return; }
    window.location.href = "/#contact";
  };

  const process = [
    { step: "01", title: "Requirement Analysis", desc: "Deep-dive into your app idea, user personas, and business model to define a precise feature roadmap.", icon: "fas fa-clipboard-list" },
    { step: "02", title: "UI/UX Design",         desc: "Pixel-perfect screens and interactive prototypes that users love — tested before a single line of code.", icon: "fas fa-paint-brush" },
    { step: "03", title: "Agile Development",    desc: "Sprint-based builds with weekly demos, transparent communication, and constant iteration.", icon: "fas fa-code-branch" },
    { step: "04", title: "QA & Store Launch",    desc: "Thorough device testing, performance profiling, and guided submission to Play Store & App Store.", icon: "fas fa-rocket" },
  ];

  const whyUs = [
    { icon: "fab fa-android",    text: "Android & iOS Expertise" },
    { icon: "fas fa-paint-brush", text: "Intuitive UI/UX Design" },
    { icon: "fas fa-shield-alt", text: "Secure & Encrypted Apps" },
    { icon: "fas fa-bolt",       text: "High-Performance Architecture" },
    { icon: "fas fa-sync-alt",   text: "Real-Time Features & Sync" },
    { icon: "fas fa-headset",    text: "Post-Launch Support & Updates" },
  ];

  const platforms = [
    {
      label: "Android", icon: "fab fa-android", color: "#22c55e",
      features: ["Kotlin / Java", "Material You Design", "Google Play Store", "Adaptive Widgets", "Background Services", "Push Notifications"],
      desc: "Native Android apps built with Kotlin following Material Design guidelines for seamless performance on every device.",
    },
    {
      label: "iOS", icon: "fab fa-apple", color: "#e2e8f0",
      features: ["Swift / SwiftUI", "Human Interface Guide", "App Store Ready", "Siri Shortcuts", "Face ID Support", "ARKit Integration"],
      desc: "Polished iOS apps in Swift & SwiftUI, fine-tuned for Apple hardware and App Store guidelines.",
    },
    {
      label: "Cross-Platform", icon: "fas fa-layer-group", color: "#a78bfa",
      features: ["React Native", "Flutter", "Single Codebase", "60fps UI", "Native Modules", "OTA Updates"],
      desc: "One codebase, two stores — React Native & Flutter apps that feel truly native on both platforms.",
    },
  ];

  const qualityBars = [
    { label: "On-time Delivery",    value: 95, color: "#8b5cf6" },
    { label: "Client Satisfaction", value: 98, color: "#a78bfa" },
    { label: "Crash-Free Rate",     value: 99, color: "#10b981" },
    { label: "Store Approval Rate", value: 100, color: "#818cf8" },
  ];

  const miniStats = [
    { value: "2+",    label: "Apps Shipped",      icon: "fas fa-mobile-alt",  color: "#a78bfa" },
    { value: "4.8★",  label: "Avg Store Rating",  icon: "fas fa-star",        color: "#f59e0b" },
    { value: "2 Plat",label: "Android + iOS",     icon: "fas fa-layer-group", color: "#818cf8" },
    { value: "6 wks", label: "Avg Delivery",      icon: "fas fa-clock",       color: "#10b981" },
  ];

  return (
    <main className="min-h-screen bg-[#13181f]" style={{ fontFamily: "inherit" }}>

      {/* ═══════════════════════════════════════
          HERO — centered, matching WebDev layout
      ═══════════════════════════════════════ */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#0d1117]">

        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${ACCENT.divider} to-transparent`} />

        <div className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-sky-600/10 blur-[140px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/8 blur-[120px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />

        {/* Back Button */}
        <div className="absolute left-3 top-20 z-30 sm:left-6 sm:top-28 lg:left-8 lg:top-32">
          <a
            href="/"
            className="flex items-center justify-center h-10 w-10 sm:h-auto sm:w-auto sm:px-5 sm:py-2.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-slate-300 transition-all duration-300 hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-white"
          >
            <i className="fas fa-arrow-left text-sm" />
            <span className="hidden sm:inline ml-2 text-sm font-semibold">Back to Home</span>
          </a>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-24">
          <div className="mx-auto max-w-4xl text-center">

            {/* Pill */}
            <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 ${ACCENT.pill}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${ACCENT.pillDot}`} />
              <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${ACCENT.pillText}`}>
                Mobile App Development
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-black leading-[1.05] text-white"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.8rem)" }}
            >
              We Build Apps That
              <span
                className="block mt-1"
                style={{ background: ACCENT.gradientText, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                Users Love & Return To
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Modern, scalable mobile solutions delivered fast.
              From idea to App Store — designed for performance, built for results.
            </p>

            {/* Hero stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-14">
              {[
                { value: "2+",    label: "Apps Shipped" },
                { value: "4.8★",  label: "Store Rating" },
                { value: "6 wks", label: "Avg. Delivery" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p
                    className="font-black"
                    style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      background: ACCENT.gradientText,
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

            {/* Platform badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["Android", "iOS", "React Native", "Flutter"].map((p) => (
                <span key={p} className={`rounded-full border px-3 py-1 text-xs font-semibold ${ACCENT.tagBorder} ${ACCENT.tagBg} ${ACCENT.tagText}`}>
                  {p}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => requestDemo()}
                className={`inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all ${ACCENT.btnBg} ${ACCENT.btnHover} shadow-violet-500/25 hover:shadow-violet-400/40`}
              >
                Start Your App
                <i className="fas fa-arrow-right text-xs" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white/[0.09]">
                View Case Studies
                <i className="fas fa-external-link-alt text-xs" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          APP TYPES GRID
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#13181f] py-20">

        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${ACCENT.divider} to-transparent`} />
        <div className="pointer-events-none absolute right-0 top-0 h-[350px] w-[350px] translate-x-1/2 rounded-full bg-sky-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 ${ACCENT.pill}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${ACCENT.pillDot}`} />
              <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${ACCENT.pillText}`}>What We Build</span>
            </div>
            <h2 className="font-black leading-[1.15] text-white" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)" }}>
              Types of Apps{" "}
              <span style={{ background: ACCENT.gradientText, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                We Develop
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-[15px]">
              Tailored mobile solutions for startups, enterprises, and every industry in between.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {App_Dev_Description.map((item, i) => {
              const isHov = hoveredCard === i;
              return (
                <div
                  key={item.title}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 ${ACCENT.cardHover}`}
                >
                  <span
                    className="absolute left-0 top-0 h-[2px] w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `linear-gradient(90deg, ${ACCENT.primary}, transparent)` }}
                  />
                  <span
                    className="pointer-events-none absolute right-4 top-2 select-none font-black leading-none text-white/[0.03] transition-all duration-300 group-hover:text-white/[0.06]"
                    style={{ fontSize: "5rem" }} aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-sky-500/10 transition-all duration-300 group-hover:scale-105 group-hover:border-sky-500/30">
                      <i
                        className={`${item.icon} text-base transition-colors duration-300`}
                        style={{ color: isHov ? ACCENT.secondary : "#64748b" }}
                      />
                    </div>
                    <h3
                      className="text-[15px] font-bold leading-snug transition-colors duration-300"
                      style={{ color: isHov ? "#ffffff" : "#e2e8f0" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.desc}</p>
                  </div>

                  <div className="flex-1 px-6 pb-5">
                    <p className={`mb-3 text-[9px] font-black uppercase tracking-[0.18em] ${ACCENT.pillText}`}>Key Features</p>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                      {item.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <span className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full ${ACCENT.iconBg}`}>
                            <i className={`fas fa-check text-[7px] ${ACCENT.pillText}`} />
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



                  <div className="mx-6 border-t border-white/[0.05]" />
                  <div className="flex items-center justify-between gap-3 px-6 py-4">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <i className="far fa-clock text-[10px]" />
                      <span className="text-[11px] font-medium">{item.timeline}</span>
                    </div>
                    <button
                      onClick={() => requestDemo(item.title)}
                      className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-[11px] font-bold text-sky-400 transition-all hover:bg-violet-500/20 hover:text-white"
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
          PLATFORM TABS
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0d1117] py-20">

        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${ACCENT.divider} to-transparent`} />
        <div className="pointer-events-none absolute left-1/4 top-0 h-[350px] w-[350px] rounded-full bg-indigo-600/8 blur-[120px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 ${ACCENT.pill}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${ACCENT.pillDot}`} />
              <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${ACCENT.pillText}`}>Platform Capabilities</span>
            </div>
            <h2 className="font-black leading-[1.15] text-white" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)" }}>
              We Build For{" "}
              <span style={{ background: ACCENT.gradientText, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Every Platform
              </span>
            </h2>
          </div>

          <div className="mb-8 flex justify-center gap-2">
            {platforms.map((p, i) => (
              <button
                key={p.label}
                onClick={() => setActivePlat(i)}
                className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                  activePlat === i
                    ? "border-sky-500/40 bg-sky-500/15 text-white"
                    : "border-white/[0.07] bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-slate-200"
                }`}
              >
                <i className={`${p.icon} text-xs`} style={{ color: activePlat === i ? p.color : undefined }} />
                {p.label}
              </button>
            ))}
          </div>

          {platforms.map((p, i) => (
            <div key={p.label} className={`transition-all duration-300 ${activePlat === i ? "block" : "hidden"}`}>
              <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-center">
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 sm:p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04]">
                    <i className={`${p.icon} text-2xl`} style={{ color: p.color }} />
                  </div>
                  <h3 className="text-xl font-black text-white">{p.label} Development</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{p.desc}</p>
                  <button
                    onClick={() => requestDemo(`${p.label} App`)}
                    className={`mt-6 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-bold transition-all hover:bg-violet-500/20 hover:text-white ${ACCENT.border} ${ACCENT.iconBg} ${ACCENT.pillText}`}
                  >
                    Get {p.label} Quote
                    <i className="fas fa-arrow-right text-xs" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {p.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5 transition-all duration-200 hover:border-violet-500/25 hover:bg-violet-500/5"
                    >
                      <span className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${ACCENT.iconBg}`}>
                        <i className={`fas fa-check text-[7px] ${ACCENT.pillText}`} />
                      </span>
                      <span className="text-xs font-semibold text-slate-300">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TECH STACK — left text + right cards (matching WebDev layout)
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#13181f] py-20">

        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${ACCENT.divider} to-transparent`} />
        <div className="pointer-events-none absolute left-0 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/8 blur-[130px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            {/* Left */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-white/70" />
                <span className={`text-[10px] font-bold uppercase tracking-[0.25em] ${ACCENT.pillText}`}>
                  Technology Expertise
                </span>
              </div>
              <h2 className="font-black leading-tight text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Technologies Behind
                <span
                  className="block"
                  style={{ background: ACCENT.gradientText, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  Every Mobile Product
                </span>
              </h2>
              <div className="my-5 h-px w-full bg-white/[0.06]" />
              <p className="text-sm leading-7 text-slate-400">
                We combine trusted mobile frameworks, modern toolchains, and scalable cloud
                technologies to build secure, high-performance, and future-ready apps.
              </p>

              <ul className="mt-6 space-y-3">
                {["Battle-tested mobile stacks", "Cloud-native & scalable backend", "Security-first architecture", "Continuous integration & delivery"].map((pt) => (
                  <li key={pt} className="flex items-center gap-3">
                    <span className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${ACCENT.iconBg}`}>
                      <i className={`fas fa-check text-[8px] ${ACCENT.pillText}`} />
                    </span>
                    <span className="text-sm text-slate-400">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — stacked cards (matching WebDev) */}
            <div className="space-y-4">
              {App_Tech_Stack.map((stack) => (
                <div
                  key={stack.category}
                  className={`group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 transition-all duration-300 ${ACCENT.cardHover} sm:p-6`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10">
                      <i className={`${stack.icon} text-base text-violet-400`} />
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
                        className="rounded-full border border-sky-500/20 bg-sky-500/5 px-3 py-1 text-[11px] font-semibold text-sky-300"
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
      <section className="relative overflow-hidden bg-[#0d1117] py-20">

        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${ACCENT.divider} to-transparent`} />
        <div className="pointer-events-none absolute left-0 bottom-0 h-[300px] w-[300px] -translate-x-1/3 rounded-full bg-sky-600/8 blur-[110px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 ${ACCENT.pill}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${ACCENT.pillDot}`} />
              <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${ACCENT.pillText}`}>How We Work</span>
            </div>
            <h2 className="font-black leading-[1.15] text-white" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)" }}>
              Our{" "}
              <span style={{ background: ACCENT.gradientText, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Development Process
              </span>
            </h2>
          </div>

          <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className={`pointer-events-none absolute left-[12.5%] right-[12.5%] top-[38px] hidden h-px border-t border-dashed border-sky-500/20 lg:block`} />

            {process.map((step, idx) => (
              <div
                key={step.step}
                className={`group relative flex flex-col items-center rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 pt-6 text-center transition-all duration-300 hover:-translate-y-1 ${ACCENT.cardHover}`}
              >
                <span
                  className="absolute left-0 top-0 h-[2px] w-full rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, ${ACCENT.primary}, transparent)` }}
                />

                <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] transition-all duration-300 group-hover:border-sky-500/40 group-hover:bg-sky-500/10">
                  <i className={`${step.icon} text-lg text-slate-500 transition-colors duration-300 group-hover:text-sky-400`} />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20 text-[9px] font-black text-sky-300">
                    {step.step}
                  </span>
                </div>

                {idx < process.length - 1 && (
                  <div className="absolute -right-3 top-[38px] z-10 hidden h-6 w-6 items-center justify-center lg:flex">
                    <i className="fas fa-chevron-right text-[10px] text-violet-500/30" />
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
          WHY CHOOSE — text LEFT, quality panel RIGHT (matching WebDev)
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#13181f] py-20">

        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${ACCENT.divider} to-transparent`} />
        <div className="pointer-events-none absolute left-0 top-1/3 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-violet-600/8 blur-[130px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left — text */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7" style={{ background: ACCENT.primary }} />
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${ACCENT.pillText}`}>Why Choose Us</span>
              </div>
              <h2 className="font-black leading-tight text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Why Choose Our{" "}
                <span style={{ background: ACCENT.gradientText, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  App Solutions?
                </span>
              </h2>
              <div className="my-5 h-px w-full bg-white/[0.06]" />
              <p className="text-sm leading-7 text-slate-400">
                We combine technical depth, design precision, and mobile strategy to build apps
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
                      className={`flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5 transition-all duration-200 ${ACCENT.cardHover}`}
                    >
                      <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.08] ${ACCENT.iconBg} transition-all duration-200`}>
                        <i
                          className={`${item.icon} text-xs transition-colors duration-200`}
                          style={{ color: isHov ? ACCENT.secondary : "#64748b" }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-slate-300">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => requestDemo()}
                className={`mt-10 inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 ${ACCENT.btnBg} ${ACCENT.btnHover} ${ACCENT.shadow}`}
              >
                Start Your App
                <i className="fas fa-arrow-right text-xs" />
              </button>
            </div>

            {/* Right — quality panel with bars (matching WebDev structure) */}
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
                    className={`rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-center transition-all duration-200 hover:border-sky-500/20 hover:bg-sky-500/5`}
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
          BOTTOM CTA
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0d1117] py-14">
        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${ACCENT.divider} to-transparent`} />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] w-[600px] rounded-full bg-violet-700/8 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className={`flex flex-col items-center justify-between gap-6 rounded-2xl border bg-violet-500/[0.03] px-6 py-8 text-center ${ACCENT.border} sm:px-10 md:flex-row md:text-left`}>
            <div>
              <p className="font-black text-white" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}>
                Ready To Launch Your{" "}
                <span style={{ background: ACCENT.gradientText, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Dream App?
                </span>
              </p>
              <p className="mt-1.5 text-sm text-slate-500">
                Let's turn your idea into a store-ready mobile product.
              </p>
            </div>
            <button
              onClick={() => requestDemo()}
              className={`inline-flex flex-shrink-0 items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 ${ACCENT.btnBg} ${ACCENT.btnHover} ${ACCENT.shadow}`}
            >
              Start Your App
              <i className="fas fa-arrow-right text-xs" />
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}