import React, { createContext, useContext, useState, useCallback } from "react";
import { en, type Translations } from "./en";
import { de } from "./de";

type Lang = "en" | "de";

interface I18nContextType {
  t: Translations;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContextType>({
  t: en,
  lang: "en",
  setLang: () => {},
});

const translations: Record<Lang, Translations> = { en, de };

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem("sharecycle-lang");
    if (stored === "de" || stored === "en") return stored;
    return navigator.language.startsWith("de") ? "de" : "en";
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("sharecycle-lang", l);
  }, []);

  return (
    <I18nContext.Provider value={{ t: translations[lang], lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
