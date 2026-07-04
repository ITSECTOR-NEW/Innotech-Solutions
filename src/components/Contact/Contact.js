import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { COMPANY } from "../../data/siteData";

const CONTACT_INFO = [
  {
    image:
      "https://cdn-icons-png.flaticon.com/512/597/597177.png",
    title: "Call Us",
    value: COMPANY.phone,
  },

  {
    image:
      "https://cdn-icons-png.flaticon.com/512/561/561127.png",
    title: "Email Address",
    value: COMPANY.email,
  },

  {
    image:
      "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    title: "Office Address",
    value: COMPANY.address,
  },
];

export default function Contact() {

  // const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {

      await emailjs.send(
        // EmailJs key
        "service_atq1h0q",
        // template key
        "template_6ai8l8a",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        // public key
        "xHFPjI_ikav6tce8c"
      );
      setLoading(false);
      alert("Message Sent Successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Failed to send message");
    }
  };
  return (
    <section
      id="contact"
      className="relative overflow-hidden
      border-y border-white/[0.06]
      bg-[#13181f] py-14 sm:py-20 lg:py-24"
    >

      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#3b82f6]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Contact Us
            </span>
            <span className="h-px w-7 bg-[#3b82f6]" />
          </div>

          <h2
            className="font-black leading-[1.1] text-white"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
          >
            Let's Build Something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Amazing
            </span>
          </h2>

          <p
            className="mx-auto mt-4
            max-w-xl text-sm
            leading-7 text-slate-400"
          >
            Connect with our team for modern
            digital solutions and business growth.
          </p>
        </div>

        {/* Main Layout */}
        <div
          className="grid items-start gap-6
          lg:grid-cols-[0.85fr_1.15fr]"
        >

          {/* Left Side */}
          <div className="space-y-4">

            <div
              className="rounded-3xl
              border border-cyan-500/20
              bg-[#0f141a] p-5
              sm:p-6"
            >

              <h3
                className="font-display
                text-xl font-bold
                sm:text-2xl
                text-white"
              >
                Get In Touch
              </h3>

              <p
                className="mt-3 text-sm
                leading-7 text-slate-400"
              >
                We help startups, industries,
                and businesses build modern
                digital solutions.
              </p>

              {/* Contact Info */}
              <div className="mt-5 space-y-3 sm:mt-7 sm:space-y-4">

                {CONTACT_INFO.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4"
                  >

                    <div
                      className="flex h-10 w-10
                      flex-shrink-0 items-center
                      justify-center rounded-2xl
                      border border-cyan-500/20
                      bg-cyan-500/5
                      sm:h-12 sm:w-12"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-5 w-5 object-contain opacity-90
                        invert"
                      />
                    </div>

                    <div>

                      <p
                        className="text-[10px]
                        font-bold uppercase tracking-[0.2em]
                        text-slate-500"
                      >
                        {item.title}
                      </p>

                      <h4
                        className="mt-1 text-sm
                        font-semibold leading-6
                        text-white"
                      >
                        {item.value}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="mt-6 flex flex-wrap gap-2.5 border-t border-slate-800 pt-5 sm:mt-8 sm:gap-3">

                {[
                  {
                    image:
                      "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                    href: COMPANY.socials.linkedin,
                  },

                  {
                    image:
                      "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
                    href: COMPANY.socials.instagram,
                  },

                  {
                    image:
                      "https://cdn-icons-png.flaticon.com/512/733/733553.png",
                    href: COMPANY.socials.github,
                  },

                  {
                    image:
                      "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                    href: COMPANY.socials.youtube,
                  },

                  {
                    image:
                      "https://cdn-icons-png.flaticon.com/512/3670/3670051.png",
                    href: `https://wa.me/${COMPANY.whatsapp}`,
                  },
                ].map((s, index) => (
                  <a
                    key={index}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10
                    items-center justify-center
                    rounded-xl border
                    border-cyan-500/20 bg-cyan-500/5
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400/50
                    hover:shadow-[0_0_15px_rgba(15,183,197,0.15)]
                    sm:h-11 sm:w-11"
                  >
                    <img
                      src={s.image}
                      alt="social"
                      className="h-5 w-5 object-contain invert"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div
            className="rounded-3xl
            border border-cyan-500/20
            bg-[#0f141a] p-5
            sm:p-6"
          >

            <h3
              className="font-display
              text-xl font-bold
              sm:text-2xl
              text-white"
            >
              Send Message
            </h3>

            <p
              className="mt-2 text-sm
              leading-7 text-slate-400"
            >
              Fill the form and our team
              will contact you shortly.
            </p>

            {/* {submitted ? (
              <div className="py-12 text-center">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
                  alt="Success"
                  className="mx-auto h-16 w-16"
                />

                <h3
                  className="mt-4 font-display
                  text-xl font-bold
                  text-slate-900"
                >
                  Message Sent Successfully!
                </h3>

                <p
                  className="mt-2 text-sm
                  text-slate-500"
                >
                  Thank you for contacting us.
                </p>
              </div>
            ) : ( */}
            <form
              onSubmit={handleSubmit}
              className="mt-5 space-y-3 sm:mt-7 sm:space-y-4"
            >

              {/* Row */}
              <div className="grid gap-4 sm:grid-cols-2">

                <InputField
                  label="Full Name *"
                  name="name"
                  type="text"
                  placeholder="Rajesh Kumar"
                  value={form.name}
                  onChange={handleChange}
                />

                <InputField
                  label="Email Address *"
                  name="email"
                  type="email"
                  placeholder="hello@company.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              {/* Row */}
              <div className="grid gap-4 sm:grid-cols-2">

                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                />

                <div>

                  <label
                    className="mb-2 block
                      text-[10px] font-bold uppercase
                      tracking-[0.2em]
                      text-slate-500"
                  >
                    Service
                  </label>

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-xl
                      border border-cyan-500/20
                      bg-[#171c24]
                      px-4 py-3 text-sm
                      text-slate-200 outline-none
                      focus:border-cyan-400/50"
                  >
                    <option value="" className="bg-[#171c24]">
                      Select Service
                    </option>

                    {[
                      "Web Development",
                      "Application Development",
                      "AI Services",
                      "Industrial Internet of Things",
                      "AI & Coding Training for Schools",
                      "Business Automation Solutions",
                    ].map((s) => (
                      <option
                        key={s}
                        value={s}
                        className="bg-[#171c24]"
                      >
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>

                <label
                  className="mb-2 block
                    text-[10px] font-bold uppercase
                    tracking-[0.2em]
                    text-slate-500"
                >
                  Your Message *
                </label>

                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl
                    border border-cyan-500/20
                    bg-[#171c24]
                    px-4 py-3 text-sm
                    text-slate-200 outline-none
                    resize-none
                    focus:border-cyan-400/50"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full
                items-center justify-center
                gap-2.5 rounded-full
                bg-[#3b82f6]
                py-3.5 text-sm
                font-bold text-white
                transition-all duration-200
                hover:bg-[#2563eb]
                hover:shadow-lg hover:shadow-blue-500/25
                disabled:opacity-70"
              >
                {/* <img
                  src="https://cdn-icons-png.flaticon.com/512/3682/3682321.png"
                  alt="Send"
                  className="h-4 w-4"
                /> */}

                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

/* Input Component */
function InputField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}) {

  return (
    <div>

      <label
        className="mb-2 block
        text-[10px] font-bold uppercase
        tracking-[0.2em]
        text-slate-500"
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl
        border border-cyan-500/20
        bg-[#171c24]
        px-4 py-3 text-sm
        text-slate-200 outline-none
        focus:border-cyan-400/50"
      />
    </div>
  );
}