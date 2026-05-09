"use client";

import Link from "next/link";
import { homepageContent } from "@/data/homepage";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function IndustryFocus() {
  const { industryFocus } = homepageContent;

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden flex items-center min-h-[80vh]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/For%20Website%20Upgrade/QHM2-compressed.mp4"
      />
      <div className="absolute inset-0 bg-brand-solid/90 mix-blend-multiply z-10" />
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 flex flex-col justify-center"
          >
            <span className="text-white/70 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm block mb-6 border-l-2 border-white pl-4">
              Industry Focus
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
              Strategic Sector Expertise.
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
              Advising multinationals and tier-one enterprises across Saudi Arabia's most heavily regulated and rapidly evolving industries.
            </p>
          </motion.div>

          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {industryFocus.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={sector.href}
                    className="group block p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-12">
                      <span className="text-white/40 font-mono text-sm font-bold group-hover:text-white/80 transition-colors">
                        {sector.number}
                      </span>
                      <ArrowRight className="text-white/0 group-hover:text-white/100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300 w-5 h-5" />
                    </div>
                    <h3 className="text-white text-xl md:text-2xl font-bold group-hover:text-brand-300">
                      {sector.title}
                    </h3>
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
