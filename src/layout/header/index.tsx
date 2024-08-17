import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import Icons from "@/components/icons";
import style from "./style.module.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      className={classnames(
        style.wrapper,
        "h-[44px] flex justify-between items-center px-[16px]"
      )}
    >
      <Icons type="menu_logo" onClick={() => navigate("/")} />
      <Icons type="menu_sandwich" />
    </header>
  );
};

export default Header;
