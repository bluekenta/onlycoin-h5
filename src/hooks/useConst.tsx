import { t } from "@/i18n";
import Icons from "@/components/icons";

const useConst = () => {
  const title = "OnlyCoin";
  const tabs = [
    {
      title: t("home"),
      name: "home",
      path: "/",
      icon: <Icons type="menu_home" className="w-[24px] h-[24px]" />,
      activeIcon: (
        <Icons type="menu_home" className="w-[24px] h-[24px]" active={"true"} />
      ),
    },
    {
      title: t("account"),
      path: "/account",
      name: "account",
      icon: <Icons type="account" className="w-[24px] h-[24px]" />,
      activeIcon: (
        <Icons type="account" className="w-[24px] h-[24px]" active={"true"} />
      ),
    },
    {
      title: t("earn"),
      path: "/earn",
      name: "earn",
      icon: <Icons type="menu_earn" className="w-[24px] h-[24px]" />,
      activeIcon: (
        <Icons type="menu_earn" className="w-[24px] h-[24px]" active={"true"} />
      ),
    },
    {
      title: t("manage"),
      path: "/manage",
      name: "manage",
      icon: <Icons type="menu_manage" className="w-[24px] h-[24px]" />,
      activeIcon: (
        <Icons
          type="menu_manage"
          className="w-[24px] h-[24px]"
          active={"true"}
        />
      ),
    },
  ];

  return {
    title,
    tabs,
  };
};

export default useConst;
