import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { businessData } from "../../data/business";

export function Gallery() {
  const { gallery, business } = businessData;

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3D2B] mb-4">
            {gallery.heading}
          </h2>
          <p className="text-lg text-gray-600 font-['Inter',sans-serif]">
            {gallery.subheading}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[45%] relative rounded-3xl overflow-hidden shadow-xl group"
          >
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
            <img
              src={gallery.before.image}
              alt={gallery.before.alt}
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {gallery.before.label && (
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md text-[#1F3D2B] font-bold px-5 py-2 rounded-full text-xs uppercase tracking-widest shadow-lg z-20">
                {gallery.before.label}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
            className="hidden lg:flex w-16 h-16 bg-[#C5A880] rounded-full items-center justify-center text-white shadow-[0_0_30px_rgba(197,168,128,0.5)] z-20 -mx-10"
          >
            <ArrowRight size={32} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
            className="flex lg:hidden w-14 h-14 bg-[#C5A880] rounded-full items-center justify-center text-white shadow-lg z-20 -my-8 rotate-90"
          >
            <ArrowRight size={28} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[45%] relative rounded-3xl overflow-hidden shadow-2xl group"
          >
            <img
              src={gallery.after.image}
              alt={gallery.after.alt}
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {gallery.after.label && (
              <div className="absolute top-6 right-6 bg-[#1F3D2B]/95 backdrop-blur-md text-white font-bold px-5 py-2 rounded-full text-xs uppercase tracking-widest shadow-lg z-20">
                {gallery.after.label}
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href={business.quoteLink}
            className="inline-block bg-[#1F3D2B] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#162d1f] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 text-lg"
          >
            {gallery.ctaText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
