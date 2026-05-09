import HeroSection from "@/components/home/HeroSection";
import ManagingPartnerCard from "@/components/home/ManagingPartnerCard";
import CoreCompetencies from "@/components/home/CoreCompetencies";
import PracticeAreas from "@/components/home/PracticeAreas";
import IndustryFocus from "@/components/home/IndustryFocus";
import RepresentativeMandates from "@/components/home/RepresentativeMandates";
import TeamPreview from "@/components/home/TeamPreview";
import CorporateEnquiryForm from "@/components/home/CorporateEnquiryForm";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ManagingPartnerCard />
      <CoreCompetencies />
      <PracticeAreas />
      <IndustryFocus />
      <RepresentativeMandates />
      <TeamPreview />
      <CorporateEnquiryForm />
      <Newsletter />
    </>
  );
}
