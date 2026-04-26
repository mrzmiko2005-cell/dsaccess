import { useState } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { useSiteData } from "../data";
import { PAGE_PATHS } from "../routes";

export default function ProductsPage() {
  const { t } = useTranslation();
  const { products, productCategories } = useSiteData();
  const [activeCategory, setActiveCategory] = useState<(typeof productCategories)[number]["id"]>("all");
  const navigate = useNavigate();

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.categoryId === activeCategory);

  const activeCategoryLabel = productCategories.find((category) => category.id === activeCategory)?.label ?? "";

  return (
    <div>
      <div
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-[#0a1a38]/80" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#4a90d9] mb-3">{t("products.header.eyebrow")}</p>
          <h1 className="text-4xl md:text-5xl font-black text-white max-w-xl leading-tight">{t("products.header.title")}</h1>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 sticky top-24 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
                <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-5">
                  {t("products.sidebar.title")}
                </h3>
                <ul className="space-y-1">
                  {productCategories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-left rounded-xl transition-all duration-200 ${
                          activeCategory === category.id
                            ? "bg-[#1B3A6B] text-white shadow-md shadow-[#1B3A6B]/20"
                            : "text-gray-600 hover:bg-gray-50 hover:text-[#1B3A6B]"
                        }`}
                      >
                        <span>{category.label}</span>
                        <ChevronRight size={14} className={activeCategory === category.id ? "text-blue-200" : "text-gray-300"} />
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{t("products.sidebar.description")}</p>
                  <Button onClick={() => navigate(PAGE_PATHS.contacts)} size="sm" fullWidth>
                    {t("products.sidebar.button")}
                  </Button>
                </div>
              </div>
            </aside>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{activeCategoryLabel}</h2>
                  <p className="text-sm text-gray-400 mt-0.5">{t("products.count", { count: filtered.length })}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] group hover:border-[#1B3A6B]/30 hover:shadow-[0_8px_32px_rgba(27,58,107,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <div className="overflow-hidden aspect-[4/3]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2 bg-[#EEF3FB] inline-block px-2.5 py-1 rounded-lg">
                        {product.category}
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2 mt-2 group-hover:text-[#1B3A6B] transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <button
                        onClick={() => navigate(PAGE_PATHS.contacts)}
                        className="flex items-center gap-1.5 text-sm font-semibold text-[#1B3A6B] hover:gap-2.5 transition-all duration-200"
                      >
                        {t("common.requestInfo")} <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-[#0a1a38]/85" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t("products.teaser.title")}</h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
            {t("products.teaser.description")}
          </p>
          <Button onClick={() => navigate(PAGE_PATHS.contacts)} size="lg">
            {t("products.teaser.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}
