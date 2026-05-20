"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  coreCompetencies,
  editorialWipe,
  lineDraw,
  premiumEase,
  sectionReveal,
  ScrollTextReveal,
} from "./shared";

const rowVariant = {
  hidden: { opacity: 0, x: -32, clipPath: "inset(0 100% 0 0)" },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    clipPath: "inset(0 0% 0 0)",
    transition: { delay: i * 0.1, duration: 0.82, ease: premiumEase },
  }),
};

export default function CompetenciesV2() {
  return (
    <section className="py-24 bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.14 }}
          variants={sectionReveal}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 relative">
            <motion.div variants={lineDraw} className="absolute bottom-0 left-0 h-px w-full origin-left bg-white/20" />
            <div>
              <motion.h2 variants={editorialWipe} className="mt-3 text-4xl md:text-5xl font-light leading-tight max-w-sm">
                <ScrollTextReveal>Why Counsel Chooses QHM</ScrollTextReveal>
              </motion.h2>
            </div>
            <motion.p variants={editorialWipe} custom={1} className="text-white/50 max-w-sm text-sm leading-relaxed">
              Partner-led delivery ensuring senior oversight on every mandate from day one.
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={sectionReveal}
            className="divide-y divide-white/20"
          >
            {coreCompetencies.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={rowVariant}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3, ease: premiumEase }}
                className="group flex flex-col md:flex-row md:items-center gap-6 py-10 hover:bg-white/5 transition-colors px-2"
              >
                <span className="text-6xl font-light text-white/10 group-hover:text-white/20 transition-colors w-24 flex-shrink-0 leading-none">
                  {item.number}
                </span>
                <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1">
                  <h3 className="text-xl font-light md:w-64 flex-shrink-0">{item.title}</h3>
                  <div className="hidden md:block w-px h-12 bg-white/20 flex-shrink-0" />
                  <p className="text-white/60 text-sm leading-relaxed flex-1">{item.description}</p>
                </div>
                <ArrowRight size={18} className="text-white/20 group-hover:text-white group-hover:translate-x-2 transition-all flex-shrink-0 hidden md:block" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
