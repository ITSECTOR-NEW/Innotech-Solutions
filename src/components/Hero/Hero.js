import React, { useEffect, useState } from "react";
import { COMPANY } from "../../data/siteData";

const heroSlides = [
  {
    image: "https://www.innovixtech.in/images/slider-1.jpg",
    title: "Innotech Solution",
    desc: "Transform your business with modern website and app development solutions designed to enhance your digital presence, improve customer engagement, and accelerate business growth.",
  },
  {
    image: "https://www.innovixtech.in/images/slider-2.jpg",
    title: "Smart Automation & Technology Solutions",
    desc: "Experience efficient and reliable automation solutions that simplify operations, improve productivity, and support smarter business and industrial management.",
  },
  {
    image: "https://www.innovixtech.in/images/slider-3.jpg",
    title: "Student Training & Career Development",
    desc: "Empowering students with practical training, mentorship, and industry-focused learning programs to build strong technical skills and successful careers.",
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
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
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

            <div className="animate-fadeUp-3 mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#services")}
                className="inline-flex items-center gap-2 bg-[#0fb7c5] px-6 py-3 font-display text-xs font-bold uppercase tracking-normal text-white shadow-lg shadow-cyan-950/30 transition-all hover:-translate-y-0.5 hover:bg-[#10c8d7]"
              >
                Read More <i className="fas fa-arrow-right text-xs"></i>
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 border-2 border-white px-6 py-3 font-display text-xs font-bold uppercase tracking-normal text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
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
