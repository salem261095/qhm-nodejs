"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InsightPost } from "@/lib/getInsights";

interface HomeInsightsProps {
  posts: InsightPost[];
}

export default function HomeInsights({ posts }: HomeInsightsProps) {
  // Take only the last 3 posts (or first 3 depending on sorting, assuming they are sorted newest first)
  const recentPosts = posts.slice(0, 3);

  return (
    <section className="border-t border-brand bg-bg-base px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-xs font-light uppercase text-brand">Publications</p>
          <h2 className="mt-4 text-4xl font-semibold uppercase leading-tight text-brand sm:text-5xl">
            Latest Insights
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col bg-white border border-brand p-5 transition-all duration-300 hover:border-brand hover:shadow-sm"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand/5">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-brand/5 text-brand">
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
            <div className="col-span-full py-24 text-center border border-brand bg-white">
              <p className="text-sm font-light text-brand uppercase tracking-wider">
                No insights available.
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 flex justify-start">
          <Link
            href="/insights"
            className="group inline-flex min-h-12 items-center gap-4 border border-brand bg-brand px-6 text-sm font-medium uppercase text-white transition-colors hover:bg-white hover:text-brand"
          >
            Load More Insights
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
