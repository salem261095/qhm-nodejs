"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Search, X } from "lucide-react";
import { coreCompetencies, ease, footer, hero, homepageContent, industryFocus, navLinks, practiceAreas, representativeMandates, revealContainer, revealItem, teamHeadshots, ClipReveal, PremiumButton, ScrollTextReveal, SectionLabel, SectionReveal, TextReveal } from "./shared";
import { teamMembers } from "@/data/lawyers";

export default function OfficesAndCta() {
  return (
    <SectionReveal className="bg-white px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-px bg-brand/16 lg:grid-cols-2">
          {footer.offices.map((office, index) => (
            <motion.article
              key={office.label}
              variants={{
                hidden: { opacity: 0, x: index === 0 ? -42 : 42, clipPath: "inset(0 10% 0 10%)" },
                visible: {
                  opacity: 1,
                  x: 0,
                  clipPath: "inset(0 0% 0 0%)",
                  transition: { duration: 0.9, ease },
                },
              }}
              className="bg-white p-8 md:p-10"
            >
              <div className="flex items-start justify-between gap-8">
                <div>
                  <p className="text-xs font-light uppercase text-brand/55">Office</p>
                  <h3 className="mt-3 text-4xl font-semibold text-brand">{office.label}</h3>
                </div>
                <MapPin className="mt-1 text-brand/45" size={22} />
              </div>
              <address className="mt-10 space-y-2 not-italic text-sm leading-7 text-black/58">
                {office.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
              <Link href={office.mapHref} className="mt-9 inline-flex items-center gap-3 text-sm font-light uppercase text-brand">
                {office.mapLabel}
                <ArrowUpRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div variants={revealItem} className="mt-px bg-brand px-8 py-14 text-white md:px-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-light uppercase text-white/48">Corporate Engagement</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold uppercase leading-tight md:text-6xl">
                <ScrollTextReveal>{footer.firmName}</ScrollTextReveal>
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PremiumButton href={homepageContent.headerCta.href} inverse>{homepageContent.headerCta.label}</PremiumButton>
              <PremiumButton href="/expertise" inverse>Expertise</PremiumButton>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
