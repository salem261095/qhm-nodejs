"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, Phone, X } from "lucide-react";

type TeamMember = {
  name: string;
  phone?: string;
  role: string;
  email?: string;
  image: string;
  description?: string[];
};

const headshotBase = "/assets/team";

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Qaisar H. Metawea",
    role: "Managing Partner",
    image: `${headshotBase}/Qaisar.jpg`,
    description: [
      "Qaisar Hamed Metawea Law Firm (QHM) is a Saudi-based corporate law firm advising multinational companies, financial institutions, and regional headquarters on market entry, regulatory compliance, high-value transactions, tax disputes, and complex commercial matters across the Kingdom.",
      "We deliver partner-led, commercially driven legal solutions designed to provide regulatory certainty, mitigate transactional risk, and accelerate speed to market.",
    ],
  },
  { name: "Yasser Mustafa", phone: "503195639", role: "Counsel - Head of Riyadh", email: "yam@qhmlawfirm.com", image: `${headshotBase}/Yasser Mustafa.jpg` },
  { name: "Tamer Elnagar", phone: "564200245", role: "Counsel", email: "hmb@qhmlawfirm.com", image: `${headshotBase}/Tamer Elnagar.jpg` },
  { name: "Amna Usman", phone: "541018241", role: "Managing Associate", email: "anu@qhmlawfirm.com", image: `${headshotBase}/Amna Usman.jpg` },
  { name: "Hamed Matawi", phone: "540612000", role: "Managing Associate", email: "ham@qhmlawfirm.com", image: `${headshotBase}/Hamed Matawi.jpg` },
  { name: "Muayd Johar", phone: "542616176", role: "Managing Associate", email: "mhj@qhmlawfirm.com", image: `${headshotBase}/Muayd Johar.jpg` },
  { name: "Mahmoud Bashandy", phone: "537876104", role: "Managing Associate", email: "msb@qhmlawfirm.com", image: `${headshotBase}/Mahmoud Bashandy.jpg` },
  { name: "Abdulelah Ashmawi", phone: "555666089", role: "Senior Associate", email: "ama@qhmlawfirm.com", image: `${headshotBase}/Abdulelah Ashmawi.jpg` },
  { name: "Deema Daqqaq", phone: "538775566", role: "Associate", email: "dad@qhmlawfirm.com", image: `${headshotBase}/Deema Daqqaq.jpg` },
  { name: "Tamara Khattab", phone: "506698555", role: "Associate", email: "thk@qhmlawfirm.com", image: `${headshotBase}/Tamara Khattab.jpg` },
  { name: "Talah Reda", phone: "553539876", role: "Junior Associate", email: "tkr@qhmlawfirm.com", image: `${headshotBase}/Talah Reda.jpg` },
  { name: "Abdulmajeed Ghandoorah", phone: "566624679", role: "Trainee Lawyer", email: "ahg@qhmlawfirm.com", image: `${headshotBase}/Abdulmajeed Ghandoorah.jpg` },
  { name: "Oays Mansori", phone: "598970517", role: "Trainee Lawyer", email: "omm@qhmlawfirm.com", image: `${headshotBase}/Oays Mansori.jpg` },
  { name: "Nada Al Mehdar", phone: "544460560", role: "Finance", email: "nat@qhmlawfirm.com", image: `${headshotBase}/Nada Al Mehdar .jpg` },
  { name: "Syed Rezavi", phone: "566044203", role: "Marketing & BD", email: "skr@qhmlawfirm.com", image: `${headshotBase}/Syed Rezavi.jpg` },
];

const roles = ["All", "Leadership", "Counsel", "Associates", "Operations"] as const;

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

const item = {
  hidden: { opacity: 0, y: 28, clipPath: "inset(0 0 14% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.7, ease },
  },
};

