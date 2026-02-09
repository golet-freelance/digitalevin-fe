"use client";

import Link from "next/link";
import { ArrowRight, Users, Target, Award, Heart, Globe, Lightbulb } from "lucide-react";
import { FadeUp } from "@/components/animations";

const stats = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Happy Clients", value: "80+" },
  { label: "Years Experience", value: "6+" },
  { label: "Team Members", value: "12" },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    desc: "Every design decision is backed by data and focused on achieving measurable business outcomes.",
  },
  {
    icon: Heart,
    title: "Client-First",
    desc: "We treat every project as a partnership, prioritizing open communication and your long-term success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We stay ahead of trends and leverage cutting-edge technologies to give your brand a competitive edge.",
  },
  {
    icon: Award,
    title: "Quality",
    desc: "From pixel-perfect design to clean, maintainable code — we never cut corners on craftsmanship.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    desc: "We build inclusive digital experiences that work beautifully for everyone, on every device.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Great work happens when talented people work together. We foster teamwork across every project.",
  },
];

const team = [
  { name: "Alex Morgan", role: "Founder & Creative Director", initial: "A" },
  { name: "Jordan Lee", role: "Lead Developer", initial: "J" },
  { name: "Samira Patel", role: "UI/UX Designer", initial: "S" },
  { name: "Chris Wu", role: "Full-Stack Developer", initial: "C" },
  { name: "Olivia Santos", role: "Project Manager", initial: "O" },
  { name: "Daniel Kim", role: "SEO & Growth Strategist", initial: "D" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <p className="text-sm font-medium text-electric">About Us</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                We Build Digital Experiences That{" "}
                <span className="gradient-text">Matter</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Digitalevin is a premium web agency helping brands grow through
                strategic design, fast development, and conversion-focused digital
                experiences.
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
                <p className="text-sm font-medium text-electric">Our Story</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  From Passion to Premium
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    Digitalevin started with a simple belief: every brand deserves a
                    website that truly represents its value. Founded in 2019, we set
                    out to bridge the gap between beautiful design and measurable
                    performance.
                  </p>
                  <p>
                    Over the years, we&apos;ve grown from a small freelance operation
                    into a full-service digital agency serving clients across
                    industries — from ambitious startups to established enterprises.
                  </p>
                  <p>
                    Today, our team of designers, developers, and strategists work
                    together to create digital experiences that don&apos;t just look
                    great — they drive real business results.
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
              <p className="text-sm font-medium text-electric">Our Values</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                What Drives Us
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
              <p className="text-sm font-medium text-electric">The Team</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Meet the People Behind the Work
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
                Ready to work together?
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-blue-100">
                Let&apos;s discuss how we can help your brand grow with a premium digital
                experience.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-medium text-electric transition-all hover:bg-white/90 hover:shadow-lg"
                >
                  Get in Touch
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
