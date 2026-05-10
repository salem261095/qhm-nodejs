"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Menu, X } from "lucide-react";
import { homepageContent } from "@/data/homepage";

const ease = [0.22, 1, 0.36, 1] as const;
const heroVideo = "/assets/For%20Website%20Upgrade/QHM2-compressed.mp4";
const pageVideo = "/assets/For%20Website%20Upgrade/QHM-compressed.mp4";

const fadeUp: Variants = {
  hidden: { y: 28, opacity: 0, filter: "blur(12px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

function TextReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      {children.split("\n").map((line, index) => (
        <motion.span
          className="block"
          initial={{ y: "112%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.9, delay: delay + index * 0.12, ease }}
          key={line}
        >
          {line}
        </motion.span>
      ))}
    </span>
  );
}

function HeroHeadline({ children }: { children: string }) {
  return (
    <span className="block">
      {children.split("\n").map((line, index) => (
        <motion.span
          className="block"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.95, delay: 0.2 + index * 0.14, ease }}
          key={line}
        >
          {line}
        </motion.span>
      ))}
    </span>
  );
}

function SectionHeadline({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <motion.h2
      initial={{ y: 34, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease }}
      className={className}
    >
      {children.split("\n").map((line) => (
        <span className="block" key={line}>
          {line}
        </span>
      ))}
    </motion.h2>
  );
}

