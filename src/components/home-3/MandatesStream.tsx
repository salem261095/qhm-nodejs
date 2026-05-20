"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  representativeMandates,
  ease,
  revealItem,
  ScrollTextReveal,
  SectionLabel,
  SectionReveal,
} from "./shared";

const cardVariant = {
  hidden: { opacity: 0, y: 40, clipPath: "inset(0 0 22% 0)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { delay: i * 0.12, duration: 0.82, ease },
  }),
};

export default function MandatesStream() {
  return (
    <SectionReveal className="overflow-hidden bg-brand px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.div variants={revealItem}>
              <SectionLabel inverse>Institutional Proof</SectionLabel>
            </motion.div>
            <motion.h2
              variants={revealItem}
              className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-tight md:text-6xl"
            >
              <ScrollTextReveal>Selected Mandates</ScrollTextReveal>
            </motion.h2>
          </div>
          <motion.p
            variants={revealItem}
            className="max-w-md text-sm leading-7 text-white/75"
          >
            {representativeMandates.map((mandate) => mandate.category).join(" / ")}
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="flex gap-px overflow-x-auto bg-white/12 pb-px"
        >
          {representativeMandates.map((mandate, index) => (
            <motion.article
              key={mandate.title}
              variants={cardVariant}
              custom={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease }}
              className="group min-w-[82vw] border-t border-white/20 bg-brand p-7 transition-colors hover:border-white sm:min-w-[420px] lg:min-w-0 lg:flex-1"
            >
              <p className="text-xs font-medium uppercase text-white/70">{mandate.category}</p>
              <h3 className="mt-7 text-2xl font-light leading-tight text-white">{mandate.title}</h3>
              <p className="mt-5 text-sm leading-7 text-white/75">{mandate.description}</p>
              <ArrowUpRight
                size={18}
                className="mt-8 text-white/32 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
