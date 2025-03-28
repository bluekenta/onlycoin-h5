import Icons from "@/components/icons";

const MainCard = () => {
  return (
    <>
      <div className="flex flex-col text-secondary">
        <div className="flex justify-between">
          <div className="flex gap-[4px]">
            <p className=" text-[14px] leading-[18px] text-[#163300] font-light">
              0x772***Ff294E
            </p>
            <Icons type="clipboard" className="w-[22px] h-[22px]" />
          </div>
          <Icons type="view" className="w-[22px] h-[22px]" />
        </div>
        <div className="flex gap-[8px] items-end pt-[7px] pb-[3px] font-semibold text-[#163300]">
          <p className="text-[30px] leading-[36px] font-SFProDisplay">
            $35,696
          </p>
          <p className="text-[18px] leading-[18px] pb-[4px] text-[rgba(22,51,0,0.6)] font-SFProDisplay">
            USDT
          </p>
        </div>
        <div className="font-SFProDisplay text-[15px] leading-[18px] font-light">
          ≈ $100
        </div>
      </div>
      <Icons
        className="absolute bottom-0 right-[16px] w-[70px] h-[63px]"
        type="inactive_logo"
      />
    </>
  );
};

export default MainCard;
