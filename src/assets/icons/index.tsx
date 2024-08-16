import HomeIcons from "./home";
import TabbarIcons from "./tabbar";

const { IconAccount, IconEarn, IconHome, IconManage } = TabbarIcons;
const { IconBlink, IconBuy, IconSell } = HomeIcons;

export interface SvgIconProps {
  width?: number;
  height?: number;
  fill?: string;
  bg?: string;
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
  active?: boolean;
}

interface IIcons extends SvgIconProps {
  type:
    | "home_buy"
    | "home_sell"
    | "home_blink"
    | "tabbar_home"
    | "tabbar_account"
    | "tabbar_earn"
    | "tabbar_manage";
}

const Icons = (props: IIcons) => {
  const getIcon = () => {
    switch (props.type) {
      case "home_buy":
        return <IconBuy />;
      case "home_sell":
        return <IconSell />;
      case "home_blink":
        return <IconBlink />;
      case "tabbar_home":
        return <IconHome {...props} />;
      case "tabbar_account":
        return <IconAccount {...props} />;
      case "tabbar_earn":
        return <IconEarn {...props} />;
      case "tabbar_manage":
        return <IconManage {...props} />;

      default:
        return null;
    }
  };

  return (
    <div className={props.className} onClick={props.onClick}>
      {getIcon()}
    </div>
  );
};

export default Icons;
