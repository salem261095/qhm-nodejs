"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ease, industryFocus, revealItem, ScrollTextReveal, SectionLabel, SectionReveal } from "./shared";

const rowVariant = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: 0.3 + i * 0.12, duration: 0.7, ease },
  }),
};

export default function SectorCinema() {
  return (
    <SectionReveal className="relative min-h-[86vh] overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-10">
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        variants={{
          hidden: { scale: 1.08, clipPath: "inset(12% 0 12% 0)" },
          visible: {
            scale: 1,
            clipPath: "inset(0% 0 0% 0)",
            transition: { duration: 1.25, ease },
          },
        }}
        className="absolute inset-0 h-full w-full object-cover opacity-62"
        src="/assets/For Website Upgrade/compressed-banner-video.mp4"
      />
      <div className="absolute inset-0 pointer-events-none" />
      <div className="relative z-10 mx-auto grid min-h-[66vh] max-w-7xl items-end gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <motion.div variants={revealItem}>
            <SectionLabel inverse>Industry Focus</SectionLabel>
          </motion.div>
          <motion.h2
            variants={revealItem}
            className="mt-5 text-5xl font-semibold uppercase leading-tight md:text-7xl"
          >
            <ScrollTextReveal>Industry Focus</ScrollTextReveal>
          </motion.h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="border border-white/20 bg-black/25 backdrop-blur-sm"
        >
          {industryFocus.map((item, index) => (
            <motion.div
              key={item.title}
              variants={rowVariant}
              custom={index}
              className="flex items-center justify-between border-b border-white/16 px-6 py-5 last:border-b-0"
            >
              <div>
                <p className="text-xs font-light text-white/36">{item.number}</p>
                <h3 className="mt-2 text-xl font-light">{item.title}</h3>
              </div>
              <ArrowRight size={16} className="text-white/40" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
