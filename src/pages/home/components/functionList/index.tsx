import Icons from "@/components/icons";
import { t } from "i18next";

const FunctionList = () => {
  const functions = [
    {
      name: "buy",
      title: t("Buy"),
      icon: <Icons type="buy" className="!w-[24px] !h-[24px]" />,
    },
    {
      name: "sell",
      title: t("Sell"),
      icon: <Icons type="sell" className="!w-[24px] !h-[24px]" />,
    },
    {
      name: "blink",
      title: t("Blink"),
      icon: <Icons type="blink" className="!w-[24px] !h-[24px]" />,
    },
  ];
  return (
    <>
      {functions.map((item) => (
        <div
          key={item.name}
          className="relative h-[73px] w-full flex flex-col gap-[1px] items-center justify-center bg-semi_dark rounded-[12px] gradient-border-grey"
        >
          <div>{item.icon}</div>
          <p className="leading-[17px]">{item.title}</p>
        </div>
      ))}
    </>
  );
};

export default FunctionList;
