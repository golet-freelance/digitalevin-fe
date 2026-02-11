"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronDown, Star, Zap, Palette, Code, ShoppingCart, Search, Megaphone, Check, TrendingUp, Clock, Users, Database } from "lucide-react";
import { FadeUp } from "@/components/animations";
import { projects } from "@/lib/data";
import { useState, useEffect, useRef, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

/* ───── Mockup Screens Data ───── */
const mockupScreens = [
  {
    label: "E-Commerce Dashboard",
    gradient: "from-blue-600 via-electric to-cyan-500",
    content: (
      <>
        {/* Nav */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-md bg-white/20" />
            <div className="h-2.5 w-16 rounded-full bg-white/20" />
          </div>
          <div className="flex gap-2">
            <div className="h-2.5 w-12 rounded-full bg-white/15" />
            <div className="h-2.5 w-12 rounded-full bg-white/15" />
            <div className="h-2.5 w-12 rounded-full bg-white/15" />
          </div>
          <div className="h-6 w-6 rounded-full bg-white/20" />
        </div>
        {/* Content */}
        <div className="p-4 space-y-3">
          <div className="flex gap-3">
            <div className="flex-1 rounded-xl bg-white/10 p-3">
              <div className="h-2 w-12 rounded-full bg-white/20 mb-2" />
              <div className="text-white/90 text-sm font-bold">$24,580</div>
              <div className="mt-2 flex items-end gap-0.5 h-8">
                {[30, 45, 35, 55, 70, 60, 80, 75, 90, 85].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm bg-white/25" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-white/10 p-3">
              <div className="h-2 w-14 rounded-full bg-white/20 mb-2" />
              <div className="text-white/90 text-sm font-bold">1,248</div>
              <div className="mt-2 h-8 rounded-lg bg-gradient-to-r from-white/5 to-white/20" />
            </div>
          </div>
          <div className="rounded-xl bg-white/10 p-3">
            <div className="flex items-center justify-between mb-3">
              <div className="h-2 w-20 rounded-full bg-white/20" />
              <div className="h-2 w-10 rounded-full bg-white/15" />
            </div>
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-t border-white/5">
                <div className="h-6 w-6 rounded-lg bg-white/15" />
                <div className="flex-1">
                  <div className="h-2 w-24 rounded-full bg-white/20" />
                  <div className="h-1.5 w-16 rounded-full bg-white/10 mt-1" />
                </div>
                <div className="h-2 w-10 rounded-full bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </>
    ),
  },
  {
    label: "SaaS Landing Page",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
    content: (
      <>
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
          <div className="h-5 w-5 rounded-full bg-white/20" />
          <div className="flex gap-3">
            <div className="h-2 w-10 rounded-full bg-white/15" />
            <div className="h-2 w-10 rounded-full bg-white/15" />
            <div className="h-2 w-10 rounded-full bg-white/15" />
          </div>
          <div className="h-5 w-14 rounded-full bg-white/25" />
        </div>
        <div className="p-4 text-center space-y-3">
          <div className="mx-auto h-3 w-32 rounded-full bg-white/25 mt-2" />
          <div className="mx-auto h-2 w-48 rounded-full bg-white/15" />
          <div className="mx-auto h-2 w-40 rounded-full bg-white/10" />
          <div className="flex justify-center gap-2 mt-2">
            <div className="h-7 w-20 rounded-lg bg-white/30" />
            <div className="h-7 w-20 rounded-lg bg-white/10 border border-white/20" />
          </div>
          <div className="mt-3 mx-auto w-4/5 rounded-xl bg-white/10 p-3">
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg bg-white/10 p-2">
                  <div className="h-4 w-4 mx-auto rounded-md bg-white/20 mb-1.5" />
                  <div className="h-1.5 w-8 mx-auto rounded-full bg-white/15" />
                  <div className="h-1 w-12 mx-auto rounded-full bg-white/10 mt-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    label: "Analytics Platform",
    gradient: "from-emerald-600 via-teal-500 to-cyan-500",
    content: (
      <>
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/10">
          <div className="h-5 w-5 rounded-md bg-white/20" />
          <div className="flex-1 h-5 rounded-lg bg-white/10 px-2" />
          <div className="h-5 w-5 rounded-full bg-white/15" />
        </div>
        <div className="flex h-[calc(100%-36px)]">
          {/* Sidebar */}
          <div className="w-12 border-r border-white/10 p-2 space-y-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className={`h-5 w-full rounded-md ${i === 0 ? "bg-white/25" : "bg-white/10"}`} />
            ))}
          </div>
          {/* Main */}
          <div className="flex-1 p-3 space-y-2.5">
            <div className="flex gap-2">
              {[
                { label: "Users", val: "12.4k" },
                { label: "Revenue", val: "$84k" },
                { label: "Growth", val: "+28%" },
              ].map((s) => (
                <div key={s.label} className="flex-1 rounded-lg bg-white/10 p-2">
                  <div className="text-[8px] text-white/40">{s.label}</div>
                  <div className="text-xs font-bold text-white/80">{s.val}</div>
                </div>
              ))}
            </div>
            <div className="rounded-lg bg-white/10 p-2 h-20">
              <svg viewBox="0 0 200 50" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,40 Q20,35 40,30 T80,25 T120,15 T160,20 T200,10" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <path d="M0,40 Q20,35 40,30 T80,25 T120,15 T160,20 T200,10 L200,50 L0,50Z" fill="rgba(255,255,255,0.05)" />
              </svg>
            </div>
          </div>
        </div>
      </>
    ),
  },
];

/* ───── Hero ───── */
function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeScreen, setActiveScreen] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  // Auto-cycle mockup screens
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveScreen((prev) => (prev + 1) % mockupScreens.length);
        setIsTransitioning(false);
      }, 600);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for perspective tilt
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!mockupRef.current) return;
    const rect = mockupRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
  }, []);

  // Scroll parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tiltX = mousePos.y * -8;
  const tiltY = mousePos.x * 8;
  const parallaxOffset = scrollY * 0.15;

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden pt-20">
      {/* Ambient bg effects */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-electric/5 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-electric/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="relative z-10 py-20 lg:py-0">
            <FadeUp>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
                <Zap size={14} className="text-electric" />
                {t.home.hero.badge}
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                {t.home.hero.title}{" "}
                <span className="gradient-text">{t.home.hero.titleHighlight}</span>{" "}
                {t.home.hero.titleEnd}
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:text-xl">
                {t.home.hero.subtitle}
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/works"
                  className="inline-flex items-center gap-2 rounded-2xl bg-electric px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-electric/90 hover:shadow-lg hover:shadow-electric/25 btn-shine cursor-pointer"
                >
                  {t.home.hero.viewWorks}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background px-6 py-3.5 text-sm font-medium transition-all hover:bg-muted cursor-pointer"
                >
                  {t.home.hero.cta}
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Right — Cinematic Mockup + Floating Cards */}
          <div
            ref={mockupRef}
            className="perspective-container relative hidden h-[560px] lg:block"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Main mockup browser */}
            <FadeUp delay={200}>
              <div
                className="relative w-full max-w-[420px] ml-auto rounded-2xl border border-border bg-card shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden transition-transform duration-300 ease-out"
                style={{
                  transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(${-parallaxOffset * 0.3}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/50">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <div className="flex-1 mx-3 h-5 rounded-md bg-muted flex items-center px-2">
                    <div className="h-1.5 w-2 rounded-sm bg-muted-foreground/20 mr-1.5" />
                    <div className="h-1.5 w-20 rounded-full bg-muted-foreground/20" />
                  </div>
                </div>

                {/* Screen content with transitions */}
                <div className="relative h-[280px] overflow-hidden scan-line">
                  {mockupScreens.map((screen, i) => (
                    <div
                      key={i}
                      className={`absolute inset-0 bg-gradient-to-br ${screen.gradient} transition-all duration-700 ${i === activeScreen
                        ? isTransitioning
                          ? "mockup-exit"
                          : "mockup-enter"
                        : "opacity-0 pointer-events-none"
                        }`}
                    >
                      {screen.content}
                    </div>
                  ))}
                </div>

                {/* Screen indicator dots */}
                <div className="flex items-center justify-center gap-2 py-2.5 bg-card border-t border-border">
                  {mockupScreens.map((screen, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        if (i === activeScreen) return;
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setActiveScreen(i);
                          setIsTransitioning(false);
                        }, 600);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${i === activeScreen
                        ? "w-6 bg-electric glow-active"
                        : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                    />
                  ))}
                  <span className="ml-3 text-[10px] text-muted-foreground font-medium">
                    {mockupScreens[activeScreen].label}
                  </span>
                </div>
              </div>
            </FadeUp>

            {/* Floating Card: Metrics */}
            <div
              className="animate-float-delayed absolute -left-4 top-16 w-52 rounded-2xl border border-border bg-card/95 backdrop-blur-sm p-4 shadow-xl transition-transform duration-300 ease-out z-10"
              style={{
                transform: `translateY(${-parallaxOffset * 0.5}px) rotateX(${tiltX * 0.5}deg) rotateY(${tiltY * 0.5}deg)`,
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-500/10">
                  <TrendingUp size={14} className="text-green-500" />
                </div>
                <p className="text-xs font-medium text-muted-foreground">Performance</p>
              </div>
              <p className="text-2xl font-bold">
                98<span className="text-sm text-green-500 ml-1">/ 100</span>
              </p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-1000" />
              </div>
            </div>

            {/* Floating Card: Speed */}
            <div
              className="animate-float absolute -left-2 bottom-24 w-48 rounded-2xl border border-border bg-card/95 backdrop-blur-sm p-4 shadow-xl transition-transform duration-300 ease-out z-10"
              style={{
                transform: `translateY(${-parallaxOffset * 0.4}px) rotateX(${tiltX * 0.4}deg) rotateY(${tiltY * 0.4}deg)`,
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-electric/10">
                  <Clock size={14} className="text-electric" />
                </div>
                <p className="text-xs font-medium text-muted-foreground">Load Time</p>
              </div>
              <p className="text-2xl font-bold">
                0.8<span className="text-sm text-muted-foreground ml-1">sec</span>
              </p>
              <p className="text-[10px] text-green-500 font-medium mt-1">72% faster than avg</p>
            </div>

            {/* Floating Card: Testimonial */}
            <div
              className="animate-float-slow absolute -bottom-2 right-12 w-56 rounded-2xl border border-border bg-card/95 backdrop-blur-sm p-4 shadow-xl transition-transform duration-300 ease-out z-10"
              style={{
                transform: `translateY(${-parallaxOffset * 0.6}px) rotateX(${tiltX * 0.3}deg) rotateY(${tiltY * 0.3}deg)`,
              }}
            >
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                &ldquo;Conversion rate jumped 35% in the first month.&rdquo;
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-electric/10 text-[10px] font-bold text-electric">
                  S
                </div>
                <div>
                  <p className="text-[10px] font-semibold">Sarah Kim</p>
                  <p className="text-[9px] text-muted-foreground">CEO, NovaStore</p>
                </div>
              </div>
            </div>

            {/* Floating Card: Users online */}
            <div
              className="animate-float absolute right-0 top-0 w-40 rounded-xl border border-border bg-card/95 backdrop-blur-sm p-3 shadow-lg transition-transform duration-300 ease-out z-10"
              style={{
                transform: `translateY(${-parallaxOffset * 0.35}px) rotateX(${tiltX * 0.6}deg) rotateY(${tiltY * 0.6}deg)`,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-violet-500/10">
                  <Users size={12} className="text-violet-500" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground">Live Users</p>
                  <p className="text-sm font-bold">2,847</p>
                </div>
              </div>
              <div className="mt-2 flex gap-px">
                {[20, 35, 25, 45, 60, 40, 55, 70, 65, 80, 75, 90].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-violet-500/20"
                    style={{ height: `${h * 0.25}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Trusted By ───── */
function TrustedBy() {
  const { language } = useLanguage();
  const t = translations[language];
  const logos = ["TechCorp", "FinanceHub", "GreenLife", "MediaPro", "StartupX", "DesignCo"];
  return (
    <section className="border-y border-border bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
            {t.home.trustedBy}
          </p>
        </FadeUp>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {logos.map((name, i) => (
            <FadeUp key={name} delay={i * 80}>
              <div className="flex h-10 items-center px-4 text-lg font-semibold text-muted-foreground/40 select-none">
                {name}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Featured Projects ───── */
function FeaturedProjects() {
  const { language } = useLanguage();
  const t = translations[language];
  const featured = projects.slice(0, 6);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-electric">{t.home.showcase.badge}</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {t.home.showcase.title}
              </h2>
            </div>
            <Link
              href="/works"
              className="inline-flex items-center gap-1 text-sm font-medium text-electric hover:underline"
            >
              {t.home.showcase.viewAll}
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <FadeUp key={project.id} delay={i * 100}>
              {project.externalUrl ? (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 hover:-translate-y-1">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 dark:bg-black/90 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                    {/* Info */}
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-medium text-muted-foreground">
                          {t.works.projects[project.sector as keyof typeof t.works.projects]?.sector || project.sector}
                        </p>
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
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 hover:-translate-y-1">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 dark:bg-black/90 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                    {/* Info */}
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-medium text-muted-foreground">
                          {t.works.projects[project.sector as keyof typeof t.works.projects]?.sector || project.sector}
                        </p>
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
  );
}

/* ───── Services ───── */
function Services() {
  const { language } = useLanguage();
  const t = translations[language];
  const services = [
    { icon: Palette, title: t.home.services.uiux.title, desc: t.home.services.uiux.desc },
    { icon: Code, title: t.home.services.webdev.title, desc: t.home.services.webdev.desc },
    { icon: ShoppingCart, title: t.home.services.ecommerce.title, desc: t.home.services.ecommerce.desc },
    { icon: Search, title: t.home.services.seo.title, desc: t.home.services.seo.desc },
    { icon: Megaphone, title: t.home.services.branding.title, desc: t.home.services.branding.desc },
    { icon: Database, title: t.home.services.erp.title, desc: t.home.services.erp.desc },
  ];

  return (
    <section className="bg-muted/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="text-center">
            <p className="text-sm font-medium text-electric">{t.home.services.badge}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {t.home.services.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {t.home.services.subtitle}
            </p>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 100}>
              <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 hover:-translate-y-1 h-full min-h-[200px] flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric transition-colors group-hover:bg-electric group-hover:text-white">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Process ───── */
function Process() {
  const { language } = useLanguage();
  const t = translations[language];
  const steps = [
    { num: t.home.process.step1.num, title: t.home.process.step1.title, desc: t.home.process.step1.desc },
    { num: t.home.process.step2.num, title: t.home.process.step2.title, desc: t.home.process.step2.desc },
    { num: t.home.process.step3.num, title: t.home.process.step3.title, desc: t.home.process.step3.desc },
    { num: t.home.process.step4.num, title: t.home.process.step4.title, desc: t.home.process.step4.desc },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="text-center">
            <p className="text-sm font-medium text-electric">{t.home.process.badge}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {t.home.process.title}
            </h2>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <FadeUp key={step.num} delay={i * 120}>
              <div className="relative text-center">
                <span className="text-5xl font-bold text-electric/10">{step.num}</span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-border lg:block" />
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Testimonials ───── */
function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language];
  const testimonials = t.home.testimonials.items;

  return (
    <section className="bg-muted/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="text-center">
            <p className="text-sm font-medium text-electric">{t.home.testimonials.badge}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {t.home.testimonials.title}
            </h2>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 100}>
              <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── FAQ ───── */
function FAQ() {
  const { language } = useLanguage();
  const t = translations[language];
  const faqs = t.home.faq.questions;

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeUp>
          <div className="text-center">
            <p className="text-sm font-medium text-electric">{t.home.faq.badge}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {t.home.faq.title}
            </h2>
          </div>
        </FadeUp>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <FadeUp key={i} delay={i * 60}>
              <div className="rounded-2xl border border-border bg-card transition-all">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left cursor-pointer"
                >
                  <span className="text-sm font-medium pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-muted-foreground transition-transform duration-300 ${open === i ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 pb-5" : "max-h-0"
                    }`}
                >
                  <p className="px-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Final CTA ───── */
function FinalCTA() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-electric to-blue-700 p-12 text-center text-white lg:p-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
            <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {t.home.finalCta.title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-blue-100">
              {t.home.finalCta.subtitle}
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-medium text-electric transition-all hover:bg-white/90 hover:shadow-lg"
              >
                {t.home.finalCta.button1}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                {t.home.finalCta.button2}
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ───── Page ───── */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <FeaturedProjects />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
