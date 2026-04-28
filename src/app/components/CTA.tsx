import { motion } from "motion/react";
import { businessData } from "../../data/business";

export function CTA() {
  const { cta, business } = businessData;

  return (
    <section className="bg-[#C5A880] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1F3D2B] rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F3D2B] mb-6 leading-tight max-w-3xl mx-auto">
            {cta.headline}
          </h2>

          <p className="text-xl sm:text-2xl text-[#1F3D2B]/80 font-medium mb-10 max-w-2xl mx-auto font-['Inter',sans-serif]">
            {cta.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={business.quoteLink}
              className="bg-[#1F3D2B] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#162d1f] hover:shadow-[0_10px_30px_-10px_rgba(31,61,43,0.5)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto text-center"
            >
              {cta.primaryCtaText}
            </a>

            <a
              href={`tel:${business.phoneRaw}`}
              className="bg-transparent border-2 border-[#1F3D2B] text-[#1F3D2B] px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#1F3D2B] hover:text-[#C5A880] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto text-center"
            >
              {cta.secondaryCtaText} {business.phoneFormatted}
            </a>
          </div>

          <p className="mt-8 text-sm font-bold text-[#1F3D2B]/70 uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1F3D2B]/60" />
            {cta.urgencyText}
            <span className="w-2 h-2 rounded-full bg-[#1F3D2B]/60" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}
