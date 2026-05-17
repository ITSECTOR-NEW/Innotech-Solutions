import React, { useState, useEffect } from "react";
import { NAV_LINKS, COMPANY } from "../../data/siteData";

export default function Navbar() {
 const [scrolled, setScrolled] = useState(false);
const [mobileOpen, setMobileOpen] = useState(false);
const [activeHref, setActiveHref] = useState("#home");

/* ADD THIS : Update for service dropdown to look in mobile also*/
const [openDropdown, setOpenDropdown] = useState(null);

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

  const navigateTo = (href) => {
    setMobileOpen(false);
    if (!href) return;

    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }

    if (window.location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }

    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const getNavHref = (href) => {
    if (!href) return "#";
    if (href.startsWith("#") && window.location.pathname !== "/") return `/${href}`;
    return href;
  };

  return (
    <>
      {/* ── Top Contact Bar ── */}
      {/* <div className="fixed top-0 left-0 right-0 z-50 bg-[#c4161c] text-white">
        <div className="mx-auto flex h-7 max-w-7xl items-center justify-center gap-4 px-6 text-[11px] font-medium sm:justify-end sm:pr-45 lg:pr-40">
          <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 transition-colors hover:text-cyan-300">
            <i className="fas fa-phone text-[11px] text-white"></i>
            <span>{COMPANY.phone}</span>
          </a>
          <span className="hidden h-3 w-px bg-white/20 sm:block" />
          <a href={`mailto:${COMPANY.email}`} className="hidden items-center gap-2 transition-colors hover:text-cyan-300 sm:flex">
            <i className="fas fa-envelope text-[11px] text-white"></i>
            <span>{COMPANY.email}</span>
          </a>
        </div>
      </div> */}

      {/* ── Desktop / Tablet Navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-300
          ${scrolled
            ? "bg-dark-900/90 backdrop-blur-xl py-3"
            : "py-4"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">

          {/* Logo */}
          {/* Logo */}
          <button
            onClick={() => navigateTo("/")}
            className="flex items-center gap-3"
          >
            {/* Logo Icon */}
            <div
    //           className="relative w-11 h-11 rounded-xl overflow-hidden
    // bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600
    // flex items-center justify-center shadow-lg shadow-cyan-500/20"
            >
              {/* Inner Dark Box */}
              <div
      //           className="w-8 h-8 rounded-lg bg-[#020617]
      // flex items-center justify-center border border-white/10"
              >
                {/* <span
                  className="font-black text-sm bg-gradient-to-r
        from-cyan-300 to-blue-400 bg-clip-text text-transparent"
                >
                  IT
                </span> */}
              </div>

              {/* Small Glow Dot */}
              {/* <span
                className="absolute top-1 right-1 w-2 h-2
      rounded-full bg-cyan-300 animate-pulse"
              ></span> */}
            </div>

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <span className="font-display font-extrabold text-xl text-white">
                INNOTECH
              </span>

              <span
                className="text-[10px] uppercase tracking-[0.3em]
      text-slate-400 font-semibold"
              >
                SOLUTIONS
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-5 list-none ml-auto">
            {/* {NAV_LINKS.map((link) => (
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
            ))} */}

            {/* New code with Drop Down link */}
            {NAV_LINKS.map((item) => (
              <div key={item.label} className="relative group">

                {/* Normal Link */}
                {!item.dropdown ? (
                  <a
                    href={getNavHref(item.href)}
                    className="text-sm text-white hover:text-cyan-400 transition"
                  >
                    {item.label}
                  </a>
                ) : (
                  <>
                    {/* Dropdown Button */}
                    <button className="flex items-center gap-2 text-sm text-white hover:text-cyan-400 transition">
                      {item.label}

                      {/* Dropdown Symbol */}
                      <span className="inline-block text-sm font-bold text-cyan-400 scale-x-150 group-hover:translate-y-[1px] transition-all duration-300">v</span>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-3 w-72 rounded-2xl bg-[#0f172a]/95 border border-white/10 backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl p-4 z-50">

                      {item.dropdown.map((section) => (
                        <div key={section.section} className="mb-5 last:mb-0">

                          {/* Section Heading */}
                          {section.section && (
                            <h4 className="px-3 mb-3 text-[11px] uppercase tracking-[0.18em] text-amber-300 font-bold font-display hover:bg-yellow-400/10">
                              {section.section}
                            </h4>
                          )}

                          {/* Section Links */}
                          <div className="space-y-1">
                            {section.items.map((sub) => (
                              <a
                                key={sub.label}
                                href={getNavHref(sub.href)}
                                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition ${sub.label === "View Full Services"
                                  ? "text-amber-300 font-bold font-display hover:bg-yellow-400/10"
                                  : "text-slate-300 hover:bg-white/5 hover:text-cyan-400"
                                  }`}
                              >
                                {sub.label}
                              </a>
                            ))}
                          </div>

                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* CTA */}
            <button
              onClick={() => navigateTo("#contact")}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400/60 bg-transparent text-cyan-300 font-display font-semibold text-sm hover:bg-cyan-400/10 hover:border-cyan-300 hover:text-white hover:-translate-y-0.5 transition-all"
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
       {/* ── Mobile Menu ── */}
{mobileOpen && (
  <div
    className="fixed inset-0 z-40
    bg-[#07111f] pt-32 px-6
    overflow-y-auto md:hidden"
  >

    <div className="space-y-2">

      {NAV_LINKS.map((item, index) => {

        const hasDropdown = item.dropdown;

        return (
          <div
            key={index}
            className="rounded-2xl
            border border-white/5
            bg-white/[0.03]
            overflow-hidden"
          >

            {/* Main Button */}
            {!hasDropdown ? (
              <button
                onClick={() => navigateTo(item.href)}
                className="flex w-full
                items-center justify-between
                px-5 py-4 text-left
                text-base font-semibold
                text-white transition-all
                hover:bg-white/5"
              >
                {item.label}
              </button>
            ) : (
              <>
                {/* Dropdown Button */}
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label
                        ? null
                        : item.label
                    )
                  }
                  className="flex w-full
                  items-center justify-between
                  px-5 py-4 text-left
                  text-base font-semibold
                  text-white transition-all
                  hover:bg-white/5"
                >
                  <span>{item.label}</span>

                  <i
                    className={`fas fa-chevron-down text-xs transition-all duration-300 ${
                      openDropdown === item.label
                        ? "rotate-180"
                        : ""
                    }`}
                  ></i>
                </button>

                {/* Dropdown Content */}
                {openDropdown === item.label && (
                  <div
                    className="border-t border-white/5
                    bg-black/10 px-4 py-4"
                  >

                    {item.dropdown.map((section) => (
                      <div
                        key={section.section}
                        className="mb-5 last:mb-0"
                      >

                        {/* Section Heading */}
                        {section.section && (
                          <h4
                            className="mb-3 px-2
                            text-[11px] font-bold
                            uppercase tracking-[0.18em]
                            text-cyan-300"
                          >
                            {section.section}
                          </h4>
                        )}

                        {/* Links */}
                        <div className="space-y-1">

                          {section.items.map((sub) => (
                            <button
                              key={sub.label}
                              onClick={() =>
                                navigateTo(sub.href)
                              }
                              className={`block w-full rounded-xl
                              px-3 py-3 text-left text-sm
                              transition-all duration-300 ${
                                sub.label ===
                                "View Full Services"
                                  ? "bg-cyan-400/10 text-cyan-300 font-semibold"
                                  : "text-slate-300 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>

    {/* Bottom CTA */}
    <div className="mt-8 pb-10">
      <button
        onClick={() => navigateTo("#contact")}
        className="flex w-full
        items-center justify-center
        gap-2 rounded-2xl
        bg-gradient-to-r
        from-cyan-400 to-blue-500
        px-6 py-4 text-white
        font-bold shadow-xl
        shadow-cyan-500/20"
      >
        Get a Free Quote

        <i className="fas fa-arrow-right text-sm"></i>
      </button>
    </div>
  </div>
)}
    </>
  );
}
