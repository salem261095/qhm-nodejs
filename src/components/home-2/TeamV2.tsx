"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeIn,
  sectionReveal,
  teamHeadshots,
  PremiumButton,
  ScrollTextReveal,
  SectionLabel,
} from "./shared";
import { teamMembers } from "@/data/lawyers";

export default function TeamV2() {
  const featured = teamMembers[0];
  const roster = teamMembers.slice(1, 5);

  return (
    <section className="bg-bg-base py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={sectionReveal}
        >
          <div className="mb-14 flex flex-col gap-6 border-b border-brand pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>The Team</SectionLabel>
              <motion.h2 variants={fadeIn} className="mt-3 text-4xl font-light leading-tight text-brand md:text-5xl">
                <ScrollTextReveal>Team</ScrollTextReveal>
              </motion.h2>
            </div>
            <motion.p variants={fadeIn} className="max-w-md text-sm leading-relaxed text-brand">
              {teamMembers.slice(0, 4).map((member) => member.position).join(" / ")}
            </motion.p>
          </div>

          <div className="grid gap-px bg-brand lg:grid-cols-[1.2fr_0.8fr]">
            <motion.article variants={fadeIn} className="grid bg-white lg:grid-cols-[0.45fr_0.55fr]">
              <div className="relative min-h-[420px] overflow-hidden bg-brand">
                <Image
                  src={teamHeadshots[0]}
                  alt={featured.name}
                  fill
                  className="object-cover object-[70%_center] grayscale transition duration-700 hover:grayscale-0"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div className="flex flex-col justify-end p-8 lg:p-10">
                <p className="text-xs font-light uppercase text-brand">{featured.position}</p>
                <h3 className="mt-4 text-4xl font-light leading-tight text-brand">{featured.name}</h3>
                <p className="mt-6 text-sm leading-7 text-brand">{featured.bio[0]}</p>
              </div>
            </motion.article>

            <div className="grid gap-px bg-brand sm:grid-cols-2 lg:grid-cols-1">
              {roster.map((member, index) => (
                <motion.article
                  key={member.id}
                  variants={fadeIn}
                  custom={index}
                  className="group grid grid-cols-[96px_1fr] bg-white transition-colors hover:bg-brand hover:text-white"
                >
                  <div className="relative min-h-32 overflow-hidden bg-brand">
                    <Image
                      src={teamHeadshots[index + 1]}
                      alt={member.name}
                      fill
                      className="object-cover object-top grayscale transition duration-700 group-hover:grayscale-0"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-5">
                    <p className="text-xs font-light uppercase text-brand transition-colors group-hover:text-white/45">{member.position}</p>
                    <h3 className="mt-2 text-xl font-light leading-tight text-brand transition-colors group-hover:text-white">{member.name}</h3>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div variants={fadeIn} className="mt-10">
            <PremiumButton href="/team">Meet Our Team</PremiumButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
