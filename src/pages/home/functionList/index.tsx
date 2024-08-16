import { t } from "i18next";
import options from "@/assets/home/options.png";
import service from "@/assets/home/service.png";
import subscription from "@/assets/home/subscription.png";
import mining from "@/assets/home/mining.png";

const FunctionList = () => {
  const functions = [
    {
      name: "options",
      title: t("Options"),
      icon: options,
    },
    {
      name: "service",
      title: t("Service"),
      icon: service,
    },
    {
      name: "subscription",
      title: t("Subscription"),
      icon: subscription,
    },
    {
      name: "mining",
      title: t("Mining"),
      icon: mining,
    },
  ];
  return (
    <div className="flex justify-between items-center px-[20px]">
      {functions.map((item) => (
        <div key={item.name} className="relative h-[70px]">
          <div className="w-[46px] h-[46px] border-[1px] border-[#464C66] rounded-[12px] flex justify-center items-center ">
            <img
              src={item.icon}
              alt={item.name}
              className="w-[24px] h-[24px]"
            />
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
