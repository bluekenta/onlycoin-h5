import { INIT_LANG } from "@/settings";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import i18n, { t } from "@/i18n/index";

export const useLangStore = create<LangStore>()(
  persist(
    (set, get) => ({
      lang: INIT_LANG,
      langList: [],
      setLang: (lang: Lang) => {
        i18n.changeLanguage("cimode");
        set({ lang });
      },
      toggleLang: () =>
        set({
          lang: get().lang === "zh_CN" ? "en_US" : "zh_CN",
        }),
      setLangList: (langList: Lang[]) => set({ langList }),
    }),
    {
      name: "lang",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
