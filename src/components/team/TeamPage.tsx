"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { teamMembers, type TeamMember } from "@/data/team";

const roles = ["All", "Leadership", "Counsel", "Associates", "Operations"] as const;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, clipPath: "inset(0 0 14% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.7, ease },
  },
};

function TextReveal({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <>
      {children.split("\n").map((line, index) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            initial={{ y: "112%" }}
            animate={{ y: 0 }}
            transition={{ delay: delay + index * 0.1, duration: 0.85, ease }}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </>
  );
}

function ScrollTextReveal({ children }: { children: string }) {
  return (
    <>
      {children.split("\n").map((line, index) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            variants={{
              hidden: { y: "112%" },
              visible: {
                y: 0,
                transition: { delay: index * 0.08, duration: 0.78, ease },
              },
            }}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </>
  );
}

function roleGroup(member: TeamMember): string[] {
  const role = member.role.toLowerCase();
  const groups: string[] = [];
  if (role.includes("partner") || role.includes("head")) groups.push("Leadership");
  if (role.includes("counsel")) groups.push("Counsel");
  if (role.includes("finance") || role.includes("marketing")) groups.push("Operations");
  if (groups.length === 0) groups.push("Associates");
  return groups;
}

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={item}
      layout
      className="flex"
    >
      <Link
        href={`/team/${member.id}`}
        className="group flex flex-1 min-h-[420px] flex-col bg-white text-left transition-colors hover:bg-brand hover:text-white"
      >
        <div className="relative h-72 overflow-hidden bg-brand/5">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="scale-[1.12] object-cover object-top grayscale transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute left-4 top-4 bg-white px-3 py-2 text-xs font-light text-brand transition-colors group-hover:bg-brand group-hover:text-white">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-light uppercase text-brand transition-colors group-hover:text-white/45">{member.role}</p>
          <div className="mt-4 flex items-start justify-between gap-5">
            <h3 className="text-2xl font-light leading-tight text-brand transition-colors group-hover:text-white">{member.name}</h3>
            <ArrowUpRight size={17} className="mt-1 shrink-0 text-brand transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
          </div>
          <div className="mt-auto pt-8 text-xs font-light uppercase text-black/36 transition-colors group-hover:text-white/45">
            {member.email || "\u00A0"}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function TeamPage() {
  const [activeRole, setActiveRole] = useState<(typeof roles)[number]>("All");

  const filteredMembers = teamMembers
    .filter((member) => activeRole === "All" || roleGroup(member).includes(activeRole));

  return (
    <main className="bg-white">
      <section className="border-b border-brand bg-bg-base px-5 pb-16 pt-24 sm:px-8 lg:px-10 lg:pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-end"
        >
          <div className="self-end">
            <motion.h1 className="max-w-5xl text-6xl font-semibold uppercase leading-[0.9] text-brand sm:text-7xl lg:text-[8rem]">
              <TextReveal>Our Team</TextReveal>
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.55, duration: 0.9, ease }}
              className="mt-8 h-px w-full max-w-xl origin-left bg-brand"
            />
          </div>

          <motion.div variants={item} className="max-w-xl self-end lg:justify-self-end">
            <p className="text-base leading-8 text-black/58">
              Our team consists of bilingual Saudi-qualified lawyers and experienced legal consultants who combine regulatory insight with commercial pragmatism.
            </p>
            <div className="mt-10 grid grid-cols-3 border border-brand text-center">
              <motion.div variants={item} className="border-r border-brand p-4">
                <p className="text-3xl font-semibold text-brand">{teamMembers.length}</p>
                <p className="mt-1 text-xs font-light uppercase text-black/42">People</p>
              </motion.div>
              <motion.div variants={item} className="border-r border-brand p-4">
                <p className="text-3xl font-semibold text-brand">2</p>
                <p className="mt-1 text-xs font-light uppercase text-black/42">Offices</p>
              </motion.div>
              <motion.div variants={item} className="p-4">
                <p className="text-3xl font-semibold text-brand">KSA</p>
                <p className="mt-1 text-xs font-light uppercase text-black/42">Market</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="border-t border-brand px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={container}
            className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.78fr] lg:items-end"
          >
            <div>
              <motion.p variants={item} className="text-xs font-light uppercase text-brand">Directory</motion.p>
              <motion.h2 variants={item} className="mt-4 text-4xl font-semibold uppercase leading-tight text-brand sm:text-5xl">
                <ScrollTextReveal>People Directory</ScrollTextReveal>
              </motion.h2>
            </div>
            <motion.div variants={item} className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-3 border border-brand bg-brand px-5 text-sm font-medium uppercase text-white transition-colors hover:bg-white hover:text-brand"
              >
                Contact
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="mb-8 flex gap-px overflow-x-auto bg-brand p-px">
            {roles.map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => setActiveRole(role)}
                className={`relative min-h-11 shrink-0 overflow-hidden bg-white px-5 text-xs font-medium uppercase transition-colors hover:bg-gray-200 ${
                  activeRole === role ? "text-white hover:text-white" : "text-brand hover:text-brand"
                }`}
              >
                {activeRole === role && (
                  <motion.span
                    layoutId="active-team-filter"
                    transition={{ duration: 0.35, ease }}
                    className="absolute inset-0 bg-brand"
                  />
                )}
                <span className="relative z-10">{role}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 18, transition: { duration: 0.2 } }}
              variants={container}
              layout
              className="grid gap-px bg-brand sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredMembers.map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredMembers.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border border-brand p-10 text-center text-sm text-black/50">
              No team members in this category.
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}

