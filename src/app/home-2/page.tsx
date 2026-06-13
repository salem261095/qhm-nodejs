import type { Metadata } from "next";
import HomeVariant2 from "@/components/home-2/HomeVariant2";
import { getInsights } from "@/lib/getInsights";

export const metadata: Metadata = {
  title: "Editorial Layout",
  description: "Qaisar Hamed Metawea Law Firm, partner-led corporate counsel in Saudi Arabia.",
  alternates: { canonical: "/home-2" },
};

export default async function HomeVariant2Page() {
  const { posts } = await getInsights();
  return <HomeVariant2 posts={posts} />;
}
