"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  representativeMandates,
  editorialWipe,
  lineDraw,
  premiumEase,
  sectionReveal,
  ScrollTextReveal,
} from "./shared";

const rowVariant = {
  hidden: { opacity: 0, y: 28, clipPath: "inset(0 0 20% 0)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { delay: i * 0.11, duration: 0.76, ease: premiumEase },
  }),
};

export default function MandatesV2() {
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
              <motion.h2 variants={editorialWipe} className="mt-3 text-4xl md:text-5xl font-light leading-tight">
                <ScrollTextReveal>Selected Mandates</ScrollTextReveal>
              </motion.h2>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.06 }}
          variants={sectionReveal}
          className="divide-y divide-white/20"
        >
          {representativeMandates.map((m, i) => (
            <motion.div
              key={m.title}
              custom={i}
              variants={rowVariant}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3, ease: premiumEase }}
              className="group grid md:grid-cols-12 gap-6 py-10 hover:bg-white/5 transition-colors px-2"
            >
              <div className="md:col-span-3">
                <span className="block text-xs font-light uppercase text-white/50">{m.category}</span>
              </div>
              <div className="md:col-span-7">
                <h3 className="text-lg font-light text-white mb-3 leading-snug">{m.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{m.description}</p>
              </div>
              <div className="md:col-span-2 flex md:justify-end items-start">
                <ArrowUpRight
                  size={18}
                  className="text-white/20 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
