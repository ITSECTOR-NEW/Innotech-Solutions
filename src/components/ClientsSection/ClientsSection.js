import React from "react";
import { CLIENTS } from "../../data/siteData";

export default function ClientsSection() {

  return (
    <section
      className="relative overflow-hidden
      bg-[#111827] py-12 sm:py-16"
    >

      {/* Background Glow */}
      <div
        className="absolute left-0 top-0
        h-60 w-60 rounded-full
        bg-cyan-500/10 blur-3xl"
      />

      <div
        className="absolute bottom-0 right-0
        h-60 w-60 rounded-full
        bg-purple-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center">

          <span
            className="text-xs font-semibold
            uppercase tracking-[0.25em]
            text-cyan-400"
          >
            People We Build For
          </span>

          <h2
            className="mt-3 font-display
            text-2xl font-bold
            text-white sm:text-4xl"
          >
            Trusted by
            <span className="text-cyan-400">
              {" "}Growing Teams
            </span>
          </h2>

          <p
            className="mx-auto mt-4
            max-w-2xl text-sm
            leading-7 text-slate-400"
          >
            We work with founders, institutes, local businesses,
            and industry teams that want practical digital solutions.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-9 overflow-hidden sm:mt-14">

          {/* Gradient Left */}
          <div
            className="absolute left-0 top-0
            z-10 h-full w-20
            bg-gradient-to-r
            from-[#111827] to-transparent"
          />

          {/* Gradient Right */}
          <div
            className="absolute right-0 top-0
            z-10 h-full w-20
            bg-gradient-to-l
            from-[#111827] to-transparent"
          />

          {/* Marquee */}
          <div className="flex w-max animate-marquee gap-3 sm:gap-6">

            {[...CLIENTS, ...CLIENTS].map((client, index) => (
              <div
                key={index}
                className="group flex
                min-w-[150px] sm:min-w-[220px]
                flex-col items-center
                rounded-2xl border sm:rounded-3xl
                border-white/10
                bg-white/[0.04]
                p-4 backdrop-blur-sm sm:p-6
                transition-all duration-300
                hover:border-cyan-400/30
                hover:bg-white/[0.06]"
              >

                {/* Logo */}
                <div
                  className="flex h-16 w-full
                  items-center justify-center
                  overflow-hidden rounded-xl sm:h-24 sm:rounded-2xl
                  bg-white"
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    className="max-h-10 sm:max-h-14
                    w-auto object-contain
                    transition-all duration-300
                    group-hover:scale-105"
                  />
                </div>

                {/* Name */}
                <h3
                  className="mt-3 text-center
                  font-display text-sm
                  sm:mt-5 sm:text-base
                  font-semibold text-white"
                >
                  {client.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className="mt-9 grid grid-cols-3 gap-3 sm:mt-14 sm:gap-5"
        >

          <div
            className="rounded-2xl sm:rounded-3xl
            border border-white/10
            bg-white/[0.04]
            p-4 text-center sm:p-7"
          >
            <h3
              className="font-display
              text-2xl font-bold sm:text-4xl
              text-cyan-400"
            >
              10+
            </h3>

            <p
              className="mt-2 text-xs
              uppercase tracking-[0.1em] sm:tracking-[0.2em]
              text-slate-400"
            >
              Solutions Built
            </p>
          </div>

          <div
            className="rounded-2xl sm:rounded-3xl
            border border-white/10
            bg-white/[0.04]
            p-4 text-center sm:p-7"
          >
            <h3
              className="font-display
              text-2xl font-bold sm:text-4xl
              text-cyan-400"
            >
              8+
            </h3>

            <p
              className="mt-2 text-xs
              uppercase tracking-[0.1em] sm:tracking-[0.2em]
              text-slate-400"
            >
              Client Relationships
            </p>
          </div>

          <div
            className="rounded-2xl sm:rounded-3xl
            border border-white/10
            bg-white/[0.04]
            p-4 text-center sm:p-7"
          >
            <h3
              className="font-display
              text-2xl font-bold sm:text-4xl
              text-cyan-400"
            >
              4+
            </h3>

            <p
              className="mt-2 text-xs
              uppercase tracking-[0.1em] sm:tracking-[0.2em]
              text-slate-400"
            >
              Business Categories
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
