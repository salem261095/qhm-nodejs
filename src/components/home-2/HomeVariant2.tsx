"use client";

import Header from "@/components/layout/Header";
import HeroV2 from "./HeroV2";
import CompetenciesV2 from "./CompetenciesV2";
import PracticeAreasV2 from "./PracticeAreasV2";
import IndustryV2 from "./IndustryV2";
import MandatesV2 from "./MandatesV2";
import EnquiryV2 from "./EnquiryV2";
import Footer from "@/components/layout/Footer";

export default function HomeVariant2() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />
      <HeroV2 />
      <CompetenciesV2 />
      <PracticeAreasV2 />
      <IndustryV2 />
      <MandatesV2 />
      <EnquiryV2 />
      <Footer />
    </main>
  );
}
