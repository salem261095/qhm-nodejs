"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Building2, Globe, Shield, Gavel, Users, Lightbulb, Zap, Briefcase, Landmark, Film, Laptop, HeartPulse, Pill, Plane, Ship, Building, Scale } from "lucide-react";
import { practiceAreasData } from "@/data/practiceAreas";

const iconMap: Record<string, React.ElementType> = {
  Building: Building2, Briefcase, Globe, Users, Landmark, Lightbulb,
  Film, Laptop, HeartPulse, Pill, Zap, Plane, Ship, Building2, Gavel, Scale, Shield,
};

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function ExpertisePage() {
  const [openId, setOpenId] = useState<string | null>(practiceAreasData[0].id);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <main>

      <section className="relative bg-gray-950 text-white pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,rgba(25,57,138,0.7)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={fadeIn} className="text-xs font-bold tracking-[0.35em] uppercase text-brand mb-4">Our Mandates</motion.p>
            <motion.h1 variants={fadeIn} className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-[0.95] tracking-tighter mb-8 max-w-3xl">
              Practice Areas
            </motion.h1>
            <motion.p variants={fadeIn} className="text-white/50 text-xl max-w-xl leading-relaxed">
              Our practice areas are structured around the needs of multinational corporations operating in or entering Saudi Arabia.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>

      <section className="py-8 bg-white border-b border-gray-100 sticky top-[72px] z-30 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto no-scrollbar">
            {practiceAreasData.map((area) => {
              const Icon = iconMap[area.icon] ?? Scale;
              return (
                <button
                  key={area.id}
                  onClick={() => setOpenId(area.id)}
                  className={`flex items-center gap-2 text-xs font-bold tracking-widest uppercase whitespace-nowrap pb-2 border-b-2 transition-all ${
                    openId === area.id ? "text-brand border-brand" : "text-gray-300 border-transparent hover:text-gray-600"
                  }`}
                >
                  <Icon size={12} strokeWidth={2} />
                  {area.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            className="divide-y divide-gray-100"
          >
            {practiceAreasData.map((area, i) => {
              const Icon = iconMap[area.icon] ?? Scale;
              const isOpen = openId === area.id;
              return (
                <motion.div key={area.id} custom={i} variants={fadeIn}>
                  <button
                    onClick={() => toggle(area.id)}
                    className={`w-full flex items-center justify-between gap-6 py-6 text-left group transition-colors ${isOpen ? "text-brand" : "text-gray-900 hover:text-brand"}`}
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-xs font-bold text-gray-200 group-hover:text-brand/40 transition-colors w-6 flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Icon size={20} strokeWidth={1.5} className={`flex-shrink-0 transition-colors ${isOpen ? "text-brand" : "text-gray-300 group-hover:text-brand"}`} />
                      <span className="text-lg md:text-xl font-extrabold tracking-tight">{area.name}</span>
                    </div>
                    <ChevronDown
                      size={18}
                      strokeWidth={2}
                      className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand" : "text-gray-300"}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pl-11 md:pl-16 grid md:grid-cols-2 gap-8">
                          <div>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">{area.content}</p>
                            {area.points.length > 0 && (
                              <ul className="space-y-2">
                                {area.points.map((pt) => (
                                  <li key={pt} className="flex items-start gap-3 text-sm text-gray-600">
                                    <span className="w-1 h-1 rounded-full bg-brand mt-2 flex-shrink-0" />
                                    {pt}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                          <div className="bg-gray-50 p-8 flex flex-col justify-between">
                            <div>
                              <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-3">Full Capability</p>
                              <p className="text-sm text-gray-400 leading-relaxed">
                                Available in both Arabic and English. Partner-led oversight on all mandates in this practice area.
                              </p>
                            </div>
                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-2 mt-8 text-sm font-bold uppercase tracking-widest text-brand group hover:gap-4 transition-all"
                            >
                              Discuss This Practice
                              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-extrabold mb-2">Discuss Your Mandate</h2>
            <p className="text-white/60 text-sm">Full capabilities available in both Arabic and English for all practice areas.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-brand px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-100 transition-all flex-shrink-0 group">
            Submit Corporate Enquiry
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
