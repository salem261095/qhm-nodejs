"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { homepageContent } from "@/data/homepage";

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

const reveal = {
  hidden: { opacity: 0, y: 28, filter: "blur(12px)", clipPath: "inset(0 0 14% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.78, ease },
  },
};

function TextReveal({ children }: { children: string }) {
  return (
    <>
      {children.split("\n").map((line, index) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            initial={{ y: "112%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.08 + index * 0.1, duration: 0.86, ease }}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </>
  );
}

export default function ContactPage() {
  const { corporateEnquiryFields, footer } = homepageContent;

  return (
    <main className="bg-white">
      <section className="border-b border-brand bg-bg-base px-5 pb-16 pt-24 sm:px-8 lg:px-10 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <h1 className="max-w-5xl text-6xl font-semibold uppercase leading-[0.9] text-brand sm:text-7xl lg:text-[8rem]">
              <TextReveal>{"Contact\nQHM"}</TextReveal>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.55, duration: 0.9, ease }}
              className="mt-8 h-px w-full max-w-xl origin-left bg-brand"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.26, duration: 0.82, ease }}
            className="max-w-xl text-base leading-8 text-black/58 lg:justify-self-end"
          >
            Engage our corporate team for strategic counsel on your commercial objectives in Saudi Arabia.
          </motion.p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-px bg-brand lg:grid-cols-[0.58fr_0.42fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={container}
            className="bg-white p-7 sm:p-10 lg:p-12"
          >
            <motion.h2 variants={reveal} className="text-4xl font-semibold uppercase leading-tight text-brand sm:text-5xl">
              Discuss Your Mandate
            </motion.h2>
            <motion.p variants={reveal} className="mt-5 max-w-2xl text-sm leading-7 text-black/55">
              For multinational corporations, institutional clients, and international law firms requiring trusted on-the-ground counsel in Saudi Arabia.
            </motion.p>

            <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {corporateEnquiryFields.map((field, index) => (
                <motion.div
                  key={field.name}
                  variants={reveal}
                  custom={index}
                  className={field.type === "email" || field.name === "matterType" ? "sm:col-span-2" : ""}
                >
                  <label className="text-xs font-medium uppercase text-brand">
                    {field.label} {field.required && "*"}
                  </label>
                  {field.type === "select" ? (
                    <select
                      defaultValue=""
                      className="mt-2 w-full border-b border-brand bg-transparent py-3 text-sm text-brand outline-none transition-colors focus:border-brand"
                    >
                      <option value="" disabled>
                        {field.placeholder}
                      </option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="mt-2 w-full border-b border-brand bg-transparent py-3 text-sm text-brand outline-none transition-colors placeholder:text-brand focus:border-brand"
                    />
                  )}
                </motion.div>
              ))}

              <motion.div variants={reveal} className="sm:col-span-2">
                <button
                  type="button"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-4 border border-brand bg-brand px-7 text-sm font-medium uppercase text-white transition-colors hover:bg-white hover:text-brand sm:w-auto"
                >
                  Submit Enquiry
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </div>
          </motion.div>

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={container}
            className="bg-gray-850 p-7 text-white sm:p-10 lg:p-12"
          >
            <motion.div variants={reveal} className="border-b border-white/14 pb-8">
              <h2 className="text-3xl font-semibold uppercase leading-tight">Firm Contact</h2>
              <div className="mt-8 space-y-5">
                <a href="tel:+966920029088" className="group flex items-center justify-between gap-5 text-white/70 transition-colors hover:text-white">
                  <span className="inline-flex items-center gap-3 text-sm">
                    <Phone size={16} />
                    +966 920029088
                  </span>
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a href="mailto:manager@qhmlawfirm.com" className="group flex items-center justify-between gap-5 text-white/70 transition-colors hover:text-white">
                  <span className="inline-flex items-center gap-3 text-sm">
                    <Mail size={16} />
                    manager@qhmlawfirm.com
                  </span>
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>

            <div className="mt-10 space-y-8">
              {footer.offices.map((office, index) => (
                <motion.article key={office.label} variants={reveal} custom={index} className="border border-white/14 p-6">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-2xl font-light leading-tight">{office.label}</h3>
                    <MapPin size={18} className="mt-1 text-white/45" />
                  </div>
                  <address className="mt-6 space-y-1 not-italic text-sm leading-7 text-white/58">
                    {office.address.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </address>
                  <Link href={office.mapHref} className="mt-6 inline-flex items-center gap-3 text-sm font-medium uppercase text-white/85 hover:text-white">
                    {office.mapLabel}
                    <ArrowUpRight size={15} />
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}
