"use client";

import Link from "next/link";
import { homepageContent } from "@/data/homepage";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { hero } = homepageContent;

  return (
    <section className="relative w-full h-[100vh] min-h-[800px] flex flex-col justify-end pb-12 sm:pb-24 overflow-hidden">
      
      
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
          src="/assets/For%20Website%20Upgrade/QHM-compressed.mp4"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent h-full"></div>
      </div>
      
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full border-t border-white/20 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7"
          >
            <span className="block text-white/80 text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-6 sm:mb-8 flex items-center gap-4">
              <span className="w-12 h-px bg-brand"></span>
              {hero.eyebrow}
            </span>
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-extrabold leading-[1.05] tracking-tight whitespace-pre-line drop-shadow-2xl">
              {hero.heading}
            </h1>
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="lg:col-span-5 lg:pl-8 border-l-0 lg:border-l border-white/20"
          >
            <p className="text-white/90 text-lg sm:text-xl font-light mb-10 leading-relaxed drop-shadow-md">
              {hero.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {hero.ctas.map((cta, index) => (
                <Link
                  key={index}
                  href={cta.href}
                  className={`px-8 py-4 text-xs font-bold text-center tracking-[0.15em] uppercase transition-all duration-300 w-full sm:w-auto ${
                    cta.variant === "primary"
                      ? "bg-brand text-white hover:bg-white hover:text-brand shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                      : "backdrop-blur-sm bg-white/10 border border-white/30 text-white hover:bg-white/20"
                  }`}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
