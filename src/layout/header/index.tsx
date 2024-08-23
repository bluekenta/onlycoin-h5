import { useLocation, useNavigate } from "react-router-dom";
import classnames from "classnames";
import Icons from "@/components/icons";
import style from "./style.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <header
      className={classnames(
        style.wrapper,
        "mt-[44px] h-[44px] flex justify-between items-center px-[16px]"
      )}
    >
      <Icons
        type="logo"
        onClick={() => navigate("/")}
        fill={pathname.indexOf("login") > 0 ? "#9FE870" : "white"}
        className="!w-[137px] !h-[40px]"
      />
      <Icons type="menu_sandwich" className="w-[24px] h-[24px]" />
    </header>
  );
};

export default Header;
