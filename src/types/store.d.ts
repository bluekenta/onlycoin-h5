interface User {
  name: string;
  avatar: string;
  email: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

type Lang = "zh_CN" | "en_US";

interface LangStore {
  lang: Lang;
  langList: Lang[];
  setLang: (lang: lang) => void;
  toggleLang: () => void;
  setLangList: (langList: lang[]) => void;
}

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}
