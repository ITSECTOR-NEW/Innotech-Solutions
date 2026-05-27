import React from "react";
import { AI_SERVICE_PAGES } from "../../data/siteData";

export default function AIService({ serviceKey }) {
  const service = AI_SERVICE_PAGES[serviceKey] || AI_SERVICE_PAGES["ai-services"];

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
      <section className="relative grid min-h-[330px] place-items-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${service.heroImage})`,
          }}
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0fb7c5]" />

        <div className="relative z-10 px-6 text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-[#0fb7c5]">
            {service.eyebrow}
          </p>

          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            {service.title}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-200">
            {service.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              {service.introTitle}
              <span className="text-[#0fb7c5]">{service.introAccent}</span>
            </h2>

            <div className="mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p className="mt-6 text-base leading-8 text-slate-600">
              {service.intro}
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {service.introSecond}
            </p>

            <div className="mt-7 space-y-4">
              {service.points.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="grid h-8 w-8 place-items-center bg-[#0fb7c5] text-white">
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

          <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">
            <img
              src={service.introImage}
              alt={service.title}
              className="h-full min-h-[330px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              {service.servicesTitle}
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p className="mt-5 text-base leading-8 text-slate-600">
              {service.servicesIntro}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.services.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden border border-slate-200 bg-slate-50 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[220px] w-full object-cover"
                />

                <div className="p-6">
                  <div className="mb-4 grid h-12 w-12 place-items-center bg-[#0fb7c5] text-lg text-white">
                    <i className={item.icon}></i>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8fafc]">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              {service.whyTitle}
            </h2>

            <div className="mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p className="mt-6 text-base leading-8 text-slate-600">
              {service.whyIntro}
            </p>

            <div className="mt-8 space-y-5">
              {service.whyPoints.map((item) => (
                <div key={item} className="flex gap-4">
                  <div className="mt-1 grid h-7 w-7 flex-shrink-0 place-items-center bg-[#0fb7c5] text-white">
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
              className="mt-10 inline-flex bg-[#0fb7c5] px-7 py-3 font-display text-sm font-bold uppercase tracking-normal text-white transition-all hover:bg-[#10c8d7]"
            >
              Get Started
            </button>
          </div>

          <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">
            <img
              src={service.whyImage}
              alt={`${service.title} benefits`}
              className="h-full min-h-[330px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-[#0fb7c5]">
              Free Consultation
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold text-slate-900">
              Want clarity on your project idea?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Share your business process, training need, IoT challenge, data problem, or automation goal. We will help you choose the right first step.
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
