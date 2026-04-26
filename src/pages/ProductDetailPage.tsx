import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import { useSiteData } from "../data";
import { PAGE_PATHS } from "../routes";

const productGalleryImages: Record<number, string[]> = {
  1: [
    "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1000",
  ],
  2: [
    "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1000",
  ],
  3: [
    "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1000",
  ],
  4: [
    "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1000",
  ],
  5: [
    "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1000",
  ],
  6: [
    "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=1000",
  ],
  7: [
    "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1000",
  ],
  8: [
    "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1000",
  ],
};

const quickInfoKeys = [1, 2, 3, 4] as const;
const specGroupKeys = ["material", "dimensions"] as const;
const specItemKeys = {
  material: [1, 2, 3, 4] as const,
  dimensions: [1, 2, 3, 4] as const,
};
const descriptionKeys = [1, 2, 3] as const;

export default function ProductDetailPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products } = useSiteData();

  const product = products.find((p) => p.id === parseInt(id || "0"));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-18">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t("products.detail.notFound")}</h1>
          <Button onClick={() => navigate(PAGE_PATHS.products)}>
            {t("products.detail.backToProducts")}
          </Button>
        </div>
      </div>
    );
  }

  const galleryImages = productGalleryImages[product.id] || [product.image];

  return (
    <div>
      <div
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: `url('${galleryImages[0]}?auto=compress&cs=tinysrgb&w=1600')` }}
      >
        <div className="absolute inset-0 bg-[#0a1a38]/80" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <button
            onClick={() => navigate(PAGE_PATHS.products)}
            className="flex items-center gap-2 text-white/70 hover:text-white font-medium text-sm mb-6 transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            {t("products.detail.backToProducts")}
          </button>
          <div className="inline-block bg-[#4a90d9]/20 text-[#4a90d9] text-xs font-bold px-3 py-1.5 rounded-lg mb-4 tracking-wider uppercase">
            {product.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white max-w-2xl leading-tight">
            {product.title}
          </h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] aspect-[4/3] bg-gray-100">
                <img
                  src={galleryImages[selectedImageIndex]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex gap-3 overflow-x-auto pb-1">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`rounded-xl overflow-hidden transition-all duration-200 flex-shrink-0 ${
                      selectedImageIndex === index
                        ? "ring-2 ring-[#1B3A6B] shadow-lg opacity-100"
                        : "border border-gray-200 hover:border-[#1B3A6B]/50 opacity-50 hover:opacity-80"
                    }`}
                    style={{ width: "80px", height: "80px" }}
                  >
                    <img
                      src={image}
                      alt={`${product.title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="text-xs text-gray-400 text-center">
                {selectedImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-8">
                <div className="inline-block bg-[#EEF3FB] text-[#1B3A6B] text-xs font-bold px-3 py-1.5 rounded-lg mb-4 tracking-wider uppercase">
                  {product.category}
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
                  {product.title}
                </h2>

                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {t("products.detail.sku")}: <span className="font-semibold text-gray-600">DS-{String(product.id).padStart(4, "0")}</span>
                </p>

                <p className="text-base text-gray-500 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4 mb-8 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em]">
                  {t("products.detail.quickInfo")}
                </h3>
                <ul className="space-y-3">
                  {quickInfoKeys.map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#1B3A6B] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{t(`products.detail.quickInfoItems.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <Button
                  onClick={() => navigate(PAGE_PATHS.contacts)}
                  size="lg"
                  fullWidth
                  className="sm:flex-1"
                >
                  {t("products.detail.requestCall")}
                </Button>

                <button
                  onClick={() => navigate(PAGE_PATHS.contacts)}
                  className="py-3 px-6 text-center rounded-xl border-2 border-[#1B3A6B] text-[#1B3A6B] font-semibold hover:bg-[#1B3A6B] hover:text-white hover:shadow-lg hover:shadow-[#1B3A6B]/20 hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0 sm:flex-1"
                >
                  {t("products.detail.contactSales")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow={t("products.detail.specsEyebrow")}
            title={t("products.detail.specifications")}
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specGroupKeys.map((groupKey) => (
              <div key={groupKey} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-5">
                  {t(`products.detail.specGroups.${groupKey}.title`)}
                </h3>
                <ul className="space-y-0 divide-y divide-gray-100">
                  {specItemKeys[groupKey].map((itemKey) => (
                    <li key={itemKey} className="flex justify-between items-center py-3 first:pt-0 last:pb-0">
                      <span className="text-sm text-gray-500">
                        {t(`products.detail.specGroups.${groupKey}.items.${itemKey}.label`)}
                      </span>
                      <span className="text-sm font-semibold text-gray-700">
                        {t(`products.detail.specGroups.${groupKey}.items.${itemKey}.value`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow={t("products.detail.descriptionEyebrow")}
            title={t("products.detail.detailedDescription")}
            align="left"
          />
          <div className="max-w-3xl">
            {descriptionKeys.map((key) => (
              <p key={key} className="text-gray-500 leading-relaxed mb-4 last:mb-0">
                {t(`products.detail.descriptionParagraphs.${key}`)}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1B3A6B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#4a90d9] mb-4">
            {t("products.detail.ctaEyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
            {t("products.detail.ctaTitle")}
          </h2>
          <p className="text-gray-300 mb-10 max-w-lg mx-auto text-base leading-relaxed">
            {t("products.detail.ctaDescription")}
          </p>
          <Button onClick={() => navigate(PAGE_PATHS.contacts)} size="lg" variant="ghost">
            {t("common.contactUs")}
          </Button>
        </div>
      </section>
    </div>
  );
}