function PremiumLink({
  href,
  children,
  invert = false,
}: {
  href: string;
  children: string;
  invert?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex h-12 items-center justify-between gap-8 border px-5 text-sm font-semibold uppercase transition-colors duration-300 ${
        invert
          ? "border-white text-white hover:bg-white hover:text-brand"
          : "border-brand text-brand hover:bg-brand hover:text-white"
      }`}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

function VariantHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Expertise", href: "/expertise" },
    { label: "Team", href: "/team" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/15 bg-brand/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/" aria-label="QHM home">
            <Image
              src="/logo/QHM_White.svg"
              alt="QHM Law Firm"
              width={156}
              height={58}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-9 text-sm font-medium text-white/80 lg:flex">
            {links.slice(0, 4).map((link) => (
              <Link
                href={link.href}
                className="transition-colors hover:text-white"
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand sm:inline-flex"
            >
              Contact
            </Link>
            <button
              type="button"
              aria-label="Open navigation"
              onClick={() => setOpen(true)}
              className="grid h-12 w-12 place-items-center border border-white/25 text-white transition-colors hover:bg-white hover:text-brand lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease }}
            className="fixed inset-0 z-[60] bg-brand text-white"
          >
            <div className="flex h-20 items-center justify-between border-b border-white/15 px-5">
              <Image
                src="/logo/QHM_White.svg"
                alt="QHM Law Firm"
                width={144}
                height={54}
                className="h-11 w-auto"
              />
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="grid h-12 w-12 place-items-center border border-white/25 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="px-5 py-10">
              {links.map((link, index) => (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease }}
                  key={link.label}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex border-b border-white/15 py-6 text-4xl font-semibold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["18%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-brand text-white"
    >
      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-20 h-px bg-white/45"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.2, delay: 0.15, ease }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-[7%] top-0 hidden w-px bg-white/10 lg:block"
        initial={{ scaleY: 0, transformOrigin: "top" }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.35, ease }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-between px-5 pb-8 pt-28 sm:px-8 lg:px-12 lg:pb-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="pt-8"
        >
          <motion.div
            variants={fadeUp}
            className="mb-8 h-px w-full max-w-5xl bg-white/20"
          >
            <motion.div className="h-px bg-white" style={{ width: lineWidth }} />
          </motion.div>
          <h1 className="max-w-5xl text-[clamp(3.6rem,7vw,8rem)] font-semibold leading-[0.92] text-white">
            <HeroHeadline>{homepageContent.hero.heading}</HeroHeadline>
          </h1>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative mt-12 overflow-hidden border border-white/20 bg-white/5"
        >
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.05, delay: 0.35, ease }}
            className="relative h-[34vh] min-h-[260px] overflow-hidden lg:h-[42vh]"
          >
            <motion.video
              src={heroVideo}
              className="h-full w-full object-cover opacity-90"
              autoPlay
              muted
              loop
              playsInline
              style={{ scale: videoScale }}
            />
            <div className="absolute inset-0 bg-brand/18" />
          </motion.div>
          <div className="absolute bottom-0 left-0 h-px w-full bg-white/30" />
        </motion.div>
      </div>
    </section>
  );
}

function OperatingModel() {
  return (
    <section className="bg-white px-5 py-24 text-gray-850 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-14"
        >
          <div>
            <SectionHeadline
              className="max-w-5xl text-[clamp(2.2rem,3.4vw,3.9rem)] font-semibold leading-[1.08] text-brand"
            >
              Partner-led advisory designed for multinational execution.
            </SectionHeadline>
          </div>

          <div className="grid border-l border-t border-brand/20 md:grid-cols-2 xl:grid-cols-4">
            {homepageContent.coreCompetencies.map((item, index) => (
              <motion.article
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease }}
                className="group flex min-h-[340px] flex-col justify-between border-b border-r border-brand/20 p-6 transition-colors duration-300 hover:bg-brand hover:text-white"
                key={item.title}
              >
                <div>
                  <motion.div
                    initial={{ y: 14, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: index * 0.04, ease }}
                    className="mb-12 flex items-center justify-between text-sm font-semibold text-brand transition-colors group-hover:text-white/65"
                  >
                    <span>{item.number}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </motion.div>
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.55, delay: index * 0.05, ease }}
                    className="text-2xl font-semibold leading-tight"
                  >
                    {item.title}
                  </motion.h3>
                </div>
                <motion.p
                  initial={{ y: 18, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease }}
                  className="mt-10 text-base leading-7 text-gray-850/68 transition-colors group-hover:text-white/72"
                >
                  {item.description}
                </motion.p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="bg-brand px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(320px,0.4fr)] lg:items-end">
          <SectionHeadline className="max-w-6xl text-[clamp(2.2rem,3.8vw,4.3rem)] font-semibold leading-[1.08]">
            High-value corporate mandates requiring regulatory precision.
          </SectionHeadline>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-xl text-lg leading-8 text-white/68"
          >
            A compact view of the same QHM practice content, arranged for fast scanning
            by in-house counsel and regional headquarters teams.
          </motion.p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid border-l border-t border-white/15 md:grid-cols-2 xl:grid-cols-4"
        >
          {homepageContent.practiceAreas.map((area, index) => (
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease }}
              className="group min-h-[260px] border-b border-r border-white/15 p-6 transition-colors duration-300 hover:bg-white hover:text-gray-850"
              key={area.title}
            >
              <motion.div
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: index * 0.03, ease }}
                className="mb-12 flex items-center justify-between text-sm font-semibold text-white/55 transition-colors group-hover:text-brand"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.div>
              <motion.h3
                initial={{ y: 18, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.55, delay: index * 0.04, ease }}
                className="mb-5 text-2xl font-semibold leading-tight"
              >
                {area.title}
              </motion.h3>
              <motion.p
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.55, delay: index * 0.05, ease }}
                className="text-base leading-7 text-white/62 transition-colors group-hover:text-gray-850/70"
              >
                {area.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProofStream() {
  return (
    <section className="overflow-hidden bg-white px-5 py-24 text-gray-850 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeadline className="max-w-6xl text-[clamp(2.3rem,4vw,4.6rem)] font-semibold leading-[1.08] text-brand">
            Representative Mandates
          </SectionHeadline>
          <PremiumLink href="/contact">Discuss a mandate</PremiumLink>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 lg:grid-cols-4"
        >
          {homepageContent.representativeMandates.map((mandate) => (
            <motion.article
              variants={fadeUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, ease }}
              className="group flex min-h-[360px] flex-col justify-between border border-brand/20 p-6 transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
              key={mandate.title}
            >
              <div>
                <motion.p
                  initial={{ y: 14, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.45, ease }}
                  className="mb-10 text-xs font-semibold uppercase text-brand transition-colors group-hover:text-white/55"
                >
                  {mandate.category}
                </motion.p>
                <motion.h3
                  initial={{ y: 18, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.55, ease }}
                  className="mb-6 text-2xl font-semibold leading-tight"
                >
                  {mandate.title}
                </motion.h3>
                <motion.p
                  initial={{ y: 16, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.55, ease }}
                  className="text-base leading-7 text-gray-850/68 transition-colors group-hover:text-white/70"
                >
                  {mandate.description}
                </motion.p>
              </div>
              <ArrowRight className="mt-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SectorLens() {
  return (
    <section className="bg-brand text-white">
      <div className="grid min-h-screen lg:grid-cols-[0.56fr_0.44fr]">
        <motion.div
          initial={{ clipPath: "inset(8% 8% 8% 8%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, ease }}
          className="relative min-h-[58vh] overflow-hidden lg:min-h-screen"
        >
          <video
            src={pageVideo}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-brand/25" />
        </motion.div>

        <div className="flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-12">
          <SectionHeadline className="mb-12 max-w-4xl text-[clamp(2.3rem,4vw,4.6rem)] font-semibold leading-[1.08]">
            {`Strategic Sector\nExpertise.`}
          </SectionHeadline>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="border-t border-white/15"
          >
            {homepageContent.industryFocus.map((sector) => (
              <motion.div
                variants={fadeUp}
                className="group flex items-center justify-between gap-5 border-b border-white/15 py-6"
                key={sector.title}
              >
                <div>
                  <p className="mb-2 text-sm font-semibold text-white/45">
                    {sector.number}
                  </p>
                  <h3 className="text-2xl font-semibold leading-tight">
                    {sector.title}
                  </h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/55 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OfficesFooter() {
  return (
    <footer className="bg-white px-5 py-20 text-gray-850 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeadline className="mb-12 max-w-6xl text-[clamp(2.3rem,4vw,4.6rem)] font-semibold leading-[1.08] text-brand">
          Corporate Engagement
        </SectionHeadline>
        <div className="mb-16 grid gap-4 lg:grid-cols-2">
          {homepageContent.footer.offices.map((office) => (
            <motion.div
              initial={{ y: 30, opacity: 0, filter: "blur(12px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease }}
              className="border border-gray-850/20 p-6"
              key={office.label}
            >
              <div className="mb-10 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold">{office.label}</h3>
                <MapPin className="h-5 w-5 text-brand" />
              </div>
              <div className="space-y-2 text-base leading-7 text-gray-850/68">
                {office.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <Link
                href={office.mapHref}
                className="mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase text-brand"
              >
                {office.mapLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-10 border-t border-gray-850/20 pt-12 lg:grid-cols-[0.35fr_0.65fr] lg:items-end">
          <Image
            src="/logo/QHM_Blue.svg"
            alt="QHM Law Firm"
            width={132}
            height={52}
            className="h-12 w-auto"
          />
          <div className="max-w-3xl lg:ml-auto">
            <p className="mb-8 text-2xl font-semibold leading-snug text-brand">
              Need legal guidance in Saudi Arabia?
            </p>
            <p className="mb-8 text-base leading-8 text-gray-850/68">
              {homepageContent.footer.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PremiumLink href="/contact">Contact QHM</PremiumLink>
              <PremiumLink href="/expertise">Explore Expertise</PremiumLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomeVariant4() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <VariantHeader />
      <Hero />
      <OperatingModel />
      <Capabilities />
      <ProofStream />
      <SectorLens />
      <OfficesFooter />
    </main>
  );
}
