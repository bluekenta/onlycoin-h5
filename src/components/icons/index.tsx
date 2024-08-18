import IconAccount from "./IconAccount";
import IconBlink from "./IconBlink";
import IconBuy from "./IconBuy";
import IconClipboard from "./IconClipboard";
import IconEarn from "./IconEarn";
import IconHome from "./IconHome";
import IconLogo, { IconInactiveLogo } from "./IconLogo";
import IconManage from "./IconManage";
import { IconMetamask, IconOkx, IconPhantom } from "./IconWallet";
import IconSandwich from "./IconSandwich";
import IconSell from "./IconSell";
import IconView from "./IconView";

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
      case "buy":
        return <IconBuy />;
      case "sell":
        return <IconSell />;
      case "blink":
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
      case "logo":
        return <IconLogo />;
      case "inactive_logo":
        return <IconInactiveLogo />;
      case "clipboard":
        return <IconClipboard />;
      case "view":
        return <IconView />;
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
