import Navbar from "@/layout/navBar";
import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import recharge from "@/assets/profile/recharge.png";
import withdrawal from "@/assets/profile/withdrawal.png";
import college from "@/assets/profile/college.png";
import { t } from "@/i18n";
import icons from "@/icons";

const Profile = () => {
  const navigate = useNavigate();
  const actions = [
    {
      type: "recharge",
      title: t("Recharge"),
      icon: recharge,
      width: 24,
      height: 21,
    },
    {
      type: "withdrawal",
      title: t("Withdrawal"),
      icon: withdrawal,
      width: 24,
      height: 21,
    },
    {
      type: "college",
      title: t("College"),
      icon: college,
      width: 24,
      height: 24,
    },
  ];
  const options = [
    {
      type: "commission",
      title: t("My Commission"),
      url: "./commission",
    },
    {
      type: "credit",
      title: t("Credit Center"),
      url: "./credit-center",
    },
    {
      type: "identity",
      title: t("Identity Authentication"),
      url: "./identity-authentication",
    },
    {
      type: "security",
      title: t("Security Center"),
      url: "./security-center",
    },
    {
      type: "message",
      title: t("Message Notification"),
      url: "./message-notification",
    },
    {
      type: "settings",
      title: t("Settings"),
      url: "./account-settings",
    },
    {
      type: "lang",
      title: t("English"),
    },
  ];
  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="h-[244px] bg-[url('@/assets/profile/profile-top-bg.png')] bg-contain bg-no-repeat"></div>
      <div className="absolute top-0 w-full">
        <Navbar title={"Profile"} goBackUrl={"/"} showNavBar={2} />
        <div className="relative">
          <div className="ml-[24px] h-[70px] bg-[url('@/assets/profile/profile-bg.png')] bg-contain bg-no-repeat flex justify-between items-center pl-[86px] pr-[20px]">
            <div className="flex flex-col gap-[10px]">
              <div className="text-lg font-bold leading-[16px] text-white">
                Hongbad7878
              </div>
              <div className="text-base leading-[16px] text-white">
                ID : 60078
              </div>
            </div>
            <div className="w-[36px] h-[36px] bg-[url('@/assets/profile/edit-bg.png')] bg-contain bg-no-repeat flex justify-center items-center">
              <div className="w-[20px] h-[20px] bg-[url('@/assets/profile/edit-icon.png')] bg-contain bg-no-repeat"></div>
            </div>
          </div>
          <div className="w-[80px] h-[80px] rounded-full bg-[url('@/assets/profile/profile-bg2.png')] bg-contain bg-no-repeat absolute left-[20px] top-[50%] transfrom -translate-y-[50%] flex justify-center items-center">
            <div className="w-[71px] h-[71px] rounded-full bg-[url('@/assets/profile/profile-avatar.png')] bg-contain bg-no-repeat"></div>
          </div>
        </div>
        <div className="mt-[20px] px-[41px] flex justify-between items-center">
          {actions.map((item) => (
            <div
              key={item.type}
              className="h-[70px] w-[46px] flex flex-col justify-between relative"
            >
              <div className=" h-[46px] bg-gradient-to-br from-[#5C70DC] to-[#C4035D] border-[0.5px] border-[rgba(255,255,255,0.5)] rounded-[12px] flex justify-center items-center">
                <img src={item.icon} alt={item.type} className={`w-[24px]`} />
              </div>
              <div className="absolute bottom-0 left-[50%] tranfrom -translate-x-[50%] text-base leading-[14px] text-white">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[10px] flex-1 overflow-y-scroll ">
        {options.map((item) => (
          <div
            key={item.type}
            onClick={() => item.url && navigate(item.url as string)}
          >
            <div className="py-[10px] px-[20px] flex gap-[10px] items-center">
              <div className="w-[36px] h-[36px] rounded-full bg-[#2F3C6B] border-[0.5px] border-[rgba(255,255,255,0.25)] flex justify-center items-center">
                <div className="w-[28px] h-[28px] rounded-full bg-[#253356] flex justify-center items-center">
                  <img
                    src={icons[item.type].icon}
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </div>
              </div>
              <div className="leading-[14px] text-[#020723] dark:text-white">
                {item.title}
              </div>
            </div>
            <div className="h-[1px] bg-gradient-to-r from-[rgba(70,76,102,0)] via-[rgba(70,76,102,1)] to-[rgba(70,76,102,0)] mx-[20px]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
