import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import InsightsListing from "@/components/insights/InsightsListing";
import { getInsights } from "@/lib/getInsights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Legal updates, regulatory analysis, and market-entry commentary from QHM Law Firm in Saudi Arabia.",
  alternates: { canonical: "/insights" },
};

export default async function InsightsPage() {
  const { posts } = await getInsights();

  return (
    <main className="bg-white">
      <section className="border-b border-brand bg-bg-base px-5 pb-16 pt-24 sm:px-8 lg:px-10 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-light uppercase text-brand">Insights</p>
            <h1 className="max-w-5xl text-6xl font-semibold uppercase leading-[0.9] text-brand sm:text-7xl lg:text-[8rem]">
              Legal Insights
            </h1>
            <div className="mt-8 h-px w-full max-w-xl origin-left bg-brand" />
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-black/58">
              Regulatory updates, market-entry analysis, and corporate legal commentary for companies operating in Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      <InsightsListing initialPosts={posts} />

      <section className="bg-gray-850 px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-light uppercase text-white/45">Need Saudi Counsel?</p>
            <h2 className="mt-4 text-4xl font-semibold uppercase leading-tight md:text-6xl">
              Discuss a Corporate Mandate
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/58">
              Engage QHM for practical guidance on regulatory, transactional, and dispute-related matters in Saudi Arabia.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex min-h-12 items-center gap-4 border border-white bg-white px-6 text-sm font-medium uppercase text-gray-850 transition-colors hover:bg-gray-850 hover:text-white"
          >
            Contact QHM
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
