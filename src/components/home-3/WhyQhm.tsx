"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Search, X } from "lucide-react";
import { coreCompetencies, ease, footer, hero, homepageContent, industryFocus, navLinks, practiceAreas, representativeMandates, revealContainer, revealItem, teamHeadshots, ClipReveal, PremiumButton, ScrollTextReveal, SectionLabel, SectionReveal, TextReveal } from "./shared";
import { teamMembers } from "@/data/lawyers";

export default function WhyQhm() {
  return (
    <SectionReveal className="bg-white px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Core Competencies</SectionLabel>
        <motion.h2 variants={revealItem} className="mt-4 max-w-4xl text-4xl font-semibold uppercase leading-tight text-brand md:text-6xl">
          <ScrollTextReveal>Why Counsel Chooses QHM</ScrollTextReveal>
        </motion.h2>
        <div className="mt-14 grid gap-px bg-brand/16 md:grid-cols-2 lg:grid-cols-4">
          {coreCompetencies.map((item, index) => (
            <motion.article
              key={item.title}
              variants={revealItem}
              custom={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease }}
              className="group min-h-[330px] bg-white p-7 transition-colors hover:bg-brand hover:text-white"
            >
              <p className="text-5xl font-thin text-brand/22 transition-colors group-hover:text-white/25">{item.number}</p>
              <h3 className="mt-10 text-2xl font-light leading-tight text-brand transition-colors group-hover:text-white">{item.title}</h3>
              <p className="mt-5 text-sm leading-7 text-black/55 transition-colors group-hover:text-white/62">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
