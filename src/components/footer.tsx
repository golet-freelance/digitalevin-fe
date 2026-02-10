"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const footerLinks = {
    [t.footer.navigation]: [
      { label: t.footer.links.works, href: "/works" },
      { label: t.footer.links.services, href: "/services" },
      { label: t.footer.links.about, href: "/about" },
      { label: t.footer.links.contact, href: "/contact" },
    ],
    [t.footer.servicesTitle]: [
      { label: t.footer.links.uiux, href: "/services" },
      { label: t.footer.links.webdev, href: "/services" },
      { label: t.footer.links.ecommerce, href: "/services" },
      { label: t.footer.links.seo, href: "/services" },
    ],
    [t.footer.social]: [
      { label: "Twitter / X", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Dribbble", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  };
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-electric">
                <span className="text-sm font-bold text-white">D</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Digital<span className="text-electric">evin</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
            <a
              href={`mailto:${t.footer.email}`}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-electric hover:underline"
            >
              {t.footer.email}
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold">{title}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Digitalevin. {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              {t.footer.privacy}
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
