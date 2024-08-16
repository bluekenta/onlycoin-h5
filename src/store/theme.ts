import { INIT_THEME, THEME } from "@/settings";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: INIT_THEME,
      setTheme: (theme: Theme) => {
        set({ theme });
        document.documentElement.setAttribute("class", theme);
      },
      toggleTheme: () => {
        set({ theme: get().theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT });
        document.documentElement.setAttribute(
          "class",
          get().theme === THEME.DARK ? THEME.LIGHT : THEME.DARK
        );
      },
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
