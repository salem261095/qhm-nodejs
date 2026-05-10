"use client";

import { homepageContent } from "@/data/homepage";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const reveal = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)", clipPath: "inset(0 0 14% 0)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.72, delay, ease },
  }),
};

export default function RepresentativeMandates() {
  const { representativeMandates } = homepageContent;

  return (
    <section className="py-24 lg:py-40 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
            variants={reveal}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight"
          >
            Representative Mandates
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
          
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>
          
          {representativeMandates.map((mandate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 ${
                index % 2 === 0 ? "md:mt-0" : "md:mt-24"
              }`}
            >
              
              <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-brand ring-4 ring-white ${
                index % 2 === 0 ? "-right-[1.6rem] lg:-right-[1.9rem]" : "-left-[1.6rem] lg:-left-[1.9rem]"
              }`}></div>

              <div>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={reveal}
                  custom={0.08}
                  className="inline-block bg-gray-100 text-brand font-bold text-xs px-4 py-1.5 uppercase tracking-[0.1em] mb-6 rounded-sm"
                >
                  {mandate.category}
                </motion.span>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={reveal}
                  custom={0.14}
                  className="text-2xl font-bold text-gray-900 mb-6 leading-snug"
                >
                  {mandate.title}
                </motion.h3>
              </div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
                custom={0.2}
                className="text-gray-600 font-light leading-relaxed text-lg"
              >
                {mandate.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
