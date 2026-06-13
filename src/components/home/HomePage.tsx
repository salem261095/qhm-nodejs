"use client";

import Header from "@/components/layout/Header";
import Hero from "./Hero";
import WhyQhm from "./WhyQhm";
import FirmProfileSpotlight from "./FirmProfileSpotlight";
import ExpertiseExplorer from "./ExpertiseExplorer";
import SectorCinema from "./SectorCinema";
import ClientLogoRibbon from "./ClientLogoRibbon";
import HomeInsights from "@/components/insights/HomeInsights";
import MandatesStream from "./MandatesStream";
import OfficesAndCta from "./OfficesAndCta";
import Footer from "@/components/layout/Footer";
import { InsightPost } from "@/lib/getInsights";

interface HomePageProps {
  posts: InsightPost[];
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <WhyQhm />
      <FirmProfileSpotlight />
      <ExpertiseExplorer />
      <SectorCinema />
      <ClientLogoRibbon />
      <MandatesStream />
      <HomeInsights posts={posts} />
      <OfficesAndCta />
      <Footer />
    </main>
  );
}
