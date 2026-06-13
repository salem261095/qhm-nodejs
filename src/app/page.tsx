import HomePage from "@/components/home/HomePage";
import { getInsights } from "@/lib/getInsights";

export default async function Home() {
  const { posts } = await getInsights();
  return <HomePage posts={posts} />;
}

