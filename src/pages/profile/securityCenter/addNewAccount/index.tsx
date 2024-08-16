import CustomButton from "@/pages/components/button";
import HorizontalDivider from "@/pages/components/horizontalDivider";
import { Input } from "antd";

const AddNewAccount = () => {
  return (
    <div className="m-[20px]">
      <div className="flex flex-col rounded-[10px] gradient-bg-blue-shallow dark:bg-dark_bg_color">
        <div className="flex flex-col">
          <div className="p-[10px] flex flex-col gap-[6px]">
            <div className="leading-[14px]">{"Email"}</div>
            <Input
              placeholder={"Please enter an email"}
              className="custom-input"
            />
          </div>
          <HorizontalDivider />
        </div>
        <div className="flex flex-col">
          <div className="p-[10px] flex flex-col gap-[6px]">
            <div className="leading-[14px]">{"New Password"}</div>
            <Input
              type="password"
              placeholder={"Please enter a password"}
              className="custom-input"
            />
          </div>
          <HorizontalDivider />
        </div>
        <div className="flex flex-col">
          <div className="p-[10px] flex flex-col gap-[6px]">
            <div className="leading-[14px]">{"Phone number"}</div>
            <Input
              type="password"
              placeholder={"Please enter your phone number"}
              className="custom-input"
            />
          </div>
        </div>
      </div>
      <div className="mt-[38px]">
        <CustomButton label={"Confirm"} action={() => console.log("")} />
      </div>
    </div>
  );
};

export default AddNewAccount;
