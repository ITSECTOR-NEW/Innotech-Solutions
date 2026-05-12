import React, { useEffect, useState } from "react";
import { IOT_FEATURES } from "../../data/siteData";
import { useScrollReveal } from "../../hooks/useScrollReveal";

// Animated live dashboard
function LiveDashboard() {
  const [temp,  setTemp]  = useState("72.0");
  const [press, setPress] = useState("4.2");
  const [eff,   setEff]   = useState(94);
  const bars = [45,60,80,55,70,30,85,65,75,50,90,72];
  const colors = ["#10b981","#10b981","#f59e0b","#10b981","#10b981","#ef4444","#10b981","#10b981","#10b981","#f59e0b","#10b981","#10b981"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTemp(  (72 + (Math.random()-0.5)*4).toFixed(1));
      setPress( (4.2 + (Math.random()-0.5)*0.4).toFixed(1));
      setEff(   Math.round(94 + (Math.random()-0.5)*4));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/12">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
        <span className="font-display font-bold text-sm text-white">🏭 Factory Dashboard — Live</span>
        <span className="flex items-center gap-1.5 text-green-400 text-xs bg-green-400/10 border border-green-400/25 px-3 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 live-dot"></span>
          LIVE
        </span>
      </div>
      {/* Meters */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[{ val: `${temp}°C`, label: "Temperature" }, { val: `${press} bar`, label: "Pressure" }, { val: `${eff}%`, label: "Efficiency" }].map((m) => (
          <div key={m.label} className="p-3 rounded-xl bg-dark-900 border border-white/8 text-center">
            <div className="font-display font-extrabold text-xl text-cyan-400">{m.val}</div>
            <div className="text-[10px] text-slate-400 mt-1">{m.label}</div>
          </div>
        ))}
      </div>
      {/* Bar chart */}
      <div className="flex items-end gap-1 h-20">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t animate-barGrow"
            style={{ height: `${h}%`, background: colors[i], opacity: 0.8, animationDelay: `${i * 0.05}s` }}
          />
        ))}
      </div>
      <div className="flex gap-3 mt-2 text-[11px] text-slate-400">
        <span className="text-green-400">● Normal</span>
        <span className="text-orange-400">● Warning</span>
        <span className="text-red-400">● Alert</span>
      </div>
    </div>
  );
}

export default function IoT() {
  const heroRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="iot" className="py-24 bg-dark-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 blink"></span>
            Industry 4.0
          </div>
          <h2 className="font-display font-extrabold text-white mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Industrial <span className="gradient-text">IoT Solutions</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Transform your factory floor into a connected, intelligent ecosystem with real-time insights and automated decision-making.
          </p>
        </div>

        {/* Hero banner */}
        <div ref={heroRef} className="grid lg:grid-cols-2 gap-12 items-center p-10 rounded-3xl bg-gradient-to-br from-cyan-400/6 to-purple-600/6 border border-white/10 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 blink"></span>
              Smart Factory
            </div>
            <h3 className="font-display font-extrabold text-white mb-4" style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", lineHeight: 1.2 }}>
              Real-Time Industrial Intelligence
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Our IoT platforms connect machines, sensors, and systems to give you complete visibility and
              control over your operations. Reduce downtime by up to 40% with predictive maintenance and smart monitoring.
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-display font-semibold shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 transition-all"
            >
              Request Demo <i className="fas fa-arrow-right text-xs"></i>
            </button>
          </div>
          <LiveDashboard />
        </div>

        {/* Features grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {IOT_FEATURES.map((f) => (
            <div
              key={f.title}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:-translate-y-1 transition-all"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.gradient} grid place-items-center text-white mb-3`}>
                <i className={f.icon}></i>
              </div>
              <h4 className="font-display font-bold text-white text-sm mb-1.5">{f.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
