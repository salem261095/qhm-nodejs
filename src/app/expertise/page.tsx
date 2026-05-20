import type { Metadata } from "next";
import ExpertisePage from "@/components/expertise/ExpertisePage";

export const metadata: Metadata = {
  title: "Practice Areas & Expertise",
  description: "QHM's practice areas support multinational corporations operating in or entering Saudi Arabia, from Corporate and FDI to Tax, Litigation, and IP.",
  alternates: { canonical: "/expertise" },
};

export default function Expertise() {
  return <ExpertisePage />;
}
