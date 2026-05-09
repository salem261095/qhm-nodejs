"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, ArrowUpRight, X, ChevronRight } from "lucide-react";
import { teamMembers } from "@/data/lawyers";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

type Member = typeof teamMembers[number];

function MemberModal({ member, onClose }: { member: Member; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-8 py-5 border-b border-gray-100">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand">{member.position}</p>
            <h2 className="text-xl font-extrabold text-gray-950 mt-0.5">{member.name}</h2>
          </div>
          <button onClick={onClose} className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors">
            <X size={18} />
          </button>
        </div>
        <div className="px-8 py-8">
          {member.bio.length > 0 && (
            <div className="space-y-4 mb-8">
              {member.bio.map((para, i) => <p key={i} className="text-gray-600 text-sm leading-relaxed">{para}</p>)}
            </div>
          )}
          {member.practices.length > 0 && (
            <div className="border-t border-gray-100 pt-8">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-4">Practice Areas</p>
              <div className="flex flex-wrap gap-2">
                {member.practices.map((p) => (
                  <span key={p} className="text-xs font-semibold bg-gray-50 border border-gray-100 text-gray-700 px-3 py-1.5">{p}</span>
                ))}
              </div>
            </div>
          )}
          {"email" in member && member.email && (
            <div className="border-t border-gray-100 pt-8 mt-8 flex flex-col sm:flex-row gap-4">
              <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline">
                <Mail size={14} /> {member.email}
              </a>
              {"phone" in member && (member as { phone?: string }).phone && (
                <a href={`tel:${(member as { phone?: string }).phone}`} className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-brand transition-colors">
                  <Phone size={14} /> {(member as { phone?: string }).phone}
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function MemberCard({ member, index, onClick }: { member: Member; index: number; onClick: () => void }) {
  const hasPhoto = !member.image.includes("placeholder");
  return (
    <motion.div custom={index} variants={fadeIn} onClick={onClick}
      className="group cursor-pointer bg-white border border-gray-100 hover:border-brand/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        {hasPhoto ? (
          <Image src={member.image} alt={member.name} fill
            className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-50">
            <span className="text-4xl font-extrabold text-gray-200">
              {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-8 h-8 bg-brand flex items-center justify-center">
            <ArrowUpRight size={14} className="text-white" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand mb-1">{member.position}</p>
        <h3 className="font-extrabold text-gray-950 text-lg leading-tight">{member.name}</h3>
        {member.practices.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {member.practices.slice(0, 2).map((p) => (
              <span key={p} className="text-xs text-gray-400 bg-gray-50 px-2 py-1">{p}</span>
            ))}
            {member.practices.length > 2 && (
              <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1">+{member.practices.length - 2}</span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
  const [selected, setSelected] = useState<Member | null>(null);

  const groups = [
    { label: "Managing Partner", members: teamMembers.filter((m) => m.position.toLowerCase().includes("managing")) },
    { label: "Senior Associates", members: teamMembers.filter((m) => m.position.toLowerCase().includes("senior")) },
    { label: "Associates", members: teamMembers.filter((m) => m.position.toLowerCase() === "associate") },
    { label: "Trainees & Operations", members: teamMembers.filter((m) => m.position.toLowerCase().includes("trainee") || m.position.toLowerCase().includes("admin")) },
  ];

  return (
    <main>
      <section className="relative bg-gray-950 text-white pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_right,rgba(25,57,138,0.7)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={fadeIn} className="text-xs font-bold tracking-[0.35em] uppercase text-brand mb-4">The Team</motion.p>
            <motion.h1 variants={fadeIn} className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-[0.95] tracking-tighter mb-8 max-w-3xl">Our People</motion.h1>
            <motion.p variants={fadeIn} className="text-white/50 text-xl max-w-xl leading-relaxed">
              A multi-disciplinary legal team combining Saudi regulatory mastery with international commercial expertise.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {groups.map((group) => group.members.length > 0 && (
            <motion.div key={group.label} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            >
              <motion.div variants={fadeIn} className="flex items-center gap-6 mb-10 pb-5 border-b border-gray-100">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-brand">{group.label}</h2>
                <div className="flex-1 h-px bg-gray-100" />
                <span className="text-xs font-bold text-gray-300">{group.members.length}</span>
              </motion.div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.members.map((member, i) => (
                  <MemberCard key={member.id} member={member} index={i} onClick={() => setSelected(member)} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-extrabold mb-2">Engage The Team Directly</h2>
            <p className="text-white/60 text-sm">Senior counsel from the first conversation. No intake delays.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-brand px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-100 transition-all flex-shrink-0 group">
            Contact Us <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <AnimatePresence>
        {selected && <MemberModal member={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </main>
  );
}
