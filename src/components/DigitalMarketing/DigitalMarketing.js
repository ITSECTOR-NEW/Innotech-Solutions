import React from "react";
import { DIGITAL_MARKETING_SERVICES } from "../../data/siteData";

export default function DigitalMarketing() {

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
              "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop)",
          }}
        />

        <div className="absolute inset-0 bg-black/65" />

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
            Digital Marketing
          </h1>

          <div className="mx-auto mt-5 h-1 w-16 bg-[#0fb7c5]" />
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20">

        <div
          className="mx-auto grid max-w-6xl
          items-center gap-12 px-6
          lg:grid-cols-[1fr_1fr]"
        >

          {/* Left Content */}
          <div>

            <h2
              className="font-display text-3xl
              font-bold leading-tight
              text-slate-900 sm:text-4xl"
            >
              Grow Your Business With
              Smart Digital Marketing
            </h2>

            <div className="mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p className="mt-5 text-base leading-7 text-slate-600">
              We provide result-driven digital marketing
              solutions designed to improve online visibility,
              customer engagement, and business growth.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              From SEO and social media marketing
              to Google Ads and branding campaigns,
              we help businesses build a strong digital
              presence and generate quality leads.
            </p>

            {/* Points */}
            <div className="mt-7 space-y-4">

              {[
                "SEO & Google ranking optimization.",
                "Social media branding and campaigns.",
                "Performance marketing & lead generation.",
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

          {/* Right Image */}
          <div
            className="overflow-hidden border
            border-slate-200 bg-slate-100
            shadow-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1600&auto=format&fit=crop"
              alt="Digital Marketing"
              className="h-full min-h-[350px]
              w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-6xl px-6">

          {/* Heading */}
          <div className="mx-auto mb-10 max-w-3xl text-center">

            <h2
              className="font-display text-3xl
              font-bold leading-tight
              text-slate-900 sm:text-4xl"
            >
              Digital Marketing Services
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p className="mt-5 text-base leading-7 text-slate-600">
              Complete digital marketing solutions
              designed to improve visibility,
              traffic, and customer engagement.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {DIGITAL_MARKETING_SERVICES.map((item) => (
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
                {" "}Marketing Solutions?
              </span>
            </h2>

            <div className="mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p
              className="mt-6 text-base
              leading-8 text-slate-600"
            >
              We help businesses build strong
              online visibility through modern
              marketing strategies and creative campaigns.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-5">

              {[
                "SEO & Search Ranking",
                "Social Media Campaigns",
                "Google & Meta Ads",
                "Lead Generation Strategies",
                "Brand Awareness Campaigns",
                "Performance Marketing Solutions",
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
              src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1600&auto=format&fit=crop"
              alt="Digital Marketing Solutions"
              className="h-full min-h-[420px]
              w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}