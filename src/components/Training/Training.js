import React from "react";
import { TRAINING_PROGRAMS, TRAINING_TOOLS, TRAINING_STATS } from "../../data/siteData";
import { useScrollReveal, useCounter } from "../../hooks/useScrollReveal";

function TStat({ num, label }) {
  const ref = useCounter(num);
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
      <div className="font-display font-extrabold text-2xl text-cyan-400">
        <span ref={ref}>0</span>{label.includes("%") ? "%" : "+"}
      </div>
      <div className="text-xs text-slate-400 mt-1">{label.replace("% Satisfaction","Satisfaction")}</div>
    </div>
  );
}

export default function Training() {
  const leftRef  = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="training" className="py-24 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 blink"></span>
            Education Programs
          </div>
          <h2 className="font-display font-extrabold text-white mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Student <span className="gradient-text">Training Programs</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Empowering the next generation with hands-on STEM education in Robotics, AI, IoT, and Automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left: Program cards */}
          <div ref={leftRef} className="flex flex-col gap-3.5">
            {TRAINING_PROGRAMS.map((p) => (
              <div
                key={p.title}
                className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10
                  hover:border-cyan-400/40 hover:translate-x-1.5 hover:bg-white/5 transition-all cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} grid place-items-center text-white text-xl flex-shrink-0`}>
                  <i className={p.icon}></i>
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm mb-1">{p.title}</h4>
                  <p className="text-xs text-slate-400 mb-2">{p.desc}</p>
                  <span className="inline-block text-[11px] px-2.5 py-0.5 rounded-full bg-green-400/10 border border-green-400/25 text-green-400">
                    {p.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Stats + tools */}
          <div ref={rightRef} className="sticky top-24 flex flex-col gap-5">
            {/* Impact card */}
            <div className="p-7 rounded-2xl bg-gradient-to-br from-cyan-400/8 to-purple-600/8 border border-white/15">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 blink"></span>
                Our Impact
              </div>
              <h3 className="font-display font-extrabold text-white mb-3" style={{ fontSize: "clamp(1.2rem,2.5vw,1.6rem)" }}>
                Shaping Tomorrow's <span className="gradient-text">Innovators</span>
              </h3>
              <p className="text-slate-400 text-sm mb-5">
                We've trained thousands of students across Madhya Pradesh and beyond, creating a strong
                pipeline of future engineers and entrepreneurs.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {TRAINING_STATS.map((s) => <TStat key={s.label} {...s} />)}
              </div>
            </div>

            {/* Technologies card */}
            <div className="p-6 rounded-2xl glass2">
              <h4 className="font-display font-bold text-white text-sm mb-4">Technologies We Teach</h4>
              <div className="grid grid-cols-3 gap-2.5">
                {TRAINING_TOOLS.map((t) => (
                  <div
                    key={t}
                    className="py-2.5 px-2 rounded-xl bg-white/5 border border-white/10 text-center text-xs text-slate-400 hover:border-cyan-400/40 hover:text-cyan-400 transition-all"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
