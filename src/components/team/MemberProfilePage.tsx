"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  GraduationCap,
  Languages,
  Check,
  Copy,
} from "lucide-react";
import { useState } from "react";
import type { TeamMember } from "@/data/team";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

function cleanPhone(phone?: string) {
  if (!phone) return "+966 9200 29088";
  return `+966 ${phone.slice(0, 2)} ${phone.slice(2, 5)} ${phone.slice(5)}`;
}

function phoneHref(phone?: string) {
  if (!phone) return "tel:+966920029088";
  return `tel:+966${phone}`;
}

export default function MemberProfilePage({
  member,
  adjacent,
}: {
  member: TeamMember;
  adjacent: {
    prev?: TeamMember;
    next?: TeamMember;
  };
}) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // ignore
    }
  };

  const bioParagraphs = member.bio || member.description || [];

  return (
    <main className="bg-white">
      {/* Top Breadcrumb & Navigation Bar */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-brand/15 bg-bg-base/70 backdrop-blur-sm px-5 py-4 sm:px-8 lg:px-12"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between text-xs uppercase tracking-wider">
          <Link
            href="/team"
            className="group inline-flex items-center gap-2 font-medium text-brand transition-colors hover:text-black"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>Back to All Lawyers</span>
          </Link>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-black/60 transition-colors hover:text-brand"
              title="Copy Profile Link"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green-600" />
                  <span className="text-green-600 font-semibold">Link Copied</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span className="hidden sm:inline">Share Profile</span>
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Profile Layout */}
      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-12 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] xl:gap-16">
            {/* Left Column: Portrait & Sticky Actions */}
            <aside className="lg:sticky lg:top-[90px] self-start space-y-6">
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden bg-brand/5 border border-brand/20 shadow-sm"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/60 via-transparent to-transparent opacity-60" />

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 border border-brand/10">
                    <p className="text-[11px] font-medium uppercase tracking-widest text-brand">
                      {member.role}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-brand">
                      {member.name}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Direct Actions Card */}
              <motion.div
                variants={itemVariants}
                className="border border-brand bg-white p-6 space-y-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-brand/60">
                  Direct Contact
                </p>

                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="group flex items-center justify-between border-b border-brand/15 py-3 text-sm text-brand transition-colors hover:border-brand hover:bg-brand/5 px-2 -mx-2"
                  >
                    <span className="inline-flex items-center gap-3 font-medium">
                      <Mail size={16} />
                      {member.email}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                )}

                <a
                  href={phoneHref(member.phone)}
                  className="group flex items-center justify-between border-b border-brand/15 py-3 text-sm text-brand transition-colors hover:border-brand hover:bg-brand/5 px-2 -mx-2"
                >
                  <span className="inline-flex items-center gap-3 font-medium">
                    <Phone size={16} />
                    {cleanPhone(member.phone)}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <div className="pt-3">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 border border-brand bg-brand py-3 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-brand"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>

              {/* Languages & Quick Metadata (Mobile-friendly sidebar) */}
              {member.languages && member.languages.length > 0 && (
                <motion.div
                  variants={itemVariants}
                  className="border border-brand/20 bg-bg-base/60 p-6 space-y-3"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
                    <Languages size={15} />
                    <span>Languages</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {member.languages.map((lang) => (
                      <span
                        key={lang}
                        className="border border-brand/20 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </aside>

            {/* Right Column: Editorial Biography & Deep Credentials */}
            <article className="space-y-12">
              {/* Header */}
              <motion.header variants={itemVariants} className="space-y-4">
                <span className="inline-block border-l-2 border-brand pl-3 text-xs font-medium uppercase tracking-widest text-brand">
                  {member.role}
                </span>
                <h1 className="text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-brand sm:text-5xl lg:text-6xl">
                  {member.name}
                </h1>
                <div className="h-px w-full bg-brand/20 pt-4" />
              </motion.header>

              {/* Practice Overview & Biography */}
              {bioParagraphs.length > 0 && (
                <motion.div
                  variants={itemVariants}
                  className="space-y-6 text-base leading-8 text-black/75 sm:text-lg sm:leading-9"
                >
                  {bioParagraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        index === 0
                          ? "text-lg sm:text-xl font-normal leading-relaxed text-black/90 border-l-2 border-brand/30 pl-5 italic"
                          : ""
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              )}

              {/* Education & Qualifications */}
              {member.education && (
                <motion.section
                  variants={itemVariants}
                  className="border-t border-brand/20 pt-10"
                >
                  <div className="flex items-center gap-3 text-brand">
                    <GraduationCap size={20} />
                    <h2 className="text-lg font-semibold uppercase tracking-wider">
                      Education & Credentials
                    </h2>
                  </div>
                  <div className="mt-4 bg-bg-base/80 border border-brand/15 p-6 sm:p-8">
                    <p className="text-sm sm:text-base leading-relaxed text-black/80 font-normal">
                      {member.education}
                    </p>
                  </div>
                </motion.section>
              )}

              {/* Firm Consultation Callout */}
              <motion.section
                variants={itemVariants}
                className="border border-brand bg-brand p-8 sm:p-10 text-white"
              >
                <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-white/70">
                      QHM Law Firm — Riyadh & Jeddah
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                      Discuss a Mandate With Our Office
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80 max-w-xl">
                      Our partner-led model ensures senior oversight across regulatory
                      compliance, M&A transactions, infrastructure projects, and commercial disputes throughout Saudi Arabia.
                    </p>
                  </div>
                  <div>
                    <Link
                      href="/contact"
                      className="inline-flex h-12 items-center justify-center gap-3 border border-white bg-white px-6 text-xs font-semibold uppercase tracking-wider text-brand transition-colors hover:bg-transparent hover:text-white"
                    >
                      <span>Contact Our Office</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.section>

              {/* Adjacent Member Navigation */}
              <motion.footer
                variants={itemVariants}
                className="border-t border-brand/20 pt-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {adjacent.prev ? (
                    <Link
                      href={`/team/${adjacent.prev.id}`}
                      className="group flex flex-col border border-brand/15 p-5 transition-colors hover:border-brand hover:bg-brand/5"
                    >
                      <span className="text-[11px] font-medium uppercase tracking-wider text-brand/60 inline-flex items-center gap-1.5">
                        <ArrowLeft
                          size={12}
                          className="transition-transform group-hover:-translate-x-1"
                        />
                        Previous Profile
                      </span>
                      <span className="mt-2 text-base font-semibold text-brand">
                        {adjacent.prev.name}
                      </span>
                      <span className="text-xs text-black/50 uppercase tracking-wider">
                        {adjacent.prev.role}
                      </span>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {adjacent.next && (
                    <Link
                      href={`/team/${adjacent.next.id}`}
                      className="group flex flex-col sm:items-end sm:text-right border border-brand/15 p-5 transition-colors hover:border-brand hover:bg-brand/5"
                    >
                      <span className="text-[11px] font-medium uppercase tracking-wider text-brand/60 inline-flex items-center gap-1.5">
                        Next Profile
                        <ArrowRight
                          size={12}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                      <span className="mt-2 text-base font-semibold text-brand">
                        {adjacent.next.name}
                      </span>
                      <span className="text-xs text-black/50 uppercase tracking-wider">
                        {adjacent.next.role}
                      </span>
                    </Link>
                  )}
                </div>
              </motion.footer>
            </article>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
