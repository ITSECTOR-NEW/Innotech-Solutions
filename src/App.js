import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash/ScrollToHash";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/Marquee";
// import About        from "./components/About/About";
import Services from "./components/Services/Services";
import WhyUs from "./components/WhyUs/WhyUs";
// import IoT          from "./components/IoT/IoT";
// import Training     from "./components/Training/Training";
// import TechStack    from "./components/TechStack/TechStack";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
// import Industries from "./components/Industries/Industries";
import CTA from "./components/CTA/CTA";
import BusinessNeeds from "./components/BusinessNeeds/BusinessNeeds";
// import ClientsSection from "./components/ClientsSection/ClientsSection";
// import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import AIService from "./components/AIService/AIService";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import MobileAppDevelopmentPage from "./pages/MobileAppDevelopmentPage";
 
export default function App() {
  const [theme, setTheme] = useState("dark");
  const [showBTT, setShowBTT] = useState(false);

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme === "light" ? "light" : "";
  }, [theme]);

  // Back to top visibility
  useEffect(() => {
    const onScroll = () => setShowBTT(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <BrowserRouter>
  <ScrollToHash />

   <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-dark-900 text-slate-100"
          : "bg-blue-50 text-slate-900"
      }`}
    >
     

        {/* Navbar */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <Routes>
          <Route
            path="/"
            element={(
              <main>
                <Hero />
                <Marquee />
                {/* <About /> */}
                <Services />
                <BusinessNeeds />
                <WhyUs />
                {/* <ClientsSection /> */}
                {/* <IoT /> */}
                {/* <Training /> */}
                {/* <TechStack /> */}
                <Portfolio />
                {/* <Industries /> */}
                {/* <CTA /> */}
                {/* <WebDevelopment /> */}
                {/* <UiDesign  /> */}
                {/* <MobileApp /> */}
                {/* <DigitalMarketing /> */}
                <Testimonials />
                <Contact />
              </main>
            )}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/application-development" element={<MobileAppDevelopmentPage />} />
          <Route path="/services/ai-services" element={<AIService serviceKey="ai-services" />} />
          <Route path="/services/industrial-internet-of-things" element={<AIService serviceKey="industrial-internet-of-things" />} />
          <Route path="/services/ai-coding-training-schools" element={<AIService serviceKey="ai-coding-training-schools" />} />
          <Route path="/services/business-automation-solutions" element={<AIService serviceKey="business-automation-solutions" />} />
          <Route path="/services/ai-consulting-strategy" element={<AIService serviceKey="ai-services" />} />
          <Route path="/services/industrial-ai-solutions" element={<AIService serviceKey="industrial-internet-of-things" />} />
          <Route path="/services/ai-in-healthcare" element={<AIService serviceKey="ai-services" />} />
          <Route path="/services/ai-automation-chatbots" element={<AIService serviceKey="industrial-internet-of-things" />} />
          <Route path="/services/ui-ux-web-designing" element={<AIService serviceKey="business-automation-solutions" />} />
          <Route path="/services/digital-marketing" element={<AIService serviceKey="industrial-internet-of-things" />} />
          <Route path="/services/student-training-programs" element={<AIService serviceKey="ai-coding-training-schools" />} />
        </Routes>

        <Footer />

        {/* Back to Top */}
        {showBTT && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-7 right-7 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white grid place-items-center shadow-lg shadow-cyan-500/30 hover:-translate-y-1 hover:shadow-cyan-500/50 transition-all z-50"
            title="Back to top"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        )}

          {/* Whatsapp Icon */}
              <a
              href="https://wa.me/919109470875"             target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-24 right-7 z-50 group"
            >
              <div className="flex items-center gap-3 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                
                <i className="fab fa-whatsapp text-2xl"></i>

                <div className="hidden sm:block">
                  <p className="text-xs opacity-90">Need Help?</p>
                  <p className="text-sm font-semibold">
                    Chat on WhatsApp
                  </p>
                </div>

              </div>
            </a>

      </div>
    </BrowserRouter>
  );
}
