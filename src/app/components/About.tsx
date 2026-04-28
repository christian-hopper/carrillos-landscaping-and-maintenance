import { motion } from "motion/react";
import { businessData } from "../../data/business";
import { DynamicIcon } from "./shared/DynamicIcon";

export function About() {
  const { about, business } = businessData;

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-[#F5F5F2] relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={about.image}
                alt={about.imageAlt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />

              {about.stats[0] && (
                <div className="absolute bottom-0 right-0 bg-[#1F3D2B] text-white p-6 sm:p-8 rounded-tl-3xl shadow-[-10px_-10px_30px_rgba(0,0,0,0.2)]">
                  <div className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-bold text-[#C5A880] mb-1">
                    {about.stats[0].value}
                  </div>
                  <div className="text-sm sm:text-base font-['Inter',sans-serif] font-medium text-white/90">
                    {about.stats[0].label}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-[#C5A880] font-bold tracking-wider uppercase text-sm mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-[#C5A880]" />
              {about.eyebrow}
            </h4>

            <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3D2B] mb-6 leading-tight">
              {about.heading}
            </h2>

            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-gray-600 text-lg mb-6 font-['Inter',sans-serif] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            <ul className="space-y-4 mb-10">
              {about.checklist.map((point, index) => (
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  key={point}
                  className="flex items-center gap-3 text-[#1F3D2B] font-medium text-lg"
                >
                  <DynamicIcon
                    name="CheckCircle2"
                    className="text-[#C5A880] flex-shrink-0"
                    size={24}
                  />
                  {point}
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center gap-6 pt-8 border-t border-gray-200">
              <a
                href={business.quoteLink}
                className="bg-[#1F3D2B] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-[#162d1f] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300"
              >
                {about.ctaText}
              </a>

              <div className="text-sm text-gray-500">
                <span className="block font-bold text-[#1F3D2B] mb-0.5">
                  {about.phoneLabel}
                </span>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="hover:text-[#C5A880] font-medium transition-colors text-base"
                >
                  {business.phoneFormatted}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
