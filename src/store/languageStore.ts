/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from "zustand/middleware";

import en from "../assets/languages/english/en.json";
import ua from "../assets/languages/ukrainian/ua.json";

type TranslationKeys = typeof en;
type Language = "en" | "ua";

type LanguageState = {
  language: Language;
  translations: Record<Language, TranslationKeys>;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | undefined;
};

const translations = {
  en,
  ua,
};

const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: "ua",
      translations,
      setLanguage: (lang) => set({ language: lang }),

      t: (key) => {
        const { language, translations } = get();
        const result = key
          .split(".")
          .reduce((o: Record<string, any> | undefined, i) => {
            return o ? o[i] : undefined;
          }, translations[language] as Record<string, any>);

        return typeof result === "string" ? result : undefined;
      },
    }),
    {
      name: "language-storage",
      partialize: (state) => ({ language: state.language }),
    }
  )
);

export default useLanguageStore;
