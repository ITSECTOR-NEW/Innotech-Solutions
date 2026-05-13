import React from "react";
import { HERO_STATS, COMPANY } from "../../data/siteData";
import { useCounter } from "../../hooks/useScrollReveal";

// ── Small stat box with animated counter
function StatBox({ num, suffix, label }) {
  const ref = useCounter(num);
  return (
    <div className="text-center">
      <div className="font-display text-3xl font-extrabold text-cyan-400">
        <span ref={ref}>0</span>{suffix}
      </div>
      <div className="text-xs text-slate-400 mt-1">{label}</div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">

      {/* ── Background orbs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[80px] bg-cyan-500 -top-32 -left-48 animate-float-slow" />
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-25 blur-[80px] bg-purple-600 -bottom-24 -right-24 animate-float-delay" />
        <div className="absolute w-[300px] h-[300px] rounded-full opacity-20 blur-[80px] bg-blue-500 top-1/2 left-1/2 animate-float" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(100,160,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(100,160,255,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <div className="flex justify-center">

          {/* ── Hero Content ── */}
          <div className="text-center">
            {/* Badge */}
            {/* <div className="animate-fadeUp inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/25 text-cyan-400 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 blink"></span>
              Technology Partner
            </div> */}

            {/* Title */}
            <h1 className="animate-fadeUp-1 font-display font-extrabold leading-[1.08] mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
              Build. Automate.<br />
              <span className="gradient-text">Innovate.</span><br />
              Transform.
            </h1>

            {/* Subtitle */}
            <p className="animate-fadeUp-2 text-slate-400 text-lg leading-relaxed mb-9 max-w-2xl mx-auto">
              {COMPANY.name} helps businesses, startups, and institutions turn bold ideas into
              polished digital experiences with clear strategy, thoughtful design, and reliable
              technology.
            </p>

            {/* Buttons */}
            <div className="animate-fadeUp-3 flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => scrollTo("#services")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-display font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 transition-all"
              >
                Explore Services <i className="fas fa-arrow-right text-xs"></i>
              </button>
              <button
                onClick={() => scrollTo("#portfolio")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-display font-semibold hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
              >
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="animate-fadeUp-4 flex flex-wrap justify-center gap-8">
              {HERO_STATS.map((s) => (
                <StatBox key={s.label} {...s} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
