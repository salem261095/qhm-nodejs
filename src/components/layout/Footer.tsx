import Link from "next/link";
import { homepageContent } from "@/data/homepage";

export default function Footer() {
  const { footer } = homepageContent;

  return (
    <footer className="bg-brand-solid text-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold">{footer.firmName}</h2>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              {footer.description}
            </p>
            <div className="flex space-x-4 pt-4">
              {footer.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          
          {footer.offices.map((office) => (
            <div key={office.label} className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold">{office.label}</h3>
              <address className="not-italic text-white/80 text-sm space-y-1">
                {office.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </address>
              <a
                href={office.mapHref}
                className="text-white hover:underline text-sm font-medium pt-2 inline-block"
              >
                {office.mapLabel}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-xs">
            &copy; {new Date().getFullYear()} {footer.firmName} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
