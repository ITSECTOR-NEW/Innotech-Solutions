import React from "react";
import { App_Dev_Description } from "../../data/siteData";

export default function MobileApp() {

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
              "url(https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop)",
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
            Application Development
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
              Smart & Scalable Mobile Applications
            </h2>

            <div className="mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p className="mt-5 text-base leading-7 text-slate-600">
              We develop modern and user-friendly mobile applications
              designed to improve customer engagement, business
              operations, and digital accessibility across Android
              and iOS platforms.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              From business applications and e-commerce platforms
              to educational and healthcare solutions, we create
              scalable mobile apps with modern UI/UX and powerful
              backend integration.
            </p>

            {/* Points */}
            <div className="mt-7 space-y-4">

              {[
                "Cross-platform mobile app development.",
                "Modern UI/UX focused application design.",
                "Secure, scalable, and high-performance apps.",
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
              src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1600&auto=format&fit=crop"
              alt="Application Development"
              className="h-full min-h-[350px]
              w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-6xl px-6">

          {/* Heading */}
          <div className="mx-auto mb-10 max-w-3xl text-center">

            <h2
              className="font-display text-3xl
              font-bold leading-tight
              text-slate-900 sm:text-4xl"
            >
              Types Of Applications We Develop
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p className="mt-5 text-base leading-7 text-slate-600">
              We provide mobile application development
              solutions for startups, businesses, and industries.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {App_Dev_Description.map((item) => (
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
                {" "}Application Solutions?
              </span>
            </h2>

            <div className="mt-4 h-1 w-16 bg-[#0fb7c5]" />

            <p
              className="mt-6 text-base
              leading-8 text-slate-600"
            >
              We build mobile applications that combine
              modern design, seamless performance,
              scalability, and excellent user experience.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-5">

              {[
                "Android & iOS App Development",
                "Modern UI/UX Design",
                "Fast & Secure Applications",
                "Scalable Backend Integration",
                "Real-Time Notifications & Features",
                "High Performance User Experience",
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
              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop"
              alt="Application Solutions"
              className="h-full min-h-[420px]
              w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}