import React, { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { industrialIoT } from "../../data/siteData";

const headingReplacements = {
  "Built for every shop floor": "Designed for the realities of modern production",
  "Inside the IIoT platform": "From machine signals to operational intelligence",
  "One platform for complete shop-floor automation":
    "A connected command center for your entire shop floor",
  "Make your machines and processes more efficient":
    "Turn industrial data into measurable performance",
  "Get more out of your manufacturing operations":
    "Create lasting gains across manufacturing operations",
  "What our partners say": "Stories from teams building connected industry",
  "Frequently asked questions": "Industrial IoT questions, answered clearly",
  "Why do you need IIoT?": "Where connected operations create real value",
  "How do I get started?": "A practical route from idea to deployment",
  "Envision, unite, prosper": "Build stronger industrial outcomes together",
  "Industrial Internet Of Things": "Connected industry, engineered for action",
  "Manufacturing analytics and shop-floor automation":
    "A smarter operating layer for modern manufacturing",
  "Kickstart your industrial machine monitoring":
    "Bring your first connected-machine use case to life",
};

const headingCopy = (text = "") => {
  if (headingReplacements[text]) return headingReplacements[text];

  const rewritten = text
    .replace(/^Connect seamlessly$/i, "Bring every machine into one network")
    .replace(/^Collect data/i, "Capture live signals")
    .replace(/^Collect a range/i, "Work with diverse")
    .replace(/^High-frequency/i, "Precision")
    .replace(/^Configure and manage/i, "Control and manage")
    .replace(/^Edge computing$/i, "Intelligence at the edge")
    .replace(/^Secure data aggregation$/i, "Trusted industrial data foundation")
    .replace(/^Telemetry and reporting$/i, "Unified telemetry and reporting")
    .replace(/^Remote management$/i, "Operations without distance")
    .replace(/^Secure cloud integration and storage$/i, "Protected edge-to-cloud flow")
    .replace(/^Integrate with other applications and APIs$/i, "Connect every business system")
    .replace(/^Create workflows$/i, "Build responsive workflows")
    .replace(/^Real-time insights$/i, "Live operational clarity")
    .replace(/^Integrate AI with analytics$/i, "Combine analytics with applied AI")
    .replace(/^Build your own IIoT solutions$/i, "Shape IIoT around your operation")
    .replace(/^Discrete manufacturing$/i, "Connected discrete production")
    .replace(/^Process manufacturing$/i, "Intelligent process operations");

  if (rewritten !== text) return rewritten;

  const compactHeadings = {
    What: "Overview",
    Why: "Business value",
    How: "Deployment path",
    Collect: "Acquire",
    Connect: "Unify",
    Customize: "Adapt",
    Increase: "Expand",
    Improve: "Elevate",
    Optimize: "Refine",
    Transform: "Reinvent",
    Reduce: "Lower",
  };

  if (compactHeadings[text]) return compactHeadings[text];
  return `Smarter ${text.charAt(0).toLowerCase()}${text.slice(1)}`;
};

const paragraphCopy = (text = "") => {
  const rewritten = text
    .replace(/\breal-time\b/gi, "live")
    .replace(/\bshop-floor\b/gi, "production-floor")
    .replace(/\bshop floor\b/gi, "production floor")
    .replace(/\bimprove\b/gi, "strengthen")
    .replace(/\bmonitor\b/gi, "track")
    .replace(/\boptimize\b/gi, "fine-tune")
    .replace(/\bscalable\b/gi, "growth-ready");

  const endings = [
    " The result is clearer control and faster action.",
    " This keeps teams informed without adding operational complexity.",
    " It is designed for practical adoption across day-to-day operations.",
  ];
  const ending = endings[text.length % endings.length];
  return `${rewritten}${ending}`;
};

const shortCopy = (text = "") =>
  text
    .replace(/\breal-time\b/gi, "live")
    .replace(/\bmonitor\b/gi, "track")
    .replace(/\boptimize\b/gi, "fine-tune")
    .replace(/\bimprove\b/gi, "strengthen");

const questionCopy = (text = "") =>
  text
    .replace(/^What is /i, "How should teams understand ")
    .replace(/^What role does /i, "How does ")
    .replace(/^How is /i, "In what ways is ")
    .replace(/^What's /i, "How can we explain ")
    .replace(/^Which /i, "What ")
    .replace(/^Can /i, "Is it possible to ")
    .replace(/^Is /i, "Should teams view ")
    .replace(/^Who /i, "Which organizations ");

const ctaCopy = (text = "") => {
  const labels = {
    "GET STARTED": "Start Your IIoT Journey",
    "REQUEST DEMO": "Explore a Tailored Demo",
    "BECOME A PARTNER": "Build With Us",
  };
  return labels[text] || text;
};

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
    <path
      d="M5 10.5l3.2 3.2L15 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    className={`w-4 h-4 transition-transform duration-300 ${
      open ? "rotate-180" : ""
    }`}
  >
    <path
      d="M5 7.5l5 5 5-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CtaButton = ({ children, href = "/#contact", secondary = false }) => (
  <a
    href={href}
    className={`group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
      secondary
        ? "border border-white/20 text-white hover:border-cyan-400 hover:bg-cyan-400/10"
        : "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30"
    }`}
  >
    {ctaCopy(children)}
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
);

function SectionHeader({ title, intro, align = "center" }) {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : ""
      }`}
    >
      <h2
        className="font-display font-bold text-white mb-3"
        style={{ fontSize: "clamp(1.65rem,3vw,2.35rem)" }}
      >
        {headingCopy(title)}
      </h2>
      {intro && (
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {paragraphCopy(intro)}
        </p>
      )}
    </div>
  );
}

