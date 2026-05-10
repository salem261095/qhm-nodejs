"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Search, X } from "lucide-react";
import { coreCompetencies, ease, footer, hero, homepageContent, industryFocus, navLinks, practiceAreas, representativeMandates, revealContainer, revealItem, teamHeadshots, ClipReveal, PremiumButton, ScrollTextReveal, SectionLabel, SectionReveal, TextReveal } from "./shared";
import { teamMembers } from "@/data/lawyers";

export default function VariantHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-brand/90 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Link href="/" className="block">
            <Image
              src="/logo/QHM_White.svg"
              alt="QHM Law Firm"
              width={160}
              height={108}
              className={`h-auto object-contain transition-all duration-300 ${scrolled ? "w-24 sm:w-28" : "w-28 sm:w-32"}`}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-light uppercase text-white/78 transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button className="flex h-10 w-10 items-center justify-center border border-white/25 text-white/75 transition-colors hover:border-white hover:text-white" aria-label="Search">
              <Search size={16} />
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-white/35 text-white lg:hidden"
            aria-label="Open menu"
          >
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.72, ease }}
            className="fixed inset-0 z-[60] flex flex-col bg-brand text-white"
          >
            <div className="flex items-center justify-between px-5 py-5 sm:px-8">
              <Image
                src="/logo/QHM_White.svg"
                alt="QHM Law Firm"
                width={150}
                height={101}
                className="h-auto w-28 object-contain"
              />
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center border border-white/35"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-7 px-6">
              {navLinks.map((link, index) => (
                <span key={link.href} className="overflow-hidden">
                  <motion.span
                    initial={{ y: "112%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.12 + index * 0.08, duration: 0.82, ease }}
                    className="block"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-5xl font-semibold uppercase text-white transition-colors hover:text-white/55 sm:text-6xl"
                    >
                      {link.label}
                    </Link>
                  </motion.span>
                </span>
              ))}
            </nav>
            <div className="flex items-center justify-between border-t border-white/15 px-6 py-6 text-xs font-light uppercase text-white/55">
              <span>Riyadh</span>
              <span>Jeddah</span>
              <span>QHM</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
