"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "@/components/animations";
import { projects, categories } from "@/lib/data";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function WorksPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [active, setActive] = useState("All");

  const categoryMap: Record<string, string> = {
    "All": t.works.filter.all,
    "Corporate": t.works.filter.corporate,
    "E-Commerce": t.works.filter.ecommerce,
    "SaaS": t.works.filter.saas,
    "Portfolio": t.works.filter.portfolio,
  };

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <p className="text-sm font-medium text-electric">{t.works.hero.badge}</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t.works.hero.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {t.works.hero.subtitle}
            </p>
          </FadeUp>

          {/* Filters */}
          <FadeUp delay={100}>
            <div className="mt-10 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition-all cursor-pointer ${active === cat
                      ? "bg-electric text-white shadow-lg shadow-electric/25"
                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                    }`}
                >
                  {categoryMap[cat] || cat}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <FadeUp key={project.id} delay={i * 80}>
                {project.externalUrl ? (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 hover:-translate-y-1 hover:scale-[1.02]">
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 dark:bg-black/90 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg">
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-medium text-muted-foreground">{t.works.projects[project.sector as keyof typeof t.works.projects]?.sector || project.sector}</p>
                          <span className="rounded-full bg-electric/10 px-2.5 py-0.5 text-xs font-medium text-electric">
                            {t.works[project.result as keyof typeof t.works] || project.result}
                          </span>
                        </div>
                        <h3 className="mt-2 text-lg font-semibold transition-colors group-hover:text-electric">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                          {t.works.projects[project.description as keyof typeof t.works.projects]?.description || project.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link href={`/works/${project.id}`} className="group block">
                    <div className="relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 hover:-translate-y-1 hover:scale-[1.02]">
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 dark:bg-black/90 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg">
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-medium text-muted-foreground">{t.works.projects[project.sector as keyof typeof t.works.projects]?.sector || project.sector}</p>
                          <span className="rounded-full bg-electric/10 px-2.5 py-0.5 text-xs font-medium text-electric">
                            {t.works[project.result as keyof typeof t.works] || project.result}
                          </span>
                        </div>
                        <h3 className="mt-2 text-lg font-semibold transition-colors group-hover:text-electric">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                          {t.works.projects[project.description as keyof typeof t.works.projects]?.description || project.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                )}
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
