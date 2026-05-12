import React from "react";
import { COMPANY } from "../../data/siteData";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function CTA() {
  const ref = useScrollReveal();
  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className="relative text-center px-8 py-20 rounded-3xl overflow-hidden
            bg-gradient-to-br from-cyan-400/8 via-purple-600/10 to-blue-500/8
            border border-white/15"
        >
          {/* Orbs */}
          <div className="absolute w-80 h-80 rounded-full blur-[100px] bg-cyan-500/20 -top-20 -left-20 pointer-events-none" />
          <div className="absolute w-80 h-80 rounded-full blur-[100px] bg-purple-600/20 -bottom-20 -right-20 pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 blink"></span>
              Get Started
            </div>
            <h2 className="font-display font-extrabold text-white mb-5" style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}>
              Ready to <span className="gradient-text">Transform</span><br />Your Business?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
              Let's build something extraordinary together. Get a free consultation and project estimate within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-display font-bold shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 transition-all"
              >
                Start a Project <i className="fas fa-arrow-right"></i>
              </button>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20Innotix%20Solution%2C%20I'd%20like%20to%20discuss%20a%20project`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-display font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: "linear-gradient(135deg,#25d366,#128c7e)", boxShadow: "0 4px 20px rgba(37,211,102,0.25)" }}
              >
                <i className="fab fa-whatsapp text-lg"></i> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
