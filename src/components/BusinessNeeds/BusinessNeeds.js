import React from "react";
import {
  BUSINESS_STATS,
  BUSINESS_POINTS,
} from "../../data/siteData";

export default function BusinessNeeds() {

  const requestDemo = () => {
    const contact = document.querySelector("#contact");

    if (contact) {
      contact.scrollIntoView({
        behavior: "smooth",
      });

      return;
    }

    window.location.href = "/#contact";
  };

  return (
    <section
      className="relative overflow-hidden bg-[#13181f] py-14 sm:py-20"
    >
      {/* Top divider border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* Ambient glows — same style as Services */}
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/8 blur-[120px]" />

      <div
        className="relative mx-auto grid
        max-w-7xl gap-8 px-5 sm:gap-12 sm:px-6 lg:px-8
        lg:grid-cols-[1.2fr_0.8fr]"
      >

        {/* Left Content */}
        <div>

          <h2
            className="font-black leading-tight text-white"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)" }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Smart
            </span>
            {" "}Technology Solutions for
            <br />
            Growing Businesses
          </h2>

          <div className="mt-6 sm:mt-8">
            <h3 className="text-lg font-bold text-white sm:text-xl">
              Technology Solutions Tailored To Your Goals
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-400 sm:mt-4 sm:text-[15px] sm:leading-8">
              From websites and mobile apps to AI, automation, and Industrial IoT, we build technology solutions that drive growth.
            </p>
          </div>

          {/* Points */}
          <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            {BUSINESS_POINTS.map((point) => (
              <div key={point} className="flex gap-4">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/15">
                  <i className="fas fa-check text-[8px] text-[#60a5fa]" />
                </span>
                <p className="text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — stat boxes */}
        <div className="grid grid-cols-2 gap-3 self-center sm:gap-4">
          {BUSINESS_STATS.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-4 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-blue-500/5 sm:p-7"
            >
              <h3
                className="font-black text-white"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)" }}
              >
                {item.number}
              </h3>
              <p className="mt-2 text-xs text-slate-400 sm:mt-3 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="relative mx-4 mt-10 flex max-w-5xl flex-col items-center justify-between gap-4
        rounded-2xl border border-white/[0.07] bg-white/[0.04] px-5 py-5
        backdrop-blur-sm sm:mx-auto sm:mt-16 sm:gap-6 sm:rounded-[28px]
        sm:px-8 sm:py-7 md:flex-row"
      >
        <h3
          className="font-black text-white"
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)" }}
        >
          Get Your{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Digital Growth
          </span>
          {" "}Discussion Started
        </h3>

        <button
          onClick={requestDemo}
          className="inline-flex flex-shrink-0 items-center gap-2.5 rounded-full bg-[#3b82f6] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#2563eb] hover:shadow-lg hover:shadow-blue-500/25 sm:px-8 sm:py-4 sm:text-base"
        >
          Enquire Now
          <i className="fas fa-arrow-right text-sm" />
        </button>
      </div>
    </section>
  );
}