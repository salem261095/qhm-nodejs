"use client";

import { homepageContent } from "@/data/homepage";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const { newsletter } = homepageContent;

  return (
    <section className="py-24 lg:py-32 bg-brand text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <span className="font-bold tracking-[0.2em] uppercase text-xs sm:text-sm block mb-6 border-l-2 border-white pl-4 text-white/70">
              {newsletter.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6 whitespace-pre-line">
              {newsletter.heading}
            </h2>
            <p className="font-light text-lg md:text-xl text-white/80 leading-relaxed">
              {newsletter.description}
            </p>
          </div>
          
          <div className="w-full lg:w-1/2">
            <form className="relative w-full max-w-lg lg:ml-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={newsletter.placeholder}
                required
                className="w-full bg-transparent border-b-2 border-white/30 text-white px-0 py-4 focus:outline-none focus:border-white transition-colors rounded-none font-medium text-lg lg:text-xl placeholder-white/40"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-white/70 transition-colors p-2"
                aria-label="Subscribe"
              >
                <ArrowRight size={28} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
