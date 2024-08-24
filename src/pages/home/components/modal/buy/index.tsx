import CModal from "@/components/cModal";
import Icons from "@/components/icons";
import { Button } from "antd";
import classnames from "classnames";

interface props {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const Buy = (props: props) => {
  const disabled = true;
  return (
    <CModal {...props} title={"Buy Crypto"}>
      <div className="pt-[20px] px-[14px] pb-[30px] flex flex-col">
        <div className=" flex flex-col gap-[14px]">
          <div className="h-[72px] gradient-border-grey flex justify-between items-center p-[14px] bg-[#292929] rounded-[12px]">
            <div className="text-[16px] leading-[19px] font-600 text-[#666666]">
              $0.0
            </div>
            <div className="flex w-[113px] justify-between p-[10px] items-center bg-[#171717] rounded-[8px] bg-opacity-50">
              <div className="flex gap-[5px] items-center">
                <Icons type="USD" className="w-[27px] h-[27px]" />
                <div className="text-[15px] leading-[18px] font-600">USD</div>
              </div>
              <Icons type="down" className="w-[16px] h-[16px]" />
            </div>
          </div>
          <div className="h-[72px] gradient-border-grey flex justify-between items-center p-[14px] bg-[#292929] rounded-[12px]">
            <div className="text-[16px] leading-[19px] font-600 text-white">
              $100
            </div>
            <div className="flex w-[113px] justify-between p-[10px] items-center bg-[#171717] rounded-[8px] bg-opacity-50">
              <div className="flex gap-[5px] items-center">
                <Icons type="USD" className="w-[27px] h-[27px]" />
                <div className="text-[15px] leading-[18px] font-600">USDT</div>
              </div>
              <Icons type="down" className="w-[16px] h-[16px]" />
            </div>
          </div>
          <div className="h-[54px] gradient-border-grey flex justify-between items-center p-[14px] bg-[#292929] rounded-[12px]">
            <div className="text-[16px] leading-[19px] font-600 text-[#666666]">
              Pay With
            </div>
            <div className="flex w-[159px] justify-between items-center">
              <div className="flex gap-[5px] items-center">
                <Icons
                  type="account"
                  fill="white"
                  className="w-[24px] h-[24px]"
                />
                <div className="text-[15px] leading-[18px] font-600">
                  Payment Method
                </div>
              </div>
              <Icons type="down" className="w-[16px] h-[16px]" />
            </div>
          </div>
          <div className="gradient-border-grey flex flex-col gap-[16px] px-[14px] py-[16px] bg-[#292929] rounded-[12px]">
            <div className="flex justify-between items-center">
              <div className="text-[15px] leading-[18px] font-400">
                You Get 100 USDT(TRX) For USD $100
              </div>
              <Icons type="up" className="w-[16px] h-[16px]" />
            </div>
            <div className="border-y-[1px] flex flex-col gap-[16px] border-dashed border-[#BCBFBA] border-opacity-20 py-[16px]">
              <div className="flex justify-between item-center text-[15px] leading-[18px] font-400 ">
                <div className="text-[#888888]">Network Fee</div>
                <div className="text-white">USD&nbsp;$0.01</div>
              </div>
              <div className="flex justify-between item-center text-[15px] leading-[18px] font-400 ">
                <div className="text-[#888888]">Processing Fee</div>
                <div className="text-white">USD&nbsp;$0.01</div>
              </div>
              <div className="flex justify-between item-center text-[15px] leading-[18px] font-400 ">
                <div className="text-[#888888]">Receive</div>
                <div className="text-white">USD&nbsp;$0.01</div>
              </div>
            </div>
            <div className="text-right text-[15px] leading-[18px] font-600 text-white">
              Total&nbsp;:&nbsp;
              <span className="text-primary">USD&nbsp;$100</span>
            </div>
          </div>
        </div>
        <div className="mt-[10px] flex justify-center items-center gap-[3px]">
          <Icons type="clock" className="w-[16px] h-[16px]" />
          <div className="text-[13px] leading-[15px] font-400 text-[#888888]">
            Quote Updates In 4s
          </div>
        </div>
        <div className="mt-[25px]">
          <Button
            disabled={disabled}
            className={classnames("btn-primary", {
              disabled: disabled,
              active: !disabled,
            })}
          >
            Continue
          </Button>
        </div>
      </div>
    </CModal>
  );
};

export default Buy;
