"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Gauge, TrendingUp, Users, Clock } from "lucide-react";
import { FadeUp } from "@/components/animations";
import { projects } from "@/lib/data";

export default function CaseStudyPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Link href="/works" className="mt-4 inline-flex items-center gap-2 text-electric hover:underline">
            <ArrowLeft size={16} /> Back to Works
          </Link>
        </div>
      </div>
    );
  }

  const metrics = [
    { icon: Gauge, label: "PageSpeed Score", value: "95+", desc: "Mobile & Desktop" },
    { icon: TrendingUp, label: "Conversion", value: project.result, desc: "vs. previous site" },
    { icon: Users, label: "User Satisfaction", value: "4.9/5", desc: "Post-launch survey" },
    { icon: Clock, label: "Load Time", value: "<1.5s", desc: "First Contentful Paint" },
  ];

  const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Figma"];

  const deliverables = [
    "UI/UX Design (Figma)",
    "Responsive Frontend Development",
    "CMS Integration",
    "Performance Optimization",
    "SEO Setup & Meta Tags",
    "Analytics Integration",
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} /> Back to Works
            </Link>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-electric/10 px-3 py-1 text-xs font-medium text-electric">
                {project.category}
              </span>
              <span className="text-sm text-muted-foreground">{project.sector}</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {project.description}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Cover Image */}
      <FadeUp>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="h-64 rounded-3xl sm:h-80 lg:h-[480px] overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${project.color}30, ${project.color}10)` }}
          >
            <div className="flex h-full items-center justify-center">
              <div className="w-64 h-44 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                <span className="text-xl font-bold" style={{ color: project.color }}>
                  {project.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Problem & Solution */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeUp>
              <div>
                <p className="text-sm font-medium text-electric">The Problem</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  The Challenge
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  The client&apos;s existing website was outdated, slow, and not optimized for conversions.
                  With poor mobile responsiveness and a confusing user journey, they were losing
                  potential customers at every touchpoint. They needed a complete digital transformation
                  that would reflect their brand&apos;s premium positioning.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Bounce rates were high, load times exceeded 5 seconds, and the checkout flow
                  had a 75% abandonment rate. The design felt dated and didn&apos;t inspire trust.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div>
                <p className="text-sm font-medium text-electric">The Solution</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  Our Approach
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We conducted in-depth user research and competitive analysis to inform a complete
                  redesign. Our approach focused on simplifying the user journey, optimizing for speed,
                  and building trust through modern design and clear messaging.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We used a component-based architecture with Next.js for blazing-fast performance,
                  implemented progressive loading patterns, and crafted a design system that scales
                  with the client&apos;s growing product line.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="bg-muted/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <p className="text-sm font-medium text-electric">The Results</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Impact & Metrics
              </h2>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <FadeUp key={m.label} delay={i * 100}>
                <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                    <m.icon size={22} />
                  </div>
                  <p className="mt-4 text-3xl font-bold text-electric">{m.value}</p>
                  <p className="mt-1 text-sm font-medium">{m.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{m.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Tech Stack */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeUp>
              <div>
                <p className="text-sm font-medium text-electric">What We Delivered</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  Deliverables
                </h2>
                <ul className="mt-6 space-y-3">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-muted-foreground">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-sm">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div>
                <p className="text-sm font-medium text-electric">Built With</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  Tech Stack
                </h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="border-t border-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-col items-center text-center">
              <p className="text-sm text-muted-foreground">Next Project</p>
              <Link
                href={`/works/${nextProject.id}`}
                className="group mt-4 inline-flex items-center gap-3 text-3xl font-bold tracking-tight transition-colors hover:text-electric sm:text-4xl"
              >
                {nextProject.title}
                <ArrowRight size={28} className="transition-transform group-hover:translate-x-2" />
              </Link>
              <p className="mt-2 text-muted-foreground">{nextProject.sector}</p>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
