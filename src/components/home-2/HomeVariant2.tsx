"use client";

import Header from "@/components/layout/Header";
import HeroV2 from "./HeroV2";
import CompetenciesV2 from "./CompetenciesV2";
import FirmProfileEditorial from "./FirmProfileEditorial";
import PracticeAreasV2 from "./PracticeAreasV2";
import IndustryV2 from "./IndustryV2";
import ClientLogoGrid from "./ClientLogoGrid";
import MandatesV2 from "./MandatesV2";
import HomeInsights from "@/components/insights/HomeInsights";
import EnquiryV2 from "./EnquiryV2";
import Footer from "@/components/layout/Footer";
import { InsightPost } from "@/lib/getInsights";

interface HomeVariant2Props {
  posts: InsightPost[];
}

export default function HomeVariant2({ posts }: HomeVariant2Props) {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />
      <HeroV2 />
      <CompetenciesV2 />
      <FirmProfileEditorial />
      <PracticeAreasV2 />
      <IndustryV2 />
      <ClientLogoGrid />
      <MandatesV2 />
      <HomeInsights posts={posts} />
      <EnquiryV2 />
      <Footer />
    </main>
  );
}
