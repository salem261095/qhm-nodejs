import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

const siteUrl = new URL("https://www.qhmlawfirm.com");
const siteName = "QHM Law Firm";
const siteDescription =
  "Qaisar Hamed Metawea Law Firm is a Saudi corporate law firm advising multinational companies, financial institutions, and regional headquarters.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteName,
  title: {
    default: "QHM Law Firm | Saudi Corporate Legal Counsel",
    template: "%s | QHM Law Firm",
  },
  description: siteDescription,
  keywords: [
    "Saudi corporate law firm",
    "QHM Law Firm",
    "Qaisar Hamed Metawea",
    "Saudi Arabia legal counsel",
    "FDI Saudi Arabia",
    "Zakat and tax disputes",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title: "QHM Law Firm | Saudi Corporate Legal Counsel",
    description: siteDescription,
    images: [
      {
        url: "/assets/identity/QHM_Blue.svg",
        width: 144,
        height: 88,
        alt: "QHM Law Firm",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "QHM Law Firm | Saudi Corporate Legal Counsel",
    description: siteDescription,
    images: ["/assets/identity/QHM_Blue.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/assets/identity/qhmfavicon.png",
    shortcut: "/assets/identity/qhmfavicon.png",
    apple: "/assets/identity/qhmfavicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
