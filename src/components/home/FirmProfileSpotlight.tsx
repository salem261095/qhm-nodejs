"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { firmProfile } from "@/data/businessAssets";
import {
  ease,
  revealItem,
  ScrollTextReveal,
  SectionLabel,
  SectionReveal,
} from "./shared";

export default function FirmProfileSpotlight() {
  return (
    <SectionReveal className="overflow-hidden bg-gray-850 px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
        <div>
          <motion.div variants={revealItem}>
            <SectionLabel inverse>Firm Profile</SectionLabel>
          </motion.div>
          <motion.h2
            variants={revealItem}
            className="mt-4 max-w-4xl text-4xl font-semibold uppercase leading-tight md:text-6xl"
          >
            <ScrollTextReveal>A Complete View of QHM</ScrollTextReveal>
          </motion.h2>
          <motion.p
            variants={revealItem}
            className="mt-7 max-w-2xl text-base leading-8 text-white/72"
          >
            Our latest firm profile brings together the firm overview, leadership,
            practice strengths, sector experience, and representative credentials
            in one business development reference.
          </motion.p>
          <motion.div
            variants={revealItem}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={firmProfile.pdf}
              download
              className="group inline-flex min-h-12 items-center justify-between gap-7 border border-white bg-white px-6 py-3 text-sm font-medium uppercase text-brand transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              <span>{firmProfile.cta}</span>
              <Download
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>

        <motion.a
          href={firmProfile.pdf}
          download
          variants={{
            hidden: { opacity: 0, y: 40, rotate: 0, clipPath: "inset(10% 0 10% 0)" },
            visible: {
              opacity: 1,
              y: 0,
              rotate: -2,
              clipPath: "inset(0% 0 0% 0)",
              transition: { duration: 0.95, ease },
            },
          }}
          whileHover={{ rotate: 0, y: -6 }}
          transition={{ duration: 0.35, ease }}
          className="group relative mx-auto block w-full max-w-[360px] border border-white/18 bg-white/8 p-3 shadow-2xl shadow-black/25"
          aria-label={firmProfile.cta}
        >
          <Image
            src={firmProfile.cover}
            alt="Front cover of the latest QHM Firm Profile"
            width={679}
            height={955}
            className="h-auto w-full object-cover"
            priority={false}
          />
          <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center bg-brand text-white transition-colors group-hover:bg-white group-hover:text-brand">
            <FileText size={19} strokeWidth={1.6} />
          </div>
        </motion.a>
      </div>
    </SectionReveal>
  );
}
