"use client";

import { homepageContent } from "@/data/homepage";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const reveal = {
  hidden: { opacity: 0, y: 28, clipPath: "inset(0 0 18% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.8, ease },
  },
};

export default function Newsletter() {
  const { newsletter } = homepageContent;

  return (
    <section className="bg-gray-850 py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div>
            <motion.h2 variants={reveal} className="mx-auto max-w-3xl whitespace-pre-line text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              {newsletter.heading}
            </motion.h2>
            <motion.p variants={reveal} className="mx-auto mt-7 max-w-2xl text-base font-light leading-8 text-white/62 md:text-lg">
              {newsletter.description}
            </motion.p>
          </div>

          <motion.div variants={reveal} className="mt-10">
            <form className="relative mx-auto w-full max-w-xl" onSubmit={(e) => e.preventDefault()}>
              <input
                id="newsletter-email"
                type="email"
                placeholder={newsletter.placeholder}
                required
                className="w-full border-b border-white/30 bg-transparent py-4 pr-14 text-center text-base font-light text-white outline-none transition-colors placeholder:text-white/35 focus:border-white sm:text-lg"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white/70 transition-colors hover:text-white"
                aria-label={newsletter.submitLabel}
              >
                <ArrowRight size={22} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
