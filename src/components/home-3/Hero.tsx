"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { ease, PremiumButton, TextReveal } from "./shared";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand text-white">
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4.5, ease }}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.55 }}
        src="/assets/vid/RyadhJeddah.mp4"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(25,57,138,0.72)_0%,rgba(25,57,138,0.38)_60%,rgba(25,57,138,0.58)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 lg:px-10 lg:pb-20">
        <div className="max-w-5xl border-t border-white/20 pt-10">
          <h1 className="text-4xl font-semibold uppercase leading-[0.94] text-white sm:text-5xl lg:text-6xl xl:text-[5.5rem]">
            <TextReveal delay={0.4}>
              {"Saudi Depth.\nGlobal Confidence."}
            </TextReveal>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.95, duration: 0.8, ease }}
            className="mt-8 max-w-2xl text-base font-normal leading-8 text-white/88"
          >
            Independent. Saudi-based. Internationally experienced. From market
            entry and corporate structuring to compliance, disputes, and sector
            regulation - QHM delivers partner-led bilingual legal counsel.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.1, duration: 0.75, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-between gap-7 border border-white bg-white px-6 py-3 text-sm font-medium uppercase text-brand transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              <span>Contact QHM</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <PremiumButton href="/expertise" inverse>
              Explore Expertise
            </PremiumButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6, ease }}
            className="mt-14 flex items-center gap-3 text-xs font-medium uppercase text-white/70"
          >
            <MapPin size={13} />
            Jeddah Headquarters - Riyadh Office - Kingdom of Saudi Arabia
          </motion.div>
        </div>
      </div>
    </section>
  );
}
