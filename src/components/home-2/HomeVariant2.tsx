"use client";

import HeroV2 from "./HeroV2";
import CompetenciesV2 from "./CompetenciesV2";
import PracticeAreasV2 from "./PracticeAreasV2";
import IndustryV2 from "./IndustryV2";
import MandatesV2 from "./MandatesV2";
import EnquiryV2 from "./EnquiryV2";

export default function HomeVariant2() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <HeroV2 />
      <CompetenciesV2 />
      <PracticeAreasV2 />
      <IndustryV2 />
      <MandatesV2 />
      <EnquiryV2 />
    </main>
  );
}
