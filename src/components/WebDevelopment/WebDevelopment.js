import React from "react";
import { Web_Development_Description } from "../../data/siteData";

export default function WebDevelopment() {

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
    <main className="min-h-screen bg-white text-slate-800">

      {/* Hero Banner */}
      <section
        className="relative grid
        min-h-[330px]
        place-items-center
        overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0
          bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop)",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div
          className="absolute bottom-0 left-0
          right-0 h-1 bg-[#0fb7c5]"
        />

        <div className="relative z-10 px-6 text-center">

          <h1
            className="font-display text-4xl
            font-bold leading-tight
            text-white sm:text-5xl"
          >
            Website Development
          </h1>

          <div className="mx-auto mt-5 h-1 w-16 bg-[#0fb7c5]" />
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20">

        <div
          className="mx-auto grid max-w-6xl
          items-center gap-12 px-6
          lg:grid-cols-[0.95fr_1.05fr]"
        >

          {/* Left Image */}
          <div
            className="overflow-hidden border
            border-slate-200 bg-slate-100
            shadow-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop"
              alt="Website Development"
              className="h-full min-h-[330px]
              w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>

            <h2
              className="font-display text-3xl
              font-bold leading-tight
              text-slate-900 sm:text-4xl"
            >
              Professional Web Development Solutions
            </h2>

            <div className="mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p className="mt-5 text-base leading-7 text-slate-600">
              We create modern, responsive, and scalable websites
              tailored according to business goals and industry
              requirements. Our solutions are designed to improve
              digital presence, customer engagement, and long-term
              business growth.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              From business websites and e-commerce platforms
              to educational portals and management systems,
              we develop high-quality digital solutions focused
              on performance, user experience, and modern design.
            </p>

            {/* Points */}
            <div className="mt-7 space-y-4">

              {[
                "Responsive and mobile-friendly website development.",
                "Modern UI/UX focused on customer engagement and branding.",
                "Fast, secure, and scalable web solutions for businesses.",
              ].map((point) => (
                <div
                  key={point}
                  className="flex gap-3"
                >
                  <span
                    className="mt-1 grid h-6 w-6
                    flex-shrink-0 place-items-center
                    bg-[#0fb7c5]
                    text-xs text-white"
                  >
                    <i className="fas fa-check"></i>
                  </span>

                  <p
                    className="text-sm
                    leading-7 text-slate-600"
                  >
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={requestDemo}
              className="mt-9 inline-flex
              bg-[#0fb7c5] px-7 py-3
              font-display text-sm
              font-bold uppercase
              tracking-normal text-white
              transition-all hover:bg-[#10c8d7]"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-6xl px-6">

          {/* Heading */}
          <div className="mx-auto mb-10 max-w-3xl text-center">

            <h2
              className="font-display text-3xl
              font-bold leading-tight
              text-slate-900 sm:text-4xl"
            >
              Types Of Websites We Develop
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p className="mt-5 text-base leading-7 text-slate-600">
              We provide website development solutions
              for multiple industries and business sectors.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {Web_Development_Description.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden border
                border-slate-200 bg-white
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
      <section className="py-20 bg-white">

        <div
          className="mx-auto grid max-w-6xl
    items-center gap-14 px-6
    lg:grid-cols-2"
        >

          {/* Left Content */}
          <div>

            <h2
              className="font-display text-3xl
        font-bold leading-tight
        text-slate-900 sm:text-4xl"
            >
              Why Choose Our
              <span className="text-[#0fb7c5]">
                {" "}Web Solutions?
              </span>
            </h2>

            <div className="mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p
              className="mt-6 text-base
        leading-8 text-slate-600"
            >
              We focus on building modern and scalable websites
              that combine professional design, performance,
              security, and user experience to help businesses
              grow digitally.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-5">

              {[
                "Responsive Design For All Devices",
                "SEO Friendly Website Structure",
                "Modern UI/UX Experience",
                "Fast Loading Performance",
                "Secure & Scalable Development",
                "Clean & Professional Layouts",
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

          {/* Right Image */}
          <div
            className="overflow-hidden border
      border-slate-200 bg-slate-100
      shadow-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
              alt="Modern Web Solutions"
              className="h-full min-h-[420px]
        w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}