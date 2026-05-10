"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Building2, Globe, Gavel, Lightbulb, Mail, MapPin, Phone, Scale, Shield, Users, Zap } from "lucide-react";
import { corporateEnquiryFields, coreCompetencies, fadeIn, hero, industryFocus, industryTicker, luxuryNavLinks, practiceAreas, practiceIcons, premiumEase, representativeMandates, sectionReveal, teamHeadshots, PremiumButton, ScrollTextReveal, SectionLabel, SplitReveal } from "./shared";
import { teamMembers } from "@/data/lawyers";

export default function HeroV2() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <section className="relative min-h-screen w-screen overflow-hidden">
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/assets/For%20Website%20Upgrade/QHM2-compressed.mp4"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.48),rgba(0,0,0,0.68))]" />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.15, ease: premiumEase, delay: 0.15 }}
        className="absolute inset-0 z-20 origin-right bg-brand"
      />

      <div className="absolute inset-0 z-10">

        <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-5 pt-5 sm:px-12 sm:pt-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: premiumEase }}
          >
            <Link href="/" className="block">
              <Image
                src="/logo/QHM_White.svg"
                alt="QHM Law Firm"
                width={180}
                height={122}
                className="h-auto w-24 object-contain sm:w-28 md:w-32"
                priority
              />
            </Link>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: premiumEase }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-12 w-12 flex-col items-center justify-center gap-[5px] border border-white/35 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-[18px] h-px bg-white origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-[18px] h-px bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-[18px] h-px bg-white origin-center"
            />
          </motion.button>
        </div>

        <div className="absolute bottom-20 left-0 right-0 px-5 text-left sm:bottom-24 sm:px-12 lg:bottom-28">
          <h1 className="max-w-5xl select-none text-5xl font-thin uppercase leading-tight text-white sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem]">
            <SplitReveal delay={0.62}>{"Saudi Depth.\nGlobal Confidence."}</SplitReveal>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <span className="text-white/30 text-xs font-light uppercase">Jeddah · Riyadh</span>
        </motion.div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 1, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 1, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: premiumEase }}
            className="fixed inset-0 z-50 bg-brand flex flex-col"
          >
            <div className="flex items-center justify-between px-5 pt-5 sm:px-12 sm:pt-10">
              <Link href="/" onClick={() => setMenuOpen(false)} className="block">
                <Image
                  src="/logo/QHM_White.svg"
                  alt="QHM Law Firm"
                  width={180}
                  height={122}
                  className="h-auto w-24 object-contain sm:w-28 md:w-32"
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-12 w-12 flex-col items-center justify-center gap-[5px] border border-white/35 transition-colors hover:bg-white/10"
                aria-label="Close menu"
              >
                <span className="block w-[18px] h-px bg-white rotate-45 translate-y-[3px]" />
                <span className="block w-[18px] h-px bg-white -rotate-45 -translate-y-[3px]" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-center justify-center gap-10">
              {luxuryNavLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.18 + i * 0.1, duration: 0.8, ease: premiumEase }}
                  className="overflow-hidden"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-white font-thin text-5xl sm:text-6xl uppercase hover:text-white/50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="pb-10 flex justify-center">
              <span className="text-white/30 text-xs font-light uppercase">Jeddah · Riyadh · KSA</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
