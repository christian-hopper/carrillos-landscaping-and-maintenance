import { Star } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { businessData } from "../../data/business";

const easing = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  const { testimonials } = businessData;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easing },
    },
  };

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 bg-[#1F3D2B] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A880]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {testimonials.heading}
          </h2>
          <p className="text-lg text-[#F5F5F2]/80 font-['Inter',sans-serif]">
            {testimonials.subheading}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.items.map((testimonial) => (
            <motion.div
              key={`${testimonial.name}-${testimonial.location}`}
              variants={item}
              className="bg-white rounded-2xl p-8 shadow-xl flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-500"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-[#C5A880] fill-current"
                      size={18}
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic text-lg mb-8 font-['Inter',sans-serif] leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F5F5F2] rounded-full flex items-center justify-center text-[#1F3D2B] font-bold font-['Playfair_Display',serif] text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#1F3D2B] font-['Inter',sans-serif]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 font-['Inter',sans-serif]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
