import { useNavigate } from "react-router-dom";
import { useConst } from "@/hooks";
import classnames from "classnames";
import css from "./style.module.scss";
import { useLocation } from "react-router-dom";
import renderRoutes from "@/router/routeObjects";

const Tabbar = () => {
  const navigate = useNavigate();
  const { tabs } = useConst();
  const { pathname } = useLocation();
  const currentRoute = renderRoutes.find((route) => route.path === pathname);
  return (
    <div className={classnames(css.wrapper, "h-[49px] flex")}>
      {tabs.map((item) => (
        <div
          key={item.title}
          onClick={() => navigate(item.path)}
          className="flex-1 py-[5px] text-center text-base flex flex-col gap-[5px]"
        >
          <div className="flex justify-center items-center">
            <div className="flex justify-center  w-[24px] h-[24px]">
              {currentRoute?.name === item.name ? item.activeIcon : item.icon}
            </div>
          </div>
          <div
            className={classnames("flex justify-center items-center", {
              "text-primary": item.name === currentRoute?.name,
              "text-inactive": item.name !== currentRoute?.name,
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
