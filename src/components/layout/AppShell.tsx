"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandaloneVariant =
    pathname === "/home-2" ||
    pathname.startsWith("/home-2/") ||
    pathname === "/home-3" ||
    pathname.startsWith("/home-3/");

  if (isStandaloneVariant) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen flex-col pt-20">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
