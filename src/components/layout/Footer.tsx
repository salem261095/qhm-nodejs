"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { homepageContent } from "@/data/homepage";

const { footer } = homepageContent;

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
      className="bg-brand border-t border-white/10 text-white px-5 py-12 sm:px-8 lg:px-10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.1, ease }}
          className="mb-10"
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

        <motion.div variants={revealItem} className="flex flex-wrap justify-center gap-6 md:gap-10 pb-12 w-full text-sm font-medium">
          <Link href="/about" className="text-white/75 hover:text-white transition-colors duration-300">
            About Us
          </Link>
          <Link href="/contact" className="text-white/75 hover:text-white transition-colors duration-300">
            Contact Us
          </Link>
          <a href="/assets/profile/QHM - Firm Profilev2.pdf" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-white transition-colors duration-300">
            Company Profile (PDF)
          </a>
          {footer.socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/75 hover:text-white transition-colors duration-300"
            >
              {social.label}
            </a>
          ))}
        </motion.div>

        <motion.div variants={revealItem} className="w-full">
          <div className="h-px w-full bg-white/10 animate-pulse" />
        </motion.div>

        <motion.div variants={revealItem} className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 text-xs text-white/50 w-full text-center md:text-left">
          <p>
            © {new Date().getFullYear()} {footer.firmName} All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
