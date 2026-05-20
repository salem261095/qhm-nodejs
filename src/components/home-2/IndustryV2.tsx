"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  industryFocus,
  industryTicker,
  editorialWipe,
  fadeIn,
  lineDraw,
  premiumEase,
  sectionReveal,
  ScrollTextReveal,
} from "./shared";

const cardVariant = {
  hidden: { opacity: 0, y: 40, clipPath: "inset(0 0 24% 0)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { delay: i * 0.09, duration: 0.78, ease: premiumEase },
  }),
};

export default function IndustryV2() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-brand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.14 }}
          variants={sectionReveal}
        >
          <motion.h2 variants={editorialWipe} className="mt-3 text-4xl md:text-5xl font-light text-brand mb-14 leading-tight">
            <ScrollTextReveal>Industry Focus</ScrollTextReveal>
          </motion.h2>

          <motion.div
            variants={{
              hidden: { opacity: 0, clipPath: "inset(0 0 0 100%)" },
              visible: {
                opacity: 1,
                clipPath: "inset(0 0 0 0%)",
                transition: { duration: 1.05, ease: premiumEase },
              },
            }}
            className="relative mb-16 min-h-[420px] overflow-hidden bg-brand"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              src="/assets/For Website Upgrade/compressed-banner-video.mp4"
            />
            <div className="absolute inset-0 bg-brand/40" />
            <div className="relative z-10 flex min-h-[420px] items-end p-8 sm:p-10 lg:p-14">
              <div className="max-w-2xl border border-white/20 bg-brand/75 p-8 text-white backdrop-blur-sm">
                <motion.p variants={editorialWipe} className="text-xs font-light uppercase text-white/55">Industry Focus</motion.p>
                <motion.h3 variants={editorialWipe} custom={1} className="mt-4 text-4xl font-light leading-tight">Strategic Sector Expertise.</motion.h3>
                <motion.p variants={editorialWipe} custom={2} className="mt-5 text-sm leading-7 text-white/65">
                  Advising multinationals and tier-one enterprises across Saudi Arabia&apos;s most heavily regulated and rapidly evolving industries.
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="relative overflow-hidden py-4 mb-16 bg-brand">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 whitespace-nowrap"
            >
              {industryTicker.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-4 text-sm font-light uppercase text-white/50">
                  <span className="w-1 h-1 bg-white/60 flex-shrink-0" />
                  {item.title}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={sectionReveal}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand/10"
        >
          {industryFocus.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: premiumEase }}
              className="bg-white p-10 group hover:bg-brand hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <span className="text-xs font-light uppercase text-brand/30 group-hover:text-white/50 transition-colors">
                {item.number}
              </span>
              <h3 className="text-2xl font-light text-brand group-hover:text-white mt-4 mb-4 transition-colors leading-tight">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-xs font-light uppercase text-brand group-hover:text-white/70 transition-colors mt-auto">
                Explore <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
