import React from "react";
import { COMPANY, FOOTER_LINKS } from "../../data/siteData";

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-dark-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 grid place-items-center text-white">
                <i className="fas fa-microchip"></i>
              </div>
              <span className="font-display font-extrabold text-xl text-white">
                {COMPANY.name.split(" ")[0]}<span className="text-cyan-400"> {COMPANY.name.split(" ")[1]}</span>
              </span>
            </button>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Technology partner for industries, startups, and educational institutions. We build tomorrow's digital infrastructure today.
            </p>
            {/* Socials */}
            <div className="flex gap-2.5">
              {[
                { icon: "fab fa-linkedin-in", href: COMPANY.socials.linkedin },
                { icon: "fab fa-twitter",     href: COMPANY.socials.twitter },
                { icon: "fab fa-instagram",   href: COMPANY.socials.instagram },
                { icon: "fab fa-youtube",     href: COMPANY.socials.youtube },
                { icon: "fab fa-github",      href: COMPANY.socials.github },
                { icon: "fab fa-whatsapp",    href: `https://wa.me/${COMPANY.whatsapp}` },
              ].map((s) => (
                <a key={s.icon} href={s.href} target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:-translate-y-1 transition-all text-sm">
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([col, links]) => (
            <div key={col}>
              <h4 className="font-display font-bold text-white text-sm mb-4">{col}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo(`#${link.toLowerCase().replace(/[^a-z]/g,"").replace("webdevelopment","services").replace("mobileapps","services").replace("uiuxdesign","services").replace("digitalmarketing","services").replace("aiintegration","services").replace("industrialiot","iot").replace("scadasystems","iot").replace("predictivemaintenance","iot").replace("smartfactory","iot").replace("studenttraining","training").replace("aboutus","about").replace("testimonials","testimonials").replace("industries","industries").replace("contactus","contact").replace("portfolio","portfolio")}`)}
                      className="text-sm text-slate-400 hover:text-cyan-400 transition-colors text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-xs">
            © 2025 <span className="text-cyan-400">{COMPANY.name}</span>. All rights reserved. Built with ❤️ in Bhopal, India.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-slate-400 text-xs hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 text-xs hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
