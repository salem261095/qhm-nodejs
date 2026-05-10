import HeroSection from "@/components/home/HeroSection";
import CoreCompetencies from "@/components/home/CoreCompetencies";
import PracticeAreas from "@/components/home/PracticeAreas";
import IndustryFocus from "@/components/home/IndustryFocus";
import RepresentativeMandates from "@/components/home/RepresentativeMandates";
import CorporateEnquiryForm from "@/components/home/CorporateEnquiryForm";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoreCompetencies />
      <PracticeAreas />
      <IndustryFocus />
      <RepresentativeMandates />
      <CorporateEnquiryForm />
      <Newsletter />
    </>
  );
}
