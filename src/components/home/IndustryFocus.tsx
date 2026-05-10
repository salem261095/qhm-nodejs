"use client";

import Link from "next/link";
import { homepageContent } from "@/data/homepage";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const reveal = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)", clipPath: "inset(0 0 14% 0)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.72, delay, ease },
  }),
};

export default function IndustryFocus() {
  const { industryFocus } = homepageContent;

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black py-24 lg:py-32 flex items-end">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/For%20Website%20Upgrade/QHM-compressed.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/48 to-black/18 z-10" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-end border-t border-white/20 pt-10 lg:pt-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col justify-end"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={reveal}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-8"
            >
              Strategic Sector Expertise.
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={reveal}
              custom={0.1}
              className="text-white/80 text-lg md:text-xl font-light leading-relaxed"
            >
              Advising multinationals and tier-one enterprises across Saudi Arabia's most heavily regulated and rapidly evolving industries.
            </motion.p>
          </motion.div>

          <div className="w-full">
            <div className="border border-white/15 bg-black/42 backdrop-blur-sm">
              {industryFocus.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  style={{ filter: "blur(10px)" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={sector.href}
                    className="group grid min-h-24 grid-cols-[72px_1fr_40px] items-center border-b border-white/12 px-5 py-5 transition-colors duration-300 last:border-b-0 hover:bg-white hover:text-black sm:grid-cols-[96px_1fr_48px] sm:px-7"
                  >
                    <span className="font-mono text-sm font-bold text-white/38 transition-colors group-hover:text-black/35">
                      {sector.number}
                    </span>
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-black md:text-2xl">
                      {sector.title}
                    </h3>
                    <ArrowRight className="h-5 w-5 -translate-x-3 justify-self-end text-white/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-black" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
