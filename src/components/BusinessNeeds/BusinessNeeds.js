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
      className="relative overflow-hidden
      bg-[#0f172a] py-20"
    >

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(#94a3b8 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute left-0 top-0
        h-72 w-72 rounded-full
        bg-cyan-500/10 blur-3xl"
      />

      <div
        className="absolute bottom-0 right-0
        h-72 w-72 rounded-full
        bg-pink-500/10 blur-3xl"
      />

      <div
        className="relative mx-auto grid
        max-w-7xl gap-12 px-6
        lg:grid-cols-[1.2fr_0.8fr]"
      >

        {/* Left Content */}
        <div>

          <h2
            className="font-display
            text-4xl font-bold
            leading-tight text-white
            sm:text-5xl"
          >
            <span className="text-pink-500">
              Practical
            </span>
            {" "}digital support for
            <br />
            growing businesses
          </h2>

          <div className="mt-8">

            <h3
              className="font-display
              text-2xl font-bold
              text-white"
            >
              Start With A Clear Technology Roadmap
            </h3>

            <p
              className="mt-4 text-base
              leading-8 text-slate-400"
            >
              We review your current workflow, customer journey,
              and digital presence to suggest the right mix of
              website, app, automation, and marketing improvements.
            </p>
          </div>

          {/* Points */}
          <div className="mt-8 space-y-5">

            {BUSINESS_POINTS.map((point) => (
              <div
                key={point}
                className="flex gap-4"
              >

                <div
                  className="mt-1 grid h-7 w-7
                  flex-shrink-0 place-items-center
                  rounded-full bg-yellow-400
                  text-xs text-slate-900"
                >
                  <i className="fas fa-check"></i>
                </div>

                <p
                  className="text-base
                  leading-8 text-slate-300"
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Small Boxes */}
        <div
          className="grid grid-cols-2
          gap-5 self-center"
        >

          {BUSINESS_STATS.map((item) => (
            <div
              key={item.label}
              className={`rounded-[26px]
              border ${item.border}
              bg-white/[0.04]
              p-7 text-center
              backdrop-blur-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-white/[0.06]`}
            >

              <h3
                className="font-display
                text-4xl font-bold
                text-white"
              >
                {item.number}
              </h3>

              <p
                className="mt-3 text-sm
                text-slate-400"
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="relative mx-auto mt-16
        flex max-w-5xl flex-col
        items-center justify-between
        gap-6 rounded-[28px]
        border border-white/10
        bg-white/[0.04]
        px-8 py-7 backdrop-blur-sm
        md:flex-row"
      >

        <h3
          className="font-display
          text-2xl font-bold
          text-white sm:text-3xl"
        >
          Get Your
          <span className="text-pink-500">
            {" "}Digital Growth
          </span>
          {" "}Discussion Started
        </h3>

        <button
          onClick={requestDemo}
          className="inline-flex items-center
          gap-2 rounded-full
          bg-gradient-to-r
          from-pink-500 to-purple-500
          px-8 py-4 text-base
          font-semibold text-white
          transition-all hover:scale-105"
        >
          Enquire Now
          <i className="fas fa-arrow-right text-sm"></i>
        </button>
      </div>
    </section>
  );
}
