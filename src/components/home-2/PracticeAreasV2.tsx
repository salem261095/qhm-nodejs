"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Scale } from "lucide-react";
import {
  editorialWipe,
  lineDraw,
  practiceAreas,
  practiceIcons,
  premiumEase,
  sectionReveal,
  PremiumButton,
  ScrollTextReveal,
} from "./shared";

export default function PracticeAreasV2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArea = practiceAreas[activeIndex];
  const ActiveIcon = practiceIcons[activeArea.title] ?? Scale;

  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={sectionReveal}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 relative pb-8">
            <motion.div variants={lineDraw} className="absolute bottom-0 left-0 h-px w-full origin-left bg-brand" />
            <div>
              <motion.h2 variants={editorialWipe} className="mt-3 text-4xl md:text-5xl font-light text-brand leading-tight">
                <ScrollTextReveal>Our Mandate</ScrollTextReveal>
              </motion.h2>
            </div>
            <motion.div variants={editorialWipe} custom={1}>
              <PremiumButton href="/expertise">All Practice Areas</PremiumButton>
            </motion.div>
          </div>

          <div className="grid gap-px bg-brand lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div variants={editorialWipe} className="relative overflow-hidden bg-brand p-8 text-white sm:p-10 lg:min-h-[560px] lg:p-12">
              <AnimatePresence mode="wait">
                {activeArea.image ? (
                  <motion.img
                    key={activeArea.image}
                    src={activeArea.image}
                    alt={activeArea.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: premiumEase }}
                    className="absolute inset-0 h-full w-full object-cover z-0"
                  />
                ) : null}
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0 pointer-events-none" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeArea.title}
                  initial={{ opacity: 0, x: -24, clipPath: "inset(0 18% 0 0)" }}
                  animate={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
                  exit={{ opacity: 0, x: 18, clipPath: "inset(0 0 0 14%)" }}
                  transition={{ duration: 0.5, ease: premiumEase }}
                  className="relative z-10 flex h-full flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center border border-white/20">
                        <ActiveIcon size={24} strokeWidth={1.5} />
                      </div>
                      <span className="font-mono text-sm text-white/40">
                        {String(activeIndex + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-14 max-w-xl text-5xl font-light leading-[0.98] sm:text-6xl">
                      {activeArea.title}
                    </h3>
                  </div>

                  <div className="mt-16">
                    <p className="max-w-xl text-base leading-8 text-white/62">
                      {activeArea.description}
                    </p>
                    <div className="mt-10">
                      <PremiumButton href={activeArea.href} inverse>
                        Explore Practice
                      </PremiumButton>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <div className="grid gap-px bg-brand sm:grid-cols-2">
              {practiceAreas.map((area, i) => {
                const Icon = practiceIcons[area.title] ?? Scale;
                const isActive = activeIndex === i;
                return (
                  <motion.button
                    key={area.title}
                    type="button"
                    custom={i}
                    variants={editorialWipe}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ duration: 0.32, ease: premiumEase }}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                    className={`group flex min-h-[220px] flex-col justify-between p-6 text-left transition-colors sm:p-7 ${
                      isActive ? "bg-gray-850 text-white" : "bg-white text-brand hover:bg-brand hover:text-white"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className={isActive ? "text-white" : "text-brand transition-colors group-hover:text-white"}
                      />
                      <span className={isActive ? "font-mono text-xs text-white/40" : "font-mono text-xs text-brand transition-colors group-hover:text-white/40"}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className={isActive ? "text-2xl font-light leading-tight text-white" : "text-2xl font-light leading-tight text-brand transition-colors group-hover:text-white"}>
                        {area.title}
                      </h3>
                      <ArrowRight
                        size={16}
                        className={isActive ? "mt-6 text-white/70" : "mt-6 -translate-x-2 text-brand transition-all group-hover:translate-x-0 group-hover:text-white/70"}
                      />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
