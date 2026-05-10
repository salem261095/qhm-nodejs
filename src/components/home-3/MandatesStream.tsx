"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Search, X } from "lucide-react";
import { coreCompetencies, ease, footer, hero, homepageContent, industryFocus, navLinks, practiceAreas, representativeMandates, revealContainer, revealItem, teamHeadshots, ClipReveal, PremiumButton, ScrollTextReveal, SectionLabel, SectionReveal, TextReveal } from "./shared";
import { teamMembers } from "@/data/lawyers";

export default function MandatesStream() {
  return (
    <SectionReveal className="overflow-hidden bg-brand px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel inverse>Institutional Proof</SectionLabel>
            <motion.h2 variants={revealItem} className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-tight md:text-6xl">
              <ScrollTextReveal>Selected Mandates</ScrollTextReveal>
            </motion.h2>
          </div>
          <motion.p variants={revealItem} className="max-w-md text-sm leading-7 text-white/55">
            {representativeMandates.map((mandate) => mandate.category).join(" / ")}
          </motion.p>
        </div>

        <div className="flex gap-px overflow-x-auto bg-white/12 pb-px">
          {representativeMandates.map((mandate, index) => (
            <motion.article
              key={mandate.title}
              variants={revealItem}
              custom={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease }}
              className="group min-w-[82vw] border-t border-white/20 bg-brand p-7 transition-colors hover:border-white sm:min-w-[420px] lg:min-w-0 lg:flex-1"
            >
              <p className="text-xs font-light uppercase text-white/42">{mandate.category}</p>
              <h3 className="mt-7 text-2xl font-light leading-tight text-white">{mandate.title}</h3>
              <p className="mt-5 text-sm leading-7 text-white/55">{mandate.description}</p>
              <ArrowUpRight size={18} className="mt-8 text-white/32 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
