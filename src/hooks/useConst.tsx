import { t } from "@/i18n";
import Icons from "@/components/icons";

const useConst = () => {
  const title = "OnlyCoin";
  const tabs = [
    {
      title: t("home"),
      name: "home",
      path: "/",
      icon: <Icons type="menu_home" />,
      activeIcon: <Icons type="menu_home" active={true} />,
    },
    {
      title: t("account"),
      path: "/account",
      name: "account",
      icon: <Icons type="menu_account" />,
      activeIcon: <Icons type="menu_account" active={true} />,
    },
    {
      title: t("earn"),
      path: "/earn",
      name: "earn",
      icon: <Icons type="menu_earn" />,
      activeIcon: <Icons type="menu_earn" active={true} />,
    },
    {
      title: t("manage"),
      path: "/manage",
      name: "manage",
      icon: <Icons type="menu_manage" />,
      activeIcon: <Icons type="menu_manage" active={true} />,
    },
  ];

  return {
    title,
    tabs,
  };
};

export default useConst;
