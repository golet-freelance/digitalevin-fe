"use client";

import { useState, useRef } from "react";
import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ArrowRight,
  ArrowLeft,
  Check,
  Calendar,
  ChevronRight,
  User,
  Briefcase,
  Clock,
  Sparkles,
} from "lucide-react";
import { FadeUp } from "@/components/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const steps = (t: any) => [
  { id: 1, label: t.contact.steps.aboutYou, icon: User },
  { id: 2, label: t.contact.steps.project, icon: Briefcase },
  { id: 3, label: t.contact.steps.details, icon: Sparkles },
];

const projectTypes = (t: any) => [
  t.contact.projectTypes.corporate,
  t.contact.projectTypes.ecommerce,
  t.contact.projectTypes.saas,
  t.contact.projectTypes.mobileApp,
  t.contact.projectTypes.landing,
  t.contact.projectTypes.webApp,
  t.contact.projectTypes.branding,
  t.contact.projectTypes.other,
];

const budgetRanges = (t: any) => [
  t.contact.budgetRanges.range1,
  t.contact.budgetRanges.range2,
  t.contact.budgetRanges.range3,
  t.contact.budgetRanges.range4,
  t.contact.budgetRanges.range5,
];

const timelines = (t: any) => [
  t.contact.timelines.asap,
  t.contact.timelines.weeks,
  t.contact.timelines.month,
  t.contact.timelines.months,
  t.contact.timelines.flexible,
];

