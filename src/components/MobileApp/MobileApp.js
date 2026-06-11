import React from "react";
import {App_Dev_Description} from "../../data/siteData";
import {App_Tech_Stack} from "../../data/siteData";
import { useNavigate } from "react-router-dom";
export default function MobileApp() {

  const requestDemo = () => {
    const contact = document.querySelector("#contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.location.href = "/#contact";
  };

   

  const process = [
    {
      step: "01",
      title: "Requirement Analysis",
      desc: "Deep-dive into your app idea, user personas, and business model to define a precise feature roadmap.",
      icon: "fas fa-clipboard-list",
    },
    {
      step: "02",
      title: "UI/UX Design",
      desc: "Pixel-perfect screens and interactive prototypes that users love — tested before a single line of code.",
      icon: "fas fa-paint-brush",
    },
    {
      step: "03",
      title: "Agile Development",
      desc: "Sprint-based builds with weekly demos, transparent communication, and constant iteration.",
      icon: "fas fa-code-branch",
    },
    {
      step: "04",
      title: "QA & Store Launch",
      desc: "Thorough device testing, performance profiling, and guided submission to Play Store & App Store.",
      icon: "fas fa-rocket",
    },
  ];

  const whyUs = [
    { icon: "fab fa-android", text: "Android & iOS Expertise" },
    { icon: "fas fa-paint-brush", text: "Intuitive UI/UX Design" },
    { icon: "fas fa-shield-alt", text: "Secure & Encrypted Apps" },
    { icon: "fas fa-bolt", text: "High-Performance Architecture" },
    { icon: "fas fa-sync-alt", text: "Real-Time Features & Sync" },
    { icon: "fas fa-headset", text: "Post-Launch Support & Updates" },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-800">

      {/* ── HERO — split layout ── */}
        <section
                className="
                relative flex
                min-h-[100svh]
                items-center
                overflow-hidden
                bg-gradient-to-br
                from-[#0f172a]
                via-[#0c2340]
                to-[#0f3460]
              "
              >
        {/* <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-500/10" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#0ea5e9]/10" /> */}

        <div
        className="
        relative z-10
        mx-auto w-full max-w-6xl
        px-6
        pt-28 pb-12
        sm:pt-32
        md:pt-24 md:pb-0
      "
      >
          
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left text */}
            <div>
              <span className="inline-block rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-violet-300">
                Mobile App Development
              </span>
              <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
                Apps That Users
                <span className="block text-[#38bdf8]">Love & Return To</span>
              </h1>
              <p className="mt-5 text-base leading-8 text-slate-300">
                We design and develop Android, iOS, and cross-platform apps that combine
                stunning UI with rock-solid performance — from idea to store launch.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={requestDemo}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0ea5e9] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-[#0ea5e9]/30 transition-all hover:bg-[#38bdf8]"
                >
                  Start Your App
                  <i className="fas fa-arrow-right text-xs" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-white/10">
                  View Case Studies
                  <i className="fas fa-external-link-alt text-xs" />
                </button>
              </div>
            </div>

            {/* Right — stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2+", label: "Apps Shipped", icon: "fas fa-mobile-alt", color: "text-[#38bdf8]", bg: "from-[#0ea5e9]/20 to-[#0ea5e9]/5" },
                { value: "4.8★", label: "Avg Store Rating", icon: "fas fa-star", color: "text-amber-400", bg: "from-amber-500/20 to-amber-500/5" },
                { value: "2 Plat.", label: "Android + iOS", icon: "fas fa-layer-group", color: "text-violet-400", bg: "from-violet-500/20 to-violet-500/5" },
                { value: "6 wks", label: "Avg Delivery", icon: "fas fa-clock", color: "text-emerald-400", bg: "from-emerald-500/20 to-emerald-500/5" },
              ].map((s) => (
                <div key={s.label} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${s.bg} p-6 backdrop-blur-sm`}>
                  <i className={`${s.icon} text-2xl ${s.color}`} />
                  <p className="mt-3 text-2xl font-black text-white">{s.value}</p>
                  <p className="mt-1 text-xs font-medium text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES CARDS ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0ea5e9]">— What We Build</span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Types Of Apps We Develop</h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8]" />
            <p className="mt-5 text-base leading-7 text-slate-500">
              Tailored mobile solutions for startups, enterprises, and every industry in between.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {App_Dev_Description.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-[#f8fafc] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0ea5e9]/50 hover:shadow-lg"
              >
                <div className="p-6 pb-5">
                  <div className="flex items-start gap-4">
                    <div className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br ${item.accent} border ${item.accentBorder} shadow-sm`}>
                      <i className={`${item.icon} ${item.accentIcon} text-base`} />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-base font-bold text-slate-900 leading-snug transition-colors duration-200 group-hover:text-[#0ea5e9]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 px-6 pb-5">
                  <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-[#0ea5e9]">Key Features</p>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
                    {item.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#0ea5e9]/10">
                          <i className="fas fa-check text-[8px] text-[#0ea5e9]" />
                        </span>
                        <span className="text-xs font-medium text-slate-600">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mx-6 border-t border-slate-200" />

                <div className="flex items-center justify-between gap-3 px-6 py-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <i className="far fa-clock text-[10px]" />
                      <span className="text-[11px] font-medium">{item.timeline}</span>
                    </div>
                    {/* <p className="mt-0.5 text-sm font-black text-slate-800">{item.price}</p> */}
                  </div>
                  <button
                    onClick={requestDemo}
                    className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full bg-[#0f172a] px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-white transition-all hover:bg-[#0ea5e9] hover:shadow-md"
                  >
                    Request Pricing
                    <i className="fas fa-arrow-right text-[9px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK — dark section ── */}
      <section className="bg-[#0f172a] py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#38bdf8]">— Technology Stack</span>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Built With Industry-Leading Tools</h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8]" />
            <p className="mt-5 text-sm leading-7 text-slate-400">
              From cross-platform frameworks to scalable cloud backends — we use what's best for your app.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {App_Tech_Stack.map((stack) => (
              <div
                key={stack.category}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#0ea5e9]/40"
              >
                <div className={`mx-auto mb-5 grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br ${stack.color} border ${stack.border}`}>
                  <i className={`${stack.icon} text-xl ${stack.iconColor}`} />
                </div>
                <h3 className="text-base font-black text-white">{stack.category}</h3>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {stack.items.map((tech) => (
                    <span key={tech} className={`rounded-full border ${stack.tagBorder} ${stack.tagBg} px-3.5 py-1.5 text-xs font-semibold ${stack.tagText}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0ea5e9]">— How We Deliver</span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">From Idea To App Store</h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8]" />
          </div>

          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[38px] hidden h-px border-t-2 border-dashed border-[#0ea5e9]/25 lg:block" />

            {process.map((step, idx) => (
              <div
                key={step.step}
                className="group relative flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-7 pt-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#0ea5e9]/40 hover:shadow-lg"
              >
                <div className="relative mb-5 grid h-16 w-16 place-items-center rounded-full border-2 border-[#0ea5e9]/30 bg-[#f8fafc] shadow-md shadow-[#0ea5e9]/10 transition-all duration-300 group-hover:border-[#0ea5e9] group-hover:bg-white">
                  <i className={`${step.icon} text-lg text-[#0ea5e9]`} />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#0f172a] text-[9px] font-black text-white">
                    {step.step}
                  </span>
                </div>

                {idx < process.length - 1 && (
                  <div className="absolute -right-3 top-[38px] z-10 hidden h-6 w-6 items-center justify-center lg:flex">
                    <i className="fas fa-chevron-right text-[#0ea5e9]/50 text-xs" />
                  </div>
                )}

                <h3 className="text-sm font-black text-slate-900">{step.title}</h3>
                <p className="mt-3 text-xs leading-5 text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE — reversed layout vs web dev ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">

          {/* Left — platform comparison panel */}
          <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-8 shadow-sm">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Platform Capabilities</p>

            {[
              { platform: "Android", icon: "fab fa-android", color: "text-green-500", features: ["Kotlin", "Material You", "Play Store", "Widgets"] },
              { platform: "iOS", icon: "fab fa-apple", color: "text-slate-800", features: ["Swift", "SwiftUI", "App Store", "Shortcuts"] },
              { platform: "Cross-Platform", icon: "fas fa-layer-group", color: "text-[#0ea5e9]", features: ["React Native", "Flutter", "Single Build", "60fps UI"] },
            ].map((plat) => (
              <div key={plat.platform} className="mb-4 rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-3 mb-3">
                  <i className={`${plat.icon} text-xl ${plat.color}`} />
                  <span className="text-sm font-black text-slate-800">{plat.platform}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {plat.features.map((f) => (
                    <span key={f} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{f}</span>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { value: "2+", label: "Apps Launched", icon: "fas fa-rocket", color: "text-[#0ea5e9]" },
                { value: "98%", label: "Crash-Free Rate", icon: "fas fa-shield-alt", color: "text-emerald-500" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                  <i className={`${s.icon} ${s.color} text-lg`} />
                  <p className="mt-2 text-xl font-black text-slate-900">{s.value}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right content */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0ea5e9]">— Why Choose Us</span>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              Why Choose Our{" "}
              <span className="text-[#0ea5e9]">App Solutions?</span>
            </h2>
            <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8]" />

            <p className="mt-6 text-base leading-8 text-slate-500">
              We don't just code apps — we craft digital products that users keep opening.
              Every decision from architecture to animation is intentional.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {whyUs.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 shadow-sm transition-all hover:border-[#0ea5e9]/40 hover:shadow-md"
                >
                  <div className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#0ea5e9]/15 to-[#0ea5e9]/5 border border-[#0ea5e9]/20">
                    <i className={`${item.icon} text-[#0ea5e9] text-xs`} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={requestDemo}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-[#0ea5e9] hover:shadow-lg hover:shadow-[#0ea5e9]/30"
            >
              Build Your App
              <i className="fas fa-arrow-right text-xs" />
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}