import React from "react";
import {
  TRAINING_PROGRAMS,
  TRAINING_TOOLS,
  TRAINING_STATS,
} from "../../data/siteData";

export default function Training() {

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
        className="relative overflow-hidden
        pt-28 pb-28"
      >
        {/* Background */}
        <div
          className="absolute inset-0
          bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop)",
          }}
        />

        <div className="absolute inset-0 bg-[#07111f]/80" />

        {/* Content */}
        <div
          className="relative mx-auto
          flex max-w-7xl
          justify-center px-6 text-center"
        >
          <div className="max-w-4xl">

            <div
              className="inline-flex items-center gap-2
              rounded-full border border-cyan-400/20
              bg-cyan-400/10 px-5 py-2
              text-xs font-semibold uppercase
              tracking-[0.18em] text-cyan-300"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400"></span>

              Student Training Programs
            </div>

            <h1
              className="mt-7 font-display
              text-5xl font-bold
              leading-tight text-white
              sm:text-6xl"
            >
              Practical Technology
              <span className="text-cyan-400">
                {" "}Training
              </span>
            </h1>

            <p
              className="mx-auto mt-7 max-w-3xl
              text-lg leading-9
              text-slate-300"
            >
              Industry-focused training programs in
              Web Development, AI, Robotics, IoT,
              Industrial Automation, and Application Development.
            </p>

            {/* Button */}
            <button
              onClick={requestDemo}
              className="mt-10 inline-flex
              bg-[#0fb7c5] px-8 py-4
              font-display text-sm
              font-bold uppercase
              tracking-wide text-white
              transition-all hover:bg-[#10c8d7]"
            >
              Join Training
            </button>
          </div>
        </div>
      </section>

      {/* Main Intro */}
      <section className="py-24">

        <div
          className="mx-auto grid max-w-6xl
          items-center gap-16 px-6
          lg:grid-cols-[1fr_1fr]"
        >

          {/* Left */}
          <div>

            <h2
              className="font-display text-4xl
              font-bold leading-tight
              text-slate-900"
            >
              Industry-Focused
              <span className="text-[#0fb7c5]">
                {" "}Learning Programs
              </span>
            </h2>

            <div className="mt-5 h-1 w-16 bg-[#0fb7c5]" />

            <p
              className="mt-7 text-base
              leading-8 text-slate-600"
            >
              Our training programs are designed to provide
              practical knowledge, hands-on experience,
              and real-world project exposure for students
              and aspiring professionals.
            </p>

            <p
              className="mt-5 text-base
              leading-8 text-slate-600"
            >
              We focus on modern technologies including
              AI, Robotics, IoT, Web Development,
              Industrial Automation, and Application Development
              to prepare students for industry opportunities.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-4">

              {[
                "Hands-On Practical Training",
                "Industry-Level Projects",
                "Internship & Mentorship",
                "Career Development Support",
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
          </div>

          {/* Right */}
          <div
            className="overflow-hidden border
            border-slate-200 bg-white
            shadow-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
              alt="Training"
              className="h-full min-h-[420px]
              w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-6xl px-6">

          {/* Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center">

            <h2
              className="font-display text-4xl
              font-bold text-slate-900"
            >
              Training Programs
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p
              className="mt-5 text-base
              leading-8 text-slate-600"
            >
              Practical and career-oriented training
              programs designed for students and professionals.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {TRAINING_PROGRAMS.map((item) => (
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

      {/* Statistics */}
      <section className="py-20 bg-[#f8fafc]">

        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center mb-12">

            <h2
              className="font-display text-4xl
              font-bold text-slate-900"
            >
              Our Training Impact
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p
              className="mx-auto mt-5 max-w-3xl
              text-base leading-8 text-slate-600"
            >
              Helping students and professionals gain
              practical skills through modern technology training.
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {TRAINING_STATS.map((stat) => (
              <div
                key={stat.label}
                className="border border-slate-200
                bg-white p-10 text-center
                shadow-sm"
              >
                <h3
                  className="font-display text-5xl
                  font-bold text-[#0fb7c5]"
                >
                  {stat.num}+
                </h3>

                <p
                  className="mt-4 text-sm
                  leading-7 text-slate-600"
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-6xl px-6">

          <div className="mb-12 text-center">

            <h2
              className="font-display text-4xl
              font-bold text-slate-900"
            >
              Technologies We Teach
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p
              className="mx-auto mt-5 max-w-3xl
              text-base leading-8 text-slate-600"
            >
              Learn modern technologies and tools
              used in real-world software and industrial projects.
            </p>
          </div>

          {/* Tools */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {TRAINING_TOOLS.map((tool) => (
              <div
                key={tool}
                className="border border-slate-200
                bg-slate-50 p-8 text-center
                transition-all hover:-translate-y-1
                hover:border-cyan-300"
              >
                <h3
                  className="font-display text-xl
                  font-bold text-slate-900"
                >
                  {tool}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}