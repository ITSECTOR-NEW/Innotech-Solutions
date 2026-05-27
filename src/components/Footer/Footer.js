import React from "react";
import { COMPANY } from "../../data/siteData";

const COMPANY_LINKS = [
  { label: "About Innotech", href: "/about" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Application Development", href: "/services/application-development" },
  { label: "AI Services", href: "/services/ai-services" },
  { label: "Industrial Internet of Things", href: "/services/industrial-internet-of-things" },
  { label: "AI & Coding Training for Schools", href: "/services/ai-coding-training-schools" },
  { label: "Business Automation Solutions", href: "/services/business-automation-solutions" },
  { label: "Start a Project", href: "/#contact" },
];

const BLOG_LINKS = [
  {
    date: "02-Feb-2026",
    title: "Smart Tool Managment for Industries",
    href: "#",
  },
  {
    date: "17-Apr-2026",
    title: "Real Time Tool Traceability for Industries",
    href: "#",
  },
];

const SOCIAL_LINKS = [
  { label: "Email", icon: "mail", href: `mailto:${COMPANY.email}` },
  { label: "WhatsApp", icon: "whatsapp", href: `https://wa.me/${COMPANY.whatsapp}` },
  { label: "LinkedIn", icon: "linkedin", href: COMPANY.socials.linkedin },
  { label: "Instagram", icon: "instagram", href: COMPANY.socials.instagram },
  { label: "YouTube", icon: "youtube", href: COMPANY.socials.youtube },
];

function Icon({ name, className = "h-4 w-4" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  };

  const stroke = {
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "chip":
      return <svg {...common}><rect x="7" y="7" width="10" height="10" rx="2" {...stroke} /><path d="M9.5 1.8v3.1M14.5 1.8v3.1M9.5 19.1v3.1M14.5 19.1v3.1M1.8 9.5h3.1M1.8 14.5h3.1M19.1 9.5h3.1M19.1 14.5h3.1" {...stroke} /></svg>;
    case "file":
      return <svg {...common}><path d="M7 3h7l4 4v14H7z" {...stroke} /><path d="M14 3v5h4M9.5 12h5M9.5 16h5" {...stroke} /></svg>;
    case "phone":
      return <svg {...common}><path d="M6.6 4.5 8.8 4l2 4.5-1.4 1.1c1 2 2.6 3.6 4.6 4.6l1.1-1.4 4.5 2-.5 2.2c-.2.9-1 1.5-1.9 1.4C10.3 18 6 13.7 5.2 6.4c-.1-.9.5-1.7 1.4-1.9z" {...stroke} /></svg>;
    case "location":
      return <svg {...common}><path d="M19 10c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0z" {...stroke} /><circle cx="12" cy="10" r="2.4" {...stroke} /></svg>;
    case "newspaper":
      return <svg {...common}><path d="M4 6h14a2 2 0 0 1 2 2v10H6a2 2 0 0 1-2-2z" {...stroke} /><path d="M8 10h8M8 14h3M14 14h2" {...stroke} /></svg>;
    case "whatsapp":
      return <svg {...common} fill="currentColor"><path d="M12.04 3.5a8.36 8.36 0 0 0-7.15 12.69L4 20.5l4.42-1.03a8.36 8.36 0 1 0 3.62-15.97zm0 1.65a6.71 6.71 0 0 1 0 13.42c-1.13 0-2.24-.29-3.22-.83l-.29-.16-2.35.55.5-2.28-.18-.3a6.71 6.71 0 0 1 5.54-10.4zm-3.1 3.73c-.14 0-.36.05-.55.26-.19.21-.72.7-.72 1.72 0 1.01.74 1.99.84 2.13.1.14 1.43 2.29 3.55 3.12 1.76.69 2.12.55 2.5.52.38-.04 1.24-.51 1.41-1 .17-.49.17-.91.12-1-.05-.09-.19-.14-.4-.24-.21-.11-1.24-.61-1.43-.68-.19-.07-.33-.1-.47.11-.14.21-.54.68-.66.82-.12.14-.24.16-.45.05-.21-.1-.88-.32-1.68-1.03-.62-.55-1.04-1.23-1.16-1.44-.12-.21-.01-.32.09-.42.09-.09.21-.24.31-.36.1-.12.14-.21.21-.35.07-.14.03-.26-.02-.36-.05-.1-.47-1.13-.64-1.55-.17-.4-.34-.35-.47-.35z" /></svg>;
    case "linkedin":
      return <svg {...common} fill="currentColor"><path d="M6.9 8.9H3.8V20h3.1V8.9zM5.35 4A1.78 1.78 0 1 0 5.3 7.56 1.78 1.78 0 0 0 5.35 4zM20.2 13.7c0-3.1-1.65-5.05-4.2-5.05a3.62 3.62 0 0 0-3.25 1.8V8.9h-3V20h3.1v-5.65c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.05V20h3.1l.25-6.3z" /></svg>;
    case "instagram":
      return <svg {...common}><rect x="4" y="4" width="16" height="16" rx="5" {...stroke} /><circle cx="12" cy="12" r="3.4" {...stroke} /><circle cx="17" cy="7" r="0.8" fill="currentColor" /></svg>;
    case "youtube":
      return <svg {...common} fill="currentColor"><path d="M21.5 7.2a3 3 0 0 0-2.1-2.1C17.5 4.6 12 4.6 12 4.6s-5.5 0-7.4.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.4.5 7.4.5s5.5 0 7.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.5-4.8zM10 15.4V8.6l5.8 3.4z" /></svg>;
    case "mail":
    default:
      return <svg {...common}><path d="M4 6h16v12H4z" {...stroke} /><path d="m4 7 8 6 8-6" {...stroke} /></svg>;
  }
}

function FooterTitle({ children }) {
  return (
    <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
      {children}
    </h4>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_0.9fr_1.1fr]">
          <div>
            <a href="/#home" className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-300">
                <Icon name="chip" />
              </div>
              <span className="font-display text-xl font-extrabold text-white">
                {COMPANY.name.split(" ")[0]}
                <span className="text-cyan-400"> {COMPANY.name.split(" ")[1]}</span>
              </span>
            </a>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              {COMPANY.name} is on a mission to help small and medium businesses grow through AI services, websites, applications, Industrial IoT, training, automation, and practical digital systems.
            </p>

            <a
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2.5 font-display text-xs font-bold uppercase tracking-normal text-cyan-300 transition-colors hover:bg-cyan-400 hover:text-slate-950"
            >
              <Icon name="file" />
              Company Brochure
            </a>
          </div>

          <div>
            <FooterTitle>Contact Us</FooterTitle>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-white/5 text-cyan-300">
                  <Icon name="mail" />
                </span>
                <a href={`mailto:${COMPANY.email}`} className="leading-7 text-slate-400 transition-colors hover:text-cyan-300">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-white/5 text-cyan-300">
                  <Icon name="phone" />
                </span>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="leading-7 text-slate-400 transition-colors hover:text-cyan-300">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-white/5 text-cyan-300">
                  <Icon name="location" />
                </span>
                <span className="leading-7 text-slate-400">{COMPANY.address}</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-2.5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className={`grid h-9 w-9 place-items-center rounded-lg border text-sm transition-colors hover:border-cyan-400/50 hover:text-cyan-300 ${
                    link.label === "WhatsApp"
                      ? "border-emerald-400 bg-emerald-500 text-white"
                      : "border-white/10 bg-white/5 text-slate-300"
                  }`}
                >
                  <Icon name={link.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <FooterTitle>Company</FooterTitle>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 transition-colors hover:text-cyan-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterTitle>Latest Blogs</FooterTitle>
            <div className="mt-5 space-y-4">
              {BLOG_LINKS.map((blog) => (
                <a key={blog.title} href={blog.href} className="group flex gap-3">
                  <span className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-cyan-300">
                    <Icon name="newspaper" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">{blog.date}</span>
                    <span className="mt-1 block text-sm font-semibold leading-6 text-slate-300 transition-colors group-hover:text-cyan-300">
                      {blog.title}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            Copyright &copy; 2026 <span className="text-cyan-400">{COMPANY.name}</span>. All rights reserved.
          </p>
          <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 transition-colors hover:text-emerald-300">
            <Icon name="whatsapp" />
            Direct WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
