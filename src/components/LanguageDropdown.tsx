import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage, Language } from "../contexts/LanguageContext";

const LANGUAGES: { code: Language; key: string }[] = [
  { code: "EN", key: "common.languages.en" },
  { code: "RU", key: "common.languages.ru" },
  { code: "UZ", key: "common.languages.uz" },
];

interface LanguageDropdownProps {
  light?: boolean;
}

export default function LanguageDropdown({ light = false }: LanguageDropdownProps) {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
          light
            ? "border border-white/30 text-white hover:bg-white/15 hover:border-white/50"
            : "border border-gray-200 text-gray-700 bg-white hover:border-[#1B3A6B] hover:text-[#1B3A6B] shadow-sm"
        }`}
      >
        <span>{language}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className={`absolute top-full right-0 mt-2 w-44 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-50 overflow-hidden border ${
            light ? "bg-[#1a3460] border-white/15" : "bg-white border-gray-100"
          }`}
        >
          <div className="p-1.5">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                className={`w-full px-3.5 py-2.5 text-sm text-left font-medium rounded-xl transition-all duration-150 ${
                  language === lang.code
                    ? light
                      ? "bg-white/20 text-white"
                      : "bg-[#EEF3FB] text-[#1B3A6B]"
                    : light
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#1B3A6B]"
                }`}
              >
                <div className="font-semibold">{lang.code}</div>
                <div className={`text-xs ${light ? "text-white/55" : "text-gray-400"}`}>
                  {t(lang.key)}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
