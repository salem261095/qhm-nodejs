"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { aboutData } from "@/data/about";

const { hero, intro, strategicFocus, methodology, positioning, leadership } = aboutData;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.05,
    },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(12px)", clipPath: "inset(0 0 14% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.82, ease },
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
            transition={{ delay: delay + index * 0.1, duration: 0.88, ease }}
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
                transition: { delay: index * 0.08, duration: 0.82, ease },
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

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-brand/12 px-5 pb-16 pt-24 sm:px-8 lg:px-10 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-light uppercase text-brand/55">{hero.eyebrow}</p>
            <h1 className="max-w-5xl text-6xl font-semibold uppercase leading-[0.9] text-brand sm:text-7xl lg:text-[8rem]">
              <TextReveal delay={0.08}>{hero.heading}</TextReveal>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.55, duration: 0.9, ease }}
              className="mt-8 h-px w-full max-w-xl origin-left bg-brand/16"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.26, duration: 0.82, ease }}
            className="max-w-xl lg:justify-self-end"
          >
            <p className="text-base leading-8 text-black/58">{hero.subheading}</p>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={container}
        className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <motion.p variants={reveal} className="text-xs font-light uppercase text-brand/55">
              {intro.label}
            </motion.p>
            <motion.h2 variants={reveal} className="mt-4 max-w-2xl text-4xl font-semibold uppercase leading-tight text-brand sm:text-5xl">
              <ScrollTextReveal>Saudi Corporate Law Firm</ScrollTextReveal>
            </motion.h2>
          </div>

          <motion.div variants={container} className="grid gap-px bg-brand/12">
            <motion.article variants={reveal} className="bg-white p-7 sm:p-8">
              <p className="text-base leading-8 text-black/58">{intro.body}</p>
            </motion.article>
            <motion.article variants={reveal} className="bg-white p-7 sm:p-8">
              <p className="text-sm leading-7 text-black/52">{strategicFocus.intro}</p>
            </motion.article>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        variants={container}
        className="border-t border-brand/12 px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <motion.p variants={reveal} className="text-xs font-light uppercase text-brand/55">
                {strategicFocus.label}
              </motion.p>
              <motion.h2 variants={reveal} className="mt-4 max-w-2xl text-4xl font-semibold uppercase leading-tight text-brand sm:text-5xl">
                <ScrollTextReveal>Strategic Advisory Focus</ScrollTextReveal>
              </motion.h2>
            </div>
          </div>

          <motion.div variants={container} className="grid gap-px bg-brand/12 sm:grid-cols-2 lg:grid-cols-3">
            {strategicFocus.pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                variants={reveal}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease }}
                className="group flex min-h-[230px] flex-col bg-white p-6 transition-colors hover:bg-brand hover:text-white sm:p-7"
              >
                <span className="font-mono text-xs text-brand/30 transition-colors group-hover:text-white/42">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 text-2xl font-light leading-tight text-brand transition-colors group-hover:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-black/52 transition-colors group-hover:text-white/62">
                  {pillar.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={container}
        className="bg-gray-850 px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <motion.p variants={reveal} className="text-xs font-light uppercase text-white/45">
              {methodology.label}
            </motion.p>
            <motion.h2 variants={reveal} className="mt-4 max-w-2xl text-4xl font-semibold uppercase leading-tight text-white sm:text-5xl">
              <ScrollTextReveal>{methodology.heading}</ScrollTextReveal>
            </motion.h2>
          </div>

          <motion.div variants={container} className="grid gap-px bg-white/14">
            {methodology.pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                variants={reveal}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3, ease }}
                className="group grid gap-6 bg-gray-850 p-6 transition-colors hover:bg-white hover:text-brand sm:grid-cols-[0.16fr_0.84fr] sm:p-7"
              >
                <span className="font-mono text-xs text-white/35 transition-colors group-hover:text-brand/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-light leading-tight text-white transition-colors group-hover:text-brand">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/58 transition-colors group-hover:text-black/58">
                    {pillar.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        variants={container}
        className="border-b border-brand/12 px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <motion.p variants={reveal} className="text-xs font-light uppercase text-brand/55">
                {positioning.label}
              </motion.p>
              <motion.h2 variants={reveal} className="mt-4 text-4xl font-semibold uppercase leading-tight text-brand sm:text-5xl">
                <ScrollTextReveal>{positioning.heading}</ScrollTextReveal>
              </motion.h2>
            </div>
          </div>

          <motion.div variants={container} className="grid gap-px bg-brand/12 md:grid-cols-3">
            {positioning.pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                variants={reveal}
                className="group flex min-h-[360px] flex-col bg-white p-7 transition-colors hover:bg-brand hover:text-white sm:p-8"
              >
                <span className="font-mono text-xs text-brand/30 transition-colors group-hover:text-white/42">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-12 text-3xl font-light leading-tight text-brand transition-colors group-hover:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-black/52 transition-colors group-hover:text-white/62">
                  {pillar.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-px bg-brand/12 lg:grid-cols-[0.48fr_0.52fr]">
          <motion.div
            initial={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.86, ease }}
            className="relative min-h-[520px] bg-brand/5"
          >
            <Image
              src={leadership.image}
              alt={leadership.name}
              fill
              className="object-cover object-top grayscale"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={container}
            className="flex min-h-[520px] flex-col justify-between bg-white p-7 sm:p-10 lg:p-12"
          >
            <div>
              <motion.p variants={reveal} className="text-xs font-light uppercase text-brand/55">
                {leadership.label}
              </motion.p>
              <motion.h2 variants={reveal} className="mt-4 text-4xl font-semibold uppercase leading-tight text-brand sm:text-5xl">
                <ScrollTextReveal>{leadership.name}</ScrollTextReveal>
              </motion.h2>
              <motion.p variants={reveal} className="mt-5 text-sm font-medium uppercase text-brand/60">
                {leadership.role}
              </motion.p>
              <motion.p variants={reveal} className="mt-8 max-w-xl text-base leading-8 text-black/58">
                {leadership.bio}
              </motion.p>
            </div>

            <motion.div variants={reveal} className="mt-12">
              <Link
                href="/team"
                className="group inline-flex min-h-12 items-center gap-4 border border-brand bg-brand px-6 text-sm font-medium uppercase text-white transition-colors hover:bg-white hover:text-brand"
              >
                Meet The Team
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-850 px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <motion.p variants={reveal} className="text-xs font-light uppercase text-white/45">
              Next Step
            </motion.p>
            <motion.h2 variants={reveal} className="mt-4 text-4xl font-semibold uppercase leading-tight md:text-6xl">
              <ScrollTextReveal>Ready to Engage QHM?</ScrollTextReveal>
            </motion.h2>
            <motion.p variants={reveal} className="mt-5 max-w-xl text-sm leading-7 text-white/58">
              Partner-level access from the first conversation.
            </motion.p>
          </div>
          <motion.div variants={reveal}>
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center gap-4 border border-white bg-white px-6 text-sm font-medium uppercase text-gray-850 transition-colors hover:bg-gray-850 hover:text-white"
            >
              Submit Enquiry
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
