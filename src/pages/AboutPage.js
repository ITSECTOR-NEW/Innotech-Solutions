import React, { useState } from "react";
import ayushImage from "../assets/team/ ayush.png";
import khushiImage from "../assets/team/ khushi.png";
import sachinImage from "../assets/team/ sachin.png";

const ABOUT_POINTS = [
  "Delivering innovative digital and automation solutions tailored to modern business needs.",
  "Helping startups, businesses, and industries improve efficiency through smart technology.",
  "Focused on reliable support, scalable systems, and long-term client partnerships.",
];

const VALUES = [
  {
    icon: "fas fa-lightbulb",
    title: "Innovation",
    desc: "We create smart and modern technology solutions that help businesses stay ahead in a rapidly evolving digital world.",
  },
  {
    icon: "fas fa-chart-line",
    title: "Growth & Quality",
    desc: "Our focus is on delivering high-quality, scalable, and efficient solutions that support long-term business growth.",
  },
  {
    icon: "fas fa-shield-halved",
    title: "Trust & Reliability",
    desc: "We build lasting client relationships through transparency, dependable support, and timely project delivery.",
  },
];

const STATS = [
  { label: "Years of Excellence", value: "2+" },
  { label: "Projects Delivered", value: "8+" },
  { label: "Happy Clients", value: "8+" },
  { label: "Team Members", value: "3+" },
];

const TEAM_MEMBERS = [
  {
    name: "Ayush Sharma",
    role: "Director",
    image: ayushImage,
    icon: "fas fa-user-tie",
    desc: "Driven technology professional with a strong background in automation, IoT, robotics, and software development, dedicated to creating innovative and efficient solutions for modern businesses and industries.",
  },
  {
    name: "Khushi Sikarwar",
    role: "Chief Technology Officer",
    image: khushiImage,
    icon: "fas fa-code",
    desc: "Technical expert with strong experience in software solutions, digital transformation, and strategic technology management. Skilled in web technologies, system planning, and innovative solution building.",
  },
  {
    name: "Sachin Talwar",
    role: "Industrial Automation Expert",
    image: sachinImage,
    icon: "fas fa-cogs",
    desc: "Technology innovator specializing in Full-Stack Development, Industrial Automation, IoT, and smart digital solutions. Experienced in delivering scalable technologies that enhance efficiency, innovation, and business growth.",
  },
];

