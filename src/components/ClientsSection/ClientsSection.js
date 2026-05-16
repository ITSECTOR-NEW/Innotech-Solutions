import React from "react";
import { CLIENTS } from "../../data/siteData";

export default function ClientsSection() {

  return (
    <section
      className="relative overflow-hidden
      bg-[#111827] py-16"
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

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">

          <span
            className="text-xs font-semibold
            uppercase tracking-[0.25em]
            text-cyan-400"
          >
            Our Happy Customers
          </span>

          <h2
            className="mt-3 font-display
            text-3xl font-bold
            text-white sm:text-4xl"
          >
            Some of our
            <span className="text-cyan-400">
              {" "}Clients
            </span>
          </h2>

          <p
            className="mx-auto mt-4
            max-w-2xl text-sm
            leading-7 text-slate-400"
          >
            Trusted by businesses, startups,
            and educational institutions.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-14 overflow-hidden">

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
          <div className="flex animate-marquee gap-6 w-max">

            {[...CLIENTS, ...CLIENTS].map((client, index) => (
              <div
                key={index}
                className="group flex
                min-w-[220px]
                flex-col items-center
                rounded-3xl border
                border-white/10
                bg-white/[0.04]
                p-6 backdrop-blur-sm
                transition-all duration-300
                hover:border-cyan-400/30
                hover:bg-white/[0.06]"
              >

                {/* Logo */}
                <div
                  className="flex h-24 w-full
                  items-center justify-center
                  overflow-hidden rounded-2xl
                  bg-white"
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    className="max-h-14
                    w-auto object-contain
                    transition-all duration-300
                    group-hover:scale-105"
                  />
                </div>

                {/* Name */}
                <h3
                  className="mt-5 text-center
                  font-display text-base
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
          className="mt-14 grid gap-5
          md:grid-cols-3"
        >

          <div
            className="rounded-3xl
            border border-white/10
            bg-white/[0.04]
            p-7 text-center"
          >
            <h3
              className="font-display
              text-4xl font-bold
              text-cyan-400"
            >
              40+
            </h3>

            <p
              className="mt-2 text-xs
              uppercase tracking-[0.2em]
              text-slate-400"
            >
              Projects Delivered
            </p>
          </div>

          <div
            className="rounded-3xl
            border border-white/10
            bg-white/[0.04]
            p-7 text-center"
          >
            <h3
              className="font-display
              text-4xl font-bold
              text-cyan-400"
            >
              20+
            </h3>

            <p
              className="mt-2 text-xs
              uppercase tracking-[0.2em]
              text-slate-400"
            >
              Happy Clients
            </p>
          </div>

          <div
            className="rounded-3xl
            border border-white/10
            bg-white/[0.04]
            p-7 text-center"
          >
            <h3
              className="font-display
              text-4xl font-bold
              text-cyan-400"
            >
              100+
            </h3>

            <p
              className="mt-2 text-xs
              uppercase tracking-[0.2em]
              text-slate-400"
            >
              Students Trained
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}