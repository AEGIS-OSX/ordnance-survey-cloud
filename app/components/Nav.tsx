"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ProjectImage } from "@/app/components/ProjectImage";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Integrations", href: "/integrations" },
    { name: "Security", href: "/security" },
    { name: "Status", href: "/status" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-50 flex h-[56px] w-full items-center justify-between bg-[var(--color-ink)] px-[var(--gutter)]"
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center focus-visible:outline-[var(--color-survey-orange)]">
            <ProjectImage
              id="logo"
              className="nav-logo h-auto w-[120px] object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-[var(--space-6)] md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[var(--text-label)] font-500 tracking-[0.04em] uppercase no-underline transition-colors duration-150 ease-out focus-visible:outline-[var(--color-survey-orange)] active:opacity-70 ${
                  isActive
                    ? "text-[var(--color-paper)]"
                    : "text-[var(--color-fog)] hover:text-[var(--color-paper)]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn-primary bg-[var(--color-survey-orange)] text-[var(--color-ink)] px-[var(--space-4)] py-[var(--space-2)] text-[var(--text-label)] font-500 tracking-[0.04em] uppercase no-underline transition-opacity duration-150 hover:opacity-90 focus-visible:outline-[var(--color-paper)] active:opacity-80"
          >
            Request API access
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Open menu"
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center text-[var(--color-paper)] md:hidden focus-visible:outline-[var(--color-survey-orange)] active:opacity-70"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex flex-col bg-[var(--color-ink)] p-[var(--gutter)]"
          >
            <div className="flex items-center justify-between mb-[var(--space-8)]">
              <ProjectImage
                id="logo"
                className="nav-logo h-auto w-[120px] object-contain"
              />
              <button
                aria-label="Close menu"
                onClick={toggleMenu}
                className="flex h-10 w-10 items-center justify-center text-[var(--color-paper)] focus-visible:outline-[var(--color-survey-orange)] active:opacity-70"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-[var(--space-4)]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-[family-name:var(--font-display)] text-[var(--text-display-md)] no-underline transition-colors duration-150 focus-visible:outline-[var(--color-survey-orange)] active:opacity-70 ${
                      isActive ? "text-[var(--color-paper)]" : "text-[var(--color-fog)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary mt-[var(--space-6)] inline-block bg-[var(--color-survey-orange)] text-[var(--color-ink)] px-[var(--space-6)] py-[var(--space-4)] text-center text-[var(--text-label)] font-500 tracking-[0.04em] uppercase no-underline focus-visible:outline-[var(--color-paper)] active:opacity-80"
              >
                Request API access
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
