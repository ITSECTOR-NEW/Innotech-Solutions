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
   <main className="min-h-screen bg-[#0f1419] text-white">

      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#1a1f2e] to-[#0f1419] border-b border-[#0fb7c5]/40">
        <div className="mx-auto max-w-6xl">
          {/* Back Button */}
          <a
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-200 hover:border-[#0fb7c5] hover:bg-[#0fb7c5]/10 hover:text-[#0fb7c5] transition-all mb-10"
          >
            <i className="fas fa-arrow-left text-sm" />
            <span className="text-sm font-semibold">Back to Home</span>
          </a>

          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0fb7c5]/10 border border-[#0fb7c5]/30 text-[#0fb7c5] text-xs font-semibold uppercase tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0fb7c5]"></span>
              About Innotech Solutions
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              We Engineer the
              <span className="block text-[#0fb7c5] mt-2">Future of Technology</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              At Innotech Solutions, we deliver innovative digital solutions that transform businesses through cutting-edge technology, strategic thinking, and unwavering commitment to excellence.
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
              {[
                { value: "2+", label: "Years in Business" },
                { value: "8+", label: "Projects Delivered" },
                { value: "8+", label: "Happy Clients" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-bold text-[#0fb7c5]">{s.value}</p>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mt-2">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => requestPricing()}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#0fb7c5] text-[#0f1419] font-bold text-sm uppercase tracking-wide hover:bg-[#0da5b5] transition-all shadow-lg hover:shadow-xl"
              >
                Get in Touch
                <i className="fas fa-arrow-right text-xs" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-slate-600 text-slate-200 font-bold text-sm uppercase tracking-wide hover:border-[#0fb7c5] hover:text-[#0fb7c5] transition-all">
                Learn More
                <i className="fas fa-external-link-alt text-xs" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHO WE ARE SECTION
      ═══════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#0f1419]">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0fb7c5]/10 border border-[#0fb7c5]/30 text-[#0fb7c5] text-xs font-semibold uppercase tracking-wide mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0fb7c5]"></span>
                Who We Are
              </div>

              <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                Technology-Driven Company
              </h2>

              <div className="h-1 w-16 bg-[#0fb7c5] mb-6"></div>

              <p className="text-slate-300 leading-8 mb-6">
                At Innotech Solution, we deliver AI-first digital solutions for businesses, schools, and industries. Our services include AI services, Industrial Internet of Things, AI and coding training, business automation, website development, and app development designed to improve efficiency and growth.
              </p>

              <p className="text-slate-300 leading-8 mb-8">
                Innotech Solution is a technology-driven company focused on creating modern AI, web, and application solutions that simplify business operations and improve productivity. From professional websites and custom apps to AI assistants, automation, analytics, and smart industrial systems, we deliver solutions designed for real-world challenges.
              </p>

              {/* About Points */}
              <div className="space-y-4 mb-8">
                {ABOUT_POINTS.map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0fb7c5] text-[#0f1419]">
                        <i className="fas fa-check text-xs"></i>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed pt-0.5">{point}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => requestPricing()}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#0fb7c5] text-[#0f1419] font-bold text-sm uppercase tracking-wide hover:bg-[#0da5b5] transition-all shadow-lg"
              >
                Work With Us
                <i className="fas fa-arrow-right text-xs" />
              </button>
            </div>

            {/* Right - Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, index) => (
                <div 
                  key={index}
                  className="border-2 border-slate-700 rounded-2xl p-6 bg-gradient-to-br from-slate-900 to-[#0f1419] hover:border-[#0fb7c5] hover:shadow-lg transition-all text-center"
                >
                  <p className="text-4xl font-bold text-[#0fb7c5] font-display mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
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
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0fb7c5]/10 border border-[#0fb7c5]/30 text-[#0fb7c5] text-xs font-semibold uppercase tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0fb7c5]"></span>
              What Guides Our Work
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Core
              <span className="block text-[#0fb7c5] mt-1">Values</span>
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Our core values shape every decision, project, and client relationship we build
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((value, index) => (
              <div 
                key={index}
                className="border-2 border-slate-700 rounded-2xl p-8 bg-slate-800/50 hover:border-[#0fb7c5] hover:shadow-xl hover:-translate-y-1 transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0fb7c5]/10 rounded-full mb-6 hover:bg-[#0fb7c5] hover:text-[#0f1419] transition-all">
                  <i className={`${value.icon} text-2xl text-[#0fb7c5]`}></i>
                </div>
                <h3 className="font-bold text-xl text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm">
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
      <section className="py-20 px-6 bg-[#0f1419]">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0fb7c5]/10 border border-[#0fb7c5]/30 text-[#0fb7c5] text-xs font-semibold uppercase tracking-wide mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0fb7c5]"></span>
                Why Choose Us
              </div>

              <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                Why Choose Innotech
                <span className="block text-[#0fb7c5] mt-1">Solutions?</span>
              </h2>

              <div className="h-1 w-16 bg-[#0fb7c5] mb-6"></div>

              <p className="text-slate-300 leading-8 mb-8">
                We combine technical depth, design precision, and business strategy to build solutions that perform — not just look good. Here's what sets us apart.
              </p>

              {/* Why Us Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {whyUs.map((item, i) => {
                  const isHov = hoveredWhy === i;
                  return (
                    <div
                      key={item.text}
                      onMouseEnter={() => setHoveredWhy(i)}
                      onMouseLeave={() => setHoveredWhy(null)}
                      className={`border-2 rounded-xl p-4 transition-all ${
                        isHov
                          ? "border-[#0fb7c5] bg-[#0fb7c5]/10"
                          : "border-slate-700 bg-slate-800/30"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 transition-all ${
                        isHov ? "bg-[#0fb7c5] text-[#0f1419]" : "bg-[#0fb7c5]/10 text-[#0fb7c5]"
                      }`}>
                        <i className={`${item.icon} text-sm`}></i>
                      </div>
                      <p className="font-semibold text-white text-sm">{item.text}</p>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => requestPricing()}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#0fb7c5] text-[#0f1419] font-bold text-sm uppercase tracking-wide hover:bg-[#0da5b5] transition-all shadow-lg"
              >
                Start Collaboration
                <i className="fas fa-arrow-right text-xs" />
              </button>
            </div>

            {/* Right - Quality Stats */}
            <div className="border-2 border-slate-700 rounded-2xl p-8 bg-slate-800/30">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
                Our Commitment To Excellence
              </p>

              {/* Quality Bars */}
              <div className="space-y-6 mb-8">
                {qualityBars.map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-white">{bar.label}</span>
                      <span className="font-bold text-white">{bar.value}%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-700">
                      <div
                        className="h-3 rounded-full transition-all duration-500"
                        style={{ width: `${bar.value}%`, backgroundColor: bar.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-2 gap-4">
                {miniStats.map((s) => (
                  <div
                    key={s.label}
                    className="border-2 border-slate-700 rounded-xl p-4 text-center bg-slate-800/30 hover:border-[#0fb7c5] hover:shadow-lg transition-all"
                  >
                    <i className={`${s.icon} text-2xl`} style={{ color: s.color }}></i>
                    <p className="font-bold text-white mt-2">{s.value}</p>
                    <p className="text-xs text-slate-400 mt-1">{s.label}</p>
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
      <section className="py-16 px-6 bg-[#0f1419]">
        <div className="mx-auto max-w-4xl">
          <div className="border-2 border-[#0fb7c5] rounded-2xl p-8 bg-gradient-to-r from-[#0fb7c5]/10 to-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Ready To Transform Your
                <span className="block text-[#0fb7c5] mt-1">Business?</span>
              </h2>
              <p className="text-slate-300 mt-2">
                Let's work together to build innovative solutions that drive your success.
              </p>
            </div>
            <button
              onClick={() => requestPricing()}
              className="inline-flex flex-shrink-0 items-center gap-2 px-8 py-3.5 rounded-lg bg-[#0fb7c5] text-[#0f1419] font-bold text-sm uppercase tracking-wide hover:bg-[#0da5b5] transition-all shadow-lg"
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