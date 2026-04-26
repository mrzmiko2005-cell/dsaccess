import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import ru from "./locales/ru";
import uz from "./locales/uz";

export const DEFAULT_LANGUAGE = "en";

export const resources = {
  en: { translation: en },
  ru: { translation: ru },
  uz: { translation: uz },
} as const;

const storedLanguage =
  typeof window !== "undefined" ? window.localStorage.getItem("language") : null;

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng:
      storedLanguage && storedLanguage in resources
        ? storedLanguage
        : DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