function InfoTabs({ data }) {
  const [activeTab, setActiveTab] = useState("what");
  const ref = useScrollReveal();
  const tabKeys = data.tabs.map((tab) => tab.toLowerCase());

  return (
    <section className="py-16 sm:py-20 bg-slate-950">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {data.tabs.map((tab, index) => {
            const key = tabKeys[index];
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                  activeTab === key
                    ? "bg-cyan-400/10 border-cyan-400/50 text-cyan-400"
                    : "border-white/10 text-slate-400 hover:border-cyan-300 hover:text-cyan-400"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="border-y border-white/10 py-8 sm:py-10">
          {activeTab === "what" && (
            <div className="divide-y divide-white/10">
              {data.what.map((item) => (
                <article
                  key={item.question}
                  className="grid md:grid-cols-[0.7fr_1.3fr] gap-4 md:gap-12 py-6 first:pt-0 last:pb-0"
                >
                  <h3 className="font-display font-semibold text-white text-lg">
                    {questionCopy(item.question)}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {paragraphCopy(item.answer)}
                  </p>
                </article>
              ))}
            </div>
          )}

          {activeTab === "why" && (
            <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-6 md:gap-12">
              <h3 className="font-display font-semibold text-white text-xl">
                {headingCopy(data.why.heading)}
              </h3>
              <div>
                <p className="text-slate-400 text-sm mb-7">
                  {paragraphCopy(data.why.subheading)}
                </p>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {[...data.why.leftPoints, ...data.why.rightPoints].map(
                    (point) => (
                      <div key={point} className="flex items-start gap-3">
                        <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-cyan-400/10 text-cyan-400 p-1">
                          <CheckIcon />
                        </span>
                        <span className="text-slate-300 text-sm">
                          {shortCopy(point)}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === "how" && (
            <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-6 md:gap-12">
              <h3 className="font-display font-semibold text-white text-xl">
                {headingCopy(data.how.heading)}
              </h3>
              <div>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mb-8">
                  {data.how.steps.map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <span className="w-7 h-7 flex-shrink-0 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {shortCopy(step)}
                      </p>
                    </div>
                  ))}
                </div>
                <CtaButton>{data.how.ctaLabel}</CtaButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ManufacturingTypes({ title, intro, types }) {
  const ref = useScrollReveal();

  return (
    <section className="py-16 sm:py-20 bg-slate-900">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <SectionHeader title={title} intro={intro} />
        <div className="grid lg:grid-cols-2 gap-7 max-w-5xl mx-auto">
          {types.map((type) => (
            <article
              key={type.title}
              className="group relative min-h-[390px] rounded-2xl overflow-hidden bg-slate-950 border border-white/10"
            >
              <div className="relative z-10 p-7 sm:p-9 max-w-[65%]">
                <h3 className="font-display font-semibold text-white text-lg mb-5">
                  {headingCopy(type.title)}
                </h3>
                <div className="space-y-3">
                  {type.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span className="w-4 h-4 text-cyan-400">
                        <CheckIcon />
                      </span>
                      {shortCopy(item)}
                    </div>
                  ))}
                </div>
              </div>
              <img
                src={type.image}
                alt={type.title}
                loading="lazy"
                className="absolute right-0 bottom-0 w-[48%] h-[62%] object-cover rounded-tl-[3rem] opacity-90 transition-transform duration-500 group-hover:scale-105"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Platform({ title, subtitle, tabs }) {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const dotRef = useRef(null);
  const accents = [
    {
      badge: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
      glow: "bg-cyan-400/20",
      number: "text-cyan-400",
      line: "from-cyan-400 to-blue-500",
    },
    {
      badge: "bg-violet-400/10 text-violet-300 border-violet-400/20",
      glow: "bg-violet-400/20",
      number: "text-violet-400",
      line: "from-violet-400 to-fuchsia-500",
    },
    {
      badge: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
      glow: "bg-emerald-400/20",
      number: "text-emerald-400",
      line: "from-emerald-400 to-cyan-500",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;
    const dot = dotRef.current;
    if (!section || !path || !dot) return undefined;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;

    let frame;
    const updateRoute = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport * 0.72;
      const distance = rect.height + viewport * 0.35;
      const progress = Math.max(
        0,
        Math.min(1, (start - rect.top) / distance)
      );
      const point = path.getPointAtLength(pathLength * progress);

      path.style.strokeDashoffset = `${pathLength * (1 - progress)}`;
      dot.setAttribute("cx", point.x);
      dot.setAttribute("cy", point.y);
      dot.style.opacity = progress > 0.015 ? "1" : "0";
      frame = null;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateRoute);
    };

    const stageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("iiot-stage-visible");
            stageObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.22, rootMargin: "0px 0px -8% 0px" }
    );

    section
      .querySelectorAll("[data-platform-stage]")
      .forEach((stage) => stageObserver.observe(stage));

    updateRoute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      stageObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 -left-40 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-40 -right-40 w-96 h-96 rounded-full bg-violet-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-xs font-bold uppercase tracking-[0.18em] mb-5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            The connected data journey
          </span>
          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "clamp(2rem,4vw,3.15rem)" }}
          >
            {headingCopy(title)}
          </h2>
          <p className="text-slate-400 leading-relaxed">
            {paragraphCopy(subtitle)}
          </p>
        </div>

        <div className="relative">
          <svg
            className="hidden lg:block absolute inset-x-0 top-0 w-full h-full pointer-events-none z-0 overflow-visible"
            viewBox="0 0 1000 1800"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="iiot-route-gradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
              <filter id="iiot-route-glow">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M500 0 C500 170 170 180 170 410 C170 650 830 590 830 900 C830 1190 170 1130 170 1400 C170 1610 500 1630 500 1800"
              fill="none"
              stroke="rgba(148,163,184,0.12)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            <path
              ref={pathRef}
              d="M500 0 C500 170 170 180 170 410 C170 650 830 590 830 900 C830 1190 170 1130 170 1400 C170 1610 500 1630 500 1800"
              fill="none"
              stroke="url(#iiot-route-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              filter="url(#iiot-route-glow)"
            />
            <circle
              ref={dotRef}
              cx="500"
              cy="0"
              r="8"
              fill="#22d3ee"
              stroke="#020617"
              strokeWidth="5"
              vectorEffect="non-scaling-stroke"
              filter="url(#iiot-route-glow)"
              style={{ opacity: 0, transition: "opacity 200ms ease" }}
            />
          </svg>

          <div className="relative z-10 space-y-24 lg:space-y-36">
          {tabs.map((tab, tabIndex) => (
            <article
              key={tab.key}
              data-platform-stage=""
              className={`iiot-platform-stage relative grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
                tabIndex % 2
                  ? "iiot-stage-reverse lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                  : ""
              }`}
            >
              <span
                className={`hidden lg:flex absolute left-1/2 top-1/2 z-20 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-950 border items-center justify-center font-display font-bold ${
                  accents[tabIndex].badge
                }`}
              >
                {tabIndex + 1}
              </span>

              <div className="iiot-stage-visual relative min-h-[410px]">
                <div
                  className={`absolute inset-10 rounded-[2.5rem] blur-2xl ${
                    accents[tabIndex].glow
                  }`}
                />
                <div className="absolute inset-5 rounded-[2rem] bg-slate-900 border border-white/10" />
                {tab.images.map((image, imageIndex) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${tab.label} ${imageIndex + 1}`}
                    loading="lazy"
                    className={`absolute object-cover rounded-2xl border border-white/15 shadow-2xl shadow-black/40 ${
                      imageIndex === 0
                        ? "left-0 top-0 w-[76%] h-[76%]"
                        : "right-0 bottom-0 w-[62%] h-[54%]"
                    }`}
                  />
                ))}
                <div className="absolute left-6 bottom-6 right-20 rounded-xl border border-white/10 bg-slate-950/85 backdrop-blur-md p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        tabIndex === 0
                          ? "bg-cyan-400"
                          : tabIndex === 1
                          ? "bg-violet-400"
                          : "bg-emerald-400"
                      }`}
                    />
                    <div>
                      <p className="text-white text-sm font-semibold">
                        {headingCopy(tab.label)} layer
                      </p>
                      <p className="text-slate-500 text-xs mt-0.5">
                        Stage {String(tabIndex + 1).padStart(2, "0")} of the
                        connected operation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="iiot-stage-copy">
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className={`inline-flex px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-[0.16em] ${
                      accents[tabIndex].badge
                    }`}
                  >
                    {headingCopy(tab.label)}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-8">
                  {tabIndex === 0 &&
                    "Capture the signals that keep production moving"}
                  {tabIndex === 1 &&
                    "Move trusted data from the edge to every team"}
                  {tabIndex === 2 &&
                    "Shape intelligence around your operating model"}
                </h3>

                <div className="relative">
                  <div
                    className={`absolute left-[17px] top-4 bottom-4 w-px bg-gradient-to-b ${
                      accents[tabIndex].line
                    } opacity-30`}
                  />
                  <div className="space-y-6">
                    {tab.items.map((item, itemIndex) => (
                      <div
                        key={item.title}
                        className="iiot-stage-item relative grid grid-cols-[36px_1fr] gap-4"
                        style={{ "--item-delay": `${itemIndex * 85}ms` }}
                      >
                        <span
                          className={`relative z-10 w-9 h-9 rounded-full bg-slate-950 border border-white/15 flex items-center justify-center text-xs font-bold ${
                            accents[tabIndex].number
                          }`}
                        >
                          {String(itemIndex + 1).padStart(2, "0")}
                        </span>
                        <div className="pb-1">
                          <h4 className="font-display font-semibold text-white mb-1.5">
                            {headingCopy(item.title)}
                          </h4>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {paragraphCopy(item.desc)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>

        <div className="mt-24 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-slate-700 bg-slate-800/80 px-6 py-5 sm:px-8 w-full">
          <div className="text-left">
              <p className="text-white font-semibold text-lg">
                Ready to connect your first production workflow?
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Start with one high-value use case and expand at your pace.
              </p>
            </div>

            <button
              className="
                shrink-0
                bg-[#0fb7c5]
                text-white
                font-semibold
                px-6
                py-3
                rounded-xl
                shadow-lg
                hover:bg-[#0da5b2]
                hover:shadow-cyan-500/25
                transition-all
                duration-300
              "
            >
              Explore a Tailored Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Automation({ title, categories }) {
  const [active, setActive] = useState(0);
  const ref = useScrollReveal();
  const current = categories[active];

  return (
    <section className="py-16 sm:py-20 bg-slate-900">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <SectionHeader title={title} />
        <div className="grid lg:grid-cols-[240px_1fr] gap-6">
<div className="flex lg:flex-col lg:justify-center gap-2 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0">
              {categories.map((category, index) => (
              <button
                key={category.key}
                type="button"
                onClick={() => setActive(index)}
                className={`flex-shrink-0 px-4 py-3 rounded-lg text-left text-xs font-semibold border transition-all ${
                  active === index
                    ? "bg-slate-900 border-slate-900 text-white"
                    : "border-white/10 bg-slate-950 text-slate-400 hover:border-cyan-300"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="rounded-2xl bg-slate-950 border border-white/10 overflow-hidden">
            <div className="grid lg:grid-cols-[1fr_0.9fr]">
              <div className="p-7 sm:p-9">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  {headingCopy(current.label)}
                </span>
                <h3 className="font-display font-semibold text-white text-xl sm:text-2xl mt-3 mb-3">
                  {headingCopy(current.heading)}
                </h3>
                <p className="text-slate-400 text-sm mb-7">
                  {paragraphCopy(current.intro)}
                </p>
                <div className="divide-y divide-white/10">
                  {current.items.map((item) => (
                    <article key={item.title} className="py-3 first:pt-0">
                      <h4 className="text-white text-sm font-semibold mb-1">
                        {headingCopy(item.title)}
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {paragraphCopy(item.desc)}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
              <img
                src={current.image}
                alt={current.heading}
                loading="lazy"
                className="w-full h-full min-h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// function Insights({ title, subtitle, ctaLabel, features }) {
//   const ref = useScrollReveal();

//   return (
//     <section className="py-16 sm:py-20 bg-slate-950">
//       <div ref={ref} className="max-w-6xl mx-auto px-6">
//         <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-7 py-10 sm:px-12 sm:py-12 mb-16">
//           <div className="relative z-10 max-w-2xl">
//             <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-6">
//               {headingCopy(title)}
//             </h2>
//             <CtaButton>{ctaLabel}</CtaButton>
//           </div>
//           <div className="absolute -right-16 -bottom-24 w-72 h-72 rounded-full bg-cyan-200/50" />
//           <div className="absolute right-24 -top-20 w-44 h-44 rounded-full border-[28px] border-white/50" />
//         </div>

//         <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
//           <div>
//             <h3 className="font-display font-semibold text-white text-xl sm:text-2xl mb-4">
//               Determine cause and effect to improve efficiency
//             </h3>
//             <p className="text-slate-400 text-sm leading-relaxed">
//               {paragraphCopy(subtitle)}
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 gap-x-8">
//           {features.map((feature, index) => (
//             <article
//               key={feature.title}
//               className="group py-5 border-b border-white/10"
//             >
//               <div className="w-9 h-9 mb-4 rounded-lg bg-cyan-400/10 text-cyan-400 text-xs font-bold flex items-center justify-center">
//                 {String(index + 1).padStart(2, "0")}
//               </div>
//               <h3 className="font-display font-semibold text-white mb-2">
//                 {headingCopy(feature.title)}
//               </h3>
//               <p className="text-slate-400 text-sm leading-relaxed">
//                 {paragraphCopy(feature.desc)}
//               </p>
//             </article>
//           ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Benefits({ title, groups }) {
//   const ref = useScrollReveal();

//   return (
//     <section className="py-16 sm:py-20 bg-slate-900">
//       <div ref={ref} className="max-w-6xl mx-auto px-6">
//         <SectionHeader title={title} />
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
//           {groups.map((group) => (
//             <article
//               key={group.heading}
//               className={`border-t-2 pt-5 ${
//                 group.heading === "Reduce"
//                   ? "lg:col-span-4 border-cyan-500 lg:flex lg:items-start lg:gap-12"
//                   : "border-slate-900"
//               }`}
//             >
//               <h3 className="font-display font-bold text-white text-lg mb-5 min-w-28">
//                 {headingCopy(group.heading)}
//               </h3>
//               <ul
//                 className={`${
//                   group.heading === "Reduce"
//                     ? "lg:flex lg:flex-wrap lg:gap-x-12"
//                     : "space-y-3"
//                 }`}
//               >
//                 {group.items.map((item) => (
//                   <li
//                     key={item}
//                     className="flex items-start gap-2 text-slate-300 text-sm"
//                   >
//                     <span className="mt-0.5 w-4 h-4 text-cyan-400">
//                       <CheckIcon />
//                     </span>
//                     {shortCopy(item)}
//                   </li>
//                 ))}
//               </ul>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function PartnerProgram({ data }) {
//   const ref = useScrollReveal();

//   return (
//     <section className="py-16 sm:py-20 bg-slate-950">
//       <div ref={ref} className="max-w-6xl mx-auto px-6 text-center">
//         <div className="max-w-3xl mx-auto mb-10">
//           <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
//             {headingCopy(data.eyebrow)}
//           </p>
//           <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-4">
//             {headingCopy(data.title)}
//           </h2>
//           <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-7">
//             {paragraphCopy(data.desc)}
//           </p>
//         </div>
//         <img
//           src={data.image}
//           alt={data.title}
//           loading="lazy"
//           className="w-full h-64 sm:h-96 object-cover rounded-2xl border border-white/10 mb-8"
//         />
//         <CtaButton>{data.ctaLabel}</CtaButton>
//       </div>
//     </section>
//   );
// }

// function Testimonials({ title, testimonials }) {
//   const ref = useScrollReveal();

//   return (
//     <section className="py-16 sm:py-20 bg-slate-900">
//       <div ref={ref} className="max-w-5xl mx-auto px-6">
//         <SectionHeader title={title} />
//         <div className="grid md:grid-cols-2 gap-6">
//           {testimonials.map((testimonial) => (
//             <blockquote
//               key={testimonial.name}
//               className="rounded-2xl bg-slate-950 border border-white/10 p-7 shadow-sm"
//             >
//               <span className="text-cyan-400 text-4xl font-serif">“</span>
//               <p className="text-slate-300 text-sm leading-relaxed mb-7">
//                 {paragraphCopy(testimonial.quote)}
//               </p>
//               <footer>
//                 <p className="font-semibold text-white">
//                   {testimonial.name}
//                 </p>
//                 <p className="text-slate-500 text-sm">{testimonial.role}</p>
//               </footer>
//             </blockquote>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function Faq({ title, faqs }) {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useScrollReveal();

  return (
    <section className="py-16 sm:py-20 bg-slate-950">
      <div ref={ref} className="max-w-3xl mx-auto px-6">
        <SectionHeader title={title} />
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <article
                key={faq.q}
                className={`rounded-2xl border transition-colors ${
                  open
                    ? "border-cyan-400/50 bg-cyan-400/10"
                    : "border-white/10 bg-slate-950"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={open}
                >
                  <span className="font-display font-semibold text-white text-sm">
                    {questionCopy(faq.q)}
                  </span>
                  <span className="text-cyan-400">
                    <ChevronIcon open={open} />
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: open ? "240px" : "0px" }}
                >
                  <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">
                    {paragraphCopy(faq.a)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function IndustrialIoT({ data = industrialIoT }) {
  const heroRef = useScrollReveal();
  const finalCtaRef = useScrollReveal();
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;

    const sections = [...page.querySelectorAll(":scope > section")];
    sections.forEach((section, index) => {
      section.classList.add("iiot-page-section");
      section.style.setProperty("--section-index", index);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("iiot-section-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="iiot-page">
      <style>{`
        .iiot-page-section {
          opacity: 0;
          transform: translateY(42px);
          transition:
            opacity 900ms cubic-bezier(.2,.7,.2,1),
            transform 900ms cubic-bezier(.2,.7,.2,1);
        }

        .iiot-page-section.iiot-section-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .iiot-platform-stage .iiot-stage-visual,
        .iiot-platform-stage .iiot-stage-copy {
          opacity: 0;
          transition:
            opacity 900ms cubic-bezier(.2,.7,.2,1),
            transform 1000ms cubic-bezier(.2,.7,.2,1);
        }

        .iiot-platform-stage .iiot-stage-visual {
          transform: translate3d(-70px, 36px, 0) scale(.94);
        }

        .iiot-platform-stage .iiot-stage-copy {
          transform: translate3d(70px, 28px, 0);
        }

        .iiot-platform-stage.iiot-stage-reverse .iiot-stage-visual {
          transform: translate3d(70px, 36px, 0) scale(.94);
        }

        .iiot-platform-stage.iiot-stage-reverse .iiot-stage-copy {
          transform: translate3d(-70px, 28px, 0);
        }

        .iiot-platform-stage.iiot-stage-visible .iiot-stage-visual,
        .iiot-platform-stage.iiot-stage-visible .iiot-stage-copy {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }

        .iiot-stage-item {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 600ms ease var(--item-delay),
            transform 600ms ease var(--item-delay);
        }

        .iiot-stage-visible .iiot-stage-item {
          opacity: 1;
          transform: translateY(0);
        }

        .iiot-stage-visual img:first-of-type {
          animation: iiot-image-drift 7s ease-in-out infinite;
        }

        .iiot-stage-visual img:nth-of-type(2) {
          animation: iiot-image-drift-reverse 8s ease-in-out infinite;
        }

        @keyframes iiot-image-drift {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -10px, 0); }
        }

        @keyframes iiot-image-drift-reverse {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, 9px, 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .iiot-page-section,
          .iiot-platform-stage .iiot-stage-visual,
          .iiot-platform-stage .iiot-stage-copy,
          .iiot-stage-item {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .iiot-stage-visual img {
            animation: none !important;
          }
        }
      `}</style>
      <section className="relative min-h-[620px] pt-32 pb-16 overflow-hidden bg-slate-950 flex items-center">
        <div className="absolute left-4 top-20 z-30 sm:left-6 sm:top-28 lg:left-8 lg:top-32">
          <a
            href="/"
            className="flex items-center justify-center h-10 w-10 sm:h-auto sm:w-auto sm:px-5 sm:py-2.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-slate-300 transition-all duration-300 hover:border-[#0fb7c5]/50 hover:bg-[#0fb7c5]/10 hover:text-white"
          >
            <i className="fas fa-arrow-left text-sm" />
            <span className="hidden sm:inline ml-2 text-sm font-semibold">Back to Home</span>
          </a>
        </div>

        <div
          ref={heroRef}
          className="relative max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center"
        >
          <div>
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.18em] mb-5">
              {headingCopy(data.eyebrow)}
            </p>
            <h1
              className="font-display font-bold text-white mb-5"
              style={{ fontSize: "clamp(2.15rem,4.5vw,3.65rem)" }}
            >
              {headingCopy(data.title)}
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {paragraphCopy(data.subtitle)}
            </p>
            <CtaButton>{data.ctaLabel}</CtaButton>
          </div>

          <div className="relative min-h-[390px] sm:min-h-[480px]">
            <div className="absolute inset-8 rounded-[45%_55%_46%_54%/55%_42%_58%_45%] bg-cyan-400/10" />
            <img
              src={data.heroImage}
              alt={data.title}
              className="absolute right-0 top-6 w-[88%] h-[82%] object-cover rounded-[3rem_1rem_3rem_1rem] shadow-xl"
            />
            {data.heroOverlayImages.slice(0, 2).map((image, index) => (
              <img
                key={image}
                src={image}
                alt=""
                className={`absolute hidden sm:block object-cover rounded-xl border-4 border-white shadow-lg ${
                  index === 0
                    ? "left-0 top-4 w-36 h-28"
                    : "right-4 bottom-0 w-40 h-28"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* {data.trustedByLogos.length > 0 && (
        <section className="py-8 bg-slate-950 border-y border-white/10">
          <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            <span className="text-white text-sm font-semibold">
              Trusted by teams shaping modern industry
            </span>
            {data.trustedByLogos.map((logo) => (
              <span
                key={logo.name}
                className="font-display font-semibold text-slate-500 text-sm"
              >
                {logo.name}
              </span>
            ))}
          </div>
        </section>
      )} */}

      <InfoTabs data={data.infoTabs} />
      <ManufacturingTypes
        title={data.manufacturingTypesTitle}
        intro={data.manufacturingTypesIntro}
        types={data.manufacturingTypes}
      />
      <Platform
        title={data.platformTitle}
        subtitle={data.platformSubtitle}
        tabs={data.platformTabs}
      />
      <Automation
        title={data.automationTitle}
        categories={data.automationCategories}
      />
      {/* <Insights
        title={data.insightsTitle}
        subtitle={data.insightsSubtitle}
        ctaLabel={data.insightsCtaLabel}
        features={data.insightsFeatures}
      /> */}
      {/* <Benefits title={data.benefitsTitle} groups={data.benefitsGroups} />
      <PartnerProgram data={data.partnerProgram} /> */}
      {/* <Testimonials
        title={data.testimonialsTitle}
        testimonials={data.testimonials}
      /> */}
      <Faq title={data.faqTitle} faqs={data.faqs} />

   <section className="py-16 bg-slate-900">
  <div
    ref={finalCtaRef}
    className="relative max-w-5xl mx-auto px-6 overflow-hidden rounded-2xl min-h-72 flex items-center justify-center text-center border border-white/10 shadow-sm"
  >
    <img
      src={data.finalCta.image}
      alt=""
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover opacity-15"
    />

    <div className="absolute inset-0 bg-slate-950/85" />

    <div className="relative z-10 p-8">
      <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-4">
        {headingCopy(data.finalCta.title)}
      </h2>

      <p className="text-slate-400 max-w-2xl mx-auto mb-8">
        Connect your machines, collect real-time production data, and build
        actionable dashboards to improve operational visibility and decision-making.
      </p>

      <button
        className="
          inline-flex
          items-center
          justify-center
          bg-[#0fb7c5]
          text-white
          px-8
          py-3
          rounded-xl
          font-semibold
          shadow-lg
          shadow-cyan-500/20
          hover:bg-[#0da5b2]
          hover:shadow-cyan-500/40
          transition-all
          duration-300
        "
      >
        {data.finalCta.ctaLabel || "Schedule a Free Consultation"}
      </button>
    </div>
  </div>
</section>
    </div>
  );
}
