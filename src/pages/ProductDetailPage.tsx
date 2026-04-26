import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button";
import { useSiteData } from "../data";
import { PAGE_PATHS } from "../routes";

export default function ProductDetailPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products } = useSiteData();

  const product = products.find((p) => p.id === parseInt(id || "0"));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t("common.notFound") || "Product not found"}</h1>
          <Button onClick={() => navigate(PAGE_PATHS.products)}>
            {t("common.backToProducts") || "Back to Products"}
          </Button>
        </div>
      </div>
    );
  }

  const galleryImages = [
    product.image,
    "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1000",
    "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1000",
  ];

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <button
            onClick={() => navigate(PAGE_PATHS.products)}
            className="flex items-center gap-2 text-[#1B3A6B] font-semibold mb-8 hover:gap-3 transition-all duration-200"
          >
            <ArrowLeft size={18} />
            {t("common.back") || "Back"}
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] aspect-square bg-gray-100">
                <img
                  src={galleryImages[selectedImageIndex]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex gap-3">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`rounded-xl overflow-hidden transition-all duration-200 flex-shrink-0 ${
                      selectedImageIndex === index
                        ? "ring-2 ring-[#1B3A6B] shadow-lg"
                        : "border border-gray-200 hover:border-[#1B3A6B]/50 opacity-60 hover:opacity-100"
                    }`}
                    style={{ width: "80px", height: "80px" }}
                  >
                    <img
                      src={image}
                      alt={`Product view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="text-xs text-gray-400 text-center mt-2">
                {selectedImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-8">
                <div className="inline-block bg-[#EEF3FB] text-[#1B3A6B] text-xs font-bold px-3 py-1.5 rounded-lg mb-4 tracking-wider uppercase">
                  {product.category}
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                  {product.title}
                </h1>

                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  SKU: <span className="font-semibold text-gray-700">DS-{String(product.id).padStart(4, "0")}</span>
                </p>

                <p className="text-base text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4 mb-8 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Quick Info</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight size={16} className="text-[#4a90d9] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Professional-grade construction material</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight size={16} className="text-[#4a90d9] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Engineered for durability and performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight size={16} className="text-[#4a90d9] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Trusted by industry leaders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight size={16} className="text-[#4a90d9] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Custom solutions available</span>
                  </li>
                </ul>
              </div>

              <Button
                onClick={() => navigate(PAGE_PATHS.contacts)}
                size="lg"
                fullWidth
                className="mb-4"
              >
                {t("products.detail.requestCall") || "Request a Call"}
              </Button>

              <button
                onClick={() => navigate(PAGE_PATHS.contacts)}
                className="py-3 px-6 text-center rounded-xl border border-[#1B3A6B] text-[#1B3A6B] font-semibold hover:bg-[#1B3A6B] hover:text-white transition-all duration-200"
              >
                {t("products.detail.contactSales") || "Contact Sales"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("products.detail.specifications") || "Specifications"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-4">Material Properties</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span>Material Grade</span>
                  <span className="font-semibold">High Strength Steel</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span>Thickness Range</span>
                  <span className="font-semibold">3-12mm</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span>Surface Finish</span>
                  <span className="font-semibold">Hot Rolled / Galvanized</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Tensile Strength</span>
                  <span className="font-semibold">360-450 MPa</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-4">Dimensions & Capacity</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span>Standard Lengths</span>
                  <span className="font-semibold">6-15m</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span>Width Options</span>
                  <span className="font-semibold">1-3m</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span>Load Capacity</span>
                  <span className="font-semibold">Up to 50 tons</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Weight per Unit</span>
                  <span className="font-semibold">2-8 tons</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("products.detail.description") || "Detailed Description"}</h2>
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              This premium construction product is engineered to meet the highest industry standards. With advanced manufacturing techniques and rigorous quality control, each unit delivers exceptional performance in demanding industrial applications.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Designed for versatility, this product adapts to various construction scenarios while maintaining structural integrity. Our commitment to innovation ensures you receive a product that combines traditional reliability with modern engineering excellence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Contact our technical team to discuss custom configurations, bulk orders, and delivery options tailored to your specific project requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1B3A6B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("products.detail.readyToOrder") || "Ready to Get Started?"}
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            {t("products.detail.contactTeam") || "Contact our sales team for pricing, availability, and custom solutions."}
          </p>
          <Button onClick={() => navigate(PAGE_PATHS.contacts)} size="lg" variant="ghost">
            {t("common.contactUs") || "Contact Us"}
          </Button>
        </div>
      </section>
    </div>
  );
}
