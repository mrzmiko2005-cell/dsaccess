import { ArrowRight, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import { partners, useSiteData } from "../data";
import { PAGE_PATHS } from "../routes";

function StatCard({ value, label, suffix }: { value: string; label: string; suffix?: string }) {
  return (
    <div className="text-center py-12 px-6">
      <div className="text-5xl font-black text-white tracking-tight mb-2.5">
        {value}
        <span className="text-[#4a90d9]">{suffix}</span>
      </div>
      <div className="text-xs text-gray-300 font-semibold uppercase tracking-[0.15em]">{label}</div>
    </div>
  );
}

function NewsCard({ item, onNavigate }: { item: ReturnType<typeof useSiteData>["news"][number]; onNavigate: (path: string) => void }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-2xl overflow-hidden group cursor-pointer shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_32px_rgba(27,58,107,0.13)] transition-all duration-300 hover:-translate-y-1" onClick={() => onNavigate(PAGE_PATHS.news)}>
      <div className="overflow-hidden aspect-[16/10]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest bg-[#EEF3FB] px-2.5 py-1 rounded-lg">{item.category}</span>
          <span className="text-gray-300">·</span>
          <span className="text-xs text-gray-400">{item.date}</span>
        </div>
        <h3 className="text-base font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#1B3A6B] transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{item.excerpt}</p>
        <div className="mt-4 flex items-center gap-1 text-[#1B3A6B] text-sm font-semibold group-hover:gap-2 transition-all duration-200">
          {t("common.readMore")} <ChevronRight size={14} />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ item }: { item: ReturnType<typeof useSiteData>["projects"][number] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="text-xs text-[#4a90d9] font-bold uppercase tracking-widest mb-1">{item.category}</div>
        <h3 className="text-base font-bold text-white leading-tight">{item.title}</h3>
        <div className="text-xs text-gray-300 mt-1">{item.location}</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const { t } = useTranslation();
  const { stats, news, projects } = useSiteData();
  const navigate = useNavigate();

  return (
    <div>
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a38]/90 via-[#0a1a38]/70 to-[#0a1a38]/30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#4a90d9] mb-6">
              {t("home.hero.eyebrow")}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] mb-6">
              {t("home.hero.title")}
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10 max-w-lg">
              {t("home.hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => navigate(PAGE_PATHS.contacts)} size="lg">
                {t("home.hero.ctaPrimary")}
              </Button>
              <Button onClick={() => navigate(PAGE_PATHS.products)} size="lg" variant="ghost">
                {t("home.hero.ctaSecondary")} <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <div className="w-px h-12 bg-white/20 animate-pulse" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
                <img
                  src="https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt={t("home.about.imageAlt")}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[#1B3A6B] rounded-2xl hidden lg:flex flex-col items-center justify-center text-white shadow-[0_8px_32px_rgba(27,58,107,0.4)]">
                <span className="text-3xl font-black">15+</span>
                <span className="text-xs text-center text-blue-200 mt-1 leading-tight px-2">{t("home.about.badge")}</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#1B3A6B] mb-4">{t("home.about.eyebrow")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                {t("home.about.title")}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">{t("home.about.description1")}</p>
              <p className="text-gray-500 leading-relaxed mb-8">{t("home.about.description2")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => navigate(PAGE_PATHS.about)} variant="primary">
                  {t("home.about.ctaPrimary")}
                </Button>
                <Button onClick={() => navigate(PAGE_PATHS.contacts)} variant="outline">
                  {t("common.contactUs")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B3A6B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-transparent via-[#4a90d9]/40 to-transparent" />
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow={t("home.news.eyebrow")}
            title={t("home.news.title")}
            description={t("home.news.description")}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {news.slice(0, 3).map((item) => (
              <NewsCard key={item.id} item={item} onNavigate={navigate} />
            ))}
          </div>
          <div className="text-center">
            <Button onClick={() => navigate(PAGE_PATHS.news)} variant="outline">
              {t("home.news.cta")} <ArrowRight size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow={t("home.portfolio.eyebrow")}
            title={t("home.portfolio.title")}
            description={t("home.portfolio.description")}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {projects.slice(0, 3).map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center">
            <Button onClick={() => navigate(PAGE_PATHS.products)} variant="outline">
              {t("home.portfolio.cta")} <ArrowRight size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-12">
            {t("home.partners.title")}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="border border-gray-100 bg-white h-16 flex items-center justify-center px-4 rounded-xl shadow-sm hover:border-[#1B3A6B]/30 hover:shadow-md transition-all duration-200"
              >
                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-[#0a1a38]/85" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#4a90d9] mb-4">{t("home.cta.eyebrow")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
            {t("home.cta.title")}
          </h2>
          <p className="text-gray-300 mb-10 max-w-lg mx-auto text-base leading-relaxed">
            {t("home.cta.description")}
          </p>
          <Button onClick={() => navigate(PAGE_PATHS.contacts)} size="lg">
            {t("home.cta.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}
