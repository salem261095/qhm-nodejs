import type { Metadata } from "next";
import ExpertisePage from "@/components/expertise/ExpertisePage";

export const metadata: Metadata = {
  title: "Practice Areas & Expertise | QHM Law Firm",
  description: "QHM's practice areas are structured around multinational corporations operating in or entering Saudi Arabia — from Corporate & FDI to Tax, Litigation, and IP.",
};

export default function Expertise() {
  return <ExpertisePage />;
}
