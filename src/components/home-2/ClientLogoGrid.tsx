"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clientLogos } from "@/data/businessAssets";
import {
  editorialWipe,
  fadeIn,
  lineDraw,
  sectionReveal,
  ScrollTextReveal,
} from "./shared";

export default function ClientLogoGrid() {
  return (
    <section className="border-t border-brand bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.14 }}
          variants={sectionReveal}
        >
          <div className="relative mb-12 flex flex-col gap-5 pb-8 md:flex-row md:items-end md:justify-between">
            <motion.div
              variants={lineDraw}
              className="absolute bottom-0 left-0 h-px w-full origin-left bg-brand"
            />
            <div>
              <motion.p
                variants={editorialWipe}
                className="text-xs font-medium uppercase text-brand"
              >
                Client Portfolio
              </motion.p>
              <motion.h2
                variants={editorialWipe}
                custom={1}
                className="mt-3 text-4xl font-light leading-tight text-brand md:text-5xl"
              >
                <ScrollTextReveal>Representative Client Logos</ScrollTextReveal>
              </motion.h2>
            </div>
            <motion.p
              variants={editorialWipe}
              custom={2}
              className="max-w-md text-sm leading-7 text-brand"
            >
              A static overview designed for quick scanning and presentation-led
              credibility.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn}
            className="grid grid-cols-2 gap-px bg-brand sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          >
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo.src}
                variants={fadeIn}
                custom={index * 0.4}
                className="flex h-32 items-center justify-center bg-white px-6 transition-opacity duration-300 hover:opacity-80"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={170}
                  height={82}
                  className="max-h-16 w-auto max-w-full object-contain mix-blend-multiply"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
