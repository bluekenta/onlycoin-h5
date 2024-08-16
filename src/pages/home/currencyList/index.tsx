import React from "react";
import BTC from "@/assets/home/BTC.png";
import ETH from "@/assets/home/ETH.png";
import LTC from "@/assets/home/LTC.png";

const icons: {
  [key: string]: any;
} = {
  BTC,
  ETH,
  LTC,
};

const CurrencyList = () => {
  const currencies = [
    {
      id: 1,
      name: "BTC",
      src: "",
      price: 68057.2,
      rate: 0.08,
    },
    {
      id: 2,
      name: "LTC",
      src: "",
      price: 68057.2,
      rate: 0.08,
    },
    {
      id: 3,
      name: "ETH",
      src: "",
      price: 68057.2,
      rate: 0.08,
    },
    {
      id: 4,
      name: "BTC",
      src: "",
      price: 68057.2,
      rate: 0.08,
    },
    {
      id: 5,
      name: "LTC",
      src: "",
      price: 68057.2,
      rate: 0.08,
    },
    {
      id: 6,
      name: "ETH",
      src: "",
      price: 68057.2,
      rate: 0.08,
    },
  ];
  return (
    <div className="flex flex-col gap-[16px] px-[20px] flex-1 overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="text-lg leading-[16px] text-[#7C839F]">
          All Currency
        </div>
        <div className="w-[24px] h-[24px] bg-[url('@/assets/home/list.png')] bg-contain"></div>
      </div>
      <div className="flex flex-col gap-[10px] h-[200px] overflow-y-scroll flex-1">
        {currencies.map((item, index) => (
          <div key={index} className="flex flex-col gap-[10px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[10px]">
                <img
                  src={icons[item.name]}
                  alt={item.name}
                  className="w-[36px] h-[36px]"
                />
                <div className="leading-[14px]">
                  <span className="text-[#333333] dark:text-[#73E7CB]">
                    {item.name}
                  </span>
                  <span className="light:gradient-text-2 dark:text-[#CCCCCC]">
                    /USDT
                  </span>
                </div>
              </div>
              <div className="light:gradient-text-2">{item.price}</div>
              <div className="text-[#67AC55]">+{item.rate}</div>
            </div>
            <div className="h-[1px] bg-gradient-to-r from-[rgba(70,76,102,0)] via-[rgba(70,76,102,1)] to-[rgba(70,76,102,0)]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(CurrencyList);
