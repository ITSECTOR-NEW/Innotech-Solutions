import React from "react";
import { Web_Development_Description} from "../../data/siteData";
import {Web_Tech_Stack} from "../../data/siteData";
export default function WebDevelopment() {

const requestPricing = (serviceName) => {
  localStorage.setItem("selectedService", serviceName);

  const contact = document.querySelector("#contact");

  if (contact) {
    contact.scrollIntoView({
      behavior: "smooth",
    });

    return;
  }

  window.location.href = "/#contact";
};


  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      desc: "We analyse your requirements, target audience, and business goals to build a project roadmap with clear milestones.",
      icon: "fas fa-search",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      desc: "Wireframes, mockups, and interactive prototypes crafted to match your brand and delight users on every device.",
      icon: "fas fa-pencil-ruler",
    },
    {
      step: "03",
      title: "Development & Testing",
      desc: "Modern tech stack, clean code, and rigorous QA for performance, security, and cross-browser compatibility.",
      icon: "fas fa-code",
    },
    {
      step: "04",
      title: "Launch & Support",
      desc: "Smooth production deploy followed by ongoing support, monitoring, and continuous optimisation.",
      icon: "fas fa-rocket",
    },
  ];

  const whyUs = [
    { icon: "fas fa-expand-arrows-alt", text: "Responsive Design For All Devices" },
    { icon: "fas fa-search", text: "SEO-Friendly Website Architecture" },
    { icon: "fas fa-paint-brush", text: "Modern UI/UX That Converts" },
    { icon: "fas fa-tachometer-alt", text: "Blazing Fast Load Performance" },
    { icon: "fas fa-shield-alt", text: "Secure & Scalable Infrastructure" },
    { icon: "fas fa-th-large", text: "Clean, Professional Layouts" },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-800" style={{ fontFamily: "inherit" }}>

      {/* ── PAGE HERO — clean gradient, no image ── */}
      {/* <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#0c2340] to-[#0f3460] pt-24 pb-20"> */}
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
        {/* Decorative circles */}
        {/* <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#0ea5e9]/10" />
        // <div className="pointer-events-none absolute bottom-0 -left-16 h-64 w-64 rounded-full bg-[#0ea5e9]/8" />
        // <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" /> */}

        {/* <div className="relative z-10 mx-auto max-w-6xl px-6"> */}
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
          {/* <div className="mx-auto max-w-3xl text-center"> */}
          <div
          className="
          mx-auto
          max-w-4xl
          text-center
        "
        >
            <span className="inline-block rounded-full border border-[#0ea5e9]/40 bg-[#0ea5e9]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
              Web Development Services
            </span>

            {/* <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"> */}
           <h1
           className="
           mt-6
          text-4xl
          font-black
          leading-tight
          text-white
          sm:text-5xl
          lg:text-7xl
        "
        >
              We Build Websites That
              <span className="block text-[#38bdf8]">Drive Real Growth</span>
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              Modern, scalable web solutions delivered fast. From landing pages to full-stack
              applications — designed for performance, built for results.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-8">
              {[
                { value: "8+", label: "Projects Delivered" },
                { value: "4.9★", label: "Client Rating" },
                { value: "1–2 mo", label: "Avg. Delivery" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-black text-[#38bdf8]">{s.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                 onClick={() => requestPricing("Website Development")}
                className="inline-flex items-center gap-2 rounded-full bg-[#0ea5e9] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-[#0ea5e9]/30 transition-all hover:bg-[#38bdf8] hover:shadow-[#38bdf8]/40"
              >
                Get Free Quote
                <i className="fas fa-arrow-right text-xs" />
              </button>
              <button
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                View Portfolio
                <i className="fas fa-external-link-alt text-xs" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0ea5e9]">
              — What We Build
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Our Web Development Services
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8]" />
            <p className="mt-5 text-base leading-7 text-slate-500">
              End-to-end web solutions designed to be powerful, scalable, and user-friendly.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Web_Development_Description.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0ea5e9]/50 hover:shadow-lg"
              >
                {/* Top */}
                <div className="p-6 pb-5">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#0ea5e9]/15 to-[#0ea5e9]/5 border border-[#0ea5e9]/20 shadow-sm">
                      <i className={`${item.icon} text-[#0ea5e9] text-base`} />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-base font-bold text-slate-900 leading-snug transition-colors duration-200 group-hover:text-[#0ea5e9]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 px-6 pb-5">
                  <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-[#0ea5e9]">
                    Key Features
                  </p>
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

                {/* Divider */}
                <div className="mx-6 border-t border-slate-100" />

                {/* Footer */}
                <div className="flex items-center justify-between gap-3 px-6 py-4">
                 <div>
                <div className="flex items-center gap-1.5 text-slate-400">
                <i className="far fa-clock text-[10px]" />
                <span className="text-[11px] font-medium">
                {item.timeline}
                </span>
                </div>
                </div>
                  <button
                   onClick={() => requestPricing(item.title)}
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

     {/* ── TECH STACK ── */}

<section className="bg-[#0f172a] py-20">
  <div className="mx-auto max-w-6xl px-6">

```
<div
  className="grid gap-12
  lg:grid-cols-[0.85fr_1.15fr]
  lg:items-center"
>

  {/* Left Content */}
  <div
    className="flex h-full
    flex-col justify-center"
  >

    <span
      className="text-xs font-bold
      uppercase tracking-widest
      text-[#38bdf8]"
    >
      — Technology Expertise
    </span>

    <h2
      className="mt-4 text-3xl
      font-black leading-tight
      text-white sm:text-4xl"
    >
      Technologies Behind
      <span className="block text-[#38bdf8]">
        Every Digital Solution
      </span>
    </h2>

    <div
      className="mt-5 h-1 w-14
      rounded-full bg-gradient-to-r
      from-[#0ea5e9] to-[#38bdf8]"
    />

    <p
      className="mt-6 text-sm
      leading-8 text-slate-400"
    >
      We combine trusted frameworks,
      modern development tools, and
      scalable cloud technologies to
      build secure, high-performance,
      and future-ready digital products.
    </p>

  </div>

  {/* Right Technologies */}
  <div className="space-y-5">

    {Web_Tech_Stack.map((stack) => (
      <div
        key={stack.category}
        className="group rounded-2xl
        border border-white/10
        bg-white/5 p-6
        backdrop-blur-sm
        transition-all duration-300
        hover:border-[#38bdf8]/30
        hover:bg-white/[0.07]"
      >

        <div className="flex items-center gap-4">

          <div
            className={`grid h-12 w-12
            place-items-center rounded-xl
            bg-gradient-to-br ${stack.color}
            border ${stack.border}`}
          >
            <i
              className={`${stack.icon}
              text-lg ${stack.iconColor}`}
            />
          </div>

          <div>

            <h3
              className="text-lg
              font-bold text-white"
            >
              {stack.category}
            </h3>

            <p
              className="text-xs
              text-slate-400"
            >
              Production Ready Technologies
            </p>

          </div>

        </div>

        <div
          className="mt-5 flex
          flex-wrap gap-2"
        >
          {stack.items.map((tech) => (
            <span
              key={tech}
              className={`rounded-full border
              ${stack.tagBorder}
              ${stack.tagBg}
              px-3 py-1.5 text-xs
              font-semibold ${stack.tagText}`}
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    ))}

  </div>

</div>
```

  </div>
</section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0ea5e9]">
              — How We Work
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Our Development Process
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8]" />
          </div>

          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* connecting dashed line — desktop */}
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[38px] hidden h-px border-t-2 border-dashed border-[#0ea5e9]/25 lg:block" />

            {process.map((step, idx) => (
              <div
                key={step.step}
                className="group relative flex flex-col items-center rounded-2xl border border-slate-100 bg-[#f8fafc] p-7 pt-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#0ea5e9]/40 hover:shadow-lg"
              >
                {/* Step badge */}
                <div className="relative mb-5 grid h-16 w-16 place-items-center rounded-full border-2 border-[#0ea5e9]/30 bg-white shadow-md shadow-[#0ea5e9]/10 transition-all duration-300 group-hover:border-[#0ea5e9] group-hover:shadow-[#0ea5e9]/20">
                  <i className={`${step.icon} text-lg text-[#0ea5e9]`} />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#0f172a] text-[9px] font-black text-white">
                    {step.step}
                  </span>
                </div>

                {/* Arrow connector for desktop — except last */}
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

      {/* ── WHY CHOOSE ── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">

          {/* Left */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0ea5e9]">
              — Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              Why Choose Our{" "}
              <span className="text-[#0ea5e9]">Web Solutions?</span>
            </h2>
            <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8]" />

            <p className="mt-6 text-base leading-8 text-slate-500">
              We combine technical depth, design precision, and business strategy to build websites
              that perform — not just look good. Here's what sets us apart.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {whyUs.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm transition-all hover:border-[#0ea5e9]/40 hover:shadow-md"
                >
                  <div className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#0ea5e9]/15 to-[#0ea5e9]/5 border border-[#0ea5e9]/20">
                    <i className={`${item.icon} text-[#0ea5e9] text-xs`} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={requestPricing}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-[#0ea5e9] hover:shadow-lg hover:shadow-[#0ea5e9]/30"
            >
              Start Your Project
              <i className="fas fa-arrow-right text-xs" />
            </button>
          </div>

          {/* Right — visual stats panel */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">
              Our Commitment To Quality
            </p>

            {[
              { label: "On-time Delivery", value: 96, color: "bg-[#0ea5e9]" },
              { label: "Client Satisfaction", value: 98, color: "bg-emerald-400" },
              { label: "Performance Score", value: 95, color: "bg-violet-400" },
              { label: "Security Standards", value: 100, color: "bg-[#0f172a]" },
            ].map((bar) => (
              <div key={bar.label} className="mb-5">
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-semibold text-slate-700">{bar.label}</span>
                  <span className="text-sm font-black text-slate-800">{bar.value}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-100">
                  <div
                    className={`h-2.5 rounded-full ${bar.color}`}
                    style={{ width: `${bar.value}%` }}
                  />
                </div>
              </div>
            ))}

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: "8+", label: "Projects Delivered", icon: "fas fa-check-circle", color: "text-[#0ea5e9]" },
                { value: "4.9★", label: "Average Rating", icon: "fas fa-star", color: "text-amber-400" },
                { value: "10+", label: "Happy Clients", icon: "fas fa-users", color: "text-emerald-500" },
                { value: "2 yrs", label: "In Business", icon: "fas fa-calendar", color: "text-violet-500" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-center">
                  <i className={`${s.icon} ${s.color} text-lg`} />
                  <p className="mt-2 text-xl font-black text-slate-900">{s.value}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}