import { Input } from "antd";

interface props {
  label: string;
  placeholder: string;
}

const CustomInput = ({ label, placeholder }: props) => {
  return (
    <div className="flex justify-between items-center w-[234px]">
      <div className="flex flex-col gap-[4px] w-[150px]">
        <div className="leading-[14px]">{label}</div>
        <Input placeholder={placeholder} className="custom-input" />
      </div>
      <div className="w-[16px] h-[16px] bg-[url('@/assets/profile/right-light.png')] dark:bg-[url('@/assets/profile/right-dark.png')] bg-contain bg-no-repeat"></div>
    </div>
  );
};

export default CustomInput;
