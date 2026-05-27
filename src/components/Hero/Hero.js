import React, { useEffect, useState } from "react";
import { COMPANY } from "../../data/siteData";
import { href } from "react-router-dom";

// Transform Your Business with Seamless SaaS and Cloud Solutions.",

const heroSlides = [
  {
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Transform Your Business with Seamless Web & App Solutions.",
    desc: "Transform your business with modern website and app development solutions designed to enhance your digital presence and accelerate growth.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1600&auto=format&fit=crop",
    title: "Industrial IoT & Smart Dashboards",
    desc: "Connecting machines, sensors, gateways, alerts, and dashboards so industrial teams can monitor operations in real time.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    title: "AI, Coding Training & Business Automation",
    desc: "Providing practical AI services, student technology training, and automation systems for modern organizations.",
  },
];
export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

 
  const goToSlide = (index) => setActiveSlide((index + heroSlides.length) % heroSlides.length);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-slate-950">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={index !== activeSlide}
        />
      ))}

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

      <div className="relative z-10 flex min-h-screen items-center pt-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-8 lg:px-10">
          <div className="max-w-[690px] -translate-y-6 text-left text-white sm:-translate-y-4">
            <h2 className="animate-fadeUp font-display text-xl font-semibold tracking-normal text-[#0fb7c5] sm:text-[26px]">
              {COMPANY.name}
            </h2>

            <h1
              key={heroSlides[activeSlide].title}
              className="animate-fadeUp-1 mt-4 font-display font-bold leading-[1.22] text-white drop-shadow-xl"
              style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}
            >
              {heroSlides[activeSlide].title}
            </h1>
            

            <p className="animate-fadeUp-2 mt-5 max-w-[640px] text-sm font-normal leading-7 text-white/90 sm:text-[16px]">
              {heroSlides[activeSlide].desc}
            </p>

            <div className="animate-fadeUp-3 mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <button
                onClick={() => scrollTo("#services")}
                className="inline-flex items-center gap-2 bg-[#0fb7c5] px-5 py-3 font-display text-xs font-bold uppercase tracking-normal text-white shadow-lg shadow-cyan-950/30 transition-all hover:-translate-y-0.5 hover:bg-[#10c8d7] sm:px-6"
              >
                Read More <i className="fas fa-arrow-right text-xs"></i>
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 border-2 border-white px-5 py-3 font-display text-xs font-bold uppercase tracking-normal text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-slate-950 sm:px-6"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Old left right button for slide change, not looking on phone */}
      {/* <button
        type="button"
        onClick={() => goToSlide(activeSlide - 1)}
        className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center border border-white/40 bg-black/20 text-white backdrop-blur transition-all hover:bg-[#0fb7c5] md:grid"
        aria-label="Previous hero slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        type="button"
        onClick={() => goToSlide(activeSlide + 1)}
        className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center border border-white/40 bg-black/20 text-white backdrop-blur transition-all hover:bg-[#0fb7c5] md:grid"
        aria-label="Next hero slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button> */}

       {/* New left right button for slide change, looking on phonw also */}
       {/* Left Arrow */}
<button
  type="button"
  onClick={() => goToSlide(activeSlide - 1)}
  className="absolute bottom-24 left-3 sm:left-5 sm:top-1/2 sm:bottom-auto z-30 flex h-10 w-10 sm:h-11 sm:w-11 sm:-translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors duration-200 hover:bg-black/70"
  aria-label="Previous slide"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19l-7-7 7-7"
    />
  </svg>
</button>

{/* Right Arrow */}
<button
  type="button"
  onClick={() => goToSlide(activeSlide + 1)}
  className="absolute bottom-24 right-3 sm:right-5 sm:top-1/2 sm:bottom-auto z-30 flex h-10 w-10 sm:h-11 sm:w-11 sm:-translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors duration-200 hover:bg-black/70"
  aria-label="Next slide"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5l7 7-7 7"
    />
  </svg>
</button>
     

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 border border-white transition-all ${
              index === activeSlide ? "bg-[#0fb7c5]" : "bg-white/30 hover:bg-white/70"
            }`}
            aria-label={`Show hero slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
