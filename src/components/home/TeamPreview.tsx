"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { teamMembers } from "@/data/lawyers";

const teamHeadshots = [
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/Qaisar.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/1a.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/2.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/3.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/4.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/5.jpg",
];

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function TeamPreview() {
  const featured = teamMembers[0];
  const roster = teamMembers.slice(1, 5);

  return (
    <section className="bg-gray-950 py-24 text-white lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <motion.span variants={fadeIn} className="mb-6 block text-xs font-bold uppercase tracking-[0.2em] text-brand">
              The Team
            </motion.span>
            <motion.h2 variants={fadeIn} className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Multi-disciplinary legal counsel with Saudi and international experience.
            </motion.h2>
          </div>
          <motion.p variants={fadeIn} className="max-w-lg text-lg font-light leading-relaxed text-white/60">
            {featured.bio[0]}
          </motion.p>
        </motion.div>

        <div className="grid gap-px bg-white/10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid bg-gray-950 md:grid-cols-[0.45fr_0.55fr]"
          >
            <div className="relative min-h-[420px] overflow-hidden bg-white/5">
              <Image
                src={teamHeadshots[0]}
                alt={featured.name}
                fill
                className="object-cover object-[70%_center] grayscale transition duration-700 hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="flex flex-col justify-end p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{featured.position}</p>
              <h3 className="mt-4 text-4xl font-extrabold leading-tight">{featured.name}</h3>
              <div className="mt-8 flex flex-wrap gap-2">
                {featured.practices.slice(0, 4).map((practice) => (
                  <span key={practice} className="border border-white/15 px-3 py-2 text-xs text-white/60">
                    {practice}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {roster.map((member, index) => (
              <motion.article
                key={member.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="group bg-gray-950"
              >
                <div className="relative h-72 overflow-hidden bg-white/5">
                  <Image
                    src={teamHeadshots[index + 1]}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale transition duration-700 group-hover:grayscale-0"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand">{member.position}</p>
                  <h3 className="mt-2 text-xl font-bold leading-tight">{member.name}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/team" className="inline-flex items-center gap-3 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-brand transition-colors hover:bg-brand hover:text-white">
            Meet Our Team
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
