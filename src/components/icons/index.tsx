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
import IconArrowUp from "./IconArrowUp";
import IconArrowDown from "./IconArrowDown";
import IconUp from "./IconUp";
import IconDown from "./IconDown";
import IconClose from "./IconClose";
import IconUSD from "./IconUSD";
import IconHKD from "./IconHKD";
import IconTHB from "./IconTHB";
import IconBRL from "./IconBRL";
import IconINR from "./IconINR";
import IconSGD from "./IconSGD";
import IconCard, {
  IconBankCard,
  IconMasterCard,
  IconPersonalCard,
  IconSEPACard,
  IconVISACard,
} from "./IconCard";
import IconAlarm from "./IconAlarm";

export interface SvgIconProps {
  w?: number;
  h?: number;
  fill?: string;
  bg?: string;
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
  active?: string;
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
      case "account":
        return <IconAccount {...props} />;
      case "menu_earn":
        return <IconEarn {...props} />;
      case "menu_manage":
        return <IconManage {...props} />;
      case "menu_sandwich":
        return <IconSandwich />;
      case "logo":
        return <IconLogo {...props} />;
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
      case "arrow-up":
        return <IconArrowUp {...props} />;
      case "arrow-down":
        return <IconArrowDown {...props} />;
      case "up":
        return <IconUp {...props} />;
      case "down":
        return <IconDown {...props} />;
      case "close":
        return <IconClose {...props} />;
      case "USD":
        return <IconUSD {...props} />;
      case "HKD":
        return <IconHKD {...props} />;
      case "THB":
        return <IconTHB {...props} />;
      case "BRL":
        return <IconBRL {...props} />;
      case "INR":
        return <IconINR {...props} />;
      case "SGD":
        return <IconSGD {...props} />;
      case "card":
        return <IconCard {...props} />;
      case "card_visa":
        return <IconVISACard {...props} />;
      case "card_master":
        return <IconMasterCard {...props} />;
      case "card_bank":
        return <IconBankCard {...props} />;
      case "card_sepa":
        return <IconSEPACard {...props} />;
      case "card_personal":
        return <IconPersonalCard {...props} />;
      case "alarm":
        return <IconAlarm {...props} />;
      default:
        return null;
    }
  };

  return (
    <div {...props} onClick={props.onClick}>
      {getIcon()}
    </div>
  );
};

export default Icons;
