"use client";

import Link from "next/link";
import { ArrowRight, Check, Zap, Rocket, Crown } from "lucide-react";
import { FadeUp } from "@/components/animations";

const packages = [
  {
    name: "Starter",
    icon: Zap,
    price: "$2,500",
    period: "one-time",
    timeline: "2-3 weeks",
    desc: "Perfect for startups and small businesses that need a professional online presence.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 round of revisions",
      "CMS integration",
    ],
    popular: false,
  },
  {
    name: "Growth",
    icon: Rocket,
    price: "$5,000",
    period: "one-time",
    timeline: "4-6 weeks",
    desc: "For growing brands that need advanced functionality and custom design.",
    features: [
      "Up to 12 pages",
      "Custom UI/UX design",
      "Advanced SEO & analytics",
      "Blog / CMS system",
      "3 rounds of revisions",
      "Performance optimization",
      "Social media integration",
      "E-mail marketing setup",
    ],
    popular: true,
  },
  {
    name: "Premium",
    icon: Crown,
    price: "$10,000+",
    period: "custom",
    timeline: "6-10 weeks",
    desc: "Full-scale digital solutions for established brands with complex requirements.",
    features: [
      "Unlimited pages",
      "Full custom design system",
      "E-commerce integration",
      "Custom animations & interactions",
      "Unlimited revisions",
      "A/B testing setup",
      "Multi-language support",
      "Dedicated project manager",
      "3 months post-launch support",
    ],
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <p className="text-sm font-medium text-electric">Services & Pricing</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Solutions for Every Stage
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Transparent pricing, premium quality. Choose the package that fits your needs
                or let&apos;s create a custom plan together.
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
                      Most Popular
                    </div>
                  )}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric">
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
                    Book a Call
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
