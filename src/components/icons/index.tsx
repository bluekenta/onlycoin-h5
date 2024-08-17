import HomeIcons from "./home";
import MenuIcons from "./menu";
import WalletIcons from "./wallet";

const {
  IconAccount,
  IconEarn,
  IconHome,
  IconManage,
  IconSandwich,
  IconLogo,
  IconInactiveLogo,
} = MenuIcons;
const { IconBlink, IconBuy, IconSell } = HomeIcons;
const { IconMetamask, IconOkx, IconPhantom } = WalletIcons;

export interface SvgIconProps {
  w?: number;
  h?: number;
  fill?: string;
  bg?: string;
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
  active?: boolean;
}

export interface IIcons extends SvgIconProps {
  type: string;
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
      case "menu_home":
        return <IconHome {...props} />;
      case "menu_account":
        return <IconAccount {...props} />;
      case "menu_earn":
        return <IconEarn {...props} />;
      case "menu_manage":
        return <IconManage {...props} />;
      case "menu_sandwich":
        return <IconSandwich />;
      case "menu_logo":
        return <IconLogo />;
      case "menu_inactive_logo":
        return <IconInactiveLogo />;
      case "wallet_metamask":
        return <IconMetamask />;
      case "wallet_okx":
        return <IconOkx />;
      case "wallet_phantom":
        return <IconPhantom />;

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
