import { Shield, Zap, Award, Users, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import { PAGE_PATHS } from "../routes";

const advantages = [
  { icon: Award, key: "certifiedQuality" },
  { icon: Zap, key: "onTimeDelivery" },
  { icon: Shield, key: "provenReliability" },
  { icon: Users, key: "expertTeam" },
] as const;

const timelineYears = ["2009", "2012", "2015", "2018", "2021", "2024"] as const;
const bulletIndexes = [1, 2, 3, 4] as const;

export default function AboutPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-[#0a1a38]/80" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#4a90d9] mb-3">{t("about.header.eyebrow")}</p>
          <h1 className="text-4xl md:text-5xl font-black text-white max-w-xl leading-tight">{t("about.header.title")}</h1>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#1B3A6B] mb-4">{t("about.story.eyebrow")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                {t("about.story.title")}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">{t("about.story.description1")}</p>
              <p className="text-gray-500 leading-relaxed mb-4">{t("about.story.description2")}</p>
              <p className="text-gray-500 leading-relaxed mb-8">{t("about.story.description3")}</p>
              <ul className="space-y-3 mb-8">
                {bulletIndexes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#1B3A6B] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{t(`about.story.bullets.${item}`)}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={() => navigate(PAGE_PATHS.contacts)} variant="primary">
                {t("about.story.button")}
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
                <img
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt={t("about.story.imageAlt")}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1B3A6B] rounded-2xl hidden lg:flex flex-col items-center justify-center text-white shadow-[0_8px_32px_rgba(27,58,107,0.4)]">
                <span className="text-3xl font-black">480+</span>
                <span className="text-xs text-center text-blue-200 mt-1 leading-tight px-2">{t("about.story.badge")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow={t("about.advantages.eyebrow")}
            title={t("about.advantages.title")}
            description={t("about.advantages.description")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <div key={adv.key} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:border-[#1B3A6B]/30 hover:shadow-[0_8px_32px_rgba(27,58,107,0.12)] hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#EEF3FB] group-hover:bg-[#1B3A6B] rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon size={22} className="text-[#1B3A6B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3">{t(`about.advantages.items.${adv.key}.title`)}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{t(`about.advantages.items.${adv.key}.description`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1B3A6B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow={t("about.timeline.eyebrow")}
            title={t("about.timeline.title")}
            description={t("about.timeline.description")}
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {timelineYears.map((year) => (
              <div key={year} className="bg-white/8 border border-white/10 rounded-2xl p-8 hover:bg-white/12 hover:border-white/20 transition-all duration-200">
                <div className="text-2xl font-black text-[#4a90d9] mb-3">{year}</div>
                <p className="text-sm text-gray-300 leading-relaxed">{t(`about.timeline.items.${year}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden aspect-video rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt={t("about.production.imageAlt")}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#1B3A6B] mb-4">{t("about.production.eyebrow")}</p>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-6">{t("about.production.title")}</h2>
              <p className="text-gray-500 leading-relaxed mb-4">{t("about.production.description1")}</p>
              <p className="text-gray-500 leading-relaxed mb-8">{t("about.production.description2")}</p>
              <Button onClick={() => navigate(PAGE_PATHS.contacts)} variant="outline">
                {t("about.production.button")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
