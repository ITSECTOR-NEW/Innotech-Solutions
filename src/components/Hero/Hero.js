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

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <div>
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
            <p className="animate-fadeUp-2 text-slate-400 text-lg leading-relaxed mb-9 max-w-lg">
              From cutting-edge web development and mobile apps to industrial IoT, robotics
              training, and AI integration — {COMPANY.name} powers digital transformation
              for industries, startups, and schools.
            </p>

            {/* Buttons */}
            <div className="animate-fadeUp-3 flex flex-wrap gap-3 mb-12">
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
            <div className="animate-fadeUp-4 flex flex-wrap gap-8">
              {HERO_STATS.map((s) => (
                <StatBox key={s.label} {...s} />
              ))}
            </div>
          </div>

          {/* ── RIGHT: Cards grid ── */}
          <div className="hidden lg:grid grid-cols-2 gap-3.5">
            {[
              { icon: "fas fa-globe",        bg: "from-cyan-400 to-blue-500",    title: "Web Development",  sub: "Modern React & Next.js web applications" },
              { icon: "fas fa-mobile-alt",   bg: "from-purple-500 to-pink-500",  title: "Mobile Apps",      sub: "Native & cross-platform solutions" },
              { icon: "fas fa-network-wired",bg: "from-orange-400 to-red-500",   title: "Industrial IoT",   sub: "Smart factory & sensor monitoring Applications" },
              { icon: "fas fa-robot",        bg: "from-green-400 to-blue-500",   title: "Robotics & AI Training",    sub: "Training and Counselling session on AI & Robotics at Educational Institutes" },
            ].map((card) => (
              <div
                key={card.title}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:-translate-y-1.5 transition-all tilt-card"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.bg} grid place-items-center text-white text-lg mb-3`}>
                  <i className={card.icon}></i>
                </div>
                <h4 className="font-display font-bold text-sm text-white mb-1">{card.title}</h4>
                <p className="text-xs text-slate-400">{card.sub}</p>
              </div>
            ))}
            {/* Wide card */}
            <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-purple-600/10 border border-cyan-400/30 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 grid place-items-center text-white text-2xl flex-shrink-0">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div>
                <h4 className="font-display font-bold text-white mb-1">School & College Training</h4>
                <p className="text-xs text-slate-400">Robotics, IoT & AI workshops — empowering the next generation of innovators</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
