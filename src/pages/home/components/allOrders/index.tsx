import Icons from "@/components/icons";
import Overlay from "@/components/overlay";
import { EType } from "@/components/overlay/interface";
import { Button } from "antd";
import classnames from "classnames";
import { useState } from "react";

const AllOrders = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  const orders = [
    {
      id: 1,
      type: 1,
      amount: 100,
      date: "August 9, 2024",
    },
    {
      id: 2,
      type: 2,
      amount: 100,
      date: "August 9, 2024",
    },
    {
      id: 3,
      type: 1,
      amount: 100,
      date: "August 9, 2024",
    },
    {
      id: 4,
      type: 2,
      amount: 100,
      date: "August 9, 2024",
    },
  ];

  const mockSingleTransaction = {
    State: "Delivered",
    "Payment Account": "2363693363332",
    Receiver: "0x3E5e......3B01",
    "Fiat Currency": "100 USD",
    "Network fee": "USD-$0.01",
    "Processing fee": "USD-$0.01",
    "Order Number": "89663355522366",
    time: "May 15,2024，10:33 pm",
  };

  return (
    <div className="flex flex-col gap-[14px]">
      <div className="text-[22px] leading-[26px] font-600 text-[#999999] pl-[8px]">
        All Orders
      </div>
      {orders.map((item, index) => (
        <div className="flex flex-col gap-[14px]" key={index}>
          <div className="flex flex-col gap-[10px] text-white">
            <div className="text-[14px] leading-[17px] font-600 text-[#999999] pl-[6px]">
              August 9, 2024
            </div>
            <div onClick={() => setShowOverlay(true)}>
              <div className="h-[46px] flex justify-between items-center px-[16px] bg-[#9FE8701A] rounded-t-[12px]">
                <div className="flex gap-[6px] items-center">
                  <Icons
                    type={item.type === 1 ? "arrow-down" : "arrow-up"}
                    className="!w-[24px] !h-[24px]"
                  />
                  <div className="text-[14px] leading-[20px] font-700">
                    Delivered
                  </div>
                </div>
                <Icons
                  type={item.type === 1 ? "up" : "down"}
                  className="!w-[16px] !h-[16px]"
                />
              </div>
              <div className="p-[16px] flex flex-col gap-[8px] bg-[#3A3A3A66] rounded-b-[12px]">
                <div className="flex justify-between items-center">
                  <div className="text-[16px] leading-[20px] font-500">
                    {item.type == 1 ? "Buy" : "Sell"}
                  </div>
                  <div
                    className={classnames(
                      "text-[14px] leading-[20px] font-700",
                      {
                        "text-primary": item.type === 1,
                        "text-[#FF3D71]": item.type === 2,
                      }
                    )}
                  >
                    {item.type === 1 ? "+" : "-"}
                    {item.amount} USDT
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-[12px] leading-[16px] font-300">
                    {item.type === 1 ? "Sent out" : "Sold out"}
                  </div>
                  <Button className="text-[12px] leading-[16px] font-300 text-[#888888] border-[1px] border-solid border-[#FFFFFF33] !bg-[#3A3A3A66]">
                    {item.type === 1 ? "Buy" : "Sell"} Crypto
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Overlay
        title="Buy"
        type={EType.OTHER}
        visible={showOverlay}
        setVisible={setShowOverlay}
      >
        <div className="flex flex-col items-center gap-[20px] pt-[20px] pb-[25px] mx-[16px]">
          <div className="flex flex-col items-center gap-[5px]">
            <Icons type="USD" className="!w-[34px] !h-[34px]" />
            <p className="text-[36px] font-bold leading-[43px] text-white">
              -100 USD
            </p>
          </div>
          <div className="w-[100%] bg-[#3A3A3A66] rounded-[12px] p-[16px] flex flex-col">
            {Object.entries(mockSingleTransaction).map(([key, value], idx) => (
              <div
                key={idx}
                className="h-[40px] flex justify-between items-center"
              >
                <p className="text-[#999999] text-[15px] leading-[16px]">
                  {key}
                </p>
                <p
                  className={classnames(
                    "text-[15px] leading-[16px]",
                    key === "State" ? "text-primary" : "text-white"
                  )}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Overlay>
    </div>
  );
};

export default AllOrders;
