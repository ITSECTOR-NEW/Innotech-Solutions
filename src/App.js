import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar       from "./components/Navbar/Navbar";
import Hero         from "./components/Hero/Hero";
import Marquee      from "./components/Marquee/Marquee";
// import About        from "./components/About/About";
import Services     from "./components/Services/Services";
import WhyUs        from "./components/WhyUs/WhyUs";
// import IoT          from "./components/IoT/IoT";
// import Training     from "./components/Training/Training";
import TechStack    from "./components/TechStack/TechStack";
import Portfolio    from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Industries   from "./components/Industries/Industries";
import CTA          from "./components/CTA/CTA";
// import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import MobileApp    from "./components/MobileApp/MobileApp";
import UiDesign     from "./components/UiDesign/UiDesign";
import Contact      from "./components/Contact/Contact";
import Footer       from "./components/Footer/Footer";
import AboutPage    from "./pages/AboutPage";
import IndustrialIoTPage from "./pages/IndustrialIoTPage";
import StudentTrainingPage from "./pages/StudentTrainingPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import MobileAppDevelopmentPage from "./pages/MobileAppDevelopmentPage";
import UIWebDesigningPage from "./pages/UI&WebDesigningPage";

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
      <div className={`min-h-screen ${theme === "dark" ? "bg-dark-900 text-slate-100" : "bg-blue-50 text-slate-900"}`}>

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
                <WhyUs />
                {/* <IoT /> */}
                {/* <Training /> */}
                <TechStack />
                <Portfolio />
                <Testimonials />
                <Industries />
                {/* <CTA /> */}
                {/* <WebDevelopment /> */}
                {/* <UiDesign  /> */}
                {/* <MobileApp /> */}
                <Contact />
              </main>
            )}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/industrial-iot" element={<IndustrialIoTPage />} />
          <Route path="student-training" element={<StudentTrainingPage />} />
          <Route path = "/web-development" element = {<WebDevelopmentPage />} />
          <Route path = "/mobile-app" element = {<MobileAppDevelopmentPage />} />
           <Route path = "/UI-Web_Design" element = {<UIWebDesigningPage />} />
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
      </div>
    </BrowserRouter>
  );
}
