import React from "react";
import { IOT_APPROACH_STEPS, IOT_FEATURES, IOT_PAGE_IMAGES } from "../../data/siteData";

export default function IoT() {

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
    <main className="min-h-screen bg-[#f8fafc] text-slate-800">

      {/* Hero Banner */}
      <section
        className="relative grid min-h-[330px] place-items-center overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              `url(${IOT_PAGE_IMAGES.hero})`,
          }}
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0fb7c5]" />

        <div className="relative z-10 px-6 text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-[#0fb7c5]">
            Industrial AI & IoT Solutions
          </p>

          <h1
            className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl"
          >
            Smart Industrial Automation
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-200">
            We build connected industrial systems that collect real-time machine data, automate workflows, and turn shop-floor activity into useful business insights.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">

        <div
          className="mx-auto grid max-w-6xl
          items-center gap-12 px-6
          lg:grid-cols-[0.95fr_1.05fr]"
        >

          {/* Left */}
          <div>

            <h2
              className="font-display text-3xl
              font-bold leading-tight
              text-slate-900 sm:text-4xl"
            >
              Transforming Industries With
              <span className="text-[#0fb7c5]">
                {" "}AI, IoT & Automation
              </span>
            </h2>

            <div className="mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p
              className="mt-6 text-base
              leading-8 text-slate-600"
            >
              Our Industrial AI solutions help businesses monitor machines, reduce downtime, improve process visibility, and make faster decisions using real-time analytics.
            </p>

            <p
              className="mt-5 text-base
              leading-8 text-slate-600"
            >
              From device integration and sensor monitoring to dashboards, alerts, and predictive maintenance, we create practical systems that fit real industrial workflows.
            </p>

            {/* Features */}
            <div className="mt-7 space-y-4">

              {[
                "IoT device connectivity and integration.",
                "Real-time machine data collection and monitoring.",
                "Cloud dashboards, alerts, and analytics reports.",
                "Predictive maintenance and process optimization.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div
                    className="grid h-8 w-8
                    place-items-center
                    bg-[#0fb7c5] text-white"
                  >
                    <i className="fas fa-check text-xs"></i>
                  </div>

                  <p className="text-sm leading-7 text-slate-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={requestDemo}
              className="mt-9 inline-flex bg-[#0fb7c5] px-7 py-3 font-display text-sm font-bold uppercase tracking-normal text-white transition-all hover:bg-[#10c8d7]"
            >
              Let&apos;s Talk
            </button>
          </div>

          {/* Right */}
          <div
            className="overflow-hidden border
            border-slate-200 bg-white
            shadow-sm"
          >
            <img
              src={IOT_PAGE_IMAGES.intro}
              alt="IoT circuit and connected device technology"
              className="h-full min-h-[330px]
              w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Industrial Services */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-6xl px-6">

          {/* Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center">

            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-[#0fb7c5]">
              We Let The Work Speak First
            </p>

            <h2
              className="mt-3 font-display text-3xl
              font-bold text-slate-900 sm:text-4xl"
            >
              Industrial AI Services
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p
              className="mt-5 text-base
              leading-8 text-slate-600"
            >
              Smart industrial solutions for connected devices, automation, data analytics, and intelligent decision-making.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {IOT_FEATURES.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden border
                border-slate-200 bg-slate-50
                shadow-sm"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[220px]
                  w-full object-cover"
                />

                {/* Content */}
                <div className="p-6">

                  <div
                    className="mb-4 grid h-12 w-12
                    place-items-center
                    bg-[#0fb7c5] text-lg text-white"
                  >
                    <i className={item.icon}></i>
                  </div>

                  <h3
                    className="font-display text-xl
                    font-bold text-slate-900"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-3 text-sm
                    leading-7 text-slate-600"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-[#f8fafc]">

        <div
          className="mx-auto grid max-w-6xl
          items-center gap-14 px-6
          lg:grid-cols-2"
        >

          {/* Left */}
          <div>

            <h2
              className="font-display text-3xl
              font-bold leading-tight
              text-slate-900 sm:text-4xl"
            >
              Why Choose Our
              <span className="text-[#0fb7c5]">
                {" "}Industrial Solutions?
              </span>
            </h2>

            <div className="mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p
              className="mt-6 text-base
              leading-8 text-slate-600"
            >
              We focus on useful automation, secure data flow, clear dashboards, and scalable architecture that can grow with your operations.
            </p>

            <div className="mt-8 space-y-5">

              {[
                "Smart factory and process automation.",
                "AI-based monitoring and anomaly detection.",
                "Real-time dashboards for better visibility.",
                "Predictive maintenance and machine health insights.",
                "Connected devices, sensors, and cloud systems.",
                "Custom reports for industrial decision-making.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-4"
                >
                  <div
                    className="mt-1 grid h-7 w-7
                    flex-shrink-0 place-items-center
                    bg-[#0fb7c5] text-white"
                  >
                    <i className="fas fa-check text-xs"></i>
                  </div>

                  <p
                    className="text-sm
                    leading-7 text-slate-600"
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={requestDemo}
              className="mt-10 inline-flex
              bg-[#0fb7c5] px-7 py-3
              font-display text-sm
              font-bold uppercase
              tracking-normal text-white
              transition-all hover:bg-[#10c8d7]"
            >
              Get Started
            </button>
          </div>

          {/* Right */}
          <div
            className="overflow-hidden border
            border-slate-200 bg-white
            shadow-sm"
          >
            <img
              src={IOT_PAGE_IMAGES.why}
              alt="IoT network and connected data systems"
              className="h-full min-h-[330px]
              w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-[#0fb7c5]">
              Our Approach
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              From Discovery To Execution
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We build industrial AI systems step by step, keeping the solution practical, secure, and easy to operate.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {IOT_APPROACH_STEPS.map((step, index) => (
              <div key={step.title} className="border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="grid h-11 w-11 place-items-center bg-[#0fb7c5] font-display text-base font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-[#0fb7c5]">
              Free Consultation
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold text-slate-900">
              Want clarity on your industrial AI idea?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Share your process, machine data challenge, or automation goal. We will help you choose the right first step.
            </p>
          </div>

          <button
            onClick={requestDemo}
            className="inline-flex bg-[#0fb7c5] px-8 py-4 font-display text-sm font-bold uppercase tracking-normal text-white transition-all hover:bg-[#10c8d7]"
          >
            Book Consultation
          </button>
        </div>
      </section>
    </main>
  );
}
