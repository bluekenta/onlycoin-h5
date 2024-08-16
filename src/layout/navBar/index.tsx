import { useThemeStore } from "@/store/theme";
import { useNavigate } from "react-router-dom";
import navBackDark from "@/assets/layout/navbar/nav-back-dark.png";
import navBackLight from "@/assets/layout/navbar/nav-back-light.png";
import { THEME } from "@/settings";
import classnames from "classnames";
import icons from "@/icons";

interface props {
  title: string;
  goBackUrl?: string;
  icon?: string;
  content?: React.ReactNode;
  hasBack?: boolean;
  showNavBar?: number;
}

const Navbar = ({ title, goBackUrl, hasBack, showNavBar, icon }: props) => {
  const themeStore = useThemeStore();
  const navigate = useNavigate();
  return (
    <div
      className={
        hasBack
          ? "h-[80px] bg-[url('@/assets/layout/navbar/navbar2-bg.png')] bg-opacity-70 bg-contain"
          : "h-[40px]"
      }
    >
      <div className="mt-[24px] flex justify-center items-center relative">
        <div
          className={classnames(
            "text-lg leading-[16px] font-bold flex items-center justify-center text-[#171932] dark:text-white",
            {
              "text-white": showNavBar === 2,
            }
          )}
        >
          {title}
        </div>
        <div
          onClick={() => navigate(goBackUrl as string)}
          className="absolute left-[20px] top-[50%] transform -translate-y-[50%]"
        >
          <img
            src={
              showNavBar === 2
                ? navBackDark
                : themeStore.theme === THEME.DARK
                ? navBackDark
                : navBackLight
            }
            alt="back-btn"
            className="w-[24px] h-[24px]"
          />
        </div>
        {icon && (
          <div className="absolute right-[20px] top-[50%] transform -translate-y-[50%]">
            <img
              src={icons[icon].icon}
              alt="icon"
              className={`w-[${icons[icon].width}px] h-[${icons[icon].height}px]`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
