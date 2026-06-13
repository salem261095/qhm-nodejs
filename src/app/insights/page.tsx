import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import tempInsights from "@/data/tempInsights.json";
import InsightsListing from "@/components/insights/InsightsListing";

type InsightPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  href: string;
  category: string;
  image?: string;
};

type WpRendered = {
  rendered?: string;
};

type WpPost = {
  id?: number;
  slug?: string;
  link?: string;
  date?: string;
  title?: WpRendered;
  excerpt?: WpRendered;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      alt_text?: string;
    }>;
    "wp:term"?: Array<Array<{
      name?: string;
      taxonomy?: string;
    }>>;
  };
};

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Legal updates, regulatory analysis, and market-entry commentary from QHM Law Firm in Saudi Arabia.",
  alternates: { canonical: "/insights" },
};

const fallbackPosts: InsightPost[] = tempInsights.map((post) => ({
  id: post.id,
  title: post.title,
  date: post.date,
  excerpt: post.excerpt,
  href: post.href,
  category: post.category,
}));

function decodeHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(value?: string) {
  if (!value) return "QHM Insight";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function getWpEndpoint() {
  const configured =
    process.env.WORDPRESS_API_URL ||
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
    "https://qhmlawfirm.com/wp";

  const endpoint = configured.replace(/\/$/, "");
  if (endpoint.includes("/wp-json/wp/v2/posts")) return endpoint;
  if (endpoint.includes("/wp-json")) return `${endpoint}/wp/v2/posts`;
  return `${endpoint}/wp-json/wp/v2/posts`;
}

function mapWpPost(post: WpPost): InsightPost {
  const category = post._embedded?.["wp:term"]
    ?.flat()
    .find((term) => term.taxonomy === "category")?.name;
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const title = decodeHtml(post.title?.rendered || "Untitled insight");
  const excerpt = decodeHtml(post.excerpt?.rendered || "");

  return {
    id: String(post.id || post.slug || title),
    title,
    date: formatDate(post.date),
    excerpt,
    href: post.link || "#",
    category: category || "Insight",
    image,
  };
}

async function getInsights() {
  const endpoint = getWpEndpoint();
  if (!endpoint) {
    return { posts: fallbackPosts, source: "fallback" as const };
  }

  try {
    const url = `${endpoint}${endpoint.includes("?") ? "&" : "?"}_embed=1&per_page=100`;
    const response = await fetch(url, { next: { revalidate: 3600 } });

    if (!response.ok) {
      return { posts: fallbackPosts, source: "fallback" as const };
    }

    const data = (await response.json()) as WpPost[];
    const posts = data.map(mapWpPost).filter((post) => post.title);

    return {
      posts: posts.length > 0 ? posts : fallbackPosts,
      source: posts.length > 0 ? ("wordpress" as const) : ("fallback" as const),
    };
  } catch {
    return { posts: fallbackPosts, source: "fallback" as const };
  }
}

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