function TextReveal({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <>
      {children.split("\n").map((line, index) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            initial={{ y: "112%" }}
            animate={{ y: 0 }}
            transition={{ delay: delay + index * 0.1, duration: 0.85, ease }}
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
                transition: { delay: index * 0.08, duration: 0.78, ease },
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

function cleanPhone(phone?: string) {
  if (!phone) return "";
  return `+966 ${phone.slice(0, 2)} ${phone.slice(2, 5)} ${phone.slice(5)}`;
}

function phoneHref(phone?: string) {
  if (!phone) return "";
  return `tel:+966${phone}`;
}

function roleGroup(member: TeamMember) {
  const role = member.role.toLowerCase();
  if (role.includes("partner") || role.includes("head")) return "Leadership";
  if (role.includes("counsel")) return "Counsel";
  if (role.includes("finance") || role.includes("marketing")) return "Operations";
  return "Associates";
}

function getInitials(name: string) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function MemberModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/65 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <motion.article
        initial={{ y: 60, opacity: 0, clipPath: "inset(8% 0 0 0)" }}
        animate={{ y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)" }}
        exit={{ y: 48, opacity: 0, clipPath: "inset(8% 0 0 0)" }}
        transition={{ duration: 0.45, ease }}
        onClick={(event) => event.stopPropagation()}
        className="grid max-h-[92vh] w-full max-w-5xl overflow-y-auto bg-white lg:grid-cols-[0.9fr_1.1fr]"
      >
        <motion.div
          initial={{ clipPath: "inset(0 16% 0 0)", scale: 1.08 }}
          animate={{ clipPath: "inset(0 0% 0 0)", scale: 1 }}
          transition={{ duration: 0.72, ease }}
          className="relative min-h-[420px] bg-brand/5"
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top grayscale"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/28 to-transparent" />
        </motion.div>

        <div className="flex min-h-[420px] flex-col p-7 sm:p-9 lg:p-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="mb-12 flex items-start justify-between gap-8"
          >
            <div>
              <motion.p variants={item} className="text-xs font-light uppercase text-brand/55">{member.role}</motion.p>
              <motion.h2 variants={item} className="mt-4 text-4xl font-semibold leading-tight text-brand sm:text-5xl">{member.name}</motion.h2>
            </div>
            <motion.button
              initial={{ opacity: 0, rotate: -12 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.18, duration: 0.4, ease }}
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 shrink-0 items-center justify-center border border-brand/18 text-brand transition-colors hover:bg-brand hover:text-white"
              aria-label="Close profile"
            >
              <X size={18} />
            </motion.button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="mt-auto space-y-4 border-t border-brand/12 pt-8"
          >
            {member.description && (
              <div className="space-y-4 pb-5">
                {member.description.map((paragraph) => (
                  <motion.p key={paragraph} variants={item} className="text-sm leading-7 text-black/58">
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            )}
            {member.email && (
              <motion.a variants={item} href={`mailto:${member.email}`} className="group flex items-center justify-between gap-5 border-b border-brand/10 pb-4 text-brand">
                <span className="inline-flex items-center gap-3 text-sm">
                  <Mail size={16} />
                  {member.email}
                </span>
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            )}
            {member.phone && (
              <motion.a variants={item} href={phoneHref(member.phone)} className="group flex items-center justify-between gap-5 border-b border-brand/10 pb-4 text-brand">
                <span className="inline-flex items-center gap-3 text-sm">
                  <Phone size={16} />
                  {cleanPhone(member.phone)}
                </span>
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            )}
            {!member.email && !member.phone && (
              <motion.p variants={item} className="text-sm leading-7 text-black/52">Contact details are handled through the firm reception.</motion.p>
            )}
          </motion.div>
        </div>
      </motion.article>
    </motion.div>
  );
}



function MemberCard({ member, index, onSelect }: { member: TeamMember; index: number; onSelect: () => void }) {
  return (
    <motion.button
      type="button"
      custom={index}
      variants={item}
      onClick={onSelect}
      layout
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.32, ease }}
      className="group flex min-h-[420px] flex-col bg-white text-left transition-colors hover:bg-brand hover:text-white"
    >
      <div className="relative h-72 overflow-hidden bg-brand/5">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="scale-[1.12] object-cover object-top grayscale transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute left-4 top-4 bg-white px-3 py-2 text-xs font-light text-brand transition-colors group-hover:bg-brand group-hover:text-white">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-light uppercase text-brand/55 transition-colors group-hover:text-white/45">{member.role}</p>
        <div className="mt-4 flex items-start justify-between gap-5">
          <h3 className="text-2xl font-light leading-tight text-brand transition-colors group-hover:text-white">{member.name}</h3>
          <ArrowUpRight size={17} className="mt-1 shrink-0 text-brand/35 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
        </div>
        <div className="mt-auto pt-8 text-xs font-light uppercase text-black/36 transition-colors group-hover:text-white/45">
          {member.email || getInitials(member.name)}
        </div>
      </div>
    </motion.button>
  );
}

export default function TeamPage() {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const [activeRole, setActiveRole] = useState<(typeof roles)[number]>("All");

  const filteredMembers = teamMembers
    .filter((member) => activeRole === "All" || roleGroup(member) === activeRole);

  return (
    <main className="bg-white">
      <section className="border-b border-brand/12 bg-white px-5 pb-16 pt-24 sm:px-8 lg:px-10 lg:pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-end"
        >
          <div className="self-end">
            <motion.h1 className="max-w-5xl text-6xl font-semibold uppercase leading-[0.9] text-brand sm:text-7xl lg:text-[8rem]">
              <TextReveal>Our Team</TextReveal>
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.55, duration: 0.9, ease }}
              className="mt-8 h-px w-full max-w-xl origin-left bg-brand/16"
            />
          </div>

          <motion.div variants={item} className="max-w-xl self-end lg:justify-self-end">
            <p className="text-base leading-8 text-black/58">
              Our team consists of bilingual Saudi-qualified lawyers and experienced legal consultants who combine regulatory insight with commercial pragmatism.
            </p>
            <div className="mt-10 grid grid-cols-3 border border-brand/12 text-center">
              <motion.div variants={item} className="border-r border-brand/12 p-4">
                <p className="text-3xl font-semibold text-brand">{teamMembers.length}</p>
                <p className="mt-1 text-xs font-light uppercase text-black/42">People</p>
              </motion.div>
              <motion.div variants={item} className="border-r border-brand/12 p-4">
                <p className="text-3xl font-semibold text-brand">2</p>
                <p className="mt-1 text-xs font-light uppercase text-black/42">Offices</p>
              </motion.div>
              <motion.div variants={item} className="p-4">
                <p className="text-3xl font-semibold text-brand">KSA</p>
                <p className="mt-1 text-xs font-light uppercase text-black/42">Market</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>



      <section className="border-t border-brand/12 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={container}
            className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.78fr] lg:items-end"
          >
            <div>
              <motion.p variants={item} className="text-xs font-light uppercase text-brand/55">Directory</motion.p>
              <motion.h2 variants={item} className="mt-4 text-4xl font-semibold uppercase leading-tight text-brand sm:text-5xl">
                <ScrollTextReveal>People Directory</ScrollTextReveal>
              </motion.h2>
            </div>
            <motion.div variants={item} className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-3 border border-brand bg-brand px-5 text-sm font-medium uppercase text-white transition-colors hover:bg-white hover:text-brand"
              >
                Contact
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="mb-8 flex gap-px overflow-x-auto bg-brand/12 p-px">
            {roles.map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => setActiveRole(role)}
                className="relative min-h-11 shrink-0 overflow-hidden bg-white px-5 text-xs font-medium uppercase text-brand transition-colors hover:bg-brand/5"
              >
                {activeRole === role && (
                  <motion.span
                    layoutId="active-team-filter"
                    transition={{ duration: 0.35, ease }}
                    className="absolute inset-0 bg-brand"
                  />
                )}
                <span className={`relative z-10 transition-colors ${activeRole === role ? "text-white" : "text-brand"}`}>{role}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 18, transition: { duration: 0.2 } }}
              variants={container}
              layout
              className="grid gap-px bg-brand/12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredMembers.map((member, index) => (
                <MemberCard key={member.email ?? member.name} member={member} index={index} onSelect={() => setSelected(member)} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredMembers.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border border-brand/12 p-10 text-center text-sm text-black/50">
              No team members in this category.
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selected && <MemberModal member={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </main>
  );
}
