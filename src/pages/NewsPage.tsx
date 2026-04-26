import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSiteData } from "../data";

const PAGE_SIZE = 4;

export default function NewsPage() {
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
  const { news } = useSiteData();

  const totalPages = Math.ceil(news.length / PAGE_SIZE);
  const paginated = news.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-[#0a1a38]/80" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#4a90d9] mb-3">{t("news.header.eyebrow")}</p>
          <h1 className="text-4xl md:text-5xl font-black text-white max-w-xl leading-tight">{t("news.header.title")}</h1>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {paginated.map((item) => (
              <article key={item.id} className="bg-white rounded-2xl overflow-hidden group flex flex-col shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_32px_rgba(27,58,107,0.12)] hover:-translate-y-1 transition-all duration-300">
                <div className="overflow-hidden aspect-[16/9]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest bg-[#EEF3FB] px-2.5 py-1 rounded-lg">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#1B3A6B] transition-colors flex-1">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{item.excerpt}</p>
                  <button className="self-start flex items-center gap-2 text-sm font-semibold text-white bg-[#1B3A6B] px-5 py-2.5 rounded-xl hover:bg-[#15305a] hover:shadow-md hover:shadow-[#1B3A6B]/20 transition-all duration-200">
                    {t("news.button")} <ChevronRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:border-[#1B3A6B] hover:text-[#1B3A6B] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft size={16} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 flex items-center justify-center text-sm font-semibold rounded-xl border transition-all duration-200 ${
                    page === p
                      ? "bg-[#1B3A6B] text-white border-[#1B3A6B] shadow-md shadow-[#1B3A6B]/20"
                      : "border-gray-200 text-gray-500 hover:border-[#1B3A6B] hover:text-[#1B3A6B]"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:border-[#1B3A6B] hover:text-[#1B3A6B] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
