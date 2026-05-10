"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Search, X } from "lucide-react";
import { coreCompetencies, ease, footer, hero, homepageContent, industryFocus, navLinks, practiceAreas, representativeMandates, revealContainer, revealItem, teamHeadshots, ClipReveal, PremiumButton, ScrollTextReveal, SectionLabel, SectionReveal, TextReveal } from "./shared";
import { teamMembers } from "@/data/lawyers";

export default function VariantFooter() {
  return (
    <footer className="bg-brand px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center border-t border-white/15 pt-10 text-center">
        <Image src="/logo/QHM_White.svg" alt="QHM Law Firm" width={150} height={101} className="h-auto w-28 object-contain" />
        <p className="mt-7 text-xs font-light uppercase text-white/42">{footer.firmName}</p>
        <p className="mt-3 text-sm leading-7 text-white/55">{footer.description}</p>
        <Link href="/about" className="mt-6 inline-flex items-center gap-3 text-sm font-light uppercase text-white/70 hover:text-white">
          About Us
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </footer>
  );
}
