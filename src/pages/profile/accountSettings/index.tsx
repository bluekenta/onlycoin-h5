import HorizontalDivider from "@/pages/components/horizontalDivider";
import { THEME } from "@/settings";
import { useThemeStore } from "@/store/theme";
import { Switch } from "antd";
import { useNavigate } from "react-router-dom";
import LogoutModal from "./modal";
import { useState } from "react";

const AccountSettings = () => {
  const navigate = useNavigate();
  const user = {
    nickName: "Hongbad",
    email: "Hongbad7878@gmail.com",
    mobile: "0142563",
  };

  const [showModal, setShowModal] = useState<boolean>(false);

  const themeStore = useThemeStore();

  const onChange = (checked: boolean) => {
    themeStore.setTheme(checked ? THEME.LIGHT : THEME.DARK);
  };
  return (
    <div className="m-[20px] flex flex-col gap-[16px]">
      <div className="gradient-bg-blue-shallow dark:bg-dark_bg_color rounded-[10px] flex flex-col">
        <div>
          <div className="flex justify-between p-[10px] items-center">
            <div className="leading-[14px]">Portrait</div>
            <div className="w-[16px] h-[16px] mr-[6px] bg-[url('@/assets/profile/user.png')] dark:bg-[url('@/assets/profile/user-dark.png')] bg-contain bg-no-repeat"></div>
          </div>
          <HorizontalDivider />
        </div>
        <div>
          <div className="flex justify-between p-[10px] items-center">
            <div className="leading-[14px]">Nickname</div>
            <div className="leading-[14px]">{user.nickName}</div>
          </div>
          <HorizontalDivider />
        </div>
        <div>
          <div className="flex justify-between p-[10px] items-center">
            <div className="leading-[14px]">Email</div>
            <div className="leading-[14px]">{user.email}</div>
          </div>
        </div>
      </div>
      <div className="gradient-bg-blue-shallow dark:bg-dark_bg_color rounded-[10px] flex flex-col">
        <div>
          <div className="flex justify-between p-[10px] items-center">
            <div className="leading-[14px]">Mobile Number</div>
            <div className="leading-[14px]">{user.mobile}</div>
          </div>
          <HorizontalDivider />
        </div>
      </div>
      <div className="gradient-bg-blue-shallow dark:bg-dark_bg_color rounded-[10px] flex flex-col">
        <div>
          <div className="flex justify-between p-[10px] items-center">
            <div className="leading-[14px]">Swtich Mode</div>
            <Switch
              value={themeStore.theme === THEME.LIGHT}
              onChange={onChange}
            />
          </div>
          <HorizontalDivider />
        </div>
        <div onClick={() => navigate("./switch-account")}>
          <div className="flex justify-between p-[10px] items-center">
            <div className="leading-[14px]">Swtich Account</div>
            <div className="w-[24px] h-[24px] bg-[url('@/assets/profile/right-light.png')] dark:bg-[url('@/assets/profile/right-dark.png')] bg-contain bg-no-repeat"></div>
          </div>
          <HorizontalDivider />
        </div>
        <div onClick={() => setShowModal(true)}>
          <div className="flex justify-between p-[10px] items-center">
            <div className="leading-[14px]">Logout</div>
            <div className="w-[24px] h-[24px] bg-[url('@/assets/profile/right-light.png')] dark:bg-[url('@/assets/profile/right-dark.png')] bg-contain bg-no-repeat"></div>
          </div>
        </div>
      </div>
      <LogoutModal
        show={showModal}
        setShowModal={(val: boolean) => setShowModal(val)}
      />
    </div>
  );
};

export default AccountSettings;
