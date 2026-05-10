"use client";

import Link from "next/link";
import { homepageContent } from "@/data/homepage";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function HeroSection() {
  const { hero } = homepageContent;

  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex flex-col justify-end px-4 pb-10 pt-20 sm:px-6 lg:px-8 lg:pb-14">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="mb-10 h-px w-full origin-left bg-brand/18"
          />

          <motion.h1
            initial={{ opacity: 0, y: 34, clipPath: "inset(0 0 18% 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.85, ease, delay: 0.18 }}
            className="max-w-4xl whitespace-pre-line text-5xl font-extrabold leading-[0.98] tracking-tight text-brand sm:text-6xl md:text-7xl lg:text-[5.8rem]"
          >
            {hero.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.34 }}
            className="mt-8 max-w-xl text-lg font-light leading-8 text-black/58 sm:text-xl"
          >
            {hero.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.48 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            {hero.ctas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className={`group inline-flex min-h-12 items-center justify-center gap-4 border px-6 text-sm font-bold uppercase transition-colors ${
                  cta.variant === "primary"
                    ? "border-brand bg-brand text-white hover:bg-white hover:text-brand"
                    : "border-brand/25 text-brand hover:border-brand hover:bg-brand hover:text-white"
                }`}
              >
                {cta.label}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 0 0 18%)", scale: 1.04 }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)", scale: 1 }}
          transition={{ duration: 1.05, ease, delay: 0.2 }}
          className="relative min-h-[54vh] overflow-hidden bg-gray-850 lg:min-h-[calc(100vh-5rem)]"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center"
            src="/assets/For%20Website%20Upgrade/QHM2-compressed.mp4"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(31,41,51,0.08), rgba(31,41,51,0.62))",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
