import { t } from "@/i18n";
import homeIcon from "@/assets/layout/tabbar/home.png";
import homeIconActive from "@/assets/layout/tabbar/home-active.png";
import coinsIcon from "@/assets/layout/tabbar/coins.png";
import coinsIconActive from "@/assets/layout/tabbar/coins-active.png";
import optionsIcon from "@/assets/layout/tabbar/options.png";
import optionsIconActive from "@/assets/layout/tabbar/options-active.png";
import contractIcon from "@/assets/layout/tabbar/contract.png";
import contractIconActive from "@/assets/layout/tabbar/contract-active.png";
import assetsIcon from "@/assets/layout/tabbar/assets.png";
import assetsIconActive from "@/assets/layout/tabbar/assets-active.png";

const useConst = () => {
  const tabs = [
    {
      title: t("首页"),
      name: "home",
      path: "/",
      icon: homeIcon,
      activeIcon: homeIconActive,
    },
    {
      title: t("货币"),
      path: "/coins",
      name: "coins",
      icon: coinsIcon,
      activeIcon: coinsIconActive,
    },
    {
      title: t("选项"),
      path: "/options",
      name: "options",
      icon: optionsIcon,
      activeIcon: optionsIconActive,
    },
    {
      title: t("智能合约"),
      path: "/contract",
      name: "contract",
      icon: contractIcon,
      activeIcon: contractIconActive,
    },
    {
      title: t("财产"),
      path: "/assets",
      name: "assets",
      icon: assetsIcon,
      activeIcon: assetsIconActive,
    },
  ];

  return {
    tabs,
  };
};

export default useConst;
