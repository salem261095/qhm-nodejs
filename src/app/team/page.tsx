import type { Metadata } from "next";
import TeamPage from "@/components/team/TeamPage";

export const metadata: Metadata = {
  title: "Our Team | QHM Law Firm",
  description: "Meet the QHM legal team — a multi-disciplinary group combining Saudi regulatory expertise with international commercial experience.",
};

export default function Team() {
  return <TeamPage />;
}
