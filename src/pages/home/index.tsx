import { Button, Progress, Space } from "antd";
import i18n, { t } from "@/i18n/index";
import { useLangStore } from "@/store/lang";
import { useThemeStore } from "@/store/theme";
import { LANGS, THEME } from "@/settings";
import { useNavigate } from "react-router-dom";
import userAvatarUrl from "@/assets/home/user-avatar.png";
import userPremium from "@/assets/home/user-premium.png";
import recharge from "@/assets/home/recharge.png";
import withdrawal from "@/assets/home/withdrawal.png";
import transfer from "@/assets/home/transfer.png";
import FunctionList from "./functionList";
import CurrencyList from "./currencyList";
const Home = () => {
  const langStore = useLangStore();
  const themeStore = useThemeStore();
  const navigate = useNavigate();
  const actions = [
    {
      type: "recharge",
      title: t("Recharge"),
      icon: recharge,
    },
    {
      type: "withdrawal",
      title: t("Withdrawal"),
      icon: withdrawal,
    },
    {
      type: "transfer",
      title: t("Transfer"),
      icon: transfer,
    },
  ];
  return (
    <div className="relative flex flex-col h-full">
      <div className="h-[206px] bg-[url('@/assets/home/home-bg.png')] bg-contain bg-no-repeat">
        <div className="flex justify-between items-center px-[20px] pt-[18px]">
          <div className="flex gap-[9px] items-center">
            <div className="flex flex-col gap-[6px]">
              <div className="w-[20px] h-[2px] bg-white"></div>
              <div className="w-[12px] h-[2px] bg-white"></div>
            </div>
            <div className="text-lg font-bold text-white leading-[16px]">
              Welcome to KK Forex
            </div>
          </div>
          <div className="flex gap-[9px] items-center">
            <div className="w-[24px] h-[24px] bg-[url('@/assets/home/bill-icon.png')] bg-cover"></div>
            <div
              className="w-[24px] h-[24px] rounded-full border-[0.5px] border-white"
              onClick={() => navigate("./profile")}
            >
              <img src={userAvatarUrl} alt="avatar" className="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Space>
            <Button onClick={() => langStore.setLang(LANGS.ZH_CN)}>中文</Button>
            <Button onClick={() => langStore.setLang(LANGS.EN_US)}>
              English
            </Button>
            <Button onClick={() => themeStore.setTheme(THEME.DARK)}>
              Dark
            </Button>
            <Button onClick={() => themeStore.setTheme(THEME.LIGHT)}>
              Light
            </Button>
          </Space>
        </div>
      </div>
      <div className="absolute px-[20px] top-[70px] w-full">
        <div className="rounded-t-[10px] h-[63px] bg-[url('@/assets/home/home-bg1.png')] bg-no-repeat bg-contain px-[10px] pt-[10px] pb-[17px] flex gap-[10px] items-center">
          <div className="w-[36px] h-[36px] flex justify-center items-center bg-[rgba(228,161,79,1)] rounded-full">
            <img
              src={userPremium}
              alt="user-premium"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="flex flex-col gap-[8px] flex-1">
            <div className="text-white  text-base leading-[14px]">
              Profile completion
            </div>
            <div className="flex justify-between items-center leading-[14px]">
              <Progress
                percent={60}
                percentPosition={{ align: "start", type: "outer" }}
                strokeColor="#E4A14F"
                trailColor="#D9D9D9"
              />
              <div className="text-sm text-[rgba(115,231,203,1)]">Complete</div>
            </div>
          </div>
        </div>
        <div className="rounded-b-[10px] h-[131px] bg-[url('@/assets/home/home-bg2.png')] dark:bg-[url('@/assets/home/home-bg2-dark.png')] bg-contain bg-no-repeat px-[10px] pt-[9px] pb-[7px] flex flex-col gap-[12px]">
          <div className="flex flex-col gap-[6px]">
            <div className="text-base text-white leading-[14px]">
              Total assets converted(BTC)
            </div>
            <div className="text-[16px] text-white leading-[18px]">
              0.00000000 BTC
            </div>
            <div className=" text-white leading-[14px]">0.00000000 USD</div>
          </div>
          <div className="flex justify-between">
            {actions.map((item) => (
              <div key={item.type} className="flex gap-[5px] items-center">
                <img src={item.icon} alt="recharge" className="h-[14px]" />
                <div className="text-base leading-[14px] text-white">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-[4px] items-center mt-[6px]">
            <div
              className={`w-[9px] h-[12px] bg-[url('@/assets/home/contract.png')] dark:bg-[url('@/assets/home/contract-dark.png')] bg-contain bg-no-repeat`}
            />
            <div className="text-sm text-[#C10762] dark:text-[#73E7CB] leading-[11px] underline">
              Contract account
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[75px]">
        <FunctionList />
      </div>
      <div className="h-[1px] bg-[#464C66] mx-[20px] mt-[14px] mb-[12px]"></div>
      <CurrencyList />
    </div>
  );
};

export default Home;
