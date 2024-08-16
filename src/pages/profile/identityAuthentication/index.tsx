import React from "react";
import { useNavigate } from "react-router-dom";

const IdentityAuthentication = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-[20px] mx-[10px] flex flex-col gap-[10px]">
      <div
        className="h-[36px] rounded-full gradient-bg-blue-shallow dark:bg-dark_bg_color flex justify-between items-center pl-[16px]"
        onClick={() => navigate("./real-name-authentication")}
      >
        <div className="leading-[14px] text-[#020723] dark:text-white">
          Real Name Authentication
        </div>
        <div className="flex gap-[6px] items-center">
          <div className="flex gap-[3px] items-center">
            <div className="w-[14px] h-[14px] dark:bg-[url('@/assets/warning-dark.png')] bg-[url('@/assets/warning.png')] bg-contain bg-no-repeat"></div>
            <div className="text-[9px] leading-[10px] text-[rgba(2,7,35,0.6)] dark:text-[rgba(255,255,255,0.6)]">
              Uncertified
            </div>
          </div>
          <div className="w-[36px] h-[36px] flex justify-center items-center gradient-bg-blue rounded-full">
            <div className="w-[24px] h-[24px] bg-[url('@/assets/next.png')] bg-contain bg-no-repeat"></div>
          </div>
        </div>
      </div>
      <div
        className="h-[36px] rounded-full gradient-bg-blue-shallow dark:bg-dark_bg_color flex justify-between items-center pl-[16px]"
        onClick={() => navigate("./advanced-certification")}
      >
        <div className="leading-[14px] text-[#020723] dark:text-white">
          Advanced Certification
        </div>
        <div className="flex gap-[6px] items-center">
          <div className="flex gap-[3px] items-center">
            <div className="w-[14px] h-[14px] bg-[url('@/assets/warning.png')] dark:bg-[url('@/assets/warning-dark.png')] bg-contain bg-no-repeat"></div>
            <div className="text-[9px] leading-[10px] text-[rgba(2,7,35,0.6)] dark:text-[rgba(255,255,255,0.6)]">
              Uncertified
            </div>
          </div>
          <div className="w-[36px] h-[36px] flex justify-center items-center gradient-bg-blue rounded-full">
            <div className="w-[24px] h-[24px] bg-[url('@/assets/next.png')] bg-contain bg-no-repeat"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(IdentityAuthentication);
