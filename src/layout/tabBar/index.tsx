import { useNavigate } from "react-router-dom";
import { useConst } from "@/hooks";
import classnames from "classnames";
import css from "./style.module.scss";
import { useLocation } from "react-router-dom";
import renderRoutes from "@/router/routeObjects";
import { useThemeStore } from "@/store/theme";
import { THEME } from "@/settings";
const Tabbar = () => {
  const navigate = useNavigate();
  const { tabs } = useConst();
  const { pathname } = useLocation();
  const themeStore = useThemeStore();
  const currentRoute = renderRoutes.find((route) => route.path === pathname);
  return (
    <div
      className={classnames(
        css.wrapper,
        "h-[53px] flex bg-white dark:bg-[rgba(23,25,50,1)]"
      )}
    >
      {tabs.map((item) => (
        <div
          key={item.title}
          onClick={() => navigate(item.path)}
          className="flex-1 py-[5px] text-center text-[#717597] text-base flex flex-col gap-[5px]"
        >
          <div className="flex justify-center items-center">
            <div className="flex justify-center  w-[24px] h-[24px]">
              <img
                src={
                  currentRoute?.name === item.name ? item.activeIcon : item.icon
                }
                className={classnames({
                  "w-[24px] h-[24px]": item.name !== "assets",
                  "w-[20px] h-[20px] mt-[2px]": item.name === "assets",
                })}
              />
            </div>
          </div>
          <div
            className={classnames("flex justify-center items-center", {
              "dark:text-white":
                item.name === currentRoute?.name &&
                themeStore.theme === THEME.DARK,
              "gradient-text-1":
                item.name === currentRoute?.name &&
                themeStore.theme === THEME.LIGHT,
            })}
          >
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabbar;
