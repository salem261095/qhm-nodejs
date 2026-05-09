"use client";

import { homepageContent } from "@/data/homepage";
import { ArrowRight } from "lucide-react";

export default function CorporateEnquiryForm() {
  const { corporateEnquiryFields } = homepageContent;

  return (
    <section className="py-24 lg:py-40 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          <div className="w-full lg:w-5/12">
            <span className="text-brand font-bold tracking-[0.2em] uppercase text-xs sm:text-sm block mb-6 border-l-2 border-brand pl-4">
              Corporate Engagement
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-8">
              Discuss Your Mandate.
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-12">
              For multinational corporations, institutional clients, and international law firms requiring trusted on-the-ground counsel in Saudi Arabia.
            </p>
            <div className="hidden lg:block w-24 h-1 bg-brand"></div>
          </div>

          <div className="w-full lg:w-7/12">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {corporateEnquiryFields.map((field, index) => (
                  <div key={index} className={`relative ${field.type === "email" || (field.type === "select" && field.name === "matterType") ? "sm:col-span-2" : ""}`}>
                    {field.type === "select" ? (
                      <div className="relative">
                        <select
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          defaultValue=""
                          className="peer w-full bg-transparent border-b border-gray-300 text-gray-900 py-3 focus:outline-none focus:border-brand transition-colors rounded-none appearance-none font-medium text-lg"
                        >
                          <option value="" disabled className="text-gray-400">
                            {field.placeholder}
                          </option>
                          {field.options?.map((opt, i) => (
                            <option key={i} value={opt} className="text-gray-900">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <label htmlFor={field.name} className="absolute -top-6 left-0 text-xs font-bold tracking-[0.1em] uppercase text-brand transition-all">
                          {field.label} {field.required && "*"}
                        </label>
                      </div>
                    ) : (
                      <div className="relative">
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          placeholder=" "
                          required={field.required}
                          className="peer w-full bg-transparent border-b border-gray-300 text-gray-900 py-3 focus:outline-none focus:border-brand transition-colors rounded-none font-medium text-lg placeholder-transparent"
                        />
                        <label htmlFor={field.name} className="absolute left-0 -top-6 text-xs font-bold tracking-[0.1em] uppercase text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-brand">
                          {field.label} {field.required && "*"}
                        </label>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="pt-8">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 bg-brand text-white px-10 py-5 font-bold text-sm tracking-[0.15em] uppercase hover:bg-brand-solid transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Submit Enquiry
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
