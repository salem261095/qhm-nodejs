"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandaloneVariant =
    pathname === "/" ||
    pathname === "/home-2" ||
    pathname.startsWith("/home-2/");

  if (isStandaloneVariant) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen flex-col pt-[66px]">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
