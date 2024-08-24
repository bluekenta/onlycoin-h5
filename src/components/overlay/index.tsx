import { Popup } from "antd-mobile";
import classnames from "classnames";
import style from "./style.module.scss";
import Icons from "../icons";
import { EType, ICurrencyChildren, IMethodChildren } from "./interface";

interface IProps {
  title: string;
  noClose?: boolean;
  children?: React.ReactNode;
  visible: boolean;
  setVisible: (v: boolean) => void;
  type: EType;
  methodChildren?: IMethodChildren;
  currencyChildren?: ICurrencyChildren;
}

const Overlay = ({
  title,
  noClose,
  children,
  visible,
  setVisible,
  type,
  currencyChildren,
  methodChildren,
}: IProps) => {
  return (
    <Popup
      visible={visible}
      onClose={() => setVisible(false)}
      onMaskClick={() => setVisible(false)}
      showCloseButton={!noClose}
      bodyStyle={{
        background: "var(--overlay)",
        borderRadius: "16px 16px 0 0",
      }}
      closeIcon={
        <div className="py-[6px]">
          <Icons type="close" className="!w-[24px] !h-[24px]" />
        </div>
      }
    >
      <section className={classnames(style.wrapper)}>
        <div
          className={classnames(
            style.header,
            "h-[60px] flex items-center px-[16px] font-bold text-[22px] leading-[33px] text-white border-b-[#bcbfba33] border-b-[1px]"
          )}
        >
          {title}
        </div>

        {/* Overlay Content for currency selection box */}
        {type === EType.CURRENCY && (
          <div className="flex flex-col gap-[16px] px-[16px] pt-[16px] pb-[25px]">
            {currencyChildren?.searchBox && (
              <input
                type="text"
                className="w-full flex items-center p-[16px] rounded-[12px] bg-[#3A3A3A66] text-white placeholder:text-[#666666] placeholder:text-[15px] placeholder:leading-[18px]"
                placeholder="Search Name"
              />
            )}

            <p className="text-[18px] font-bold leading-[33px] text-white">
              {currencyChildren?.listTitle}
            </p>
            <div className="flex flex-col items-start gap-[16px] h-[176px] overflow-y-auto">
              {currencyChildren?.currencies.map((item, idx) => (
                <div key={idx} className="flex gap-[6px] w-full py-[6px]">
                  {item.icon}
                  <div className="flex flex-col">
                    <p className="text-white font-medium text-[15px] leading-[18px]">
                      {item.name}
                    </p>
                    <p className="text-inactive text-[14px] leading-[17px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Overlay Content for account add, method selection box */}
        {type === EType.METHOD && (
          <div className="flex flex-col gap-[16px] px-[16px] pt-[16px] pb-[25px]">
            {methodChildren?.desc && (
              <p className="text-[15px] leading-[18px] text-center text-inactive">
                {methodChildren.desc}
              </p>
            )}
            <div className="flex flex-col gap-[16px]">
              {methodChildren?.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-[10px] p-[16px] rounded-[12px] border-[1px] border-[#bcbfba33]"
                >
                  <div className="flex justify-between">
                    <div className="flex gap-[5px] items-center">
                      {card.symbol}
                      {
                        <p className="text-[16px] leading-[19px] text-white font-medium">
                          {card.title}
                        </p>
                      }
                    </div>
                    <div className="flex gap-[6px] items-center">
                      {card.card?.map((item, idx) => (
                        <div key={idx}>{item}</div>
                      ))}
                    </div>
                  </div>
                  {card.desc && (
                    <div className="flex gap-[8px] items-center">
                      {card.alarm && (
                        <Icons type="alarm" className="!w-[12px] !h-[12px]" />
                      )}
                      {
                        <p className="text-[15px] text-[#888888] leading-[18px] ">
                          {card.desc}
                        </p>
                      }
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Overlay Content for other normal box */}
        {type === EType.OTHER && children}
      </section>
    </Popup>
  );
};

export default Overlay;
