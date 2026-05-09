"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, MapPin, Phone, Mail,
  Building2, Globe, Scale, Gavel, Users, Lightbulb, Zap, Shield
} from "lucide-react";
import { homepageContent } from "@/data/homepage";
import { teamMembers } from "@/data/lawyers";

const { hero, managingPartner, coreCompetencies, practiceAreas, industryFocus, representativeMandates, corporateEnquiryFields, newsletter } = homepageContent;

const practiceIcons: Record<string, React.ElementType> = {
  "Corporate & Commercial": Building2,
  "Joint Ventures & FDI": Globe,
  "Regulatory Advisory": Shield,
  "Dispute Resolution": Gavel,
  "Employment & Labor": Users,
  "IP & Technology": Lightbulb,
  "Tax & Zakat": Scale,
  "Sector Advisory": Zap,
};

const industryTicker = [...industryFocus, ...industryFocus];

const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeIn = {
  hidden: { opacity: 0, y: 34, clipPath: "inset(0 0 18% 0)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { delay: i * 0.08, duration: 0.9, ease: premiumEase },
  }),
};

const sectionReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

function SplitReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={className}>
      {children.split("\n").map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: delay + i * 0.14, duration: 1.05, ease: premiumEase }}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function ScrollTextReveal({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <span className={className}>
      {children.split("\n").map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            variants={{
              hidden: { y: "110%" },
              visible: {
                y: 0,
                transition: { delay: i * 0.08, duration: 0.9, ease: premiumEase },
              },
            }}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function SectionLabel({ children, inverse = false }: { children: string; inverse?: boolean }) {
  return (
    <motion.p
      variants={fadeIn}
      className={`text-xs font-light uppercase ${inverse ? "text-white/50" : "text-brand/60"}`}
    >
      {children}
    </motion.p>
  );
}

function PremiumButton({
  href,
  children,
  inverse = false,
}: {
  href: string;
  children: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-between gap-6 border px-6 py-3 text-xs font-light uppercase transition-all duration-300 ${
        inverse
          ? "border-white/40 text-white hover:border-white hover:bg-white hover:text-brand"
          : "border-brand/30 text-brand hover:border-brand hover:bg-brand hover:text-white"
      }`}
    >
      <span>{children}</span>
      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

const luxuryNavLinks = [
  { label: "Expertise", href: "/expertise" },
  { label: "Team", href: "/team" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const teamHeadshots = [
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/Qaisar.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/1a.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/2.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/3.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/4.jpg",
];

function HeroV2() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <section className="relative min-h-screen w-screen overflow-hidden">
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/assets/For%20Website%20Upgrade/QHM-compressed.mp4"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.48),rgba(0,0,0,0.68))]" />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.15, ease: premiumEase, delay: 0.15 }}
        className="absolute inset-0 z-20 origin-right bg-brand"
      />

      <div className="absolute inset-0 z-10 flex flex-col">

        <div className="flex items-center justify-between px-5 pt-5 sm:px-12 sm:pt-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: premiumEase }}
          >
            <Link href="/" className="block">
              <Image
                src="/logo/QHM_White.svg"
                alt="QHM Law Firm"
                width={180}
                height={122}
                className="h-auto w-24 object-contain sm:w-28 md:w-32"
                priority
              />
            </Link>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: premiumEase }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-12 w-12 flex-col items-center justify-center gap-[5px] border border-white/35 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-[18px] h-px bg-white origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-[18px] h-px bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-[18px] h-px bg-white origin-center"
            />
          </motion.button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <h1 className="mb-10 select-none text-5xl font-thin uppercase leading-tight text-white sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem]">
            <SplitReveal delay={0.62}>{hero.heading}</SplitReveal>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: premiumEase }}
          >
            <PremiumButton href="/contact" inverse>
              Request a Consultation
            </PremiumButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="pb-8 flex justify-center"
        >
          <span className="text-white/30 text-xs font-light uppercase">Jeddah · Riyadh</span>
        </motion.div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 1, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 1, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: premiumEase }}
            className="fixed inset-0 z-50 bg-brand flex flex-col"
          >
            <div className="flex items-center justify-between px-5 pt-5 sm:px-12 sm:pt-10">
              <Link href="/" onClick={() => setMenuOpen(false)} className="block">
                <Image
                  src="/logo/QHM_White.svg"
                  alt="QHM Law Firm"
                  width={180}
                  height={122}
                  className="h-auto w-24 object-contain sm:w-28 md:w-32"
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-12 w-12 flex-col items-center justify-center gap-[5px] border border-white/35 transition-colors hover:bg-white/10"
                aria-label="Close menu"
              >
                <span className="block w-[18px] h-px bg-white rotate-45 translate-y-[3px]" />
                <span className="block w-[18px] h-px bg-white -rotate-45 -translate-y-[3px]" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-center justify-center gap-10">
              {luxuryNavLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.18 + i * 0.1, duration: 0.8, ease: premiumEase }}
                  className="overflow-hidden"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-white font-thin text-5xl sm:text-6xl uppercase hover:text-white/50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="pb-10 flex justify-center">
              <span className="text-white/30 text-xs font-light uppercase">Jeddah · Riyadh · KSA</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PartnerV2() {
  return (
    <section className="bg-white py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionReveal}
            className="lg:w-2/5 py-20 lg:py-32 pr-0 lg:pr-20 border-b lg:border-b-0 lg:border-r border-brand/10"
          >
            <SectionLabel>Firm Leadership</SectionLabel>
            <motion.h2 variants={fadeIn} className="mt-6 mb-8 text-5xl font-light leading-tight text-brand md:text-6xl">
              <ScrollTextReveal>{managingPartner.name}</ScrollTextReveal>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-base text-brand/60 leading-relaxed mb-4">{managingPartner.bio}</motion.p>
            <motion.p variants={fadeIn} className="text-base text-brand/80 font-light leading-relaxed mb-10">{managingPartner.extendedBio}</motion.p>
            <motion.div variants={fadeIn}>
              <PremiumButton href={managingPartner.cta.href}>
              {managingPartner.cta.label}
              </PremiumButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.08, clipPath: "inset(8% 0 8% 0)" }}
            whileInView={{ opacity: 1, scale: 1, clipPath: "inset(0% 0 0% 0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: premiumEase }}
            className="lg:w-3/5 relative min-h-[500px] lg:min-h-0"
          >
            <Image
              src="/assets/For Website Upgrade/FinalHeadShotsForWebsite/Qaisar.jpg"
              alt={managingPartner.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.8, ease: premiumEase }}
              className="absolute bottom-8 right-8 bg-brand text-white px-6 py-4"
            >
              <p className="text-xs font-light uppercase text-white/60">{managingPartner.role}</p>
              <p className="text-lg font-light mt-0.5">{managingPartner.name}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CompetenciesV2() {
  return (
    <section className="py-24 bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={sectionReveal}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-white/20">
            <div>
              <SectionLabel inverse>Core Competencies</SectionLabel>
              <motion.h2 variants={fadeIn} className="mt-3 text-4xl md:text-5xl font-light leading-tight max-w-sm">
                <ScrollTextReveal>Why Counsel Chooses QHM</ScrollTextReveal>
              </motion.h2>
            </div>
            <motion.p variants={fadeIn} className="text-white/50 max-w-sm text-sm leading-relaxed">
              Partner-led delivery ensuring senior oversight on every mandate from day one.
            </motion.p>
          </div>

          <div className="divide-y divide-white/20">
            {coreCompetencies.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeIn}
                className="group flex flex-col md:flex-row md:items-center gap-6 py-10 hover:bg-white/5 transition-colors px-2"
              >
                <span className="text-6xl font-light text-white/10 group-hover:text-white/20 transition-colors w-24 flex-shrink-0 leading-none">
                  {item.number}
                </span>
                <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1">
                  <h3 className="text-xl font-light md:w-64 flex-shrink-0">{item.title}</h3>
                  <div className="hidden md:block w-px h-12 bg-white/20 flex-shrink-0" />
                  <p className="text-white/60 text-sm leading-relaxed flex-1">{item.description}</p>
                </div>
                <ArrowRight size={18} className="text-white/20 group-hover:text-white group-hover:translate-x-2 transition-all flex-shrink-0 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PracticeAreasV2() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={sectionReveal}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <SectionLabel>Practice Areas</SectionLabel>
              <motion.h2 variants={fadeIn} className="mt-3 text-4xl md:text-5xl font-light text-brand leading-tight">
                <ScrollTextReveal>Our Mandate</ScrollTextReveal>
              </motion.h2>
            </div>
            <motion.div variants={fadeIn}>
              <PremiumButton href="/expertise">All Practice Areas</PremiumButton>
            </motion.div>
          </div>

          <div className="divide-y divide-brand/10">
            {practiceAreas.map((area, i) => {
              const Icon = practiceIcons[area.title] ?? Scale;
              const isHovered = hovered === area.title;
              return (
                <motion.div
                  key={area.title}
                  custom={i}
                  variants={fadeIn}
                  onMouseEnter={() => setHovered(area.title)}
                  onMouseLeave={() => setHovered(null)}
                  className={`group flex items-center justify-between py-6 cursor-pointer transition-all ${isHovered ? "pl-4 bg-brand/5" : ""}`}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-light text-brand/20 group-hover:text-brand transition-colors w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className={`transition-colors flex-shrink-0 ${isHovered ? "text-brand" : "text-brand/30"}`}
                    />
                    <div>
                      <h3 className="text-lg font-light text-brand/80 group-hover:text-brand transition-colors">{area.title}</h3>
                      <AnimatePresence>
                        {isHovered && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm text-brand/60 mt-1 leading-relaxed"
                          >
                            {area.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <ArrowRight
                    size={18}
                    className={`flex-shrink-0 transition-all ${isHovered ? "text-brand translate-x-1" : "text-brand/20"}`}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VideoInterludeV2() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden bg-black text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="/assets/For%20Website%20Upgrade/QHM2-compressed.mp4"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.76),rgba(0,0,0,0.24),rgba(0,0,0,0.68))]" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionReveal}
        className="relative z-10 flex min-h-[82vh] items-end px-5 py-16 sm:px-12 lg:px-16"
      >
        <div className="max-w-4xl">
          <SectionLabel inverse>Saudi Depth. Global Confidence.</SectionLabel>
          <motion.h2 variants={fadeIn} className="mt-5 text-4xl font-thin uppercase leading-tight sm:text-6xl lg:text-7xl">
            <ScrollTextReveal>{"Precision in motion.\nCounsel built for momentum."}</ScrollTextReveal>
          </motion.h2>
          <motion.p variants={fadeIn} className="mt-8 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Complex mandates move through regulation, governance, tax, people, and disputes. QHM keeps those workstreams aligned with senior legal judgment at every stage.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

function IndustryV2() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-brand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={sectionReveal}
        >
          <SectionLabel>Sector Intelligence</SectionLabel>
          <motion.h2 variants={fadeIn} className="mt-3 text-4xl md:text-5xl font-light text-brand mb-14 leading-tight">
            <ScrollTextReveal>Industry Focus</ScrollTextReveal>
          </motion.h2>

          <motion.div variants={fadeIn} className="relative mb-16 min-h-[420px] overflow-hidden bg-brand">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              src="/assets/For%20Website%20Upgrade/QHM2-compressed.mp4"
            />
            <div className="absolute inset-0 bg-brand/40" />
            <div className="relative z-10 flex min-h-[420px] items-end p-8 sm:p-10 lg:p-14">
              <div className="max-w-2xl border border-white/20 bg-brand/75 p-8 text-white backdrop-blur-sm">
                <p className="text-xs font-light uppercase text-white/55">Industry Focus</p>
                <h3 className="mt-4 text-4xl font-light leading-tight">Strategic Sector Expertise.</h3>
                <p className="mt-5 text-sm leading-7 text-white/65">
                  Advising multinationals and tier-one enterprises across Saudi Arabia&apos;s most heavily regulated and rapidly evolving industries.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="relative overflow-hidden py-4 mb-16 bg-brand">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 whitespace-nowrap"
            >
              {industryTicker.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-4 text-sm font-light uppercase text-white/50">
                  <span className="w-1 h-1 bg-white/60 flex-shrink-0" />
                  {item.title}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand/10">
            {industryFocus.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeIn}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: premiumEase }}
                className="bg-white p-10 group hover:bg-brand hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <span className="text-xs font-light uppercase text-brand/30 group-hover:text-white/50 transition-colors">
                  {item.number}
                </span>
                <h3 className="text-2xl font-light text-brand group-hover:text-white mt-4 mb-4 transition-colors leading-tight">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-light uppercase text-brand group-hover:text-white/70 transition-colors mt-auto">
                  Explore <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MandatesV2() {
  return (
    <section className="py-24 bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={sectionReveal}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-white/20">
            <div>
              <SectionLabel inverse>Institutional Proof</SectionLabel>
              <motion.h2 variants={fadeIn} className="mt-3 text-4xl md:text-5xl font-light leading-tight">
                <ScrollTextReveal>Selected Mandates</ScrollTextReveal>
              </motion.h2>
            </div>
          </div>

          <div className="divide-y divide-white/20">
            {representativeMandates.map((m, i) => (
              <motion.div
                key={m.title}
                custom={i}
                variants={fadeIn}
                className="group grid md:grid-cols-12 gap-6 py-10 hover:bg-white/5 transition-colors px-2"
              >
                <div className="md:col-span-3">
                  <span className="text-xs font-light uppercase text-white/50">{m.category}</span>
                </div>
                <div className="md:col-span-7">
                  <h3 className="text-lg font-light text-white mb-3 leading-snug">{m.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{m.description}</p>
                </div>
                <div className="md:col-span-2 flex md:justify-end items-start">
                  <ArrowUpRight
                    size={18}
                    className="text-white/20 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TeamV2() {
  const featured = teamMembers[0];
  const roster = teamMembers.slice(1, 5);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={sectionReveal}
        >
          <div className="mb-14 flex flex-col gap-6 border-b border-brand/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>The Team</SectionLabel>
              <motion.h2 variants={fadeIn} className="mt-3 text-4xl font-light leading-tight text-brand md:text-5xl">
                <ScrollTextReveal>Team</ScrollTextReveal>
              </motion.h2>
            </div>
            <motion.p variants={fadeIn} className="max-w-md text-sm leading-relaxed text-brand/50">
              {teamMembers.slice(0, 4).map((member) => member.position).join(" / ")}
            </motion.p>
          </div>

          <div className="grid gap-px bg-brand/10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.article variants={fadeIn} className="grid bg-white lg:grid-cols-[0.45fr_0.55fr]">
              <div className="relative min-h-[420px] overflow-hidden bg-brand/5">
                <Image
                  src={teamHeadshots[0]}
                  alt={featured.name}
                  fill
                  className="object-cover object-[70%_center] grayscale transition duration-700 hover:grayscale-0"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div className="flex flex-col justify-end p-8 lg:p-10">
                <p className="text-xs font-light uppercase text-brand/50">{featured.position}</p>
                <h3 className="mt-4 text-4xl font-light leading-tight text-brand">{featured.name}</h3>
                <p className="mt-6 text-sm leading-7 text-brand/58">{featured.bio[0]}</p>
              </div>
            </motion.article>

            <div className="grid gap-px bg-brand/10 sm:grid-cols-2 lg:grid-cols-1">
              {roster.map((member, index) => (
                <motion.article
                  key={member.id}
                  variants={fadeIn}
                  custom={index}
                  className="group grid grid-cols-[96px_1fr] bg-white transition-colors hover:bg-brand hover:text-white"
                >
                  <div className="relative min-h-32 overflow-hidden bg-brand/5">
                    <Image
                      src={teamHeadshots[index + 1]}
                      alt={member.name}
                      fill
                      className="object-cover object-top grayscale transition duration-700 group-hover:grayscale-0"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-5">
                    <p className="text-xs font-light uppercase text-brand/45 transition-colors group-hover:text-white/45">{member.position}</p>
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

function EnquiryV2() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={sectionReveal}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          <motion.div
            variants={fadeIn}
          >
            <SectionLabel>Corporate Engagement</SectionLabel>
            <h2 className="mt-4 text-4xl md:text-5xl font-light text-brand leading-tight mb-6">
              <ScrollTextReveal>Discuss Your Mandate</ScrollTextReveal>
            </h2>
            <p className="text-brand/50 text-base leading-relaxed mb-10 max-w-md">
              We act exclusively for multinational corporations, financial institutions, and regional headquarters requiring precision, discretion, and commercial alignment.
            </p>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-3 text-brand/60">
                <Phone size={14} className="text-brand flex-shrink-0" /> +966 920029088
              </div>
              <div className="flex items-center gap-3 text-brand/60">
                <Mail size={14} className="text-brand flex-shrink-0" /> manager@qhmlawfirm.com
              </div>
              <div className="flex items-center gap-3 text-brand/60">
                <MapPin size={14} className="text-brand flex-shrink-0" /> Jeddah HQ · Riyadh Office
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
          >
            <form className="flex flex-col gap-5">
              {corporateEnquiryFields.map((field) =>
                field.type === "select" ? (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label className="text-xs font-light uppercase text-brand/50">{field.label}</label>
                    <select
                      name={field.name}
                      required={field.required}
                      className="border-b border-brand/20 py-3 text-sm text-brand bg-transparent focus:outline-none focus:border-brand transition-colors"
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options?.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                ) : (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label className="text-xs font-light uppercase text-brand/50">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="border-b border-brand/20 py-3 text-sm text-brand placeholder:text-brand/30 bg-transparent focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>
                )
              )}
              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-3 border border-brand bg-brand px-8 py-4 text-sm font-light uppercase text-white transition-all hover:bg-white hover:text-brand group"
              >
                Submit Enquiry
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function NewsletterV2() {
  return (
    <section className="bg-brand/5 border-t border-brand/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div>
            <SectionLabel>{newsletter.eyebrow}</SectionLabel>
            <motion.h2 variants={fadeIn} className="mt-3 text-3xl md:text-4xl font-light text-brand leading-tight whitespace-pre-line">
              <ScrollTextReveal>{newsletter.heading}</ScrollTextReveal>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-brand/50 mt-3 text-sm max-w-sm">{newsletter.description}</motion.p>
          </div>
          <motion.form variants={fadeIn} className="flex w-full md:w-auto gap-0 min-w-0 sm:min-w-[340px]">
            <input
              type="email"
              placeholder={newsletter.placeholder}
              className="flex-1 bg-white border border-brand/20 text-brand placeholder:text-brand/30 px-5 py-4 text-sm focus:outline-none focus:border-brand transition-colors"
            />
            <button
              type="submit"
              className="border border-brand bg-brand text-white px-6 py-4 text-xs font-light uppercase hover:bg-white hover:text-brand transition-colors flex-shrink-0"
            >
              {newsletter.submitLabel}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomeVariant2() {
  return (
    <main className="font-sans">
      <HeroV2 />
      <CompetenciesV2 />
      <PracticeAreasV2 />
      <IndustryV2 />
      <MandatesV2 />
      <TeamV2 />
      <EnquiryV2 />
    </main>
  );
}
