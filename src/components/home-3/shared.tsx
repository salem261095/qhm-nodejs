"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { homepageContent } from "@/data/homepage";

export const {
  hero,
  coreCompetencies,
  practiceAreas,
  industryFocus,
  representativeMandates,
  newsletter,
  footer,
} = homepageContent;

export const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

export const revealItem = {
  hidden: { opacity: 0, y: 34, clipPath: "inset(0 0 18% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.85, ease },
  },
};

export const navLinks = [
  { label: "Expertise", href: "/expertise" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const teamHeadshots = [
  "/assets/team/Qaisar.jpg",
  "/assets/team/Yasser Mustafa.jpg",
  "/assets/team/Tamer Elnagar.jpg",
  "/assets/team/Amna Usman.jpg",
  "/assets/team/Hamed Matawi.jpg",
  "/assets/team/Muayd Johar.jpg",
  "/assets/team/Mahmoud Bashandy.jpg",
  "/assets/team/Abdulelah Ashmawi.jpg",
  "/assets/team/Deema Daqqaq.jpg",
  "/assets/team/Tamara Khattab.jpg",
  "/assets/team/Talah Reda.jpg",
  "/assets/team/Abdulmajeed Ghandoorah.jpg",
];

export function TextReveal({ children, delay = 0 }: { children: string; delay?: number }) {
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

export function ScrollTextReveal({ children }: { children: string }) {
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

export function ClipReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={revealItem}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

export function SectionLabel({ children, inverse = false }: { children: string; inverse?: boolean }) {
  return (
    <motion.p
      variants={revealItem}
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
      className={`group inline-flex min-h-12 items-center justify-between gap-7 border px-6 py-3 text-sm font-medium uppercase transition-all duration-300 ${
        inverse
          ? "border-white/65 text-white hover:border-white hover:bg-white hover:text-brand"
          : "border-brand/50 text-brand hover:border-brand hover:bg-brand hover:text-white"
      }`}
    >
      <span>{children}</span>
      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}



export { homepageContent };
