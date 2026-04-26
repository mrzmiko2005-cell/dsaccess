import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import LanguageDropdown from "./LanguageDropdown";
import { useLanguage } from "../contexts/LanguageContext";
import { NAV_ITEMS, PAGE_PATHS } from "../routes";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === PAGE_PATHS.home;
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-gray-100/80 shadow-[0_2px_24px_rgba(0,0,0,0.07)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <Link to={PAGE_PATHS.home} className="focus:outline-none">
            <Logo light={transparent} />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                end={link.id === "home"}
                className={({ isActive }) => `text-sm font-medium tracking-wide transition-all duration-200 relative ${
                  isActive
                    ? transparent
                      ? "text-white after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-white after:rounded-full"
                      : "text-[#1B3A6B] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-[#1B3A6B] after:rounded-full"
                    : transparent
                      ? "text-white/80 hover:text-white"
                      : "text-gray-600 hover:text-[#1B3A6B]"
                }`}
              >
                {t(link.key)}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <LanguageDropdown light={transparent} />
          </div>

          <button
            type="button"
            className={`lg:hidden p-2 rounded-lg transition-colors ${transparent ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100"}`}
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
          <div className="px-6 py-5 flex flex-col gap-1">
            {NAV_ITEMS.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                end={link.id === "home"}
                className={({ isActive }) => `text-left text-sm font-medium py-3 px-3 rounded-lg transition-colors ${
                  isActive ? "text-[#1B3A6B] bg-[#EEF3FB]" : "text-gray-600 hover:text-[#1B3A6B] hover:bg-gray-50"
                }`}
              >
                {t(link.key)}
              </NavLink>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-100">
              <LanguageDropdown />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
