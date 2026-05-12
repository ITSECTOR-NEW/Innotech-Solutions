import React, { useState, useEffect } from "react";
import { NAV_LINKS, COMPANY } from "../../data/siteData";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeHref,  setActiveHref]  = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = document.querySelectorAll("section[id]");
      let current = "#home";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 110) current = "#" + s.id;
      });
      setActiveHref(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Desktop / Tablet Navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? "bg-dark-900/90 backdrop-blur-xl border-b border-white/10 py-3"
            : "py-4"
          }
          ${theme === "light" && scrolled ? "!bg-blue-50/90" : ""}
        `}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">

          {/* Logo */}
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 grid place-items-center text-white text-lg flex-shrink-0">
              <i className="fas fa-microchip"></i>
            </div>
            <span className="font-display font-extrabold text-xl text-white">
              {COMPANY.name.split(" ")[0]}
              <span className="text-cyan-400"> {COMPANY.name.split(" ")[1]}</span>
            </span>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all
                    ${activeHref === link.href
                      ? "text-white bg-white/10"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all grid place-items-center text-sm"
            >
              <i className={`fas ${theme === "dark" ? "fa-moon" : "fa-sun"}`}></i>
            </button>

            {/* CTA */}
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-display font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:-translate-y-0.5 transition-all"
            >
              Get Quote <i className="fas fa-arrow-right text-xs"></i>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Menu"
            >
              <span className={`block w-5 h-0.5 bg-white rounded transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block w-5 h-0.5 bg-white rounded transition-all ${mobileOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-5 h-0.5 bg-white rounded transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-dark-900 pt-24 px-6 overflow-y-auto md:hidden">
          <ul className="list-none flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-5 py-3.5 rounded-xl font-display font-semibold text-lg text-white hover:bg-white/10 hover:text-cyan-400 transition-all"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <button
              onClick={() => scrollTo("#contact")}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-display font-bold shadow-lg"
            >
              Get a Free Quote <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
