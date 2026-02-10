"use client";

import Link from "next/link";
import { ArrowRight, Users, Target, Award, Heart, Globe, Lightbulb } from "lucide-react";
import { FadeUp } from "@/components/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    { label: t.about.stats.projects, value: "120+" },
    { label: t.about.stats.clients, value: "80+" },
    { label: t.about.stats.experience, value: "6+" },
    { label: t.about.stats.team, value: "12" },
  ];

  const values = [
    {
      icon: Target,
      title: t.about.values.resultsDriven.title,
      desc: t.about.values.resultsDriven.desc,
    },
    {
      icon: Heart,
      title: t.about.values.clientFirst.title,
      desc: t.about.values.clientFirst.desc,
    },
    {
      icon: Lightbulb,
      title: t.about.values.innovation.title,
      desc: t.about.values.innovation.desc,
    },
    {
      icon: Award,
      title: t.about.values.quality.title,
      desc: t.about.values.quality.desc,
    },
    {
      icon: Globe,
      title: t.about.values.accessibility.title,
      desc: t.about.values.accessibility.desc,
    },
    {
      icon: Users,
      title: t.about.values.collaboration.title,
      desc: t.about.values.collaboration.desc,
    },
  ];

  const team = [
    { name: "Alex Morgan", role: t.about.team.founder, initial: "A" },
    { name: "Jordan Lee", role: t.about.team.leadDev, initial: "J" },
    { name: "Samira Patel", role: t.about.team.designer, initial: "S" },
    { name: "Chris Wu", role: t.about.team.leadDev, initial: "C" },
    { name: "Olivia Santos", role: t.about.team.projectMgr, initial: "O" },
    { name: "Daniel Kim", role: "SEO & Growth Strategist", initial: "D" },
  ];
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <p className="text-sm font-medium text-electric">{t.about.hero.badge}</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {t.about.hero.title}{" "}
                <span className="gradient-text">Matter</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                {t.about.hero.subtitle}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <p className="text-3xl font-bold text-electric sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeUp>
              <div>
                <p className="text-sm font-medium text-electric">{t.about.mission.badge}</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  {t.about.mission.title}
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    {t.about.mission.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="relative rounded-2xl border border-border bg-card p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric text-sm font-bold">
                      01
                    </div>
                    <div>
                      <h4 className="font-semibold">2019 — The Beginning</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Started as a solo freelancer with a focus on clean, modern web
                        design.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric text-sm font-bold">
                      02
                    </div>
                    <div>
                      <h4 className="font-semibold">2021 — Growing the Team</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Expanded to a team of 5, taking on larger projects and
                        enterprise clients.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric text-sm font-bold">
                      03
                    </div>
                    <div>
                      <h4 className="font-semibold">2023 — Full-Service Agency</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Launched branding, SEO, and e-commerce services. Reached 100+
                        completed projects.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric text-sm font-bold">
                      04
                    </div>
                    <div>
                      <h4 className="font-semibold">2025 — Today</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        A 12-person team delivering premium digital experiences for
                        brands worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <p className="text-sm font-medium text-electric">{t.about.values.badge}</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {t.about.values.title}
              </h2>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 100}>
                <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric transition-colors group-hover:bg-electric group-hover:text-white">
                    <v.icon size={22} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <p className="text-sm font-medium text-electric">{t.about.team.badge}</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {t.about.team.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                A diverse team of designers, developers, and strategists united by a
                passion for creating exceptional digital experiences.
              </p>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <FadeUp key={member.name} delay={i * 100}>
                <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-electric/10 text-xl font-bold text-electric">
                    {member.initial}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-electric to-blue-700 p-12 text-center text-white lg:p-20">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
              <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {t.about.cta.title}
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-blue-100">
                {t.about.cta.subtitle}
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-medium text-electric transition-all hover:bg-white/90 hover:shadow-lg"
                >
                  {t.about.cta.button}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/works"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
