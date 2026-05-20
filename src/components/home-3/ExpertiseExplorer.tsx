"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Globe,
  Gavel,
  Lightbulb,
  Scale,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import {
  practiceAreas,
  ease,
  revealContainer,
  revealItem,
  PremiumButton,
  ScrollTextReveal,
  SectionLabel,
} from "./shared";

const practiceIcons: Record<string, React.ElementType> = {
  "Corporate & Commercial": Building2,
  "Joint Ventures & FDI": Globe,
  "Regulatory Advisory": Shield,
  "Dispute Resolution": Gavel,
  "Employment & Labor": Users,
  "IP & Technology": Lightbulb,
  "Tax & Zakat": Scale,
  "Sector Advisory": Zap,
};

export default function ExpertiseExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArea = practiceAreas[activeIndex];
  const ActiveIcon = practiceIcons[activeArea.title] ?? Scale;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={revealContainer}
      className="bg-white px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative mb-14 flex flex-col justify-between gap-6 pb-8 md:flex-row md:items-end">
          <motion.div
            variants={revealItem}
            className="absolute bottom-0 left-0 h-px w-full origin-left bg-brand/10"
          />
          <div>
            <SectionLabel>Practice Areas</SectionLabel>
            <motion.h2
              variants={revealItem}
              className="mt-3 text-4xl font-light leading-tight text-brand md:text-5xl"
            >
              <ScrollTextReveal>Our Mandate</ScrollTextReveal>
            </motion.h2>
          </div>
          <motion.div variants={revealItem}>
            <PremiumButton href="/expertise">All Practice Areas</PremiumButton>
          </motion.div>
        </div>

        <div className="grid gap-px bg-brand/10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            variants={revealItem}
            className="bg-brand p-8 text-white sm:p-10 lg:min-h-[560px] lg:p-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArea.title}
                initial={{ opacity: 0, x: -24, clipPath: "inset(0 18% 0 0)" }}
                animate={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
                exit={{ opacity: 0, x: 18, clipPath: "inset(0 0 0 14%)" }}
                transition={{ duration: 0.5, ease }}
                className="flex h-full flex-col justify-between"
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

          <div className="grid gap-px bg-brand/10 sm:grid-cols-2">
            {practiceAreas.map((area, i) => {
              const Icon = practiceIcons[area.title] ?? Scale;
              const isActive = activeIndex === i;
              return (
                <motion.button
                  key={area.title}
                  type="button"
                  custom={i}
                  variants={revealItem}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.3, ease }}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  className={`group flex min-h-[220px] flex-col justify-between p-6 text-left transition-colors sm:p-7 ${
                    isActive
                      ? "bg-gray-850 text-white"
                      : "bg-white text-brand hover:bg-brand hover:text-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className={
                        isActive
                          ? "text-white"
                          : "text-brand/45 transition-colors group-hover:text-white"
                      }
                    />
                    <span
                      className={
                        isActive
                          ? "font-mono text-xs text-white/40"
                          : "font-mono text-xs text-brand/24 transition-colors group-hover:text-white/40"
                      }
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3
                      className={
                        isActive
                          ? "text-2xl font-light leading-tight text-white"
                          : "text-2xl font-light leading-tight text-brand transition-colors group-hover:text-white"
                      }
                    >
                      {area.title}
                    </h3>
                    <ArrowRight
                      size={16}
                      className={
                        isActive
                          ? "mt-6 text-white/70"
                          : "mt-6 -translate-x-2 text-brand/0 transition-all group-hover:translate-x-0 group-hover:text-white/70"
                      }
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
