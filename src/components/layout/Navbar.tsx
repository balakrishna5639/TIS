"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About Us", href: "#about" },
  { name: "Admissions", href: "#admissions" },
  { name: "Academics", href: "#academics" },
  { name: "Campus Life", href: "#campus" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:flex w-full bg-slate-900 text-white/90 text-sm py-2 px-6 justify-end items-center gap-6 relative z-50">
        <a href="tel:+91-9837983791" className="flex items-center gap-2 hover:text-primary transition-colors">
          ADMISSIONS HELPLINE NO. +91-9837983791
        </a>
      </div>
      
      <header
        className={cn(
          "fixed left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "top-0 bg-white/80 backdrop-blur-md shadow-sm py-4"
            : "top-0 md:top-9 bg-transparent py-6"
        )}
      >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={cn(
              "text-2xl font-heading font-bold tracking-tight",
              isScrolled ? "text-secondary" : "text-white"
            )}
          >
            TIS<span className="text-primary">.</span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors",
                  isScrolled ? "text-slate-600" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="#apply"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50"
            >
              Apply Now
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X
              className={cn("w-6 h-6", isScrolled ? "text-secondary" : "text-slate-800")}
            />
          ) : (
            <Menu
              className={cn("w-6 h-6", isScrolled ? "text-secondary" : "text-white")}
            />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center gap-8"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-heading font-semibold text-secondary hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#apply"
                className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
    </>
  );
};