const contactCards = (t: any) => [
  {
    icon: Mail,
    label: t.contact.contactCards.email,
    value: "hello@digitalevin.com",
    href: "mailto:hello@digitalevin.com",
    color: "from-electric to-blue-600",
  },
  {
    icon: MessageCircle,
    label: t.contact.contactCards.whatsapp,
    value: "+1 (555) 123-4567",
    href: "https://wa.me/15551234567",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: MapPin,
    label: t.contact.contactCards.location,
    value: "San Francisco, CA",
    href: "#",
    color: "from-violet-500 to-purple-600",
  },
];

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const stepsArray = steps(t);
  const projectTypesArray = projectTypes(t);
  const budgetRangesArray = budgetRanges(t);
  const timelinesArray = timelines(t);
  const contactCardsArray = contactCards(t);

  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const canGoNext = () => {
    if (currentStep === 1) return form.name.trim() !== "" && form.email.trim() !== "";
    if (currentStep === 2) return form.projectType !== "" && form.budget !== "";
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10">
                <Send size={22} className="text-electric" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {t.contact.hero.title}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                {t.contact.hero.subtitle}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Main Content: Two-Column */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left Column: Info + Cards */}
            <div className="lg:col-span-2">
              <FadeUp>
                <h2 className="text-2xl font-bold">{t.contact.intro.title}</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {t.contact.intro.subtitle}
                </p>
              </FadeUp>

              {/* Contact Cards */}
              <div className="mt-8 space-y-4">
                {contactCardsArray.map((card, i) => (
                  <FadeUp key={card.label} delay={i * 100}>
                    <a
                      href={card.href}
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-electric/30 hover:shadow-lg hover:shadow-electric/5 hover:-translate-y-0.5"
                    >
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                      >
                        <card.icon size={20} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {card.label}
                        </p>
                        <p className="mt-0.5 truncate font-semibold">
                          {card.value}
                        </p>
                      </div>
                      <ChevronRight
                        size={16}
                        className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-electric"
                      />
                    </a>
                  </FadeUp>
                ))}
              </div>

              {/* Book a Call */}
              <FadeUp delay={400}>
                <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-electric/5 via-violet-500/5 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10">
                      <Calendar size={20} className="text-electric" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{t.contact.bookCall.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t.contact.bookCall.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex h-32 items-center justify-center rounded-xl border border-dashed border-border bg-background/50">
                    <div className="text-center">
                      <Clock
                        size={24}
                        className="mx-auto text-muted-foreground/50"
                      />
                      <p className="mt-2 text-xs text-muted-foreground">
                        {t.contact.bookCall.comingSoon}
                      </p>
                    </div>
                  </div>
                  <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-electric px-4 py-3 text-sm font-medium text-white transition-all hover:bg-electric/90 hover:shadow-lg hover:shadow-electric/25 cursor-pointer">
                    <Calendar size={16} />
                    {t.contact.bookCall.button}
                  </button>
                </div>
              </FadeUp>

              {/* Social */}
              <FadeUp delay={500}>
                <div className="mt-8">
                  <h3 className="text-sm font-semibold">{t.contact.social.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[t.contact.social.platforms.twitter, t.contact.social.platforms.linkedin, t.contact.social.platforms.dribbble, t.contact.social.platforms.instagram].map(
                      (platform) => (
                        <a
                          key={platform}
                          href="#"
                          className="flex h-9 items-center rounded-xl border border-border px-3.5 text-xs font-medium text-muted-foreground transition-all hover:border-electric/30 hover:bg-electric/5 hover:text-electric"
                        >
                          {platform}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Right Column: Multi-Step Form */}
            <div className="lg:col-span-3">
              <FadeUp delay={150}>
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                  {submitted ? (
                    <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                      <div className="relative">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-electric/10">
                          <Check size={36} className="text-electric" />
                        </div>
                        <div className="absolute -inset-2 animate-ping rounded-full bg-electric/10" />
                      </div>
                      <h3 className="mt-8 text-2xl font-bold">
                        {t.contact.success.title}
                      </h3>
                      <p className="mt-2 max-w-sm text-muted-foreground">
                        {t.contact.success.subtitle}
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setCurrentStep(1);
                          setForm({
                            name: "",
                            email: "",
                            projectType: "",
                            budget: "",
                            timeline: "",
                            message: "",
                          });
                        }}
                        className="mt-8 rounded-2xl border border-border px-6 py-2.5 text-sm font-medium transition-all hover:bg-muted cursor-pointer"
                      >
                        {t.contact.success.button}
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Step Indicator */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between">
                          {stepsArray.map((step, i) => (
                            <div key={step.id} className="flex items-center">
                              <button
                                onClick={() => {
                                  if (step.id < currentStep) setCurrentStep(step.id);
                                }}
                                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all cursor-pointer ${
                                  step.id === currentStep
                                    ? "bg-electric/10 text-electric"
                                    : step.id < currentStep
                                    ? "text-electric cursor-pointer hover:bg-electric/5"
                                    : "text-muted-foreground"
                                }`}
                              >
                                <div
                                  className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold transition-all ${
                                    step.id === currentStep
                                      ? "bg-electric text-white shadow-md shadow-electric/30"
                                      : step.id < currentStep
                                      ? "bg-electric/20 text-electric"
                                      : "bg-muted text-muted-foreground"
                                  }`}
                                >
                                  {step.id < currentStep ? (
                                    <Check size={14} />
                                  ) : (
                                    step.id
                                  )}
                                </div>
                                <span className="hidden sm:inline">
                                  {step.label}
                                </span>
                              </button>
                              {i < stepsArray.length - 1 && (
                                <div
                                  className={`mx-1 h-px w-8 sm:w-12 transition-colors ${
                                    step.id < currentStep
                                      ? "bg-electric/40"
                                      : "bg-border"
                                  }`}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                        {/* Progress bar */}
                        <div className="mt-4 h-1 overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-electric to-violet-500 transition-all duration-500 ease-out"
                            style={{
                              width: `${((currentStep - 1) / (stepsArray.length - 1)) * 100}%`,
                            }}
                          />
                        </div>
                      </div>

                      <form ref={formRef} onSubmit={handleSubmit}>
                        {/* Step 1: About You */}
                        <div
                          className={`transition-all duration-300 ${
                            currentStep === 1
                              ? "block opacity-100"
                              : "hidden opacity-0"
                          }`}
                        >
                          <h3 className="text-lg font-semibold">
                            {t.contact.step1.title}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {t.contact.step1.subtitle}
                          </p>

                          <div className="mt-6 space-y-5">
                            <div className="group relative">
                              <label
                                htmlFor="name"
                                className={`mb-2 block text-sm font-medium transition-colors ${
                                  focusedField === "name"
                                    ? "text-electric"
                                    : ""
                                }`}
                              >
                                {t.contact.step1.fullName}
                              </label>
                              <input
                                id="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={(e) =>
                                  updateField("name", e.target.value)
                                }
                                onFocus={() => setFocusedField("name")}
                                onBlur={() => setFocusedField(null)}
                                placeholder={t.contact.step1.fullNamePlaceholder}
                                className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-electric focus:ring-2 focus:ring-electric/20 focus:shadow-lg focus:shadow-electric/5"
                              />
                            </div>
                            <div className="group relative">
                              <label
                                htmlFor="email"
                                className={`mb-2 block text-sm font-medium transition-colors ${
                                  focusedField === "email"
                                    ? "text-electric"
                                    : ""
                                }`}
                              >
                                {t.contact.step1.email}
                              </label>
                              <input
                                id="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={(e) =>
                                  updateField("email", e.target.value)
                                }
                                onFocus={() => setFocusedField("email")}
                                onBlur={() => setFocusedField(null)}
                                placeholder={t.contact.step1.emailPlaceholder}
                                className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-electric focus:ring-2 focus:ring-electric/20 focus:shadow-lg focus:shadow-electric/5"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Step 2: Project */}
                        <div
                          className={`transition-all duration-300 ${
                            currentStep === 2
                              ? "block opacity-100"
                              : "hidden opacity-0"
                          }`}
                        >
                          <h3 className="text-lg font-semibold">
                            {t.contact.step2.title}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {t.contact.step2.subtitle}
                          </p>

                          <div className="mt-6 space-y-5">
                            <div>
                              <label className="mb-3 block text-sm font-medium">
                                {t.contact.step2.projectType}
                              </label>
                              <div className="grid grid-cols-2 gap-2">
                                {projectTypesArray.map((type) => (
                                  <button
                                    key={type}
                                    type="button"
                                    onClick={() =>
                                      updateField("projectType", type)
                                    }
                                    className={`rounded-xl border px-3 py-2.5 text-left text-sm transition-all duration-200 cursor-pointer ${
                                      form.projectType === type
                                        ? "border-electric bg-electric/10 text-electric font-medium shadow-sm"
                                        : "border-border hover:border-electric/30 hover:bg-electric/5"
                                    }`}
                                  >
                                    {type}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div>
                              <label className="mb-3 block text-sm font-medium">
                                {t.contact.step2.budgetRange}
                              </label>
                              <div className="flex flex-wrap gap-2">
                                {budgetRangesArray.map((range) => (
                                  <button
                                    key={range}
                                    type="button"
                                    onClick={() =>
                                      updateField("budget", range)
                                    }
                                    className={`rounded-xl border px-4 py-2.5 text-sm transition-all duration-200 cursor-pointer ${
                                      form.budget === range
                                        ? "border-electric bg-electric/10 text-electric font-medium shadow-sm"
                                        : "border-border hover:border-electric/30 hover:bg-electric/5"
                                    }`}
                                  >
                                    {range}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Step 3: Details */}
                        <div
                          className={`transition-all duration-300 ${
                            currentStep === 3
                              ? "block opacity-100"
                              : "hidden opacity-0"
                          }`}
                        >
                          <h3 className="text-lg font-semibold">
                            {t.contact.step3.title}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {t.contact.step3.subtitle}
                          </p>

                          <div className="mt-6 space-y-5">
                            <div>
                              <label className="mb-3 block text-sm font-medium">
                                {t.contact.step3.timeline}
                              </label>
                              <div className="flex flex-wrap gap-2">
                                {timelinesArray.map((tl) => (
                                  <button
                                    key={tl}
                                    type="button"
                                    onClick={() =>
                                      updateField("timeline", tl)
                                    }
                                    className={`rounded-xl border px-4 py-2.5 text-sm transition-all duration-200 cursor-pointer ${
                                      form.timeline === tl
                                        ? "border-electric bg-electric/10 text-electric font-medium shadow-sm"
                                        : "border-border hover:border-electric/30 hover:bg-electric/5"
                                    }`}
                                  >
                                    {tl}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="group relative">
                              <label
                                htmlFor="message"
                                className={`mb-2 block text-sm font-medium transition-colors ${
                                  focusedField === "message"
                                    ? "text-electric"
                                    : ""
                                }`}
                              >
                                {t.contact.step3.projectDetails}
                              </label>
                              <textarea
                                id="message"
                                rows={5}
                                value={form.message}
                                onChange={(e) =>
                                  updateField("message", e.target.value)
                                }
                                onFocus={() => setFocusedField("message")}
                                onBlur={() => setFocusedField(null)}
                                placeholder={t.contact.step3.projectDetailsPlaceholder}
                                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-electric focus:ring-2 focus:ring-electric/20 focus:shadow-lg focus:shadow-electric/5"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="mt-8 flex items-center justify-between">
                          {currentStep > 1 ? (
                            <button
                              type="button"
                              onClick={() =>
                                setCurrentStep((s) => Math.max(1, s - 1))
                              }
                              className="flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-medium transition-all hover:bg-muted cursor-pointer"
                            >
                              <ArrowLeft size={16} />
                              {t.contact.navigation.back}
                            </button>
                          ) : (
                            <div />
                          )}

                          {currentStep < 3 ? (
                            <button
                              type="button"
                              disabled={!canGoNext()}
                              onClick={() =>
                                setCurrentStep((s) => Math.min(3, s + 1))
                              }
                              className="flex items-center gap-2 rounded-xl bg-electric px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-electric/90 hover:shadow-lg hover:shadow-electric/25 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none cursor-pointer"
                            >
                              {t.contact.navigation.continue}
                              <ArrowRight size={16} />
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="flex items-center gap-2 rounded-2xl bg-electric px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-electric/90 hover:shadow-lg hover:shadow-electric/25 btn-shine cursor-pointer"
                            >
                              {t.contact.navigation.sendMessage}
                              <Send size={16} />
                            </button>
                          )}
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t.contact.faq.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                {t.contact.faq.subtitle}
              </p>
            </div>
          </FadeUp>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {t.contact.faq.questions.map((faq, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-electric/20 hover:shadow-md hover:shadow-electric/5">
                  <h3 className="font-semibold">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
