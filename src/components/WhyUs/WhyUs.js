import React from "react";
import { WHY_CHOOSE_US } from "../../data/siteData";

const FEATURE_ICONS = [
  "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  "https://cdn-icons-png.flaticon.com/512/3135/3135673.png",
  "https://cdn-icons-png.flaticon.com/512/190/190411.png",
];

export default function WhyChoose() {

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
    <section className="bg-[#f8fafc] py-14 sm:py-20">

      <div
        className="mx-auto grid max-w-7xl
        gap-8 px-4 sm:gap-14 sm:px-6
        lg:grid-cols-[1.05fr_0.95fr]"
      >

        {/* Left Side */}
        <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-8 lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0">

          <span
            className="inline-flex rounded-full bg-pink-50 px-3 py-1.5 text-xs font-semibold
            uppercase tracking-[0.2em]
            text-pink-500"
          >
            Why Choose Us
          </span>

         <h2
          className="mt-4 font-display
          text-2xl font-bold
          leading-tight text-slate-900
          sm:text-4xl"
        >
          Technology Partner For
          <br />
          <span className="text-pink-500">
            Digital Growth
          </span>
        </h2>

          <p
            className="mt-4 text-sm
            leading-7 text-slate-500
            sm:mt-5 sm:text-base sm:leading-8"
          >
            We combine technology, innovation, and
            practical business understanding to deliver
            web, AI, automation, and Industrial IoT
            solutions that create measurable impact.
          </p>

          {/* Features */}
          <div className="mt-7 grid gap-3 sm:mt-10 sm:gap-4">

            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={item.title}
                className="group flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-white hover:shadow-md sm:gap-4 sm:p-5"
              >
                {/* Icon */}
                <div
                  className="grid h-12 w-12
                  flex-shrink-0 place-items-center
                  rounded-2xl border border-slate-200 bg-white
                  shadow-sm sm:h-14 sm:w-14"
                >
                  <img
                    src={FEATURE_ICONS[index % FEATURE_ICONS.length]}
                    alt=""
                    className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
                  />
                </div>

                {/* Content */}
                <div>

                  <h3
                    className="font-display
                    text-base font-bold
                    sm:text-xl
                    text-slate-900"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-1 text-sm
                    leading-6 text-slate-500
                    sm:leading-7"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between">

          {/* Top Image */}
          <div className="overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 sm:p-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2881/2881142.png"
              alt="Technology Solutions"
              className="mx-auto w-full
              max-w-[360px]"
            />
          </div>

          {/* Bottom Content */}
          <div className="mt-6 rounded-3xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200/70 sm:mt-10 sm:p-8">

            <h2
              className="font-display
              text-xl font-bold
              leading-tight text-slate-900
              sm:text-3xl"
            >
              Turning Ideas Into
              <br />
               
              <span className="text-pink-500">
                {" "}Digital Innovation
              </span>
            </h2>

            <p
              className="mx-auto mt-4
              max-w-lg text-sm
              leading-7 text-slate-500
              sm:text-base sm:leading-8"
            >
              We are committed to customer success from
              start to finish. Our innovative and creative
              solutions help businesses stand out online.
            </p>

            <button
              onClick={requestDemo}
              className="mt-8 inline-flex
              items-center gap-2 rounded-full
              bg-gradient-to-r
              from-orange-400 to-pink-500
              px-6 py-3 text-sm
              font-semibold text-white
              transition-all hover:scale-105"
            >
              Get Free Consultation
              <i className="fas fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
