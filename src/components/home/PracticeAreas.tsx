"use client";

import Link from "next/link";
import { homepageContent } from "@/data/homepage";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

export default function PracticeAreas() {
  const { practiceAreas } = homepageContent;

  return (
    <section className="py-24 lg:py-40 bg-gray-850 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 max-w-4xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={reveal}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8"
          >
            High-value corporate mandates requiring regulatory precision.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={reveal}
            custom={0.1}
            className="text-gray-400 text-lg md:text-xl font-light leading-relaxed"
          >
            Our practice areas are structured around the needs of multinational corporations operating in or entering Saudi Arabia. We focus on mandates requiring strategic execution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10">
          {practiceAreas.map((area, index) => {
            const number = (index + 1).toString().padStart(2, "0");
            
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={reveal}
                custom={index * 0.08}
              >
                <Link
                  href={area.href}
                  className="group relative bg-gray-850 p-8 sm:p-10 min-h-[320px] flex flex-col justify-end overflow-hidden transition-all duration-500 hover:bg-brand"
                >
                  <div className="absolute top-6 right-8 text-7xl font-bold text-white/[0.03] group-hover:text-white/[0.15] transition-colors duration-500 pointer-events-none select-none font-mono">
                    {number}
                  </div>
                  
                  <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto">
                      {area.description}
                    </p>
                    
                    <div className="flex items-center text-white/50 group-hover:text-white transition-colors">
                      <span className="text-xs font-bold tracking-[0.2em] uppercase mr-3">Explore</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
