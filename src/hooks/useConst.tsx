import { t } from "@/i18n";
import Icons from "@/assets/icons";

const useConst = () => {
  const title = "OnlyCoin";
  const tabs = [
    {
      title: t("home"),
      name: "home",
      path: "/",
      icon: <Icons type="tabbar_home" />,
      activeIcon: <Icons type="tabbar_home" active={true} />,
    },
    {
      title: t("account"),
      path: "/account",
      name: "account",
      icon: <Icons type="tabbar_account" />,
      activeIcon: <Icons type="tabbar_account" active={true} />,
    },
    {
      title: t("earn"),
      path: "/earn",
      name: "earn",
      icon: <Icons type="tabbar_earn" />,
      activeIcon: <Icons type="tabbar_earn" active={true} />,
    },
    {
      title: t("manage"),
      path: "/manage",
      name: "manage",
      icon: <Icons type="tabbar_manage" />,
      activeIcon: <Icons type="tabbar_manage" active={true} />,
    },
  ];

  return {
    title,
    tabs,
  };
};

export default useConst;
