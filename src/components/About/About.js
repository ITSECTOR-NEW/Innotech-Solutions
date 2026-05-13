import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const VALUES = [
  { icon: "fas fa-rocket",      color: "text-cyan-400",   title: "Innovation First",   desc: "Cutting-edge technology in every solution we build" },
  { icon: "fas fa-users",       color: "text-purple-400", title: "Client-Centric",     desc: "Your success is our success — always" },
  { icon: "fas fa-certificate", color: "text-green-400",  title: "Quality Assured",    desc: "Enterprise-grade quality in every deliverable" },
  { icon: "fas fa-lightbulb",   color: "text-orange-400", title: "Expert Team",        desc: "Seasoned engineers, designers & strategists" },
];

export default function About() {
  const leftRef  = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Visual card ── */}
          <div ref={leftRef}>
            <div className="relative rounded-3xl bg-gradient-to-br from-cyan-400/8 to-purple-600/8 border border-white/10 overflow-hidden aspect-[4/3] grid place-items-center">
              {/* Center icon */}
              <div className="text-center z-10">
                <i className="fas fa-microchip text-6xl gradient-text block mb-4"></i>
                <h3 className="font-display font-bold text-lg text-white">Technology-First Company</h3>
              </div>
              {/* Floating badges */}
              {[
                { label: "ISO Certified",    icon: "fas fa-check-circle", pos: "top-6 left-6" },
                { label: "Secure & Scalable",icon: "fas fa-shield-halved",pos: "top-6 right-6" },
                { label: "5-Star Rated",     icon: "fas fa-star",         pos: "bottom-6 left-6" },
                { label: "24/7 Support",     icon: "fas fa-headset",      pos: "bottom-6 right-6" },
              ].map((b, i) => (
                <div
                  key={b.label}
                  className={`absolute ${b.pos} flex items-center gap-2 px-3 py-2 rounded-xl glass text-xs font-semibold text-white animate-float`}
                  style={{ animationDelay: `${i * 1.5}s` }}
                >
                  <i className={`${b.icon} text-cyan-400`}></i>
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Text ── */}
          <div ref={rightRef}>
            {/* Section tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 blink"></span>
              About Innotech Solutions
            </div>

            <h2 className="font-display font-extrabold mb-4" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", lineHeight: 1.15 }}>
              We Engineer the <span className="gradient-text">Future</span> of Technology
            </h2>

            <p className="text-slate-400 mb-3 leading-relaxed">
              Innotech Solutions is a full-stack technology company dedicated to digital transformation.
              We combine deep engineering expertise with innovative design to deliver solutions that
              matter — from industrial automation floors to school classrooms.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Founded with a vision to bridge the gap between technology and industry, we've helped
              businesses across manufacturing, education, healthcare, and logistics sectors achieve
              operational excellence through smart digital solutions.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all"
                >
                  <i className={`${v.icon} ${v.color} text-lg mt-0.5`}></i>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white mb-0.5">{v.title}</h4>
                    <p className="text-xs text-slate-400">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-display font-semibold shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 transition-all"
            >
              Work With Us <i className="fas fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
