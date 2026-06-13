"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type InsightPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  href: string;
  category: string;
  image?: string;
};

interface InsightsListingProps {
  initialPosts: InsightPost[];
}

export default function InsightsListing({ initialPosts }: InsightsListingProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 6;

  const SPECIFIED_CATEGORIES = useMemo(() => [
    "All",
    "Market Insights",
    "Corporate & Commercial",
    "Capital Markets",
    "Tax & Zakat",
    "Employment",
    "Regulatory Updates",
    "Data Protection",
    "Technology & IP",
    "Dispute Resolution",
    "Foreign Investment"
  ], []);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") return initialPosts;
    const norm = selectedCategory.toLowerCase().trim();
    return initialPosts.filter((post) => {
      const pCat = (post.category || "").toLowerCase().trim();
      if (norm === "market insights" && pCat.includes("market")) return true;
      if (norm === "regulatory updates" && (pCat.includes("regulatory") || pCat.includes("legal update") || pCat.includes("law"))) return true;
      if (norm === "corporate & commercial" && (pCat.includes("corporate") || pCat.includes("commercial"))) return true;
      return pCat === norm || pCat.includes(norm) || norm.includes(pCat);
    });
  }, [initialPosts, selectedCategory]);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredPosts.length / itemsPerPage));
  }, [filteredPosts]);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredPosts.slice(start, start + itemsPerPage);
  }, [filteredPosts, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section ref={sectionRef} className="border-t border-brand bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-xs font-light uppercase text-brand">Publications Archive</p>
          <h2 className="mt-4 text-4xl font-semibold uppercase leading-tight text-brand sm:text-5xl">
            Recent Analysis
          </h2>
        </div>

        <div className="mb-12 flex flex-wrap gap-2.5 border-b border-brand pb-8">
          {SPECIFIED_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isSelected
                    ? "bg-brand text-white border border-brand"
                    : "bg-bg-base text-brand border border-brand hover:border-brand hover:bg-brand"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {paginatedPosts.length > 0 ? (
                paginatedPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group flex flex-col bg-white border border-brand p-5 transition-all duration-300 hover:border-brand hover:shadow-sm"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-brand text-brand">
                          <span className="text-xs font-semibold uppercase tracking-wider">QHM Insight</span>
                        </div>
                      )}
                      <div className="absolute top-3 left-3 bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                        {post.category}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col flex-grow">
                      <p className="text-xs font-light uppercase text-black/40">{post.date}</p>
                      <h3 className="mt-3 text-xl font-light leading-snug text-brand transition-colors group-hover:text-brand">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-black/60 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link
                        href={post.href}
                        className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold uppercase text-brand transition-colors group-hover:text-brand"
                      >
                        Read Insight
                        <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-full py-24 text-center border border-brand bg-bg-base">
                  <p className="text-sm font-light text-brand uppercase tracking-wider">
                    No publications found under this topic
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-2 border-t border-brand pt-8">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="flex h-10 w-10 items-center justify-center border border-brand text-brand transition-all hover:bg-brand hover:text-white disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const isActive = currentPage === page;
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => handlePageChange(page)}
                  className={`flex h-10 w-10 items-center justify-center text-sm font-medium transition-all ${
                    isActive
                      ? "bg-brand text-white font-semibold"
                      : "border border-brand text-brand hover:bg-brand"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="flex h-10 w-10 items-center justify-center border border-brand text-brand transition-all hover:bg-brand hover:text-white disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

