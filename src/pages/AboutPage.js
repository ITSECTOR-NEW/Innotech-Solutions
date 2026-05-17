import React from "react";
import ayushImage from "../assets/ team/ ayush.png";
import khushiImage from "../assets/ team/ khushi.png";

const pageHeroImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop";
const aboutImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop";

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
  { top: "For The Last", value: "2+ Years" },
  { top: "Projects", value: "10+ Completed" },
  { top: "Clients", value: "8+ Happy Clients" },
  { top: "Presence", value: "4+ Locations" },
];

const TEAM_MEMBERS = [
  {
    name: "Ayush Sharma",
    role: "Director",
    image: ayushImage,
    desc: "Driven technology professional with a strong background in automation, IoT, robotics, and software development, dedicated to creating innovative and efficient solutions for modern businesses and industries. Passionate about combining technology, creativity, and problem-solving to develop impactful digital systems that enhance productivity, reliability, and growth.",
  },
  {
    name: "Khushi Sikarwar",
    role: "Chief Technology Officer",
    image: khushiImage,
    desc: "Technical expert with strong experience in software solutions, digital transformation, and strategic technology management. Skilled in web technologies, system planning, business development, and innovative solution building, with experience working across multiple industries. Passionate about leading technology-driven projects, optimizing business operations, and delivering scalable digital solutions with a focus on innovation and growth.",
  },
];

function SectionTitle({ title, desc, center = false }) {
  return (
    <div className={center ? "mx-auto mb-10 max-w-3xl text-center" : "mb-8 max-w-3xl"}>
      <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <div className={`mt-4 h-1 w-16 bg-[#0fb7c5] ${center ? "mx-auto" : ""}`} />
      {desc && <p className="mt-5 text-base leading-7 text-slate-600">{desc}</p>}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="relative grid min-h-[330px] place-items-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pageHeroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0fb7c5]" />

        <div className="relative z-10 px-6 text-center">
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            About
          </h1>
          <div className="mx-auto mt-5 h-1 w-16 bg-[#0fb7c5]" />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
            <img
              src={aboutImage}
              alt="Corporate technology workspace"
              className="h-full min-h-[330px] w-full object-cover"
            />
          </div>

          <div>
            <SectionTitle
              title="Who We Are?"
              desc="At Innotech Solution, we deliver smart digital and automation solutions for businesses and industries. Our services include website development, IoT solutions, automation systems, and custom software designed to improve efficiency and growth. We focus on quality, innovation, and reliable support to help clients turn ideas into successful solutions."
            />

            <p className="leading-8 text-slate-600">
              Innotech Solution is a technology-driven company focused on creating modern digital and industrial solutions that simplify business operations and improve productivity. From professional websites and custom software to automation and smart IoT systems, we deliver solutions designed for real-world challenges. Our commitment to innovation, reliability, and long-term support helps businesses grow with confidence in the digital era.
            </p>

            <div className="mt-7 space-y-4">
              {ABOUT_POINTS.map((point) => (
                <div key={point} className="flex gap-3">
                  <span className="mt-1 grid h-6 w-6 flex-shrink-0 place-items-center bg-[#0fb7c5] text-xs text-white">
                    <i className="fas fa-check"></i>
                  </span>
                  <p className="text-sm leading-7 text-slate-600">{point}</p>
                </div>
              ))}
            </div>

            <a
              href="/#contact"
              className="mt-9 inline-flex bg-[#0fb7c5] px-7 py-3 font-display text-sm font-bold uppercase tracking-normal text-white transition-all hover:bg-[#10c8d7]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.top}>
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#0fb7c5]">
                {stat.top}
              </p>
              <p className="mt-3 font-display text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            center
            title="What Guides Our Work"
          // desc="Use these cards for your principles, process, strengths, or service commitments."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((value, index) => (
              <div key={`${value.title}-${index}`} className="border border-slate-200 bg-white p-7 shadow-sm">
                <div className="mb-5 grid h-14 w-14 place-items-center bg-[#0fb7c5] text-xl text-white">
                  <i className={value.icon}></i>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            center
            title="People Behind The Company"
          // desc="Add your team information here when your names, roles, and photos are ready."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={`${member.role}-${index}`} className="flex gap-5 border border-slate-200 bg-white p-6 shadow-sm">
                <div
                  className="h-56 w-40
                  overflow-hidden rounded-2xl
                  border border-slate-200
                  bg-slate-50
                  shadow-sm flex-shrink-0"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#0fb7c5]">
                    {member.role}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
