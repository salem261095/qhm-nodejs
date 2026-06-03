"use client";

import { motion } from "framer-motion";
import { premiumEase, SplitReveal } from "./shared";

export default function HeroV2() {
  return (
    <section className="relative min-h-screen w-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/assets/vid/RyadhJeddah.mp4"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.48),rgba(0,0,0,0.68))]" />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.15, ease: premiumEase, delay: 0.15 }}
        className="absolute inset-0 z-20 origin-right bg-brand"
      />

      <div className="absolute inset-0 z-10">
        <div className="absolute bottom-20 left-0 right-0 mx-auto max-w-7xl px-6 text-left sm:bottom-24 sm:px-8 lg:bottom-28 lg:px-10">
          <h1 className="max-w-5xl select-none text-5xl font-thin uppercase leading-tight text-white sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem]">
            <SplitReveal delay={0.62}>
              {"Saudi Depth.\nGlobal Confidence."}
            </SplitReveal>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <span className="text-xs font-medium uppercase text-white/70">
            Jeddah · Riyadh
          </span>
        </motion.div>
      </div>
    </section>
  );
}
