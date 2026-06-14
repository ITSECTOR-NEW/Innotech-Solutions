import React, { useState, useEffect, useRef } from "react";
import { AI_SERVICE_PAGES } from "../../data/siteData";

const TEAL = "#0fb7c5";
const TEAL_GLOW = "rgba(15,183,197,0.12)";

export default function AIService({ serviceKey }) {
  const service = AI_SERVICE_PAGES[serviceKey] || AI_SERVICE_PAGES["ai-services"];
  const [activeService, setActiveService] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = {};
    Object.keys(sectionRefs.current).forEach((key) => {
      const el = sectionRefs.current[key];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisibleSections((p) => ({ ...p, [key]: true }));
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      observers[key] = obs;
    });
    return () => Object.values(observers).forEach((o) => o.disconnect());
  }, []);

  const setRef = (key) => (el) => { sectionRefs.current[key] = el; };

  const requestDemo = () => {
    const contact = document.querySelector("#contact");
    if (contact) { contact.scrollIntoView({ behavior: "smooth" }); return; }
    window.location.href = "/#contact";
  };

  const fadeIn = (key, delay = "0s") => ({
    opacity: visibleSections[key] ? 1 : 0,
    transform: visibleSections[key] ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}`,
  });

  return (
    <main className="min-h-screen bg-[#0d1117] text-white" style={{ fontFamily: "inherit" }}>

      {/* ══════════════════════════════════════
          HERO — no image, dark bg with glow + grid
      ══════════════════════════════════════ */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#0d1117]">

        {/* Top teal scan line */}
        <div className="absolute left-0 right-0 top-0 h-[2px]" style={{ background: TEAL }} />

        {/* Ambient glows */}
        <div className="pointer-events-none absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full blur-[160px]" style={{ background: "rgba(15,183,197,0.08)" }} />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full blur-[140px]" style={{ background: "rgba(15,183,197,0.06)" }} />

        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        {/* Back button */}
        <div className="absolute left-4 top-20 z-30 sm:left-6 sm:top-28 lg:left-8 lg:top-32">
          <a
            href="/"
            className="flex items-center justify-center h-10 w-10 sm:h-auto sm:w-auto sm:px-5 sm:py-2.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-slate-300 transition-all duration-300 hover:border-[#0fb7c5]/50 hover:bg-[#0fb7c5]/10 hover:text-white"
          >
            <i className="fas fa-arrow-left text-sm" />
            <span className="hidden sm:inline ml-2 text-sm font-semibold">Back to Home</span>
          </a>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-24">
          <div className="mx-auto max-w-4xl text-center">

            {/* Eyebrow pill */}
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{ borderColor: `${TEAL}35`, background: `${TEAL}12` }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: TEAL }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: TEAL }}>
                {service.eyebrow}
              </span>
            </div>

            <h1
              className="font-black leading-[1.05] text-white"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.8rem)" }}
            >
              {service.title}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              {service.subtitle}
            </p>

            {/* Inline stats row */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-14">
              {(service.heroStats || [
                { value: "98%",  label: "Client Satisfaction" },
                { value: "50+",  label: "AI Models Deployed" },
                { value: "3×",   label: "Avg. Efficiency Gain" },
              ]).map((s) => (
                <div key={s.label} className="text-center">
                  <p
                    className="font-black"
                    style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      color: TEAL,
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={requestDemo}
                className="inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:scale-105"
                style={{ background: TEAL, boxShadow: `0 8px 24px ${TEAL_GLOW}` }}
              >
                Let's Talk
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

      {/* ══════════════════════════════════════
          INTRO — text left, capability cards right
      ══════════════════════════════════════ */}
      <section
        ref={setRef("intro")}
        className="relative overflow-hidden bg-[#13181f] py-24"
        style={fadeIn("intro")}
      >
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${TEAL}50, transparent)` }} />
        <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] translate-x-1/3 rounded-full blur-[140px]" style={{ background: TEAL_GLOW }} />

        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">

          {/* Left — text */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-12 w-1 rounded-full flex-shrink-0" style={{ background: TEAL }} />
              <h2
                className="font-black leading-tight text-white"
                style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)" }}
              >
                {service.introTitle}
                <span style={{ color: TEAL }}>{service.introAccent}</span>
              </h2>
            </div>

            <p className="text-[15px] leading-8 text-slate-400">{service.intro}</p>
            {service.introSecond && (
              <p className="mt-4 text-[15px] leading-8 text-slate-400">{service.introSecond}</p>
            )}

            <div className="mt-8 space-y-3">
              {service.points.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3.5 transition-all duration-200 hover:border-[#0fb7c5]/20 hover:bg-[#0fb7c5]/5"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ background: `${TEAL}18`, border: `1px solid ${TEAL}35` }}
                  >
                    <i className="fas fa-check text-[8px]" style={{ color: TEAL }} />
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>

            <button
              onClick={requestDemo}
              className="mt-9 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:scale-105"
              style={{ background: TEAL, boxShadow: `0 8px 24px ${TEAL_GLOW}` }}
            >
              Let's Talk
              <i className="fas fa-arrow-right text-xs" />
            </button>
          </div>

          {/* Right — capability highlight cards */}
          <div className="grid grid-cols-2 gap-3">
            {(service.capabilities || service.points.slice(0, 4)).map((cap, i) => {
              const icons = ["fas fa-brain", "fas fa-bolt", "fas fa-shield-alt", "fas fa-chart-line", "fas fa-code", "fas fa-sync-alt"];
              return (
                <div
                  key={i}
                  className="flex flex-col gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0fb7c5]/25 hover:bg-[#0fb7c5]/5"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl border"
                    style={{ background: `${TEAL}12`, borderColor: `${TEAL}25` }}
                  >
                    <i className={`${icons[i % icons.length]} text-sm`} style={{ color: TEAL }} />
                  </div>
                  <p className="text-xs font-semibold leading-5 text-slate-300">
                    {typeof cap === "string" ? cap : cap.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES — tab selector + detail panel
      ══════════════════════════════════════ */}
      <section
        ref={setRef("services")}
        className="relative overflow-hidden bg-[#0d1117] py-24"
        style={fadeIn("services", "0.1s")}
      >
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${TEAL}50, transparent)` }} />
        <div className="pointer-events-none absolute left-0 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]" style={{ background: TEAL_GLOW }} />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{ borderColor: `${TEAL}30`, background: `${TEAL}10` }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: TEAL }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: TEAL }}>
                What We Offer
              </span>
            </div>
            <h2 className="font-black leading-[1.15] text-white" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)" }}>
              {service.servicesTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
              {service.servicesIntro}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr] lg:items-start">

            {/* Tab list */}
            <div className="flex flex-col gap-2">
              {service.services.map((item, i) => (
                <button
                  key={item.title}
                  onClick={() => setActiveService(i)}
                  className="group flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-200"
                  style={{
                    borderColor: activeService === i ? `${TEAL}40` : "rgba(255,255,255,0.06)",
                    background: activeService === i ? `${TEAL}12` : "rgba(255,255,255,0.02)",
                  }}
                >
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-200"
                    style={{
                      background: activeService === i ? TEAL : "rgba(255,255,255,0.05)",
                      border: `1px solid ${activeService === i ? TEAL : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    <i
                      className={`${item.icon} text-sm`}
                      style={{ color: activeService === i ? "#fff" : "#64748b" }}
                    />
                  </div>
                  <p
                    className="flex-1 text-sm font-bold leading-snug transition-colors duration-200"
                    style={{ color: activeService === i ? "#fff" : "#94a3b8" }}
                  >
                    {item.title}
                  </p>
                  <i
                    className="fas fa-chevron-right text-[10px] transition-all duration-200"
                    style={{ color: activeService === i ? TEAL : "transparent" }}
                  />
                </button>
              ))}
            </div>

            {/* Detail panel — no image, rich content */}
            {service.services[activeService] && (
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8">

                {/* Icon + title */}
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ background: `${TEAL}15`, border: `1px solid ${TEAL}35` }}
                  >
                    <i className={`${service.services[activeService].icon} text-xl`} style={{ color: TEAL }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">AI Service</p>
                    <h3 className="text-lg font-black text-white">{service.services[activeService].title}</h3>
                  </div>
                </div>

                {/* Teal divider */}
                <div className="mb-6 h-px w-full" style={{ background: `linear-gradient(90deg, ${TEAL}40, transparent)` }} />

                <p className="text-sm leading-7 text-slate-400">
                  {service.services[activeService].desc}
                </p>

                {/* Feature tags */}
                {service.services[activeService].features && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.services[activeService].features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border px-3 py-1 text-[11px] font-semibold"
                        style={{ borderColor: `${TEAL}25`, background: `${TEAL}08`, color: TEAL }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bottom metric strip */}
                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/[0.05] pt-6">
                  {(service.services[activeService].stats || [
                    { value: "Fast", label: "Deployment" },
                    { value: "Scalable", label: "Architecture" },
                    { value: "Secure", label: "By Design" },
                  ]).map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-base font-black" style={{ color: TEAL }}>{s.value}</p>
                      <p className="mt-0.5 text-[10px] font-medium text-slate-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={requestDemo}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-bold transition-all hover:scale-105"
                  style={{ borderColor: `${TEAL}40`, color: TEAL, background: `${TEAL}10` }}
                >
                  Discuss This Service
                  <i className="fas fa-arrow-right text-xs" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY CHOOSE — text left, metric panel right
      ══════════════════════════════════════ */}
      <section
        ref={setRef("why")}
        className="relative overflow-hidden bg-[#13181f] py-24"
        style={fadeIn("why", "0.1s")}
      >
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${TEAL}50, transparent)` }} />
        <div className="pointer-events-none absolute right-0 top-1/3 h-[380px] w-[380px] translate-x-1/2 rounded-full blur-[130px]" style={{ background: TEAL_GLOW }} />

        <div className="relative mx-auto grid max-w-6xl items-start gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">

          {/* Left — text + why points */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7" style={{ background: TEAL }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: TEAL }}>
                Why Choose Us
              </span>
            </div>
            <h2 className="font-black leading-tight text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              {service.whyTitle}
            </h2>
            <div className="my-5 h-px w-full bg-white/[0.06]" />
            <p className="text-[15px] leading-8 text-slate-400">{service.whyIntro}</p>

            <div className="mt-8 space-y-3">
              {service.whyPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 transition-all duration-200 hover:border-[#0fb7c5]/20 hover:bg-[#0fb7c5]/5"
                >
                  <div
                    className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ background: TEAL }}
                  >
                    <i className="fas fa-check text-[8px] text-white" />
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>

            <button
              onClick={requestDemo}
              className="mt-10 inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-bold text-white uppercase tracking-wide transition-all hover:scale-105"
              style={{ background: TEAL, boxShadow: `0 8px 24px ${TEAL_GLOW}` }}
            >
              Get Started
              <i className="fas fa-arrow-right text-xs" />
            </button>
          </div>

          {/* Right — metric / commitment panel */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 sm:p-8">
            <p className="mb-6 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
              Our Commitment To Excellence
            </p>

            {/* Progress bars */}
            {(service.qualityBars || [
              { label: "Model Accuracy",      value: 96, color: TEAL },
              { label: "On-time Delivery",    value: 95, color: "#10b981" },
              { label: "Client Satisfaction", value: 98, color: "#818cf8" },
              { label: "System Uptime",       value: 99, color: "#f59e0b" },
            ]).map((bar) => (
              <div key={bar.label} className="mb-5">
                <div className="mb-2 flex justify-between">
                  <span className="text-sm font-semibold text-slate-300">{bar.label}</span>
                  <span className="text-sm font-black text-white">{bar.value}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/[0.06]">
                  <div
                    className="h-2 rounded-full transition-all duration-700"
                    style={{ width: `${bar.value}%`, background: bar.color }}
                  />
                </div>
              </div>
            ))}

            {/* Mini stat grid */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {(service.miniStats || [
                { value: "50+",  label: "AI Solutions Built",  icon: "fas fa-robot",      color: TEAL },
                { value: "4.9★", label: "Average Rating",      icon: "fas fa-star",       color: "#f59e0b" },
                { value: "15+",  label: "Industries Served",   icon: "fas fa-globe",      color: "#10b981" },
                { value: "2 yrs",label: "In Business",         icon: "fas fa-calendar",   color: "#818cf8" },
              ]).map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-center transition-all duration-200 hover:border-[#0fb7c5]/20 hover:bg-[#0fb7c5]/5"
                >
                  <i className={`${s.icon} text-lg`} style={{ color: s.color }} />
                  <p className="mt-2 text-xl font-black text-white">{s.value}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM CTA BANNER
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0d1117] py-16">
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${TEAL}50, transparent)` }} />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] w-[600px] rounded-full blur-[130px]" style={{ background: TEAL_GLOW }} />
        </div>

        <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div
            className="flex flex-col items-center justify-between gap-8 rounded-2xl border px-8 py-10 text-center md:flex-row md:text-left md:px-12"
            style={{ borderColor: `${TEAL}25`, background: `${TEAL}06` }}
          >
            <div className="max-w-xl">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: TEAL }}>
                Free Consultation
              </p>
              <p className="font-black leading-tight text-white" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)" }}>
                Want clarity on your{" "}
                <span style={{ color: TEAL }}>project idea?</span>
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Share your business process, training need, IoT challenge, data problem, or
                automation goal — we'll help you choose the right first step.
              </p>
            </div>
            <button
              onClick={requestDemo}
              className="inline-flex flex-shrink-0 items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-white uppercase tracking-wide transition-all hover:scale-105"
              style={{ background: TEAL, boxShadow: `0 8px 24px ${TEAL_GLOW}` }}
            >
              Book Consultation
              <i className="fas fa-arrow-right text-xs" />
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}