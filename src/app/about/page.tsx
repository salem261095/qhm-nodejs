import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About QHM | Partner-Led Corporate Counsel in Saudi Arabia",
  description: "Qaisar Hamed Metawea Law Firm — Saudi-based corporate law firm advising multinationals, financial institutions, and regional headquarters.",
};

export default function About() {
  return <AboutPage />;
}
