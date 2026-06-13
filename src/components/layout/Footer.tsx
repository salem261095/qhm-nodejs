"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { homepageContent } from "@/data/homepage";

const { footer, practiceAreas } = homepageContent;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={revealContainer}
      className="bg-brand border-t border-white/10 text-white px-5 py-16 sm:px-8 lg:px-10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.1, ease }}
          className="mb-14"
        >
          <Link href="/" className="inline-block">
            <Image
              src="/assets/identity/QHM_White.svg"
              alt="QHM Law Firm"
              width={180}
              height={120}
              className="h-auto w-44 md:w-48 object-contain"
            />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 w-full">
          <motion.div variants={revealItem} className="flex flex-col gap-4 text-center md:text-left">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              About
            </h4>
            <p className="text-sm leading-7 text-white/70 max-w-xs mx-auto md:mx-0">
              {footer.description}
            </p>
            <div className="flex gap-4 mt-2 justify-center md:justify-start">
              {footer.socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-xs uppercase tracking-wider text-white/50 hover:text-white hover:underline transition-all duration-300"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={revealItem} className="flex flex-col gap-4 text-center md:text-left">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Expertise
            </h4>
            <nav className="flex flex-col gap-3 items-center md:items-start">
              {practiceAreas.slice(0, 5).map((area) => (
                <Link
                  key={area.title}
                  href={area.href}
                  className="text-sm text-white/75 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-flex items-center gap-1 group"
                >
                  <span>{area.title}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={revealItem} className="flex flex-col gap-5 md:col-span-2 text-center md:text-left">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Our Offices
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {footer.offices.map((office) => (
                <div key={office.label} className="text-sm">
                  <h5 className="font-semibold text-white mb-1.5">{office.label}</h5>
                  <address className="not-italic text-white/65 space-y-1 text-xs leading-relaxed">
                    {office.address.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </address>
                  <Link
                    href={office.mapHref}
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-white/50 hover:text-white transition-colors duration-300 mt-2 justify-center md:justify-start"
                  >
                    <span>{office.mapLabel}</span>
                    <ArrowUpRight size={10} />
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={revealItem} className="w-full">
          <div className="h-px w-full bg-white/10 animate-pulse" />
        </motion.div>

        <motion.div variants={revealItem} className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 text-xs text-white/50 w-full text-center md:text-left">
          <p>
            © {new Date().getFullYear()} {footer.firmName} All rights reserved.
          </p>
          <div className="flex gap-6 justify-center md:justify-end">
            <Link href="/privacy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-300">
              Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors duration-300">
              Disclaimer
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
