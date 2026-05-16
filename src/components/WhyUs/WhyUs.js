import React from "react";
import { WHY_CHOOSE_US } from "../../data/siteData";

export default function WhyChoose() {

  const requestDemo = () => {
    const contact = document.querySelector("#contact");

    if (contact) {
      contact.scrollIntoView({
        behavior: "smooth",
      });

      return;
    }

    window.location.href = "/#contact";
  };

  return (
    <section className="bg-[#f8fafc] py-20">

      <div
        className="mx-auto grid max-w-7xl
        gap-14 px-6
        lg:grid-cols-2"
      >

        {/* Left Side */}
        <div>

          <span
            className="text-xs font-semibold
            uppercase tracking-[0.2em]
            text-pink-500"
          >
            Why Choose Us
          </span>

          <h2
            className="mt-4 font-display
            text-3xl font-bold
            leading-tight text-slate-900
            sm:text-4xl"
          >
            Best
            <span className="text-pink-500">
              {" "}Website Development
            </span>
            <br />
            Company in India
          </h2>

          <p
            className="mt-5 text-base
            leading-8 text-slate-500"
          >
            We always stay with our clients and respect
            their business goals. Our team delivers
            modern digital solutions with fast support,
            creative ideas, and scalable technologies.
          </p>

          {/* Features */}
          <div className="mt-10 space-y-6">

            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="flex gap-4"
              >
                {/* Icon */}
                <div
                  className="grid h-14 w-14
                  flex-shrink-0 place-items-center
                  rounded-2xl bg-white
                  shadow-sm"
                >
                  <i
                    className={`${item.icon}
                    text-xl text-slate-800`}
                  ></i>
                </div>

                {/* Content */}
                <div>

                  <h3
                    className="font-display
                    text-xl font-bold
                    text-slate-900"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-1 text-sm
                    leading-7 text-slate-500"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between">

          {/* Top Image */}
          <div
            className="overflow-hidden
            rounded-[24px]
            bg-white p-8 shadow-sm"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
              alt="Website Design"
              className="mx-auto w-full
              max-w-[420px]"
            />
          </div>

          {/* Bottom Content */}
          <div className="mt-10 text-center">

            <h2
              className="font-display
              text-3xl font-bold
              leading-tight text-slate-900
              sm:text-4xl"
            >
              Working to build
              <br />
              a better
              <span className="text-pink-500">
                {" "}web design
              </span>
            </h2>

            <p
              className="mx-auto mt-5
              max-w-lg text-base
              leading-8 text-slate-500"
            >
              We are committed to customer success from
              start to finish. Our innovative and creative
              solutions help businesses stand out online.
            </p>

            <button
              onClick={requestDemo}
              className="mt-8 inline-flex
              items-center gap-2 rounded-full
              bg-gradient-to-r
              from-orange-400 to-pink-500
              px-7 py-3 text-base
              font-semibold text-white
              transition-all hover:scale-105"
            >
              Start A Project
              <i className="fas fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}