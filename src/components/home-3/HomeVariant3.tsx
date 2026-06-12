"use client";

import Header from "@/components/layout/Header";
import Hero from "./Hero";
import WhyQhm from "./WhyQhm";
import FirmProfileSpotlight from "./FirmProfileSpotlight";
import ExpertiseExplorer from "./ExpertiseExplorer";
import SectorCinema from "./SectorCinema";
import ClientLogoRibbon from "./ClientLogoRibbon";

import MandatesStream from "./MandatesStream";
import OfficesAndCta from "./OfficesAndCta";
import Footer from "@/components/layout/Footer";

export default function HomeVariant3() {
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
      <OfficesAndCta />
      <Footer />
    </main>
  );
}
