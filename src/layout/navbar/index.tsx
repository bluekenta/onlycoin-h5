import { useNavigate } from "react-router-dom";
import { useConst } from "@/hooks";
import classnames from "classnames";
import { useLocation } from "react-router-dom";
import renderRoutes from "@/router/routeObjects";

const Navbar = () => {
  const navigate = useNavigate();
  const { tabs } = useConst();
  const { pathname } = useLocation();
  const currentRoute = renderRoutes.find((route) => route.path === pathname);
  return (
    <footer
      className={classnames(
        "h-[49px] flex justify-between px-[30px] py-[6.5px] border-t-[1px] border-inactive"
      )}
    >
      {tabs.map((item) => (
        <div
          key={item.title}
          onClick={() => navigate(item.path)}
          className="text-center text-base flex flex-col items-center"
        >
          {currentRoute?.name === item.name ? item.activeIcon : item.icon}
          <div
            className={classnames("font-semibold text-sm font-SFProDisplay", {
              "text-primary": item.name === currentRoute?.name,
              "text-inactive": item.name !== currentRoute?.name,
            })}
          >
            {item.title}
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Navbar;
