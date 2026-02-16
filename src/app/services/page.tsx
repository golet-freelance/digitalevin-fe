"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  Layers,
  Palette,
  CheckCircle2,
  Users,
  Target,
  Zap,
  Shield,
  Rocket,
  Lightbulb,
  MessageCircle,
} from "lucide-react";
import { FadeUp } from "@/components/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function ServicesPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: Code,
      title: language === "tr" ? "Web Tasarım ve Geliştirme" : "Web Design & Development",
      description:
        language === "tr"
          ? "Modern, hızlı ve kullanıcı dostu web siteleri geliştiriyoruz. Responsive tasarım, SEO uyumlu kodlama ve en güncel teknolojilerle markanızı dijital dünyada öne çıkarıyoruz."
          : "We develop modern, fast and user-friendly websites. With responsive design, SEO-friendly coding and the latest technologies, we make your brand stand out in the digital world.",
      features:
        language === "tr"
          ? [
              "Mobil uyumlu responsive tasarım",
              "Hızlı yükleme ve performans optimizasyonu",
              "SEO dostu kod yapısı",
              "Güvenli ve ölçeklenebilir altyapı",
              "Modern UI/UX tasarım",
              "CMS entegrasyonu",
            ]
          : [
              "Mobile responsive design",
              "Fast loading and performance optimization",
              "SEO-friendly code structure",
              "Secure and scalable infrastructure",
              "Modern UI/UX design",
              "CMS integration",
            ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShoppingCart,
      title: language === "tr" ? "E-Ticaret Çözümleri" : "E-Commerce Solutions",
      description:
        language === "tr"
          ? "Satışlarınızı artırmak için özel olarak tasarlanmış e-ticaret platformları. Güvenli ödeme sistemleri, stok yönetimi ve kullanıcı dostu alışveriş deneyimi sunuyoruz."
          : "Custom-designed e-commerce platforms to increase your sales. We offer secure payment systems, inventory management and user-friendly shopping experience.",
      features:
        language === "tr"
          ? [
              "Güvenli ödeme altyapısı",
              "Gelişmiş ürün ve stok yönetimi",
              "Sipariş takip sistemi",
              "Çoklu ödeme seçenekleri",
              "Mobil uyumlu alışveriş",
              "Kargo entegrasyonu",
            ]
          : [
              "Secure payment infrastructure",
              "Advanced product and inventory management",
              "Order tracking system",
              "Multiple payment options",
              "Mobile-friendly shopping",
              "Cargo integration",
            ],
      gradient: "from-emerald-500 to-green-500",
    },
    {
      icon: Smartphone,
      title: language === "tr" ? "Mobil Uygulama Geliştirme" : "Mobile App Development",
      description:
        language === "tr"
          ? "iOS ve Android platformları için native ve cross-platform mobil uygulamalar geliştiriyoruz. Kullanıcı deneyimini ön planda tutarak, işinizi her zaman cebinizde taşıyın."
          : "We develop native and cross-platform mobile applications for iOS and Android platforms. Keeping user experience at the forefront, carry your business in your pocket at all times.",
      features:
        language === "tr"
          ? [
              "iOS ve Android uygulama geliştirme",
              "Cross-platform çözümler (React Native)",
              "Kullanıcı dostu arayüz tasarımı",
              "Push notification entegrasyonu",
              "Offline çalışma desteği",
              "API entegrasyonu",
            ]
          : [
              "iOS and Android app development",
              "Cross-platform solutions (React Native)",
              "User-friendly interface design",
              "Push notification integration",
              "Offline working support",
              "API integration",
            ],
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: TrendingUp,
      title: language === "tr" ? "SEO ve Dijital Pazarlama" : "SEO & Digital Marketing",
      description:
        language === "tr"
          ? "Google'da üst sıralarda yer alın ve hedef kitlenize ulaşın. SEO optimizasyonu, içerik stratejisi ve dijital reklam yönetimiyle online görünürlüğünüzü maksimize ediyoruz."
          : "Rank higher on Google and reach your target audience. We maximize your online visibility with SEO optimization, content strategy and digital advertising management.",
      features:
        language === "tr"
          ? [
              "Teknik SEO optimizasyonu",
              "Anahtar kelime araştırması ve strateji",
              "İçerik optimizasyonu",
              "Google Ads yönetimi",
              "Sosyal medya pazarlama",
              "Analytics ve raporlama",
            ]
          : [
              "Technical SEO optimization",
              "Keyword research and strategy",
              "Content optimization",
              "Google Ads management",
              "Social media marketing",
              "Analytics and reporting",
            ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Layers,
      title: language === "tr" ? "Kurumsal Yazılım Çözümleri" : "Enterprise Software Solutions",
      description:
        language === "tr"
          ? "İşletmenizin ihtiyaçlarına özel yazılım çözümleri geliştiriyoruz. CRM, ERP, proje yönetim sistemleri ve özel iş süreçlerinizi dijitalleştiren uygulamalar."
          : "We develop custom software solutions for your business needs. CRM, ERP, project management systems and applications that digitalize your business processes.",
      features:
        language === "tr"
          ? [
              "Özel iş süreçleri yönetimi",
              "CRM ve ERP çözümleri",
              "Veri yönetimi ve raporlama",
              "Otomasyon sistemleri",
              "Bulut tabanlı çözümler",
              "Entegrasyon hizmetleri",
            ]
          : [
              "Custom business process management",
              "CRM and ERP solutions",
              "Data management and reporting",
              "Automation systems",
              "Cloud-based solutions",
              "Integration services",
            ],
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Palette,
      title: language === "tr" ? "UI/UX Tasarım" : "UI/UX Design",
      description:
        language === "tr"
          ? "Kullanıcı deneyimini merkeze alan, estetik ve işlevsel tasarımlar oluşturuyoruz. Markanızın dijital yüzünü unutulmaz kılacak tasarımlar için uzman ekibimizle çalışın."
          : "We create aesthetic and functional designs that center on user experience. Work with our expert team for designs that will make your brand's digital face unforgettable.",
      features:
        language === "tr"
          ? [
              "Kullanıcı deneyimi araştırması",
              "Wireframe ve prototipleme",
              "Görsel kimlik tasarımı",
              "Interaktif tasarım",
              "Kullanılabilirlik testleri",
              "Design system oluşturma",
            ]
          : [
              "User experience research",
              "Wireframing and prototyping",
              "Visual identity design",
              "Interactive design",
              "Usability testing",
              "Design system creation",
            ],
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: language === "tr" ? "Deneyimli Ekip" : "Experienced Team",
      description:
        language === "tr"
          ? "Alanında uzman, deneyimli profesyonellerden oluşan ekibimiz."
          : "Our team of experienced professionals who are experts in their field.",
    },
    {
      icon: Target,
      title: language === "tr" ? "Sonuç Odaklı" : "Result Oriented",
      description:
        language === "tr"
          ? "Hedeflerinize ulaşmanız için ölçülebilir sonuçlar üretiyoruz."
          : "We produce measurable results for you to achieve your goals.",
    },
    {
      icon: Zap,
      title: language === "tr" ? "Hızlı Teslimat" : "Fast Delivery",
      description:
        language === "tr"
          ? "Projelerinizi zamanında ve kaliteli bir şekilde teslim ediyoruz."
          : "We deliver your projects on time and with quality.",
    },
    {
      icon: Shield,
      title: language === "tr" ? "Güvenilir Çözümler" : "Reliable Solutions",
      description:
        language === "tr"
          ? "Güvenli, ölçeklenebilir ve sürdürülebilir yazılım çözümleri."
          : "Secure, scalable and sustainable software solutions.",
    },
  ];

  const process = [
    {
      icon: Lightbulb,
      title: language === "tr" ? "Keşif ve Planlama" : "Discovery & Planning",
      description:
        language === "tr"
          ? "İhtiyaçlarınızı analiz ediyor ve proje planını oluşturuyoruz."
          : "We analyze your needs and create the project plan.",
    },
    {
      icon: Palette,
      title: language === "tr" ? "Tasarım" : "Design",
      description:
        language === "tr"
          ? "Markanıza özel, etkileyici tasarımlar hazırlıyoruz."
          : "We prepare impressive designs specific to your brand.",
    },
    {
      icon: Code,
      title: language === "tr" ? "Geliştirme" : "Development",
      description:
        language === "tr"
          ? "En güncel teknolojilerle projenizi hayata geçiriyoruz."
          : "We bring your project to life with the latest technologies.",
    },
    {
      icon: Rocket,
      title: language === "tr" ? "Yayınlama ve Destek" : "Launch & Support",
      description:
        language === "tr"
          ? "Projenizi yayınlıyor ve sürekli destek sağlıyoruz."
          : "We launch your project and provide continuous support.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10">
                <Rocket size={22} className="text-electric" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {language === "tr" ? "Hizmetlerimiz" : "Our Services"}
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                {language === "tr"
                  ? "Dijital dünyadaki başarınız için kapsamlı web ve yazılım çözümleri sunuyoruz. Her projede kalite, hız ve mükemmellik standartlarımızı koruyarak işinizi bir üst seviyeye taşıyoruz."
                  : "We offer comprehensive web and software solutions for your success in the digital world. We take your business to the next level by maintaining our quality, speed and excellence standards in every project."}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeUp key={service.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-electric/30 hover:shadow-xl hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${service.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <service.icon size={24} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2
                            size={16}
                            className={`mt-0.5 shrink-0 bg-linear-to-br ${service.gradient} bg-clip-text text-transparent`}
                          />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-electric transition-all hover:gap-3"
                    >
                      {language === "tr" ? "İletişime Geç" : "Get in Touch"}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {language === "tr" ? "Neden Digitalevin?" : "Why Digitalevin?"}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                {language === "tr"
                  ? "Projelerinizde başarıya ulaşmanız için ihtiyacınız olan tüm özellikleri sunuyoruz."
                  : "We offer all the features you need to succeed in your projects."}
              </p>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <FadeUp key={item.title} delay={i * 100}>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-electric/10 text-electric transition-transform duration-300 hover:scale-110">
                    <item.icon size={28} />
                  </div>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {language === "tr" ? "Çalışma Sürecimiz" : "Our Work Process"}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                {language === "tr"
                  ? "Projenizin her aşamasında şeffaf ve etkili bir süreç izliyoruz."
                  : "We follow a transparent and effective process at every stage of your project."}
              </p>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <FadeUp key={step.title} delay={i * 100}>
                <div className="relative">
                  {/* Connecting line */}
                  {i < process.length - 1 && (
                    <div className="absolute left-8 top-16 hidden h-px w-full bg-border lg:block" />
                  )}

                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                      <step.icon size={28} />
                    </div>
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-electric text-xs font-bold text-white">
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="mt-6 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-br from-electric/10 via-violet-500/10 to-transparent py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10">
                <MessageCircle size={26} className="text-electric" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {language === "tr" ? "Projenizi Konuşalım" : "Let's Discuss Your Project"}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                {language === "tr"
                  ? "Dijital projeleriniz için profesyonel destek almak ister misiniz? Size özel çözümler üretmek için buradayız."
                  : "Do you want professional support for your digital projects? We are here to produce custom solutions for you."}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-electric px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-electric/90 hover:shadow-lg hover:shadow-electric/25 btn-shine"
                >
                  {language === "tr" ? "Ücretsiz Teklif Alın" : "Get Free Quote"}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/works"
                  className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background px-8 py-3.5 text-sm font-medium transition-all hover:bg-muted"
                >
                  {language === "tr" ? "Projelerimizi İnceleyin" : "View Our Projects"}
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
