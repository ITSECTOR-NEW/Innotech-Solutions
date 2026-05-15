import React from "react";
import { UI_Web_Design_Description } from "../../data/siteData";

const DESIGN_TOOLS = [
  { name: "Figma", icon: "fab fa-figma" },
  { name: "Adobe XD", icon: "fas fa-pen-nib" },
  { name: "Photoshop", icon: "fas fa-image" },
  { name: "WordPress", icon: "fab fa-wordpress" },
  { name: "Elementor", icon: "fas fa-layer-group" },
  { name: "Canva", icon: "fas fa-palette" },
  { name: "Webflow", icon: "fas fa-globe" },
  { name: "Framer", icon: "fas fa-vector-square" },
];

const DESIGN_TYPES = [
  {
    title: "Website UI Design",
    desc: "Modern and responsive website interfaces focused on branding, usability, and customer engagement.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Mobile App UI/UX",
    desc: "Creative mobile application designs with smooth navigation and user-friendly experiences.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Dashboard Design",
    desc: "Professional admin dashboards and management panels with clean layouts and modern UI systems.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Brand Identity Design",
    desc: "Creative branding solutions including typography, color systems, layouts, and visual identity.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function UiDesign() {

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
              "url(https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1600&auto=format&fit=crop)",
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

              UI/UX & Web Designing
            </div>

            <h1
              className="mt-7 font-display
              text-5xl font-bold
              leading-tight text-white
              sm:text-6xl"
            >
              Creative Digital
              <span className="text-cyan-400">
                {" "}Experiences
              </span>
            </h1>

            <p
              className="mx-auto mt-7 max-w-3xl
              text-lg leading-9
              text-slate-300"
            >
              We create visually engaging and user-friendly
              digital experiences that combine creativity,
              usability, branding, and modern design principles.
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
              Start Your Project
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
              Designing Interfaces That
              <span className="text-[#0fb7c5]">
                {" "}Users Love
              </span>
            </h2>

            <div className="mt-5 h-1 w-16 bg-[#0fb7c5]" />

            <p
              className="mt-7 text-base
              leading-8 text-slate-600"
            >
              Our UI/UX and web designing services focus on creating
              modern digital experiences that improve usability,
              customer interaction, and visual branding.
            </p>

            <p
              className="mt-5 text-base
              leading-8 text-slate-600"
            >
              From websites and mobile applications
              to dashboards and custom digital interfaces,
              we create designs that are visually appealing,
              user-friendly, and performance-focused.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-4">

              {[
                "Modern UI/UX Design",
                "Responsive Layouts",
                "Creative Branding",
                "Interactive User Experience",
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
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
              alt="UI UX"
              className="h-full min-h-[420px]
              w-full object-cover"
            />
          </div>
        </div>
      </section>

      

      {/* Services */}
      {/* Design Types */}
<section className="bg-white py-20">

  <div className="mx-auto max-w-6xl px-6">

    {/* Heading */}
    <div className="mx-auto mb-12 max-w-3xl text-center">

      <h2
        className="font-display text-4xl
        font-bold text-slate-900"
      >
        Types Of UI/UX Design Services
      </h2>

      <div className="mx-auto mt-4 h-1 w-16 bg-[#0fb7c5]" />

      <p
        className="mt-5 text-base
        leading-8 text-slate-600"
      >
        We design modern digital experiences tailored
        for businesses, startups, and creative brands.
      </p>
    </div>

    {/* Grid */}
    <div className="grid gap-6 md:grid-cols-2">

      {UI_Web_Design_Description.map((item) => (
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
            className="h-[260px]
            w-full object-cover"
          />

          {/* Content */}
          <div className="p-7">

            <h3
              className="font-display text-2xl
              font-bold text-slate-900"
            >
              {item.title}
            </h3>

            <p
              className="mt-4 text-sm
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
      {/* Tech Stack */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-6xl px-6">

          <div className="mb-12 text-center">

            <h2
              className="font-display text-4xl
              font-bold text-slate-900"
            >
              Design Tools & Technologies
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p
              className="mx-auto mt-5 max-w-3xl
              text-base leading-8 text-slate-600"
            >
              We use modern design and development tools
              to create visually attractive and professional
              digital experiences.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {DESIGN_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="border border-slate-200
                bg-slate-50 p-8 text-center
                transition-all hover:-translate-y-1
                hover:border-cyan-300"
              >
                <div
                  className="mx-auto grid h-16 w-16
                  place-items-center
                  bg-[#0fb7c5] text-2xl text-white"
                >
                  <i className={tool.icon}></i>
                </div>

                <h3
                  className="mt-5 font-display
                  text-xl font-bold
                  text-slate-900"
                >
                  {tool.name}
                </h3>
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
              className="font-display text-4xl
              font-bold leading-tight
              text-slate-900"
            >
              Why Choose Our
              <span className="text-[#0fb7c5]">
                {" "}Design Solutions?
              </span>
            </h2>

            <div className="mt-5 h-1 w-16 bg-[#0fb7c5]" />

            <p
              className="mt-7 text-base
              leading-8 text-slate-600"
            >
              We focus on delivering visually engaging
              and user-friendly digital experiences that
              combine creativity, branding, and modern UI/UX principles.
            </p>

            <div className="mt-8 space-y-5">

              {[
                "Modern & Responsive Design",
                "Creative User Experience",
                "Professional Branding Solutions",
                "Clean & Interactive Interfaces",
                "Performance Focused Design",
                "User-Centered Design Approach",
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
              src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=1600&auto=format&fit=crop"
              alt="Creative Design"
              className="h-full min-h-[420px]
              w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}