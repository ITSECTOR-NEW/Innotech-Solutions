import React, { useState } from "react";
import { COMPANY } from "../../data/siteData";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const INFO = [
  { icon: "fas fa-map-marker-alt", grad: "from-cyan-400 to-blue-500",    label: "Our Office",        val: COMPANY.address },
  { icon: "fas fa-envelope",       grad: "from-green-400 to-blue-500",   label: "Email Us",          val: COMPANY.email },
  { icon: "fas fa-phone",          grad: "from-purple-500 to-pink-500",  label: "Call / WhatsApp",   val: COMPANY.phone },
  { icon: "fas fa-clock",          grad: "from-orange-400 to-red-500",   label: "Working Hours",     val: COMPANY.hours },
];

export default function Contact() {
  const leftRef  = useScrollReveal();
  const rightRef = useScrollReveal();

  const [form, setForm]       = useState({ name:"", email:"", phone:"", company:"", service:"", message:"" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }
    // 👉 Connect EmailJS or Formspree here
    // emailjs.sendForm('SERVICE_ID','TEMPLATE_ID', e.target, 'PUBLIC_KEY')
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/8 border border-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 blink"></span>
            Get In Touch
          </div>
          <h2 className="font-display font-extrabold text-white mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project in mind? We'd love to hear from you. We respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-14">

          {/* Left: Info */}
          <div ref={leftRef} className="flex flex-col gap-4">
            {INFO.map((i) => (
              <div key={i.label} className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${i.grad} grid place-items-center text-white text-lg flex-shrink-0`}>
                  <i className={i.icon}></i>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-0.5">{i.label}</div>
                  <div className="font-display font-semibold text-white text-sm">{i.val}</div>
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="p-5 rounded-2xl glass2 mt-1">
              <h4 className="font-display font-bold text-white text-sm mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: "fab fa-linkedin-in", href: COMPANY.socials.linkedin },
                  { icon: "fab fa-twitter",     href: COMPANY.socials.twitter },
                  { icon: "fab fa-instagram",   href: COMPANY.socials.instagram },
                  { icon: "fab fa-youtube",     href: COMPANY.socials.youtube },
                  { icon: "fab fa-github",      href: COMPANY.socials.github },
                  { icon: "fab fa-whatsapp",    href: `https://wa.me/${COMPANY.whatsapp}` },
                ].map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:-translate-y-1 transition-all"
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div ref={rightRef} className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-display font-extrabold text-white text-lg mb-6">Send Us a Message</h3>

            {submitted ? (
              <div className="text-center py-12">
                <i className="fas fa-check-circle text-green-400 text-5xl block mb-4"></i>
                <h4 className="font-display font-bold text-white text-lg mb-2">Message Sent!</h4>
                <p className="text-slate-400 text-sm">Thank you! We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField label="Full Name *"     name="name"    type="text"  placeholder="Rajesh Kumar"        value={form.name}    onChange={handleChange} />
                  <InputField label="Email Address *" name="email"   type="email" placeholder="hello@company.com"   value={form.email}   onChange={handleChange} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField label="Phone Number"    name="phone"   type="tel"   placeholder="+91 98765 43210"     value={form.phone}   onChange={handleChange} />
                  <InputField label="Company Name"    name="company" type="text"  placeholder="Your Company"        value={form.company} onChange={handleChange} />
                </div>

                {/* Service select */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Service Interested In</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-slate-300 text-sm outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10 transition-all"
                  >
                    <option value="">Select a service...</option>
                    {["Web Development","Mobile App Development","UI/UX Design","Digital Marketing","Industrial IoT Solutions","Robotics & AI Automation","AI Integration","School/College Training","Smart Tool Management","Other"].map(s => (
                      <option key={s} value={s} className="bg-dark-900">{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Your Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project, requirements, or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-slate-300 text-sm outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10 transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-display font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:-translate-y-0.5 transition-all"
                >
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Reusable input
function InputField({ label, name, type, placeholder, value, onChange }) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-400 mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-slate-300 text-sm outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10 transition-all"
      />
    </div>
  );
}
