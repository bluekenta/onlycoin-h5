import Icons from "@/components/icons";

const MainCard = () => {
  return (
    <>
      <div className="flex flex-col text-secondary">
        <div className="flex justify-between">
          <div className="flex gap-[4px]">
            <p className="font-light text-[14px] leading-[18px] font-SFProDisplay">
              0x772***Ff294E
            </p>
            <Icons type="clipboard" />
          </div>
          <Icons type="view" />
        </div>
        <div className="flex gap-[4px] items-end pt-[7px] pb-[3px] font-semibold">
          <p className="text-[30px] leading-[36px] font-SFProDisplay">
            $35,696
          </p>
          <p className="text-[15px] leading-[18px] pb-[4px] opacity-60 font-SFProDisplay">
            USDT
          </p>
        </div>
        <div className="font-SFProDisplay text-[15px] leading-[18px] font-light">
          ≈ $100
        </div>
      </div>
      <Icons className="absolute bottom-0 right-[16px]" type="inactive_logo" />
    </>
  );
};

export default MainCard;
