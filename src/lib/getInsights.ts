import tempInsights from "@/data/tempInsights.json";

export type InsightPost = {
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

export async function getInsights() {
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
