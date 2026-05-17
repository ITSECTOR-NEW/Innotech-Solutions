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

  const [submitted, setSubmitted] = useState(false);

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

  try {

    await emailjs.send(
      "service_atq1h0q",
      "template_6ai8l8a",
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
      },
      "xHFPjI_ikav6tce8c"
    );

    setSubmitted(true);

  } catch (error) {
    console.log(error);
    alert("Failed to send");
  }
};
  return (
    <section
      id="contact"
      className="relative overflow-hidden
      bg-[#eef5ff] py-12 sm:py-16"
    >

      {/* Background Glow */}
      <div
        className="absolute left-0 top-0
        h-[250px] w-[250px]
        rounded-full bg-cyan-300/20
        blur-[100px]"
      />

      <div
        className="absolute bottom-0 right-0
        h-[220px] w-[220px]
        rounded-full bg-blue-300/20
        blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">

          <div
            className="inline-flex items-center
            gap-2 rounded-full
            border border-blue-200
            bg-gradient-to-r
            from-blue-500 to-cyan-500
            px-5 py-2 text-[11px]
            font-semibold uppercase
            tracking-[0.16em] text-white
            shadow-md"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3059/3059518.png"
              alt="Contact"
              className="h-3.5 w-3.5"
            />

            Contact Us
          </div>

          <h2
            className="mt-4 font-display
            text-2xl font-black
            leading-tight text-slate-900
            sm:text-4xl"
          >
            Let's Build Something
            <span className="gradient-text">
              {" "}Amazing
            </span>
          </h2>

          <p
            className="mx-auto mt-4
            max-w-xl text-sm
            leading-7 text-slate-500"
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
            className="rounded-2xl
              bg-white p-5 shadow-sm
              sm:rounded-[28px] sm:p-6"
            >

              <h3
                className="font-display
                text-xl font-bold
                sm:text-2xl
                text-slate-900"
              >
                Get In Touch
              </h3>

              <p
                className="mt-3 text-sm
                leading-7 text-slate-500"
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
                      justify-center rounded-xl
                      border border-slate-200
                      bg-slate-50
                      sm:h-12 sm:w-12"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-5 w-5 object-contain opacity-80"
                      />
                    </div>

                    <div>

                      <p
                        className="text-[11px]
                        uppercase tracking-[0.16em]
                        text-slate-400"
                      >
                        {item.title}
                      </p>

                      <h4
                        className="mt-1 text-sm
                        font-semibold leading-6
                        text-slate-900"
                      >
                        {item.value}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">

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
                    border-slate-200 bg-white
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-cyan-300
                    hover:shadow-md
                    sm:h-11 sm:w-11"
                  >
                    <img
                      src={s.image}
                      alt="social"
                      className="h-5 w-5 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div
            className="rounded-2xl
            bg-white p-5 shadow-sm
            sm:rounded-[28px] sm:p-6"
          >

            <h3
              className="font-display
              text-xl font-bold
              sm:text-2xl
              text-slate-900"
            >
              Send Message
            </h3>

            <p
              className="mt-2 text-sm
              leading-7 text-slate-500"
            >
              Fill the form and our team
              will contact you shortly.
            </p>

            {submitted ? (
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
            ) : (
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
                      text-[11px] uppercase
                      tracking-[0.15em]
                      text-slate-400"
                    >
                      Service
                    </label>

                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-xl sm:rounded-2xl
                      border border-slate-200
                      bg-slate-50
                      px-4 py-3 text-sm
                      text-slate-700 outline-none"
                    >
                      <option value="">
                        Select Service
                      </option>

                      {[
                        "Web Development",
                        "Application Development",
                        "UI/UX Design",
                        "Industrial AI Solutions",
                        "Digital Marketing",
                      ].map((s) => (
                        <option
                          key={s}
                          value={s}
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
                    text-[11px] uppercase
                    tracking-[0.15em]
                    text-slate-400"
                  >
                    Your Message *
                  </label>

                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-xl sm:rounded-2xl
                    border border-slate-200
                    bg-slate-50
                    px-4 py-3 text-sm
                    text-slate-700 outline-none
                    resize-none"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="flex w-full
                  items-center justify-center
                  gap-3 rounded-xl sm:rounded-2xl
                  bg-gradient-to-r
                  from-cyan-400 to-blue-500
                  py-3.5 font-display
                  text-sm font-bold
                  text-white shadow-md
                  transition-all duration-300
                  hover:-translate-y-1"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3682/3682321.png"
                    alt="Send"
                    className="h-4 w-4"
                  />

                  Send Message
                </button>
              </form>
            )}
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
        text-[11px] uppercase
        tracking-[0.15em]
        text-slate-400"
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl sm:rounded-2xl
        border border-slate-200
        bg-slate-50
        px-4 py-3 text-sm
        text-slate-700 outline-none"
      />
    </div>
  );
}
