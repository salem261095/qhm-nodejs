"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Search, X } from "lucide-react";
import { homepageContent } from "@/data/homepage";
import { teamMembers } from "@/data/lawyers";
import { publicationsData } from "@/data/publications";

const {
  hero,
  coreCompetencies,
  practiceAreas,
  industryFocus,
  representativeMandates,
  newsletter,
  footer,
} = homepageContent;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 34, clipPath: "inset(0 0 18% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.85, ease },
  },
};

const navLinks = [
  { label: "Expertise", href: "/expertise" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const teamHeadshots = [
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/Qaisar.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/1a.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/2.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/3.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/4.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/5.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/6a.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/7a.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/8.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/9a.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/11a.jpg",
  "/assets/For Website Upgrade/FinalHeadShotsForWebsite/12.jpg",
];

function TextReveal({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <>
      {children.split("\n").map((line, index) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            initial={{ y: "112%" }}
            animate={{ y: 0 }}
            transition={{ delay: delay + index * 0.12, duration: 1, ease }}
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
                transition: { delay: index * 0.08, duration: 0.9, ease },
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

function ClipReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={revealItem}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={revealContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function SectionLabel({ children, inverse = false }: { children: string; inverse?: boolean }) {
  return (
    <motion.p
      variants={revealItem}
      className={`text-xs font-light uppercase ${inverse ? "text-white/55" : "text-brand/65"}`}
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
      className={`group inline-flex min-h-12 items-center justify-between gap-7 border px-6 py-3 text-sm font-light uppercase transition-all duration-300 ${
        inverse
          ? "border-white/45 text-white hover:border-white hover:bg-white hover:text-brand"
          : "border-brand/35 text-brand hover:border-brand hover:bg-brand hover:text-white"
      }`}
    >
      <span>{children}</span>
      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

function VariantHeader() {
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

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand text-white">
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4.5, ease }}
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        src="/assets/For%20Website%20Upgrade/QHM-compressed.mp4"
      />
      <div className="absolute inset-0 bg-brand/80" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-brand/80" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-14 pt-32 sm:px-8 lg:px-10 lg:pb-20">
        <div>
          <h1 className="max-w-6xl text-5xl font-bold uppercase leading-[0.96] text-white sm:text-7xl lg:text-[7.2rem]">
            <TextReveal delay={0.58}>{hero.heading}</TextReveal>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8, ease }}
            className="mt-8 max-w-2xl text-base font-light leading-8 text-white/68"
          >
            {hero.subheading}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.22, duration: 0.75, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            {hero.ctas.map((cta) => (
              <PremiumButton key={cta.href} href={cta.href} inverse>{cta.label}</PremiumButton>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IntelligenceHub() {
  const seriousInsights = publicationsData.filter((item) => item.id !== "eid-adha-mubarak");
  const featured = seriousInsights[0];
  const sideItems = seriousInsights.filter((item) => item.id !== featured.id).slice(0, 4);

  return (
    <SectionReveal className="bg-white px-5 py-24 text-black sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>{newsletter.eyebrow}</SectionLabel>
            <motion.h2 variants={revealItem} className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-tight text-black md:text-6xl">
              <ScrollTextReveal>{newsletter.heading}</ScrollTextReveal>
            </motion.h2>
          </div>
          <motion.p variants={revealItem} className="max-w-md text-sm leading-7 text-black/55">
            {newsletter.description}
          </motion.p>
        </div>

        <div className="grid gap-px bg-black/12 lg:grid-cols-[1.28fr_0.72fr]">
          <AnimatePresence mode="wait">
            <motion.article
              key={featured.id}
              initial={{ opacity: 0, y: 28, clipPath: "inset(8% 0 12% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0% 0)" }}
              exit={{ opacity: 0, y: -16, clipPath: "inset(0 0 12% 0)" }}
              transition={{ duration: 0.62, ease }}
              className="min-h-[420px] bg-white p-8 md:p-12"
            >
              <p className="text-xs font-light uppercase text-brand/70">{featured.date}</p>
              <h3 className="mt-8 max-w-3xl text-4xl font-semibold leading-tight text-black md:text-6xl">{featured.title}</h3>
              <p className="mt-7 max-w-2xl text-base leading-8 text-black/58">{featured.excerpt}</p>
              <div className="mt-10 flex items-center justify-between border-t border-black/12 pt-6 text-sm font-light text-black/55">
                <span>{featured.date}</span>
                <ArrowUpRight size={18} />
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="grid gap-px bg-black/12">
            {sideItems.map((item, index) => (
              <motion.article
                key={item.id}
                variants={revealItem}
                custom={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease }}
                className="group bg-white p-7 transition-colors hover:bg-brand hover:text-white"
              >
                <p className="text-xs font-light uppercase text-black/40 transition-colors group-hover:text-white/48">{item.date}</p>
                <h3 className="mt-4 text-xl font-light leading-snug">{item.title}</h3>
                <ArrowRight size={16} className="mt-7 text-black/35 transition-all group-hover:translate-x-1 group-hover:text-white" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

function ExpertiseExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePractice = practiceAreas[activeIndex];

  return (
    <SectionReveal className="bg-white px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Practice Areas</SectionLabel>
            <motion.h2 variants={revealItem} className="mt-4 text-4xl font-semibold uppercase leading-tight text-brand md:text-6xl">
              <ScrollTextReveal>Practice Areas</ScrollTextReveal>
            </motion.h2>
          </div>
          <motion.p variants={revealItem} className="max-w-2xl text-base leading-8 text-black/55 lg:self-end">
            {practiceAreas.map((area) => area.title).join(" / ")}
          </motion.p>
        </div>

        <div className="grid border border-black/12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-black/12 lg:border-b-0 lg:border-r">
            {practiceAreas.map((area, index) => (
              <button
                key={area.title}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`relative flex w-full items-center justify-between border-b border-black/12 px-6 py-6 text-left transition-colors last:border-b-0 ${
                  activeIndex === index ? "bg-brand text-white" : "bg-white text-brand hover:bg-brand/5"
                }`}
              >
                <span className="text-sm font-light uppercase">{String(index + 1).padStart(2, "0")} {area.title}</span>
                <ArrowRight size={17} className={activeIndex === index ? "text-white" : "text-brand/45"} />
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePractice.title}
              initial={{ opacity: 0, x: 24, clipPath: "inset(0 0 0 12%)" }}
              animate={{ opacity: 1, x: 0, clipPath: "inset(0 0 0 0%)" }}
              exit={{ opacity: 0, x: -18, clipPath: "inset(0 12% 0 0)" }}
              transition={{ duration: 0.55, ease }}
              className="min-h-[390px] p-7 md:p-10"
            >
              <p className="text-xs font-light uppercase text-brand/60">Practice Areas</p>
              <h3 className="mt-4 text-4xl font-semibold leading-tight text-brand">{activePractice.title}</h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-black/55">{activePractice.description}</p>
              <div className="mt-9 grid gap-px bg-black/12 sm:grid-cols-2">
                {practiceAreas.slice(0, 4).map((practice, index) => {
                  return (
                    <motion.div
                      key={practice.title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.45, ease }}
                      className="group bg-white p-6 transition-colors hover:bg-brand hover:text-white"
                    >
                      <h4 className="text-xl font-light">{practice.title}</h4>
                      <p className="mt-4 text-sm leading-7 text-black/55 transition-colors group-hover:text-white/62">
                        {practice.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionReveal>
  );
}

function MandatesStream() {
  return (
    <SectionReveal className="overflow-hidden bg-brand px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel inverse>Institutional Proof</SectionLabel>
            <motion.h2 variants={revealItem} className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-tight md:text-6xl">
              <ScrollTextReveal>Selected Mandates</ScrollTextReveal>
            </motion.h2>
          </div>
          <motion.p variants={revealItem} className="max-w-md text-sm leading-7 text-white/55">
            {representativeMandates.map((mandate) => mandate.category).join(" / ")}
          </motion.p>
        </div>

        <div className="flex gap-px overflow-x-auto bg-white/12 pb-px">
          {representativeMandates.map((mandate, index) => (
            <motion.article
              key={mandate.title}
              variants={revealItem}
              custom={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease }}
              className="group min-w-[82vw] border-t border-white/20 bg-brand p-7 transition-colors hover:border-white sm:min-w-[420px] lg:min-w-0 lg:flex-1"
            >
              <p className="text-xs font-light uppercase text-white/42">{mandate.category}</p>
              <h3 className="mt-7 text-2xl font-light leading-tight text-white">{mandate.title}</h3>
              <p className="mt-5 text-sm leading-7 text-white/55">{mandate.description}</p>
              <ArrowUpRight size={18} className="mt-8 text-white/32 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

function SectorCinema() {
  return (
    <SectionReveal className="relative min-h-[86vh] overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-10">
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        variants={{
          hidden: { scale: 1.08, clipPath: "inset(12% 0 12% 0)" },
          visible: {
            scale: 1,
            clipPath: "inset(0% 0 0% 0)",
            transition: { duration: 1.25, ease },
          },
        }}
        className="absolute inset-0 h-full w-full object-cover opacity-62"
        src="/assets/For%20Website%20Upgrade/QHM2-compressed.mp4"
      />
      <div className="absolute inset-0 pointer-events-none" />
      <div className="relative z-10 mx-auto grid min-h-[66vh] max-w-7xl items-end gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionLabel inverse>Industry Focus</SectionLabel>
          <motion.h2 variants={revealItem} className="mt-5 text-5xl font-semibold uppercase leading-tight md:text-7xl">
            <ScrollTextReveal>Industry Focus</ScrollTextReveal>
          </motion.h2>
        </div>
        <div className="border border-white/20 bg-black/25 backdrop-blur-sm">
          {industryFocus.map((item, index) => (
            <motion.div
              key={item.title}
              variants={revealItem}
              custom={index}
              className="flex items-center justify-between border-b border-white/16 px-6 py-5 last:border-b-0"
            >
              <div>
                <p className="text-xs font-light text-white/36">{item.number}</p>
                <h3 className="mt-2 text-xl font-light">{item.title}</h3>
              </div>
              <ArrowRight size={16} className="text-white/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

function WhyQhm() {
  return (
    <SectionReveal className="bg-white px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Core Competencies</SectionLabel>
        <motion.h2 variants={revealItem} className="mt-4 max-w-4xl text-4xl font-semibold uppercase leading-tight text-brand md:text-6xl">
          <ScrollTextReveal>Why Counsel Chooses QHM</ScrollTextReveal>
        </motion.h2>
        <div className="mt-14 grid gap-px bg-brand/16 md:grid-cols-2 lg:grid-cols-4">
          {coreCompetencies.map((item, index) => (
            <motion.article
              key={item.title}
              variants={revealItem}
              custom={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease }}
              className="group min-h-[330px] bg-white p-7 transition-colors hover:bg-brand hover:text-white"
            >
              <p className="text-5xl font-thin text-brand/22 transition-colors group-hover:text-white/25">{item.number}</p>
              <h3 className="mt-10 text-2xl font-light leading-tight text-brand transition-colors group-hover:text-white">{item.title}</h3>
              <p className="mt-5 text-sm leading-7 text-black/55 transition-colors group-hover:text-white/62">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

function TeamSection() {
  const featuredMember = teamMembers[0];
  const rosterMembers = teamMembers.slice(1, 9);

  return (
    <SectionReveal className="bg-brand px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <SectionLabel inverse>Our Team</SectionLabel>
            <motion.h2 variants={revealItem} className="mt-4 text-4xl font-semibold uppercase leading-tight md:text-6xl">
              <ScrollTextReveal>Team</ScrollTextReveal>
            </motion.h2>
          </div>
          <motion.p variants={revealItem} className="max-w-2xl text-base leading-8 text-white/58">
            {teamMembers.slice(0, 4).map((member) => member.position).join(" / ")}
          </motion.p>
        </div>

        <div className="grid gap-px bg-white/14">
          <motion.article variants={revealItem} className="grid bg-brand lg:grid-cols-[0.46fr_0.54fr]">
            <div className="relative min-h-[360px] overflow-hidden bg-white/5 sm:min-h-[480px] lg:min-h-[620px]">
              <Image
                src={teamHeadshots[0]}
                alt={featuredMember.name}
                fill
                className="object-cover object-[68%_center] grayscale transition duration-700 hover:grayscale-0 lg:object-[72%_center]"
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
            </div>
            <div className="flex min-h-[360px] flex-col justify-end p-7 md:p-10 lg:p-14">
              <p className="text-xs font-light uppercase text-white/42">{featuredMember.position}</p>
              <h3 className="mt-4 max-w-2xl text-5xl font-semibold leading-tight text-white md:text-6xl">{featuredMember.name}</h3>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/56 md:text-base md:leading-8">
                {featuredMember.bio[0]}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {featuredMember.practices.slice(0, 4).map((practice) => (
                  <span key={practice} className="border border-white/16 px-3 py-2 text-xs font-light text-white/58">
                    {practice}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="grid gap-px bg-white/14 sm:grid-cols-2 lg:grid-cols-4">
            {rosterMembers.map((member, index) => (
              <motion.article
                key={member.id}
                variants={revealItem}
                custom={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease }}
                className="group bg-brand transition-colors hover:bg-white hover:text-brand"
              >
                <div className="relative h-72 overflow-hidden bg-white/5">
                  <Image
                    src={teamHeadshots[index + 1]}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale transition duration-700 group-hover:grayscale-0"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 26vw"
                  />
                  <div className="absolute inset-0 bg-brand/30 transition-opacity group-hover:opacity-0" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-light uppercase text-white/40 transition-colors group-hover:text-brand/52">{member.position}</p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-light leading-tight text-white transition-colors group-hover:text-brand">{member.name}</h3>
                    <ArrowUpRight size={17} className="mt-1 text-white/32 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand" />
                  </div>
                  {member.practices.length > 0 && (
                    <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/48 transition-colors group-hover:text-black/52">
                      {member.practices.slice(0, 3).join(" / ")}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div variants={revealItem} className="mt-10 flex flex-col gap-5 border border-white/14 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-white/55">
            {teamMembers.map((member) => member.name).join(" / ")}
          </p>
          <PremiumButton href="/team" inverse>Meet Our Team</PremiumButton>
        </motion.div>
      </div>
    </SectionReveal>
  );
}

function OfficesAndCta() {
  return (
    <SectionReveal className="bg-white px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-px bg-brand/16 lg:grid-cols-2">
          {footer.offices.map((office, index) => (
            <motion.article
              key={office.label}
              variants={{
                hidden: { opacity: 0, x: index === 0 ? -42 : 42, clipPath: "inset(0 10% 0 10%)" },
                visible: {
                  opacity: 1,
                  x: 0,
                  clipPath: "inset(0 0% 0 0%)",
                  transition: { duration: 0.9, ease },
                },
              }}
              className="bg-white p-8 md:p-10"
            >
              <div className="flex items-start justify-between gap-8">
                <div>
                  <p className="text-xs font-light uppercase text-brand/55">Office</p>
                  <h3 className="mt-3 text-4xl font-semibold text-brand">{office.label}</h3>
                </div>
                <MapPin className="mt-1 text-brand/45" size={22} />
              </div>
              <address className="mt-10 space-y-2 not-italic text-sm leading-7 text-black/58">
                {office.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
              <Link href={office.mapHref} className="mt-9 inline-flex items-center gap-3 text-sm font-light uppercase text-brand">
                {office.mapLabel}
                <ArrowUpRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div variants={revealItem} className="mt-px bg-brand px-8 py-14 text-white md:px-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-light uppercase text-white/48">Corporate Engagement</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold uppercase leading-tight md:text-6xl">
                <ScrollTextReveal>{footer.firmName}</ScrollTextReveal>
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PremiumButton href={homepageContent.headerCta.href} inverse>{homepageContent.headerCta.label}</PremiumButton>
              <PremiumButton href="/expertise" inverse>Expertise</PremiumButton>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}

function VariantFooter() {
  return (
    <footer className="bg-brand px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center border-t border-white/15 pt-10 text-center">
        <Image src="/logo/QHM_White.svg" alt="QHM Law Firm" width={150} height={101} className="h-auto w-28 object-contain" />
        <p className="mt-7 text-xs font-light uppercase text-white/42">{footer.firmName}</p>
        <p className="mt-3 text-sm leading-7 text-white/55">{footer.description}</p>
        <Link href="/about" className="mt-6 inline-flex items-center gap-3 text-sm font-light uppercase text-white/70 hover:text-white">
          About Us
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </footer>
  );
}

export default function HomeVariant3() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <VariantHeader />
      <Hero />
      <WhyQhm />
      <ExpertiseExplorer />
      <SectorCinema />
      <MandatesStream />
      <TeamSection />
      <OfficesAndCta />
      <VariantFooter />
    </main>
  );
}
