import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { NAV_ITEMS, PAGE_PATHS } from "../routes";

const productKeys = [1, 2, 3, 5, 7] as const;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0f1f3d] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-5 text-sm text-gray-400 leading-relaxed max-w-xs">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-200"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-200"
              >
                <Facebook size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-5">
              {t("footer.navigation")}
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-5">
              {t("footer.products")}
            </h4>
            <ul className="space-y-3">
              {productKeys.map((productId) => (
                <li key={productId}>
                  <Link
                    to={PAGE_PATHS.products}
                    className="text-sm text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {t(`products.items.${productId}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-5">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#4a90d9] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  {t("contacts.info.addressValue").replace("\n", ", ")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#4a90d9] flex-shrink-0" />
                <a href="tel:+77272000000" className="text-sm text-gray-300 hover:text-white transition-colors">
                  +7 (727) 200-00-00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#4a90d9] flex-shrink-0" />
                <a href="mailto:info@dsaccess.kz" className="text-sm text-gray-300 hover:text-white transition-colors">
                  info@dsaccess.kz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} DS Access Group. {t("common.allRightsReserved")}
          </p>
          <p className="text-xs text-gray-500">{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
