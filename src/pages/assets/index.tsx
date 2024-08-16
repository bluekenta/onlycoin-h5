import { Button, Checkbox, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import BankCard from "../components/bankCard/bankCard";
import CommonSwitch from "../components/switch";
import { useState } from "react";
import { useThemeStore } from "@/store/theme";
import { THEME } from "@/settings";

const Assets = () => {
  const bankCard = {
    id: 1,
    asset: 0,
    assetToBTC: 0,
    active: true,
  };

  const wallets = [
    {
      id: 1,
      tokenName: "BTC",
      asset: 0,
      available: 0,
      freeze: 0,
      foldingUsd: 0,
    },
    {
      id: 2,
      tokenName: "BTC",
      asset: 0,
      available: 0,
      freeze: 0,
      foldingUsd: 0,
    },
    {
      id: 3,
      tokenName: "BTC",
      asset: 0,
      available: 0,
      freeze: 0,
      foldingUsd: 0,
    },
  ];
  const navigate = useNavigate();
  const themeStore = useThemeStore();
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="flex flex-col mx-[20px]">
      {/* <Space className="mb-[20px]">
        <Button onClick={() => navigate("./transfer")}>recharge</Button>
        <Button onClick={() => navigate("./withdrawal")}>withdrawal</Button>
      </Space>
      <Space>
        <Button onClick={() => navigate("./transfer")}>transfer</Button>
        <Button onClick={() => navigate("./currency")}>choose coins</Button>
      </Space> */}
      <div className="mt-[24px]">
        <BankCard {...bankCard} />
      </div>
      <div className="mt-[20px]">
        <CommonSwitch
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={["Funds Account", "Contract Account"]}
        />
      </div>
      {activeTab !== 0 && (
        <div className="mt-[20px] px-[10px] pt-[20px] pb-[13px] h-[128px] gradient-blue-bg flex flex-col gap-[10px] text-[#080F31] dark:text-white">
          <div className="leading-[14px] flex justify-between items-center relative">
            <div className="text-[#67AC55]">USDT</div>
            <div className="text-[#091135] dark:text-white mr-[24px]">
              Contract Account
            </div>
            <div
              className={
                "w-[24px] h-[24px] bg-contain bg-no-repeat absolute right-0 top-[50%] transform -translate-y-[50%] " +
                (themeStore.theme === THEME.LIGHT
                  ? "bg-[url('@/assets/profile/right-light.png')]"
                  : "bg-[url('@/assets/profile/right-dark.png')]")
              }
            ></div>
          </div>
          <div className="text-[20px] leading-[23px] font-bold">
            {bankCard.assetToBTC.toFixed(8)} BTC
          </div>
          <div className="leading-[14px]">{bankCard.asset.toFixed(8)} USD</div>
          <div className="flex justify-between items-center leading-[14px]">
            <div className="flex gap-[5px] items-center">
              <div
                className={
                  "w-[14px] h-[14px] bg-no-repeat bg-contain " +
                  (themeStore.theme === THEME.LIGHT
                    ? "bg-[url('@/assets/home/transfer-blue.png')]"
                    : "bg-[url('@/assets/home/transfer.png')]")
                }
              ></div>
              <div>Transfer</div>
            </div>
          </div>
        </div>
      )}
      {activeTab === 0 && (
        <>
          <div className="mt-[20px] px-[10px] pt-[20px] pb-[13px] h-[128px] gradient-blue-bg flex flex-col gap-[10px] text-[#080F31] dark:text-white">
            <div className="leading-[14px]">Total assets converted(BTC)</div>
            <div className="text-[20px] leading-[23px] font-bold">
              {bankCard.assetToBTC.toFixed(8)} BTC
            </div>
            <div className="leading-[14px]">
              {bankCard.asset.toFixed(8)} USD
            </div>
            <div className="flex justify-between items-center leading-[14px]">
              <div className="flex gap-[5px] items-center">
                <div
                  className={
                    "w-[14px] h-[14px] bg-no-repeat bg-contain " +
                    (themeStore.theme === THEME.LIGHT
                      ? "bg-[url('@/assets/home/recharge-blue.png')]"
                      : "bg-[url('@/assets/home/recharge.png')]")
                  }
                ></div>
                <div>Recharge</div>
              </div>
              <div className="flex gap-[5px] items-center">
                <div
                  className={
                    "w-[14px] h-[14px] bg-no-repeat bg-contain " +
                    (themeStore.theme === THEME.LIGHT
                      ? "bg-[url('@/assets/home/withdrawal-blue.png')]"
                      : "bg-[url('@/assets/home/withdrawal.png')]")
                  }
                ></div>
                <div>Withdrawal</div>
              </div>
              <div className="flex gap-[5px] items-center">
                <div
                  className={
                    "w-[14px] h-[14px] bg-no-repeat bg-contain " +
                    (themeStore.theme === THEME.LIGHT
                      ? "bg-[url('@/assets/home/transfer-blue.png')]"
                      : "bg-[url('@/assets/home/transfer.png')]")
                  }
                ></div>
                <div>Transfer</div>
              </div>
            </div>
          </div>
          <div className="mt-[10px] flex gap-[10px] justify-between items-center leading-[14px] text-[#070E2F] dark:text-white">
            <div className="flex-1 h-[128px] gradient-blue-bg">
              <div className="mt-[10px] text-center ">Profit Today</div>
              <div className="mt-[33px] text-center">
                0 (<span className="text-bold text-[#67AC55]">USDT</span>)
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[10px] h-full">
              <div className="h-[59px] gradient-blue-bg py-[6px] flex flex-col justify-between">
                <div className="text-center">
                  Today Transaction
                  <br />
                  amount today
                </div>
                <div className="text-center">
                  0 (<span className="text-bold text-[#67AC55]">USDT</span>)
                </div>
              </div>
              <div className="h-[59px] gradient-blue-bg py-[6px] flex flex-col justify-between">
                <div className="text-center">
                  Number of transaction
                  <br />
                  today
                </div>
                <div className="text-center">0</div>
              </div>
            </div>
          </div>
          <div className="mt-[10px] flex justify-between gap-[10px] h-[36px]">
            <div className="w-[135px] gradient-blue-bg rounded-full pl-[10px] flex gap-[5px] justify-between items-center">
              <div className="w-[20px] h-[20px] bg-[url('@/assets/home/search.png')] bg-no-repeat bg-contain"></div>
              <div className="flex-1 text-[#717597] leading-[14px] flex justify-center items-center">
                <Input
                  placeholder={"Search currency"}
                  className="custom-input"
                />
              </div>
            </div>
            <div className="flex-1 px-[10px] flex gap-[5px] justify-between items-center">
              <div className="w-[84px] leading-[14px] text-[#060D2E] dark:text-white">
                Hide 0 Balance Assets
              </div>
              <Checkbox />
            </div>
          </div>

          <div className="mt-[20px] flex-1 mb-[22px] flex flex-col gap-[10px] overflow-y-scroll">
            {wallets.map((item) => (
              <div
                key={item.id}
                className="h-[119px] gradient-blue-bg p-[10px] flex flex-col gap-[10px]"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[36px] h-[36px] bg-[#253356] flex justify-center items-center rounded-full">
                      <div className="w-[20px] h-[20px] bg-[url('@/assets/assets/btc.png')] bg-contain bg-no-repeat"></div>
                    </div>
                    <div className="text-[#67AC55] leading-[14px]">BTC</div>
                  </div>
                  <div className="leading-[14px] text-[#080F32] dark:text-white">
                    {item.asset.toFixed(4)}
                  </div>
                </div>
                <div className="flex justify-between gap-[8px] items-center text-[#020623] dark:text-white leading-[14px] ">
                  <div className="flex-1 bg-[rgba(255,255,255,0.25)] dark:bg-[rgba(0,0,0,0.25)] flex flex-col gap-[5px] py-[10px] rounded-[10px]">
                    <div className="text-center">Available</div>
                    <div className="text-center">{item.available}</div>
                  </div>
                  <div className="flex-1 bg-[rgba(255,255,255,0.25)] dark:bg-[rgba(0,0,0,0.25)] flex flex-col gap-[5px] py-[10px] rounded-[10px]">
                    <div className="text-center">Freeze</div>
                    <div className="text-center">{item.freeze}</div>
                  </div>
                  <div className="flex-1 bg-[rgba(255,255,255,0.25)] dark:bg-[rgba(0,0,0,0.25)] flex flex-col gap-[5px] py-[10px] rounded-[10px]">
                    <div className="text-center">
                      Folding(<span className="text-[#67AC55]">USD</span>)
                    </div>
                    <div className="text-center">{item.foldingUsd}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Assets;
