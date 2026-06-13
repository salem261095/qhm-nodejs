import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homepageContent } from "@/data/homepage";

const { footer } = homepageContent;

export default function Footer() {
  return (
    <footer className="bg-brand px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center pt-10 text-center">
        <Image
          src="/assets/identity/QHM_White.svg"
          alt="QHM Law Firm"
          width={150}
          height={101}
          className="h-auto w-28 object-contain"
        />
        <p className="mt-7 text-xs font-medium uppercase text-white/70">{footer.firmName}</p>
        <p className="mt-3 text-sm leading-7 text-white/75">{footer.description}</p>
        <Link
          href="/about"
          className="mt-6 inline-flex items-center gap-3 text-sm font-medium uppercase text-white/85 transition-colors hover:text-white"
        >
          About Us
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </footer>
  );
}
