import type { Metadata } from "next";
import TeamPage from "@/components/team/TeamPage";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the QHM legal team, a multi-disciplinary group combining Saudi regulatory expertise with international commercial experience.",
  alternates: { canonical: "/team" },
};

export default function Team() {
  return <TeamPage />;
}
