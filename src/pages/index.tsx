import "../styles/index.scss";

import React from "react";
import { ConfigProvider, theme } from "antd";
import RouteProvider from "@/router";
import i18n from "@/i18n/index";
import { useLangStore } from "@/store/lang";
import { useThemeStore } from "@/store/theme";
import { THEME } from "@/settings";
//@ts-ignore
const locales = i18n.store.data;
const App: React.FC = () => {
  const langStore = useLangStore();
  const themeStore = useThemeStore();
  document.documentElement.setAttribute("class", themeStore.theme);
  return (
    <ConfigProvider
      theme={{
        algorithm:
          themeStore.theme === THEME.DARK
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
      }}
      //@ts-ignore
      locale={locales[langStore.lang]}
    >
      <RouteProvider />
    </ConfigProvider>
  );
};

export default App;
