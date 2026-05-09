import Footer from "@/components/layout/Footer";

export default function Home2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
