"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2, Globe, Scale, Gavel, Users, Lightbulb, Zap, Shield
} from "lucide-react";
import { homepageContent } from "@/data/homepage";

export const { hero, managingPartner, coreCompetencies, practiceAreas, industryFocus, representativeMandates, corporateEnquiryFields, newsletter } = homepageContent;

export const practiceIcons: Record<string, React.ElementType> = {
  "Corporate & Commercial": Building2,
  "Joint Ventures & FDI": Globe,
  "Regulatory Advisory": Shield,
  "Dispute Resolution": Gavel,
  "Employment & Labor": Users,
  "IP & Technology": Lightbulb,
  "Tax & Zakat": Scale,
  "Sector Advisory": Zap,
};

export const industryTicker = [...industryFocus, ...industryFocus];

export const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const fadeIn = {
  hidden: { opacity: 0, y: 34, clipPath: "inset(0 0 18% 0)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { delay: i * 0.08, duration: 0.9, ease: premiumEase },
  }),
};

export const editorialWipe = {
  hidden: { opacity: 0, x: -28, clipPath: "inset(0 100% 0 0)" },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    clipPath: "inset(0 0% 0 0)",
    transition: { delay: i * 0.07, duration: 0.86, ease: premiumEase },
  }),
};

export const lineDraw = {
  hidden: { scaleX: 0 },
  visible: (i = 0) => ({
    scaleX: 1,
    transition: { delay: i * 0.08, duration: 0.8, ease: premiumEase },
  }),
};

export const sectionReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export function SplitReveal({
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

export function ScrollTextReveal({
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

export function SectionLabel({ children, inverse = false }: { children: string; inverse?: boolean }) {
  return (
    <motion.p
      variants={fadeIn}
      className={`text-xs font-medium uppercase ${inverse ? "text-white/75" : "text-brand/75"}`}
    >
      {children}
    </motion.p>
  );
}

export function PremiumButton({
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
      className={`group inline-flex items-center justify-between gap-6 border px-6 py-3 text-xs font-medium uppercase transition-all duration-300 ${
        inverse
          ? "border-white/65 text-white hover:border-white hover:bg-white hover:text-brand"
          : "border-brand/50 text-brand hover:border-brand hover:bg-brand hover:text-white"
      }`}
    >
      <span>{children}</span>
      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export const luxuryNavLinks = [
  { label: "Expertise", href: "/expertise" },
  { label: "Team", href: "/team" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const teamHeadshots = [
  "/assets/team/Qaisar.jpg",
  "/assets/team/Yasser Mustafa.jpg",
  "/assets/team/Tamer Elnagar.jpg",
  "/assets/team/Amna Usman.jpg",
  "/assets/team/Hamed Matawi.jpg",
];



export { homepageContent };
