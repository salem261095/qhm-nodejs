"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Search, X } from "lucide-react";
import { coreCompetencies, ease, footer, hero, homepageContent, industryFocus, navLinks, practiceAreas, representativeMandates, revealContainer, revealItem, teamHeadshots, ClipReveal, PremiumButton, ScrollTextReveal, SectionLabel, SectionReveal, TextReveal } from "./shared";
import { teamMembers } from "@/data/lawyers";

export default function ExpertiseExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePractice = practiceAreas[activeIndex];

  return (
    <SectionReveal className="bg-white px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Practice Areas</SectionLabel>
            <motion.h2 variants={revealItem} className="mt-4 text-4xl font-semibold uppercase leading-tight text-brand md:text-6xl">
              <ScrollTextReveal>Practice Areas</ScrollTextReveal>
            </motion.h2>
          </div>
          <motion.p variants={revealItem} className="max-w-2xl text-base leading-8 text-black/55 lg:self-end">
            {practiceAreas.map((area) => area.title).join(" / ")}
          </motion.p>
        </div>

        <div className="grid border border-black/12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-black/12 lg:border-b-0 lg:border-r">
            {practiceAreas.map((area, index) => (
              <button
                key={area.title}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`relative flex w-full items-center justify-between border-b border-black/12 px-6 py-6 text-left transition-colors last:border-b-0 ${
                  activeIndex === index ? "bg-brand text-white" : "bg-white text-brand hover:bg-brand/5"
                }`}
              >
                <span className="text-sm font-light uppercase">{String(index + 1).padStart(2, "0")} {area.title}</span>
                <ArrowRight size={17} className={activeIndex === index ? "text-white" : "text-brand/45"} />
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePractice.title}
              initial={{ opacity: 0, x: 24, clipPath: "inset(0 0 0 12%)" }}
              animate={{ opacity: 1, x: 0, clipPath: "inset(0 0 0 0%)" }}
              exit={{ opacity: 0, x: -18, clipPath: "inset(0 12% 0 0)" }}
              transition={{ duration: 0.55, ease }}
              className="min-h-[390px] p-7 md:p-10"
            >
              <p className="text-xs font-light uppercase text-brand/60">Practice Areas</p>
              <h3 className="mt-4 text-4xl font-semibold leading-tight text-brand">{activePractice.title}</h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-black/55">{activePractice.description}</p>
              <div className="mt-9 grid gap-px bg-black/12 sm:grid-cols-2">
                {practiceAreas.slice(0, 4).map((practice, index) => {
                  return (
                    <motion.div
                      key={practice.title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.45, ease }}
                      className="group bg-white p-6 transition-colors hover:bg-brand hover:text-white"
                    >
                      <h4 className="text-xl font-light">{practice.title}</h4>
                      <p className="mt-4 text-sm leading-7 text-black/55 transition-colors group-hover:text-white/62">
                        {practice.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionReveal>
  );
}
