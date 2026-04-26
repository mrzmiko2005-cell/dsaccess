import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { useTranslation } from "react-i18next";

export type Language = "EN" | "RU" | "UZ";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: ReturnType<typeof useTranslation>["t"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const languageMap: Record<Language, "en" | "ru" | "uz"> = {
  EN: "en",
  RU: "ru",
  UZ: "uz",
};

const inverseLanguageMap: Record<"en" | "ru" | "uz", Language> = {
  en: "EN",
  ru: "RU",
  uz: "UZ",
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n, t } = useTranslation();

  const language = inverseLanguageMap[(i18n.language as "en" | "ru" | "uz") || "en"] ?? "EN";

  const value = useMemo(
    () => ({
      language,
      setLanguage: (lang: Language) => {
        const nextLanguage = languageMap[lang];
        void i18n.changeLanguage(nextLanguage);
      },
      t,
    }),
    [i18n, language, t],
  );

  useEffect(() => {
    window.localStorage.setItem("language", languageMap[language]);
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
