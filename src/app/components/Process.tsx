import { motion, type Variants } from "framer-motion";
import { businessData } from "../../data/business";
import { DynamicIcon } from "./shared/DynamicIcon";

const easing = [0.22, 1, 0.36, 1] as const;

export function Process() {
  const { process } = businessData;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easing },
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-[#F5F5F2] border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3D2B] mb-4">
            {process.heading}
          </h2>
          <p className="text-lg text-gray-600 font-['Inter',sans-serif]">
            {process.subheading}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row justify-between gap-12 relative"
        >
          <div className="hidden md:block absolute top-[3rem] left-[15%] right-[15%] h-[2px] bg-gray-300 z-0 border-dashed border-2" />

          {process.steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={item}
              className="flex flex-col items-center text-center w-full md:w-1/3 relative z-10 group"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#C5A880] mb-8 group-hover:scale-110 group-hover:border-[#1F3D2B] group-hover:shadow-xl transition-all duration-500">
                <DynamicIcon
                  name={step.iconName}
                  className="text-[#1F3D2B]"
                  size={36}
                />
              </div>

              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#1F3D2B] mb-4 flex flex-col gap-2">
                <span className="text-[#C5A880] text-sm uppercase tracking-widest font-sans font-bold">
                  Step 0{index + 1}
                </span>
                {step.title}
              </h3>

              <p className="text-gray-600 font-['Inter',sans-serif] leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
