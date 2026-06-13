"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Check } from "lucide-react";
import { firmProfile } from "@/data/businessAssets";
import {
  editorialWipe,
  lineDraw,
  premiumEase,
  sectionReveal,
  ScrollTextReveal,
} from "./shared";

const highlights = [
  "Saudi Platform & Capabilities",
  "Core Practice Offerings",
  "Partner & Leadership Profiles",
  "Selected Representative Mandates"
];

export default function FirmProfileEditorial() {
  return (
    <section className="bg-bg-base py-24 border-t border-brand">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={sectionReveal}
          className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center"
        >
          <motion.div
            variants={editorialWipe}
            className="flex justify-center"
          >
            <a
              href={firmProfile.pdf}
              download
              className="group relative block w-full max-w-[320px] aspect-[1/1.4] overflow-hidden bg-brand shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              aria-label={firmProfile.cta}
            >
              <div className="absolute inset-0 bg-brand/5 transition-opacity duration-300 group-hover:opacity-0" />
              <Image
                src={firmProfile.cover}
                alt="Front cover of the latest QHM Firm Profile"
                width={679}
                height={955}
                className="h-full w-full object-cover border border-brand transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand shadow-lg">
                  <Download size={22} className="animate-pulse" />
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            variants={editorialWipe}
            custom={1}
            className="relative bg-white p-8 sm:p-12 border border-brand shadow-sm"
          >
            <motion.div
              variants={lineDraw}
              className="absolute left-8 right-8 top-8 h-px origin-left bg-brand sm:left-12 sm:right-12"
            />
            <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-brand">
              Business Development Asset
            </p>
            <h2 className="mt-5 text-4xl font-light leading-tight text-brand md:text-5xl">
              <ScrollTextReveal>Download QHM Firm Profile</ScrollTextReveal>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-black/60">
              A comprehensive guide detailing QHM&apos;s legal platform in Saudi Arabia, key practice capabilities, leadership credentials, and representative client mandates.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/5 text-brand">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-xs font-medium text-brand">{highlight}</span>
                </div>
              ))}
            </div>

            <a
              href={firmProfile.pdf}
              download
              className="group mt-10 inline-flex items-center justify-between gap-6 border border-brand bg-brand px-7 py-4 text-xs font-medium uppercase text-white transition-all duration-300 hover:bg-white hover:text-brand"
            >
              <span>{firmProfile.cta}</span>
              <Download
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

