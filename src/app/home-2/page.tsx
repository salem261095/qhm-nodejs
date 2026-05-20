import type { Metadata } from "next";
import HomeVariant2 from "@/components/home-2/HomeVariant2";

export const metadata: Metadata = {
  title: "Editorial Layout",
  description: "Qaisar Hamed Metawea Law Firm, partner-led corporate counsel in Saudi Arabia.",
  alternates: { canonical: "/home-2" },
};

export default function HomeVariant2Page() {
  return <HomeVariant2 />;
}
