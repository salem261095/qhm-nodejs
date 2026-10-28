"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  ease,
  industryFocus,
  revealItem,
  ScrollTextReveal,
  SectionReveal,
} from "./shared";

const rowVariant = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: 0.3 + i * 0.12, duration: 0.7, ease },
  }),
};

export default function SectorCinema() {
  return (
    <SectionReveal className="relative flex min-h-[580px] flex-col justify-end overflow-hidden bg-black px-5 py-16 text-white sm:min-h-[640px] sm:px-8 sm:py-20 lg:h-[43.5vw] lg:min-h-[580px] lg:max-h-[860px] lg:px-10 lg:py-24">
      <motion.video
        key="/assets/vid/IndustryFocus-web.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        variants={{
          hidden: { scale: 1.05, clipPath: "inset(4% 0 4% 0)" },
          visible: {
            scale: 1,
            clipPath: "inset(0% 0 0% 0)",
            transition: { duration: 1.25, ease },
          },
        }}
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={{ opacity: 0.62 }}
        src="/assets/vid/IndustryFocus-web.mp4"
      >
        <source src="/assets/vid/IndustryFocus-web.mp4" type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25 pointer-events-none" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-10 lg:gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
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
                <p className="text-xs font-medium text-white/70">
                  {item.number}
                </p>
                <h3 className="mt-2 text-xl font-normal">{item.title}</h3>
              </div>
              <ArrowRight size={16} className="text-white/40" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
