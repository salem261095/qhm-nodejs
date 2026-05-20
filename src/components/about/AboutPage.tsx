"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { aboutData } from "@/data/about";

const { hero, intro, strategicFocus, methodology, positioning, leadership } = aboutData;

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function AboutPage() {
  return (
    <main>

      <section className="relative bg-gray-950 text-white pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,rgba(25,57,138,0.6)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeIn} className="text-xs font-bold tracking-[0.35em] uppercase text-brand mb-4">
              {hero.eyebrow}
            </motion.p>
            <motion.h1
              variants={fadeIn}
              className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-[0.95] tracking-tighter mb-8 max-w-3xl"
            >
              {hero.heading}
            </motion.h1>
            <motion.p variants={fadeIn} className="max-w-xl text-xl leading-relaxed text-white/80">
              {hero.subheading}
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-6">{intro.label}</p>
              <p className="text-2xl md:text-3xl font-bold text-gray-950 leading-snug">{intro.body}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="pt-2"
            >
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{strategicFocus.intro}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100">
                {strategicFocus.pillars.map((p, i) => (
                  <div key={p.title} className="bg-white p-6 group">
                    <span className="text-xs font-bold text-gray-200 block mb-2">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{p.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.p variants={fadeIn} className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-4">
              {methodology.label}
            </motion.p>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold mb-16 leading-tight max-w-xl">
              {methodology.heading}
            </motion.h2>

            <div className="divide-y divide-white/10">
              {methodology.pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  custom={i}
                  variants={fadeIn}
                  className="group grid md:grid-cols-12 gap-6 py-10 hover:bg-white/[0.02] transition-colors px-2"
                >
                  <div className="md:col-span-1">
                    <span className="text-4xl font-extrabold text-white/5 group-hover:text-brand/20 transition-colors leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-lg font-bold">{p.title}</h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-sm leading-relaxed text-white/75">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeIn} className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-4">
              {positioning.label}
            </motion.p>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold mb-16 text-gray-950 leading-tight max-w-xl">
              {positioning.heading}
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-px bg-gray-100">
              {positioning.pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  custom={i}
                  variants={fadeIn}
                  className="bg-white p-10 group hover:bg-brand hover:text-white transition-all duration-300"
                >
                  <span className="text-5xl font-extrabold text-gray-100 group-hover:text-white/10 transition-colors leading-none block mb-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold text-gray-950 group-hover:text-white mb-4 transition-colors">{p.title}</h3>
                  <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 py-20 lg:py-32 pr-0 lg:pr-20 flex flex-col justify-center"
            >
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-6">{leadership.label}</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">{leadership.name}</h2>
              <p className="text-brand font-bold text-sm uppercase tracking-widest mb-8">{leadership.role}</p>
              <p className="mb-10 max-w-md text-base leading-relaxed text-white/78">{leadership.bio}</p>
              <Link
                href="/team"
                className="inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-brand group hover:gap-5 transition-all"
              >
                Meet The Team
                <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 relative min-h-[500px] lg:min-h-0"
            >
              <Image
                src={leadership.image}
                alt={leadership.name}
                fill
                className="object-cover object-top grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950/50 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-extrabold mb-2">Ready to Engage QHM?</h2>
            <p className="text-white/60 text-sm">Partner-level access from the first conversation.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-brand px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-100 transition-all flex-shrink-0 group"
          >
            Submit Enquiry
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </main>
  );
}
