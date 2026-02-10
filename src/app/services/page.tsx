"use client";

import Link from "next/link";
import { ArrowRight, Check, Zap, Rocket, Crown } from "lucide-react";
import { FadeUp } from "@/components/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function ServicesPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const packages = [
    {
      name: t.services.packages.starter.name,
      icon: Zap,
      price: t.services.packages.starter.price,
      period: t.services.packages.starter.period,
      timeline: t.services.packages.starter.timeline,
      desc: t.services.packages.starter.desc,
      features: t.services.packages.starter.features,
      popular: false,
    },
    {
      name: t.services.packages.growth.name,
      icon: Rocket,
      price: t.services.packages.growth.price,
      period: t.services.packages.growth.period,
      timeline: t.services.packages.growth.timeline,
      desc: t.services.packages.growth.desc,
      features: t.services.packages.growth.features,
      popular: true,
    },
    {
      name: t.services.packages.premium.name,
      icon: Crown,
      price: t.services.packages.premium.price,
      period: t.services.packages.premium.period,
      timeline: t.services.packages.premium.timeline,
      desc: t.services.packages.premium.desc,
      features: t.services.packages.premium.features,
      popular: false,
    },
  ];
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <p className="text-sm font-medium text-electric">{t.services.hero.badge}</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {t.services.hero.title}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                {t.services.hero.subtitle}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Packages */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <FadeUp key={pkg.name} delay={i * 120}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    pkg.popular
                      ? "border-electric bg-electric/5 shadow-lg shadow-electric/10"
                      : "border-border bg-card"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-electric px-4 py-1 text-xs font-medium text-white">
                      {t.services.cta.mostPopular}
                    </div>
                  )}                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                    <pkg.icon size={22} />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{pkg.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{pkg.desc}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="ml-2 text-sm text-muted-foreground">{pkg.period}</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Timeline: {pkg.timeline}</p>

                  <ul className="mt-8 flex-1 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check size={16} className="mt-0.5 shrink-0 text-electric" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`mt-8 block rounded-2xl py-3 text-center text-sm font-medium transition-all ${
                      pkg.popular
                        ? "bg-electric text-white hover:bg-electric/90 hover:shadow-lg hover:shadow-electric/25 btn-shine"
                        : "border border-border bg-background hover:bg-muted"
                    }`}
                  >
                    {t.services.cta.choosePlan}
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Custom */}
      <section className="bg-muted/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Need something custom?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Every project is unique. Let&apos;s discuss your specific requirements and create a
                tailored solution that perfectly fits your goals and budget.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-electric px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-electric/90 hover:shadow-lg hover:shadow-electric/25 btn-shine"
              >
                Get a Custom Quote
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
