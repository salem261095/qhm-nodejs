"use client";

import VariantHeader from "./VariantHeader";
import Hero from "./Hero";
import WhyQhm from "./WhyQhm";
import ExpertiseExplorer from "./ExpertiseExplorer";
import SectorCinema from "./SectorCinema";
import MandatesStream from "./MandatesStream";
import OfficesAndCta from "./OfficesAndCta";
import VariantFooter from "./VariantFooter";

export default function HomeVariant3() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <VariantHeader />
      <Hero />
      <WhyQhm />
      <ExpertiseExplorer />
      <SectorCinema />
      <MandatesStream />
      <OfficesAndCta />
      <VariantFooter />
    </main>
  );
}
