import Icons from "@/components/icons";
import { t } from "i18next";

const FunctionList = () => {
  const functions = [
    {
      name: "buy",
      title: t("buy"),
      icon: <Icons type="buy" />,
    },
    {
      name: "sell",
      title: t("sell"),
      icon: <Icons type="sell" />,
    },
    {
      name: "blink",
      title: t("blink"),
      icon: <Icons type="blink" />,
    },
  ];
  return (
    <>
      {functions.map((item) => (
        <div
          key={item.name}
          className="relative h-[73px] w-full flex flex-col gap-[1px] items-center justify-center bg-semi_dark rounded-[12px]"
        >
          <p>{item.icon}</p>
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
};

export default FunctionList;
