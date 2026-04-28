import { Phone } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { businessData } from "../../data/business";
import { DynamicIcon } from "./shared/DynamicIcon";

const easing = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { hero, business } = businessData;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easing },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 flex items-center min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={hero.backgroundImage}
          alt={hero.backgroundImageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F3D2B]/95 via-[#1F3D2B]/80 to-[#1F3D2B]/40" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row gap-12 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="w-full lg:w-[60%] text-white"
        >
          <motion.h1
            variants={fadeUp}
            className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-[#F5F5F2]/90 mb-8 max-w-xl font-['Inter',sans-serif] leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a
              href={business.quoteLink}
              className="bg-[#C5A880] text-[#1F3D2B] hover:bg-[#b09672] hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 px-8 py-4 rounded-lg font-bold text-lg text-center"
            >
              {hero.primaryCtaText}
            </a>

            <a
              href={`tel:${business.phoneRaw}`}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 px-8 py-4 rounded-lg font-bold text-lg text-center flex items-center justify-center gap-2 group"
            >
              <Phone
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
              {hero.secondaryCtaText} {business.phoneFormatted}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-[#F5F5F2]/90 font-medium"
          >
            {hero.trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
              >
                <DynamicIcon
                  name={badge.iconName}
                  className="text-[#C5A880]"
                  size={18}
                />
                {badge.label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: easing }}
          className="w-full lg:w-[40%] max-w-md mx-auto lg:mx-0"
        >
          <div
            className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100"
            id="quote"
          >
            <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#1F3D2B] mb-2">
              {hero.quoteCardTitle}
            </h3>

            <p className="text-gray-500 text-sm mb-6 font-['Inter',sans-serif]">
              {hero.quoteCardSubtitle}
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="sr-only">Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 outline-none transition-all duration-300 font-['Inter',sans-serif] bg-gray-50/50 focus:bg-white"
                  required
                />
              </div>

              <div>
                <label className="sr-only">Phone</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 outline-none transition-all duration-300 font-['Inter',sans-serif] bg-gray-50/50 focus:bg-white"
                  required
                />
              </div>

              <div>
                <label className="sr-only">Service Needed</label>
                <select
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 outline-none transition-all duration-300 bg-gray-50/50 focus:bg-white font-['Inter',sans-serif] text-gray-700 appearance-none"
                  required
                >
                  <option value="">{hero.quoteServicePlaceholder}</option>
                  {hero.quoteServices.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1F3D2B] hover:bg-[#162d1f] text-white font-bold py-4 rounded-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 text-lg mt-2"
              >
                {hero.quoteButtonText}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
