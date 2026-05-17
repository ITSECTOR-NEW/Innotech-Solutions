import React, { useEffect, useState } from "react";
import { TESTIMONIALS } from "../../data/siteData";

export default function Testimonials() {

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) =>
        prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden
      bg-[#f8fafc] py-14 sm:py-24"
    >

      {/* Background Shape */}
      <div
        className="absolute left-0 top-0
        h-full w-[280px]
        opacity-10"
        style={{
          background:
            "radial-gradient(circle at left, #8b5cf6 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div
        className="mx-auto grid max-w-7xl
        gap-8 px-4 sm:gap-16 sm:px-6
        lg:grid-cols-[0.8fr_1.2fr]"
      >

        {/* Left Content */}
        <div className="flex flex-col justify-center">

          <span
            className="text-sm font-semibold
            uppercase tracking-[0.18em]
            text-pink-500"
          >
            Clients Testimonial
          </span>

          <h2
            className="mt-5 font-display
            text-3xl font-bold
            leading-tight text-slate-900
            sm:text-5xl"
          >
            What Clients Say
            <br />
            About Us
          </h2>

          <p
            className="mt-4 max-w-md
            text-sm leading-7
            text-slate-500"
          >
            Real feedback from startups,
            industries, and educational
            organizations who trusted our
            digital and technology solutions.
          </p>
        </div>

        {/* Right Slider */}
        <div className="relative overflow-hidden">

          {/* Slides */}
          <div
            className="flex transition-all
            duration-700 ease-in-out"
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >

            {TESTIMONIALS.map((item, index) => (
              <div
                key={index}
                className="min-w-full"
              >

                <div
                  className="rounded-2xl
                  bg-white p-5
                  sm:rounded-[32px] sm:p-10
                  shadow-sm"
                >

                  {/* Quote */}
                  <div
                    className="mb-3 text-4xl
                    sm:mb-6 sm:text-6xl
                    leading-none text-pink-100"
                  >
                    "
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm
                    leading-7 text-slate-500
                    sm:text-lg sm:leading-10"
                  >
                    {item.text}
                  </p>

                  {/* Bottom */}
                  <div
                    className="mt-6 flex
                    items-center gap-3
                    sm:mt-10 sm:gap-5"
                  >

                    {/* Image */}
                    <div
                      className={`grid h-14 w-14
                      place-items-center rounded-full
                      bg-gradient-to-br ${item.grad}
                      text-lg font-bold text-white
                      sm:h-20 sm:w-20 sm:text-2xl`}
                    >
                      {item.initials}
                    </div>

                    {/* Info */}
                    <div>

                      <h3
                        className="font-display
                        text-lg font-bold
                        sm:text-2xl
                        text-slate-900"
                      >
                        {item.name}
                      </h3>

                      <p
                        className="mt-1 text-sm
                        sm:text-base
                        text-slate-500"
                      >
                        {item.role}
                      </p>

                      {/* Stars */}
                      <div
                        className="mt-3 flex
                        gap-1 text-yellow-400"
                      >
                        {Array(item.stars)
                          .fill(0)
                          .map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div
            className="mt-8 flex
            items-center justify-center
            gap-3"
          >

            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-3 w-3 rounded-full
                transition-all duration-300
                ${
                  active === index
                    ? "w-8 bg-pink-500"
                    : "bg-pink-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
