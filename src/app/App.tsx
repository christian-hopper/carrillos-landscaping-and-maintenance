import React, { useEffect } from "react";
import { Phone } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { businessData } from "../data/business";
import { applyTheme } from "../utils/applyTheme";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    applyTheme(businessData.theme);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F2] text-[#333333] font-['Inter',sans-serif] selection:bg-[#C5A880] selection:text-[#1F3D2B] relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />

      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-gray-200 z-50 flex gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a
          href={`tel:${businessData.business.phoneRaw}`}
          className="flex-1 bg-[#1F3D2B] text-white py-3.5 rounded font-bold flex justify-center items-center gap-2 shadow-lg hover:bg-[#162d1f] active:scale-95 transition-all text-lg"
        >
          <Phone size={22} className="text-[#C5A880]" />
          Call Now
        </a>
      </div>
    </div>
  );
}
