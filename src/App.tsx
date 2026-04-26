import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NewsPage from "./pages/NewsPage";
import ContactsPage from "./pages/ContactsPage";
import { getPageIdFromPath, PAGE_PATHS, PAGE_TITLE_KEYS, PRODUCT_DETAIL_PATH } from "./routes";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function DocumentMetadata() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const currentPage = getPageIdFromPath(pathname);

  useEffect(() => {
    const pageTitle = t(PAGE_TITLE_KEYS[currentPage]);
    const titleSuffix = t("meta.titleSuffix");
    document.title = currentPage === "home" ? `${titleSuffix} - ${pageTitle}` : `${pageTitle} - ${titleSuffix}`;
  }, [currentPage, t]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <DocumentMetadata />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path={PAGE_PATHS.home} element={<HomePage />} />
          <Route path={PAGE_PATHS.about} element={<AboutPage />} />
          <Route path={PAGE_PATHS.products} element={<ProductsPage />} />
          <Route path={PRODUCT_DETAIL_PATH} element={<ProductDetailPage />} />
          <Route path={PAGE_PATHS.news} element={<NewsPage />} />
          <Route path={PAGE_PATHS.contacts} element={<ContactsPage />} />
          <Route path="*" element={<Navigate to={PAGE_PATHS.home} replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}
