import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { businessData } from "../../data/business";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { business, navigation } = businessData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] py-2"
          : "bg-[#F5F5F2]/90 backdrop-blur-sm border-b border-[#1F3D2B]/5 py-4"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#1F3D2B] rounded-lg flex items-center justify-center text-[#F5F5F2] font-['Playfair_Display',serif] font-bold text-xl group-hover:bg-[#C5A880] group-hover:text-[#1F3D2B] transition-colors duration-300">
              {business.logoInitials}
            </div>
            <span className="font-['Playfair_Display',serif] font-bold text-2xl text-[#1F3D2B]">
              {business.shortName}
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#333333] hover:text-[#1F3D2B] font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${business.phoneRaw}`}
              className="hidden lg:flex items-center gap-2 font-semibold text-[#1F3D2B] hover:text-[#C5A880] transition-colors group"
            >
              <Phone
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              {business.phoneFormatted}
            </a>

            <a
              href={business.quoteLink}
              className="hidden md:inline-flex bg-[#1F3D2B] text-white px-6 py-2.5 rounded-lg hover:bg-[#162d1f] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 font-medium"
            >
              {navigation.navCtaText}
            </a>

            <button
              className="md:hidden p-2 text-[#1F3D2B] hover:bg-[#1F3D2B]/5 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-[#333333] hover:bg-[#F5F5F2] hover:text-[#1F3D2B] rounded-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <a
                href={business.quoteLink}
                className="block px-4 py-3 text-[#1F3D2B] font-bold hover:bg-[#F5F5F2] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {navigation.mobileNavCtaText}
              </a>

              <a
                href={`tel:${business.phoneRaw}`}
                className="mt-4 flex items-center justify-center gap-2 bg-[#1F3D2B] text-white px-4 py-3.5 rounded-lg font-medium hover:bg-[#162d1f] active:scale-[0.98] transition-all"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={20} />
                Call {business.phoneFormatted}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
