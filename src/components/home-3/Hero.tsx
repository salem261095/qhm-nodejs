"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Building2, FileCheck2, Globe2, MapPin, Scale, ShieldCheck } from "lucide-react";
import { ease, PremiumButton, TextReveal } from "./shared";

const pathwayItems = [
  {
    label: "Establish",
    icon: Building2,
    text: "Corporate structuring, MISA licensing, RHQ setup, and foreign investment approvals.",
  },
  {
    label: "Operate",
    icon: FileCheck2,
    text: "Employment, governance, commercial contracts, tax, and ongoing regulatory compliance.",
  },
  {
    label: "Protect",
    icon: ShieldCheck,
    text: "Risk management across IP, technology, data, sector regulation, and board-level obligations.",
  },
  {
    label: "Resolve",
    icon: Scale,
    text: "Commercial disputes, tax objections, regulatory investigations, arbitration, and litigation.",
  },
  {
    label: "Grow",
    icon: Globe2,
    text: "Sector expansion across energy, healthcare, aviation, maritime, real estate, IT, and telecom.",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = pathwayItems[activeIndex];
  const ActiveIcon = activeItem.icon;

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-850 text-white">
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4.5, ease }}
        className="absolute inset-0 h-full w-full object-cover opacity-32"
        src="/assets/For%20Website%20Upgrade/QHM2-compressed.mp4"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,41,51,0.97),rgba(31,41,51,0.82),rgba(31,41,51,0.94))]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl content-end gap-8 px-5 pb-8 pt-32 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12 lg:px-10 lg:pb-12">
        <div className="border-t border-white/18 pt-8">
          <h1 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.94] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            <TextReveal delay={0.52}>{"Saudi Market\nEntry Command\nCenter"}</TextReveal>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.05, duration: 0.8, ease }}
            className="mt-7 max-w-xl text-sm font-light leading-7 text-white/64 sm:text-base sm:leading-8"
          >
            From market entry and corporate structuring to compliance, disputes, employment, tax, and sector regulation, QHM supports clients with practical bilingual legal advice.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.18, duration: 0.75, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <PremiumButton href="/contact" inverse>Contact QHM</PremiumButton>
            <PremiumButton href="/expertise" inverse>Explore Expertise</PremiumButton>
          </motion.div>
        </div>

        <div className="flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, x: 36, clipPath: "inset(0 0 0 18%)" }}
            animate={{ opacity: 1, x: 0, clipPath: "inset(0 0 0 0%)" }}
            transition={{ delay: 0.76, duration: 0.9, ease }}
            className="border border-white/16 bg-white/[0.04] backdrop-blur-md"
          >
            <div className="border-b border-white/12 p-4 sm:p-5">
              <p className="text-xs font-light uppercase text-white/45">Saudi Market Entry Command Center</p>
              <div className="mt-4 grid grid-cols-2 gap-px bg-white/12 sm:grid-cols-4">
                {["Jeddah HQ", "Riyadh Office", "Arabic", "English"].map((item) => (
                  <div key={item} className="bg-gray-850/70 px-3 py-2.5 text-[11px] font-light uppercase text-white/58">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-px bg-white/12 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="bg-gray-850/70">
                {pathwayItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                    className="group relative flex w-full items-center justify-between gap-4 border-b border-white/12 px-4 py-4 text-left last:border-b-0 sm:px-5"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="home3-command-active"
                          transition={{ duration: 0.35, ease }}
                          className="absolute inset-0 bg-white"
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-4">
                        <Icon size={18} className={isActive ? "text-gray-850" : "text-white/45 transition-colors group-hover:text-white"} />
                        <span className={isActive ? "text-sm font-light uppercase text-gray-850" : "text-sm font-light uppercase text-white/72 transition-colors group-hover:text-white"}>
                          {item.label}
                        </span>
                      </span>
                      <ArrowRight size={15} className={isActive ? "relative z-10 text-gray-850" : "relative z-10 -translate-x-2 text-white/0 transition-all group-hover:translate-x-0 group-hover:text-white/55"} />
                    </button>
                  );
                })}
              </div>

              <div className="flex min-h-[360px] flex-col justify-between bg-gray-850/70 p-7 sm:p-9">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.label}
                    initial={{ opacity: 0, y: 24, filter: "blur(12px)", clipPath: "inset(0 0 16% 0)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)", clipPath: "inset(0 0 0% 0)" }}
                    exit={{ opacity: 0, y: -16, filter: "blur(8px)", clipPath: "inset(0 0 12% 0)" }}
                    transition={{ duration: 0.45, ease }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center border border-white/18">
                      <ActiveIcon size={22} strokeWidth={1.5} />
                    </div>
                    <h2 className="mt-8 text-4xl font-semibold uppercase leading-[0.96] text-white sm:text-5xl">
                      {activeItem.label}
                    </h2>
                    <p className="mt-6 max-w-xl text-sm font-light leading-7 text-white/62 sm:text-base sm:leading-8">
                      {activeItem.text}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-10 border-t border-white/14 pt-5">
                  <div className="flex items-center gap-3 text-xs font-light uppercase text-white/45">
                    <MapPin size={14} />
                    Jeddah - Riyadh - Kingdom of Saudi Arabia
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
