"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { corporateEnquiryFields, editorialWipe, sectionReveal, ScrollTextReveal } from "./shared";

export default function EnquiryV2() {
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
          <motion.div variants={editorialWipe}>
            <motion.h2 variants={editorialWipe} custom={1} className="mt-4 text-4xl md:text-5xl font-light text-brand leading-tight mb-6">
              <ScrollTextReveal>Discuss Your Mandate</ScrollTextReveal>
            </motion.h2>
            <motion.p variants={editorialWipe} custom={2} className="text-brand/50 text-base leading-relaxed mb-10 max-w-md">
              We act exclusively for multinational corporations, financial institutions, and regional headquarters requiring precision, discretion, and commercial alignment.
            </motion.p>
            <div className="flex flex-col gap-4 text-sm">
              <motion.div variants={editorialWipe} custom={3} className="flex items-center gap-3 text-brand/60">
                <Phone size={14} className="text-brand flex-shrink-0" /> +966 920029088
              </motion.div>
              <motion.div variants={editorialWipe} custom={4} className="flex items-center gap-3 text-brand/60">
                <Mail size={14} className="text-brand flex-shrink-0" /> manager@qhmlawfirm.com
              </motion.div>
              <motion.div variants={editorialWipe} custom={5} className="flex items-center gap-3 text-brand/60">
                <MapPin size={14} className="text-brand flex-shrink-0" /> Jeddah HQ - Riyadh Office
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={editorialWipe} custom={1}>
            <form className="flex flex-col gap-5">
              {corporateEnquiryFields.map((field, index) =>
                field.type === "select" ? (
                  <motion.div key={field.name} variants={editorialWipe} custom={index * 0.7} className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium uppercase text-brand/70">{field.label}</label>
                    <select
                      name={field.name}
                      required={field.required}
                      className="border-b border-brand/20 py-3 text-sm text-brand bg-transparent focus:outline-none focus:border-brand transition-colors"
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                ) : (
                  <motion.div key={field.name} variants={editorialWipe} custom={index * 0.7} className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium uppercase text-brand/70">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="border-b border-brand/20 py-3 text-sm text-brand placeholder:text-brand/30 bg-transparent focus:outline-none focus:border-brand transition-colors"
                    />
                  </motion.div>
                )
              )}
              <motion.button
                variants={editorialWipe}
                custom={corporateEnquiryFields.length * 0.7}
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-3 border border-brand bg-brand px-8 py-4 text-sm font-medium uppercase text-white transition-all hover:bg-white hover:text-brand group"
              >
                Submit Enquiry
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