export default function AboutPage() {
  const [hoveredWhy, setHoveredWhy] = useState(null);

  const requestPricing = () => {
    const contact = document.querySelector("#contact");
    if (contact) { contact.scrollIntoView({ behavior: "smooth" }); return; }
    window.location.href = "/#contact";
  };

  const whyUs = [
    { icon: "fas fa-rocket", text: "Cutting-Edge Innovation" },
    { icon: "fas fa-users", text: "Client-Centric Approach" },
    { icon: "fas fa-certificate", text: "Quality Assured" },
    { icon: "fas fa-lightbulb", text: "Expert Team" },
    { icon: "fas fa-shield-alt", text: "Secure & Scalable" },
    { icon: "fas fa-tachometer-alt", text: "Fast & Reliable" },
  ];

  const qualityBars = [
    { label: "On-time Delivery", value: 96, color: "#0fb7c5" },
    { label: "Client Satisfaction", value: 98, color: "#10b981" },
    { label: "Project Success Rate", value: 99, color: "#8b5cf6" },
    { label: "Team Expertise", value: 100, color: "#38bdf8" },
  ];

  const miniStats = [
    { value: "2+", label: "Years Active", icon: "fas fa-calendar", color: "#0fb7c5" },
    { value: "8+", label: "Projects Done", icon: "fas fa-check-circle", color: "#10b981" },
    { value: "8+", label: "Happy Clients", icon: "fas fa-users", color: "#f59e0b" },
    { value: "3", label: "Expert Members", icon: "fas fa-user-tie", color: "#8b5cf6" },
  ];

  return (
   <main className="min-h-screen bg-[#13181f] text-white" style={{ fontFamily: "inherit" }}>

      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#0d1117]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
        <div className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-sky-600/10 blur-[140px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/8 blur-[120px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="absolute left-3 top-20 z-30 sm:left-6 sm:top-28 lg:left-8 lg:top-32">
          <a
            href="/"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-white sm:h-auto sm:w-auto sm:px-5 sm:py-2.5"
          >
            <i className="fas fa-arrow-left text-sm" />
            <span className="ml-2 hidden text-sm font-semibold sm:inline">Back to Home</span>
          </a>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-400">
                About Innotech Solutions
              </span>
            </div>

            <h1
              className="font-black leading-[1.05] text-white"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.8rem)" }}
            >
              We Engineer the
              <span
                className="mt-1 block"
                style={{
                  background: "linear-gradient(135deg, #38bdf8 0%, #22d3ee 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Future of Technology
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              At Innotech Solutions, we deliver innovative digital solutions that transform businesses through cutting-edge technology, strategic thinking, and unwavering commitment to excellence.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-14">
              {[
                { value: "2+", label: "Years in Business" },
                { value: "8+", label: "Projects Delivered" },
                { value: "8+", label: "Happy Clients" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p
                    className="font-black"
                    style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      background: "linear-gradient(135deg, #38bdf8 0%, #22d3ee 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => requestPricing()}
                className="inline-flex items-center gap-2 rounded-full bg-[#0ea5e9] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-[#38bdf8] hover:shadow-sky-400/40"
              >
                Get in Touch
                <i className="fas fa-arrow-right text-xs" />
              </button>
              <a
                href="#who-we-are"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white/[0.09]"
              >
                Learn More
                <i className="fas fa-external-link-alt text-xs" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHO WE ARE SECTION
      ═══════════════════════════════════════ */}
      <section id="who-we-are" className="relative overflow-hidden bg-[#13181f] py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-[350px] w-[350px] translate-x-1/2 rounded-full bg-sky-600/8 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            {/* Left - Content */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-white/70" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
                  Who We Are
                </span>
              </div>

              <h2
                className="font-black leading-tight text-white"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
              >
                Technology-Driven Company
              </h2>

              <div className="my-5 h-px w-full bg-white/[0.06]" />

              <p className="text-sm leading-7 text-slate-400">
                At Innotech Solution, we deliver AI-first digital solutions for businesses, schools, and industries. Our services include AI services, Industrial Internet of Things, AI and coding training, business automation, website development, and app development designed to improve efficiency and growth.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Innotech Solution is a technology-driven company focused on creating modern AI, web, and application solutions that simplify business operations and improve productivity. From professional websites and custom apps to AI assistants, automation, analytics, and smart industrial systems, we deliver solutions designed for real-world challenges.
              </p>

              {/* About Points */}
              <div className="mt-6 space-y-3">
                {ABOUT_POINTS.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/15">
                      <i className="fas fa-check text-[8px] text-cyan-400" />
                    </span>
                    <p className="text-sm leading-6 text-slate-400">{point}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => requestPricing()}
                className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-[#0ea5e9] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-[#38bdf8] hover:shadow-sky-400/30"
              >
                Work With Us
                <i className="fas fa-arrow-right text-xs" />
              </button>
            </div>

            {/* Right - Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-white/[0.055]"
                >
                  <span className="absolute left-0 top-0 h-[2px] w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "linear-gradient(90deg, #0ea5e9, transparent)" }} />
                  <p
                    className="mb-2 font-black"
                    style={{
                      fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                      background: "linear-gradient(135deg, #38bdf8 0%, #22d3ee 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          VALUES SECTION
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0d1117] py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="pointer-events-none absolute left-0 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/8 blur-[130px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-400">What Guides Our Work</span>
            </div>
            <h2
              className="font-black leading-[1.15] text-white"
              style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)" }}
            >
              Our Core
              <span
                className="mt-1 block"
                style={{ background: "linear-gradient(135deg, #38bdf8 0%, #22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                Values
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-[15px]">
              Our core values shape every decision, project, and client relationship we build
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {VALUES.map((value, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-white/[0.055]"
              >
                <span className="absolute left-0 top-0 h-[2px] w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(90deg, #0ea5e9, transparent)" }} />
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] transition-all duration-300 group-hover:border-sky-500/40 group-hover:bg-sky-500/10">
                  <i className={`${value.icon} text-lg text-slate-500 transition-colors duration-300 group-hover:text-sky-400`}></i>
                </div>
                <h3 className="text-sm font-black text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0d1117] py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/35 to-transparent" />
        <div className="pointer-events-none absolute left-0 top-1/3 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-sky-600/8 blur-[130px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-white/70" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">Why Choose Us</span>
              </div>

              <h2
                className="font-black leading-tight text-white"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
              >
                Why Choose Innotech
                <span
                  className="block"
                  style={{ background: "linear-gradient(135deg, #38bdf8 0%, #22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  Solutions?
                </span>
              </h2>

              <div className="my-5 h-px w-full bg-white/[0.06]" />

              <p className="text-sm leading-7 text-slate-400">
                We combine technical depth, design precision, and business strategy to build solutions that perform — not just look good. Here's what sets us apart.
              </p>

              {/* Why Us Grid */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {whyUs.map((item, i) => {
                  const isHov = hoveredWhy === i;
                  return (
                    <div
                      key={item.text}
                      onMouseEnter={() => setHoveredWhy(i)}
                      onMouseLeave={() => setHoveredWhy(null)}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5 transition-all duration-200 hover:border-sky-500/30 hover:bg-sky-500/5"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-sky-500/10 transition-all duration-200">
                        <i className={`${item.icon} text-xs transition-colors duration-200`}
                          style={{ color: isHov ? "#38bdf8" : "#64748b" }} />
                      </div>
                      <span className="text-sm font-semibold text-slate-300">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => requestPricing()}
                className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-[#0ea5e9] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-[#38bdf8] hover:shadow-sky-400/30"
              >
                Start Collaboration
                <i className="fas fa-arrow-right text-xs" />
              </button>
            </div>

            {/* Right - Quality Stats */}
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 sm:p-8">
              <p className="mb-6 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                Our Commitment To Excellence
              </p>

              {/* Quality Bars */}
              {qualityBars.map((bar) => (
                  <div key={bar.label} className="mb-5">
                    <div className="mb-2 flex justify-between">
                      <span className="text-sm font-semibold text-slate-300">{bar.label}</span>
                      <span className="text-sm font-black text-white">{bar.value}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/[0.06]">
                      <div
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ width: `${bar.value}%`, background: bar.color }}
                      />
                    </div>
                  </div>
              ))}

              {/* Mini Stats */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {miniStats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-center transition-all duration-200 hover:border-sky-500/20 hover:bg-sky-500/5"
                  >
                    <i className={`${s.icon} text-lg`} style={{ color: s.color }}></i>
                    <p className="mt-2 text-xl font-black text-white">{s.value}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TEAM SECTION
      ═══════════════════════════════════════ */}
      {/* <section className="py-20 px-6 bg-slate-900/50">
        <div className="mx-auto max-w-6xl"> */}
          {/* Section Header */}
          {/* <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0fb7c5]/10 border border-[#0fb7c5]/30 text-[#0fb7c5] text-xs font-semibold uppercase tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0fb7c5]"></span>
              Our Leadership
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our Expert
              <span className="block text-[#0fb7c5] mt-1">Team</span>
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Visionary leaders driving innovation and excellence in every project we undertake
            </p>
          </div> */}

          {/* Team Members Grid - 3 Columns */}
          {/* <div className="grid md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div  */}
                {/* key={index} */}
{/* className="border border-slate-700/50 rounded-2xl overflow-hidden bg-slate-800/50 hover:border-[#0fb7c5]/50 hover:shadow-lg transition-all duration-300"              > */}
                {/* Image Container */}
                {/* <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 h-56 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#0fb7c5]/10 hover:to-slate-900 transition-all">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full border-1 border-[#0fb7c5] overflow-hidden shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div> */}

                {/* Info Container */}
                {/* <div className="p-6 text-center"> */}
                  {/* <p className="text-xs font-bold uppercase tracking-widest text-[#0fb7c5] mb-2">
                    {member.role}
                  </p>
                  <h3 className="font-bold text-xl text-white mb-3">
                    {member.name}
                  </h3>
                  <p className="text-sm text-slate-300 leading-6 mb-6 min-h-24">
                    {member.desc}
                  </p> */}

                  {/* Social Links */}
                  {/* <div className="flex justify-center gap-4 pt-4 border-t border-slate-700">
                    <a 
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#0fb7c5]/10 hover:bg-[#0fb7c5] text-[#0fb7c5] hover:text-[#0f1419] flex items-center justify-center transition-all"
                      title="LinkedIn"
                    >
                      <i className="fab fa-linkedin text-sm"></i>
                    </a>
                    <a 
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#0fb7c5]/10 hover:bg-[#0fb7c5] text-[#0fb7c5] hover:text-[#0f1419] flex items-center justify-center transition-all"
                      title="GitHub"
                    >
                      <i className="fab fa-github text-sm"></i>
                    </a>
                    <a 
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#0fb7c5]/10 hover:bg-[#0fb7c5] text-[#0fb7c5] hover:text-[#0f1419] flex items-center justify-center transition-all"
                      title="Twitter"
                    >
                      <i className="fab fa-twitter text-sm"></i>
                    </a>
                  </div> */}
                {/* </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ═══════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#13181f] py-14">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] w-[600px] rounded-full bg-sky-600/8 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-sky-500/15 bg-sky-500/[0.03] px-6 py-8 text-center sm:px-10 md:flex-row md:text-left">
            <div>
              <h2 className="font-black text-white" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}>
                Ready To Transform Your
                <span
                  className="block"
                  style={{ background: "linear-gradient(135deg, #38bdf8 0%, #22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  Business?
                </span>
              </h2>
              <p className="mt-1.5 text-sm text-slate-500">
                Let's work together to build innovative solutions that drive your success.
              </p>
            </div>
            <button
              onClick={() => requestPricing()}
              className="inline-flex flex-shrink-0 items-center gap-2.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition-all hover:scale-105 hover:shadow-sky-500/30"
            >
              Get in Touch
              <i className="fas fa-arrow-right text-xs" />
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
