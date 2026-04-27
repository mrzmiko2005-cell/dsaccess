import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSiteData } from "../data";
import { PAGE_PATHS } from "../routes";

const readingTimeKeys = [1, 2, 3, 4, 5, 6] as const;
const paragraphKeys = [1, 2, 3, 4] as const;

export default function NewsDetailPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { news } = useSiteData();

  const article = news.find((item) => item.id === parseInt(id || "0"));

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-18">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t("newsDetail.notFound")}</h1>
          <button
            onClick={() => navigate(PAGE_PATHS.news)}
            className="inline-flex items-center justify-center font-semibold tracking-wide bg-[#1B3A6B] text-white hover:bg-[#15305a] hover:shadow-lg hover:shadow-[#1B3A6B]/25 hover:-translate-y-0.5 transition-all duration-300 rounded-xl px-7 py-3 text-sm"
          >
            {t("newsDetail.backToNews")}
          </button>
        </div>
      </div>
    );
  }

  const sidebarItems = news.filter((item) => item.id !== article.id).slice(0, 4);

  return (
    <div>
      <div
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: `url('${article.image.replace("w=800", "w=1600")}')` }}
      >
        <div className="absolute inset-0 bg-[#0a1a38]/80" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <button
            onClick={() => navigate(PAGE_PATHS.news)}
            className="flex items-center gap-2 text-white/70 hover:text-white font-medium text-sm mb-6 transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            {t("newsDetail.backToNews")}
          </button>
          <div className="inline-block bg-[#4a90d9]/20 text-[#4a90d9] text-xs font-bold px-3 py-1.5 rounded-lg mb-4 tracking-wider uppercase">
            {article.category}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white max-w-3xl leading-tight">
            {article.title}
          </h1>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
            <article className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.07)]">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block bg-[#EEF3FB] text-[#1B3A6B] text-xs font-bold px-3 py-1.5 rounded-lg tracking-wider uppercase">
                  {article.category}
                </span>
                <span className="text-xs text-gray-400">{article.date}</span>
                <span className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Clock size={13} />
                  {t(`newsDetail.readingTimes.${article.id as 1 | 2 | 3 | 4 | 5 | 6}`)}
                </span>
              </div>

              <div className="h-px bg-gray-100 mb-8" />

              <div className="prose-sm max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                  {article.title}
                </h2>
                {paragraphKeys.map((key) => (
                  <p key={key} className="text-gray-500 leading-[1.8] mb-5 last:mb-0">
                    {t(`newsDetail.articles.${article.id}.paragraphs.${key}`)}
                  </p>
                ))}
              </div>
            </article>

            <aside className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.07)]">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-5">
                  {t("newsDetail.latestNews")}
                </h3>
                <div className="space-y-4">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigate(`/news/${item.id}`)}
                      className="w-full flex gap-4 text-left group"
                    >
                      <div className="w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs text-gray-400 block mb-1">{item.date}</span>
                        <h4 className="text-sm font-semibold text-gray-700 leading-snug line-clamp-2 group-hover:text-[#1B3A6B] transition-colors">
                          {item.title}
                        </h4>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#1B3A6B] rounded-2xl p-6 text-center">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#4a90d9] mb-3">
                  {t("newsDetail.ctaEyebrow")}
                </p>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {t("newsDetail.ctaTitle")}
                </h3>
                <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                  {t("newsDetail.ctaDescription")}
                </p>
                <button
                  onClick={() => navigate(PAGE_PATHS.contacts)}
                  className="inline-flex items-center justify-center gap-2 font-semibold tracking-wide bg-white text-[#1B3A6B] hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-xl px-6 py-3 text-sm w-full"
                >
                  {t("newsDetail.ctaButton")}
                  <ChevronRight size={14} />
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
