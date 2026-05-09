"use client";

import Link from "next/link";
import Image from "next/image";
import { homepageContent } from "@/data/homepage";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ManagingPartnerCard() {
  const { managingPartner } = homepageContent;

  return (
    <section className="py-24 lg:py-40 bg-[#fafafa] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center relative">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 h-[500px] lg:h-[700px] relative z-10"
          >
            <div className="absolute inset-0 bg-brand/5 mix-blend-multiply z-10"></div>
            <Image
              src="/assets/For Website Upgrade/FinalHeadShotsForWebsite/Qaisar.jpg"
              alt={managingPartner.name}
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative z-20 -mt-20 lg:-ml-24 lg:mt-0"
          >
            <div className="bg-white p-10 sm:p-14 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border-t-4 border-brand">
              <span className="text-brand font-bold tracking-widest uppercase text-xs mb-4 block">
                {managingPartner.role}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                {managingPartner.name}
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light mb-12">
                <p>{managingPartner.bio}</p>
                <p className="font-medium text-gray-900">{managingPartner.extendedBio}</p>
              </div>
              
              <Link
                href={managingPartner.cta.href}
                className="group inline-flex items-center gap-3 text-brand font-bold text-sm tracking-widest uppercase border-b-2 border-brand pb-1 hover:text-brand-solid hover:border-brand-solid transition-colors"
              >
                {managingPartner.cta.label}
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
