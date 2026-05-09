import type { Metadata } from "next";
import HomeVariant3 from "@/components/home-3/HomeVariant3";

export const metadata: Metadata = {
  title: "QHM Law Firm - Intelligence Hub",
  description: "Dynamic legal intelligence and corporate counsel for clients operating in Saudi Arabia.",
};

export default function HomeVariant3Page() {
  return <HomeVariant3 />;
}
