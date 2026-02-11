"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/works", label: t.nav.works },
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    setDark(!dark);
    if (!dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/70 dark:bg-[#09090b]/70 backdrop-blur-2xl border-b border-border/50 shadow-lg shadow-black/[0.03] dark:shadow-black/20"
            : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-electric">
              <span className="text-sm font-bold text-white">D</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Digital<span className="text-electric">evin</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex h-9 items-center gap-1.5 rounded-xl px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted cursor-pointer"
                aria-label="Change language"
              >
                <span className="uppercase">{language}</span>
              </button>
              
              {/* Language Dropdown */}
              {langMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 z-20 min-w-[120px] overflow-hidden rounded-xl border border-border bg-background/95 backdrop-blur-xl shadow-lg">
                    <button
                      onClick={() => {
                        setLanguage("en");
                        setLangMenuOpen(false);
                      }}
                      className={`block w-full px-4 py-2.5 text-left text-sm font-medium transition-colors hover:bg-muted cursor-pointer ${
                        language === "en" ? "text-electric" : "text-foreground"
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("tr");
                        setLangMenuOpen(false);
                      }}
                      className={`block w-full px-4 py-2.5 text-left text-sm font-medium transition-colors hover:bg-muted cursor-pointer ${
                        language === "tr" ? "text-electric" : "text-foreground"
                      }`}
                    >
                      Türkçe
                    </button>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={toggleDark}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-foreground hover:bg-muted cursor-pointer"
              aria-label="Toggle theme"
            >
                {mounted ? (dark ? <Sun size={18} /> : <Moon size={18} />) : <div className="h-[18px] w-[18px]" />}
            </button>
            <Link
              href="/contact"
              className="hidden rounded-2xl bg-electric px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-electric/90 hover:shadow-lg hover:shadow-electric/25 btn-shine lg:block cursor-pointer"
            >
              {t.nav.freeConsultation}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-foreground lg:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 block rounded-2xl bg-electric px-5 py-3 text-center text-sm font-medium text-white cursor-pointer"
            >
              {t.nav.freeConsultation}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
