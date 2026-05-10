"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Search, X } from "lucide-react";
import { coreCompetencies, ease, footer, hero, homepageContent, industryFocus, navLinks, practiceAreas, representativeMandates, revealContainer, revealItem, teamHeadshots, ClipReveal, PremiumButton, ScrollTextReveal, SectionLabel, SectionReveal, TextReveal } from "./shared";
import { teamMembers } from "@/data/lawyers";

export default function TeamSection() {
  const featuredMember = teamMembers[0];
  const rosterMembers = teamMembers.slice(1, 9);

  return (
    <SectionReveal className="bg-brand px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <SectionLabel inverse>Our Team</SectionLabel>
            <motion.h2 variants={revealItem} className="mt-4 text-4xl font-semibold uppercase leading-tight md:text-6xl">
              <ScrollTextReveal>Team</ScrollTextReveal>
            </motion.h2>
          </div>
          <motion.p variants={revealItem} className="max-w-2xl text-base leading-8 text-white/58">
            {teamMembers.slice(0, 4).map((member) => member.position).join(" / ")}
          </motion.p>
        </div>

        <div className="grid gap-px bg-white/14">
          <motion.article variants={revealItem} className="grid bg-brand lg:grid-cols-[0.46fr_0.54fr]">
            <div className="relative min-h-[360px] overflow-hidden bg-white/5 sm:min-h-[480px] lg:min-h-[620px]">
              <Image
                src={teamHeadshots[0]}
                alt={featuredMember.name}
                fill
                className="object-cover object-[68%_center] grayscale transition duration-700 hover:grayscale-0 lg:object-[72%_center]"
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
            </div>
            <div className="flex min-h-[360px] flex-col justify-end p-7 md:p-10 lg:p-14">
              <p className="text-xs font-light uppercase text-white/42">{featuredMember.position}</p>
              <h3 className="mt-4 max-w-2xl text-5xl font-semibold leading-tight text-white md:text-6xl">{featuredMember.name}</h3>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/56 md:text-base md:leading-8">
                {featuredMember.bio[0]}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {featuredMember.practices.slice(0, 4).map((practice) => (
                  <span key={practice} className="border border-white/16 px-3 py-2 text-xs font-light text-white/58">
                    {practice}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="grid gap-px bg-white/14 sm:grid-cols-2 lg:grid-cols-4">
            {rosterMembers.map((member, index) => (
              <motion.article
                key={member.id}
                variants={revealItem}
                custom={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease }}
                className="group bg-brand transition-colors hover:bg-white hover:text-brand"
              >
                <div className="relative h-72 overflow-hidden bg-white/5">
                  <Image
                    src={teamHeadshots[index + 1]}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale transition duration-700 group-hover:grayscale-0"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 26vw"
                  />
                  <div className="absolute inset-0 bg-brand/30 transition-opacity group-hover:opacity-0" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-light uppercase text-white/40 transition-colors group-hover:text-brand/52">{member.position}</p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-light leading-tight text-white transition-colors group-hover:text-brand">{member.name}</h3>
                    <ArrowUpRight size={17} className="mt-1 text-white/32 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand" />
                  </div>
                  {member.practices.length > 0 && (
                    <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/48 transition-colors group-hover:text-black/52">
                      {member.practices.slice(0, 3).join(" / ")}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div variants={revealItem} className="mt-10 flex flex-col gap-5 border border-white/14 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-white/55">
            {teamMembers.map((member) => member.name).join(" / ")}
          </p>
          <PremiumButton href="/team" inverse>Meet Our Team</PremiumButton>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
