"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clientLogos } from "@/data/businessAssets";
import { revealItem, ScrollTextReveal, SectionLabel, SectionReveal } from "./shared";

const ribbonLogos = [...clientLogos, ...clientLogos];

export default function ClientLogoRibbon() {
  return (
    <SectionReveal className="overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.div variants={revealItem}>
              <SectionLabel>Client Portfolio</SectionLabel>
            </motion.div>
            <motion.h2
              variants={revealItem}
              className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-tight text-brand md:text-6xl"
            >
              <ScrollTextReveal>Trusted by Market Leaders</ScrollTextReveal>
            </motion.h2>
          </div>
          <motion.p
            variants={revealItem}
            className="max-w-md text-sm leading-7 text-black/55"
          >
            A cross-section of organizations that reflect the firm&apos;s work
            across Saudi and international business mandates.
          </motion.p>
        </div>
      </div>

      <motion.div
        variants={revealItem}
        className="relative -mx-5 overflow-hidden border-y border-brand bg-white py-7 sm:-mx-8 lg:-mx-10"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="client-logo-ribbon flex w-max items-center gap-px bg-brand">
          {ribbonLogos.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="flex h-28 w-48 shrink-0 items-center justify-center bg-white px-7"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={170}
                height={82}
                className="max-h-16 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </SectionReveal>
  );
}
