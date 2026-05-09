"use client";

import { homepageContent } from "@/data/homepage";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function CoreCompetencies() {
  const { coreCompetencies } = homepageContent;
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 lg:self-start">
            <span className="text-brand font-bold tracking-[0.2em] uppercase text-xs sm:text-sm block mb-6 border-l-2 border-brand pl-4">
              Core Competencies
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
              Partner-led advisory designed for execution.
            </h2>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="border-t-2 border-gray-900">
              {coreCompetencies.map((competency, index) => {
                const isActive = activeIndex === index;
                return (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      onClick={() => setActiveIndex(isActive ? null : index)}
                      className="w-full flex items-center justify-between py-8 text-left group"
                    >
                      <div className="flex items-baseline gap-6 sm:gap-8">
                        <span className={`font-mono text-sm sm:text-base font-bold transition-colors ${isActive ? 'text-brand' : 'text-gray-400 group-hover:text-brand'}`}>
                          {competency.number}
                        </span>
                        <h3 className={`text-2xl sm:text-3xl font-bold transition-colors ${isActive ? 'text-brand' : 'text-gray-900 group-hover:text-brand'}`}>
                          {competency.title}
                        </h3>
                      </div>
                      <div className={`ml-4 p-2 rounded-full transition-colors ${isActive ? 'bg-brand text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-brand/10 group-hover:text-brand'}`}>
                        {isActive ? <Minus size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-10 pl-14 sm:pl-16 pr-4 sm:pr-12">
                            <p className="text-gray-600 leading-relaxed font-light text-lg sm:text-xl">
                              {competency.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
