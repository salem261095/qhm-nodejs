"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X } from "lucide-react";
import { navItems } from "@/data/homepage";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const flatNav = navItems.map((item) => ({ label: item.label, href: item.href }));

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Check if we are on one of the homepages which have dark background video backdrops
  const isHome = pathname === "/" || pathname === "/home-2";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Determine state parameters
  const isTransparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent border-b border-transparent py-5"
            : "bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.08)] py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 sm:px-8 lg:px-10">
          <Link href="/" className="block shrink-0" onClick={() => setMenuOpen(false)}>
            <div className="relative w-28 md:w-36">
              <Image
                src="/logo/QHM_Blue.svg"
                alt="QHM Law Firm"
                width={144}
                height={88}
                priority
                className={`h-auto w-full object-contain transition-opacity duration-500 ${
                  isTransparent ? "opacity-0" : "opacity-100"
                }`}
              />
              <Image
                src="/logo/QHM_White.svg"
                alt="QHM Law Firm"
                width={144}
                height={88}
                priority
                className={`absolute inset-0 h-auto w-full object-contain transition-opacity duration-500 ${
                  isTransparent ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {flatNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-light uppercase tracking-wide transition-colors duration-500 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                  isTransparent
                    ? "text-white/78 hover:text-white after:bg-white"
                    : "text-brand/70 hover:text-brand after:bg-brand"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              aria-label="Contact"
              className={`flex h-10 w-10 items-center justify-center border transition-all duration-500 ${
                isTransparent
                  ? "border-white/20 text-white/75 hover:border-white hover:text-white"
                  : "border-brand/20 text-brand/55 hover:border-brand hover:text-brand"
              }`}
            >
              <Mail size={16} />
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className={`flex h-10 w-10 flex-col items-center justify-center gap-[5px] border transition-all duration-500 lg:hidden ${
                isTransparent
                  ? "border-white/20 text-white"
                  : "border-brand/20 text-brand"
              }`}
              aria-label="Open menu"
            >
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.68, ease }}
            className="fixed inset-0 z-[60] flex flex-col bg-white text-brand"
          >
            <div className="flex items-center justify-between px-5 py-4 sm:px-8">
              <Image
                src="/logo/QHM_Blue.svg"
                alt="QHM Law Firm"
                width={180}
                height={60}
                className="h-auto w-36 object-contain"
              />
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center border border-brand/20 text-brand"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-6 px-6">
              {flatNav.map((link, index) => (
                <span key={link.href} className="overflow-hidden border-b border-brand/10 pb-6">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 + index * 0.07, duration: 0.75, ease }}
                    className="block"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-4xl font-light uppercase text-brand transition-colors hover:text-brand/50 sm:text-5xl"
                    >
                      {link.label}
                    </Link>
                  </motion.span>
                </span>
              ))}
            </nav>

            <div className="flex items-center justify-between border-t border-brand/10 px-6 py-6 text-xs font-light uppercase text-brand/42">
              <span>Jeddah</span>
              <span>Riyadh</span>
              <span>QHM</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
