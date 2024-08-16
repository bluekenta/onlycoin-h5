import { THEME } from "@/settings";
import { useThemeStore } from "@/store/theme";
import { Modal } from "antd";
import classnames from "classnames";

interface props {
  show: boolean;
  setShowModal: (val: boolean) => void;
}

const LogoutModal = ({ show, setShowModal }: props) => {
  const close = () => {
    setShowModal(false);
  };
  const themeStore = useThemeStore();
  return (
    <Modal
      open={show}
      className={classnames("logout-modal")}
      onCancel={close}
      footer={null}
    >
      <div className="py-[20px] flex flex-col gap-[20px] px-[10px] relative dark:bg-[#2F3C6B] rounded-[10px]">
        <div
          className="w-[24px] h-[24px] bg-[url('@/assets/profile/close.png')] dark:bg-[url('@/assets/profile/close-dark.png')] bg-contain bg-no-repeat absolute right-[10px] top-[10px]"
          onClick={close}
        ></div>
        <div className="flex flex-col gap-[11px] pl-[10px] text-[#2F3C6B] dark:text-white">
          <div className="text-[20px] leading-[23px] font-bold ">
            Are you sure?
          </div>
          <div>You will no longer be logged in on the selected devices.</div>
        </div>
        <div className="flex justify-between gap-[20px]">
          <div
            className={classnames(
              "flex-1 h-[31px] flex justify-center items-center rounded-[20px] text-lg leading-[16px] font-bold text-[#2F3C6B] dark:text-white",
              {
                "gradient-bg-blue-shallow": themeStore.theme === THEME.LIGHT,
                "dark:bg-[#00000040]": themeStore.theme === THEME.DARK,
              }
            )}
            onClick={close}
          >
            Cancel
          </div>
          <div className="flex-1 h-[31px] flex justify-center items-center gradient-bg-blue rounded-[20px] text-lg leading-[16px] font-bold text-white">
            Log out
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutModal;
