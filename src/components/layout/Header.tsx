"use client";

import Link from "next/link";
import Image from "next/image";
import { navItems, headerCta } from "@/data/homepage";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

function DropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="text-sm font-bold tracking-wide text-gray-900 hover:text-brand transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-1 text-sm font-bold tracking-wide text-gray-900 hover:text-brand transition-colors focus:outline-none"
      >
        {item.label}
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 top-full mt-3 w-52 bg-white border border-gray-100 shadow-xl rounded-sm overflow-hidden z-50"
          >
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-sm text-gray-700 font-medium hover:bg-brand hover:text-white transition-colors border-b border-gray-50 last:border-0"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isMobileMenuOpen
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-sm py-3"
            : "bg-white/90 backdrop-blur-xl border-b border-gray-200/50 py-3"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0 relative z-50">
              <Link href="/" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="/logo/QHM_Blue.svg"
                  alt="QHM Law Firm Logo"
                  width={180}
                  height={50}
                  className="w-auto h-10 md:h-12 transition-all duration-300"
                  priority
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-10">
              {(navItems as NavItem[]).map((item) => (
                <DropdownItem key={item.label} item={item} />
              ))}
            </nav>

            <div className="hidden md:flex items-center relative z-50">
              <Link
                href={headerCta.href}
                className="bg-brand text-white px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-brand-solid transition-all shadow-md transform hover:-translate-y-0.5"
              >
                {headerCta.label}
              </Link>
            </div>

            <div className="md:hidden flex items-center relative z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex flex-col justify-center items-center w-10 h-10 space-y-[6px] focus:outline-none"
                aria-label="Toggle Menu"
              >
                <span className={`block w-7 h-[2px] bg-brand transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
                <span className={`block w-7 h-[2px] bg-brand transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`block w-7 h-[2px] bg-brand transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center pt-24 pb-12 px-6"
          >
            <nav className="flex flex-col space-y-6 mt-12 h-full justify-center">
              {(navItems as NavItem[]).map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.08, duration: 0.4 }}
                >
                  {item.children ? (
                    <div className="border-b border-gray-100 pb-5">
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full text-3xl font-extrabold text-gray-900 focus:outline-none"
                      >
                        {item.label}
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 flex flex-col space-y-3 pl-4">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-lg font-semibold text-brand hover:text-brand-solid transition-colors"
                                >
                                  → {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-extrabold text-gray-900 hover:text-brand transition-colors block border-b border-gray-100 pb-5"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + navItems.length * 0.08, duration: 0.4 }}
                className="pt-6"
              >
                <Link
                  href={headerCta.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-brand text-white px-8 py-5 text-center font-bold uppercase tracking-[0.15em] hover:bg-brand-solid transition-all block w-full shadow-lg"
                >
                  {headerCta.label}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
