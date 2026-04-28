import { motion, type Variants } from "framer-motion";
import { businessData } from "../../data/business";
import { DynamicIcon } from "./shared/DynamicIcon";

const easing = [0.22, 1, 0.36, 1] as const;

export function Services() {
  const { services, business } = businessData;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easing },
    },
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3D2B] mb-4">
            {services.heading}
          </h2>
          <p className="text-lg text-gray-600 font-['Inter',sans-serif]">
            {services.subheading}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.items.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-gray-200 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="h-52 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#1F3D2B]/10 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-8 flex-grow flex flex-col relative bg-white">
                <div className="absolute -top-10 right-6 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg border border-gray-50 z-20 group-hover:-translate-y-1 transition-transform duration-300">
                  <DynamicIcon
                    name={service.iconName}
                    className="text-[#C5A880]"
                    size={24}
                  />
                </div>

                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#1F3D2B] mb-3 mt-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm font-['Inter',sans-serif] leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href={business.quoteLink}
                    className="text-[#1F3D2B] font-semibold hover:text-[#C5A880] transition-colors inline-flex items-center gap-1.5 text-sm group/link"
                  >
                    {service.ctaLabel || "Request Info"}
                    <span
                      className="group-hover/link:translate-x-1 transition-transform"
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
