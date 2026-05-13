import React from "react";
import { COMPANY } from "../data/siteData";

const CORE_VALUES = [
  {
    icon: "fas fa-lightbulb",
    title: "Practical Innovation",
    desc: "We use modern technology only where it genuinely improves the result.",
    color: "text-cyan-300",
  },
  {
    icon: "fas fa-comments",
    title: "Clear Communication",
    desc: "Clients stay informed through simple updates, honest timelines, and direct support.",
    color: "text-purple-300",
  },
  {
    icon: "fas fa-shield-halved",
    title: "Reliable Delivery",
    desc: "We build solutions that are stable, scalable, and ready for real business use.",
    color: "text-green-300",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Growth Mindset",
    desc: "We keep learning and also help students, teams, and institutions learn better.",
    color: "text-amber-300",
  },
];

const CUSTOMERS = [
  {
    icon: "fas fa-industry",
    title: "Industries",
    desc: "Websites, dashboards, automation workflows, IoT concepts, and digital process improvement.",
  },
  {
    icon: "fas fa-school",
    title: "Schools",
    desc: "STEM workshops, robotics training, AI awareness sessions, and technology learning programs.",
  },
  {
    icon: "fas fa-chalkboard-user",
    title: "Coachings",
    desc: "Digital presence, inquiry systems, landing pages, student engagement, and growth support.",
  },
  {
    icon: "fas fa-spa",
    title: "Beauty Saloons",
    desc: "Portfolio websites, booking flows, social media support, and local business visibility.",
  },
  {
    icon: "fas fa-store",
    title: "Local Businesses",
    desc: "Simple, professional websites and digital tools that help customers trust and contact them.",
  },
  {
    icon: "fas fa-rocket",
    title: "Startups",
    desc: "MVP planning, product interfaces, web apps, and launch-ready digital experiences.",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Your Name",
    role: "Director",
    desc: "Leads the company vision, client relationships, technology planning, and long-term growth.",
  },
  {
    name: "Team Member Name",
    role: "Head of Management",
    desc: "Handles operations, team coordination, project planning, communication, and delivery flow.",
  },
];

const COMPANY_HIGHLIGHTS = [
  "Websites, web apps, automation, AI-enabled workflows, and training programs.",
  "A practical approach for businesses, institutions, startups, and local brands.",
  "Planning, design, development, launch support, and long-term improvement.",
];

function SectionHeader({ eyebrow, title, desc }) {
  return (
    <div className="max-w-3xl mb-10">
      <p className="text-xs uppercase tracking-[0.25em] text-cyan-300 font-bold font-display mb-4">
        {eyebrow}
      </p>
      <h2 className="font-display font-extrabold text-white mb-4" style={{ fontSize: "clamp(1.9rem,4vw,3rem)", lineHeight: 1.12 }}>
        {title}
      </h2>
      {desc && <p className="text-slate-400 leading-relaxed">{desc}</p>}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark-900 text-slate-100">
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "linear-gradient(rgba(100,160,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(100,160,255,1) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 blink"></span>
                About the Company
              </div>

              <h1 className="font-display font-extrabold text-white mb-6" style={{ fontSize: "clamp(2.4rem,6vw,5rem)", lineHeight: 1.06 }}>
                {COMPANY.name}
              </h1>

              <p className="text-slate-300 text-xl leading-relaxed mb-5 max-w-3xl">
                {COMPANY.tagline}
              </p>
              <p className="text-slate-400 leading-relaxed max-w-3xl">
                {COMPANY.name} is a technology company based in {COMPANY.address}. We help
                businesses, institutions, startups, and local brands build a stronger digital
                presence through practical websites, applications, automation, AI workflows, and
                technology training.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] overflow-hidden">
              <div className="p-7 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 border-b border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 grid place-items-center text-white text-2xl mb-5">
                  <i className="fas fa-microchip"></i>
                </div>
                <h2 className="font-display font-extrabold text-2xl text-white mb-2">
                  Company Details
                </h2>
                <p className="text-sm text-slate-400">
                  Information your visitors can quickly trust and understand.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-px bg-white/10">
                {[
                  ["Location", COMPANY.address],
                  ["Email", COMPANY.email],
                  ["Phone", COMPANY.phone],
                  ["Hours", COMPANY.hours],
                ].map(([label, value]) => (
                  <div key={label} className="bg-dark-900 p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500 font-bold mb-2">
                      {label}
                    </p>
                    <p className="text-sm text-white font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {COMPANY_HIGHLIGHTS.map((item, index) => (
              <div key={item} className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
                <div className="font-display font-extrabold text-2xl text-cyan-400 mb-3">
                  0{index + 1}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Core Values"
            title="What guides our work"
            desc="These values keep every project clear, useful, and focused on long-term trust."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_VALUES.map((value) => (
              <div key={value.title} className="rounded-2xl bg-dark-900/70 border border-white/10 p-6 hover:border-cyan-400/40 transition-all">
                <i className={`${value.icon} ${value.color} text-2xl mb-5`}></i>
                <h3 className="font-display font-bold text-white mb-3">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Our Customers"
            title="Who we help"
            desc="We serve both professional organizations and local businesses that want practical, polished digital support."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CUSTOMERS.map((customer) => (
              <div key={customer.title} className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 hover:bg-white/[0.06] transition-all">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/25 grid place-items-center text-cyan-300 mb-5">
                  <i className={`${customer.icon} text-lg`}></i>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-3">{customer.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{customer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Team Members"
            title="People behind the company"
            desc="Add real names, photos, and profiles here whenever you are ready."
          />

          <div className="grid md:grid-cols-2 gap-5">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.role} className="rounded-3xl bg-dark-900/70 border border-white/10 p-7 flex flex-col sm:flex-row gap-5">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 grid place-items-center text-white text-3xl flex-shrink-0">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-amber-300 font-bold font-display mb-2">
                    {member.role}
                  </p>
                  <h3 className="font-display font-extrabold text-2xl text-white mb-3">
                    {member.name}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-cyan-400/12 to-purple-600/12 border border-cyan-400/20 p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300 font-bold font-display mb-3">
                Work With Us
              </p>
              <h2 className="font-display font-extrabold text-white text-3xl mb-2">
                Have a project or training requirement?
              </h2>
              <p className="text-slate-400">
                Share your idea and we will help you choose the right digital solution.
              </p>
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-display font-semibold shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 transition-all"
            >
              Contact Us <i className="fas fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
