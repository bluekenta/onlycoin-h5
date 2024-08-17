import Icons from "@/components/icons";
import { t } from "i18next";

const FunctionList = () => {
  const functions = [
    {
      name: "buy",
      title: t("buy"),
      icon: <Icons type="home_buy" />,
    },
    {
      name: "sell",
      title: t("sell"),
      icon: <Icons type="home_sell" />,
    },
    {
      name: "blink",
      title: t("blink"),
      icon: <Icons type="home_blink" />,
    },
  ];
  return (
    <div className="flex justify-between items-center gap-[14px] px-[20px]">
      {functions.map((item) => (
        <div key={item.name} className="relative h-[73px]">
          <div className="w-[46px] h-[46px] rounded-[12px] flex justify-center items-center ">
            {item.icon}
          </div>
          <div className="absolute bottom-0 left-[50%] tranfrom -translate-x-[50%] text-[#333] dark:text-[#ccc] leading-[14px]">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FunctionList;
