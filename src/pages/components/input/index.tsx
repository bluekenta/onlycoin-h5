import icons from "@/icons";
import { Input } from "antd";

interface props {
  name: string;
  type?: string;
  label: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
}

const CustomInput = ({
  label,
  type = "text",
  placeholder,
  prefix,
  suffix,
}: props) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="leading-[14px] text-[#50547E] dark:text-[#717597]">
        {label}
      </div>
      {type === "text" && (
        <Input
          className="h-[40px] rounded-[10px] text-base leading-[14px] border-[0.5px] border-[#C3D0EC] dark:border-[#5A5D73] px-[10px] custom-form-element"
          placeholder={placeholder}
          prefix={
            <div className="flex gap-[10px]">
              <img
                src={icons[prefix as string].icon}
                alt={prefix}
                className="w-[20px] h-[20px]"
              />
              <div className="w-[1px] h-[20px] bg-gradient-to-b from-[rgba(113,117,151,0)] via-[rgba(113,117,151,1)] to-[rgba(113,117,151,0)] mr-[10px]"></div>
            </div>
          }
          suffix={
            suffix && (
              <img
                src={icons[suffix].icon}
                alt={prefix}
                className="w-[20px] h-[20px]"
              />
            )
          }
        />
      )}
      {type === "password" && (
        <Input.Password
          className="h-[40px] rounded-[10px] text-base leading-[14px] border-[0.5px] border-[#C3D0EC] dark:border-[#5A5D73] px-[10px]  custom-form-element"
          placeholder={placeholder}
          prefix={
            <div className="flex gap-[10px]">
              <img
                src={icons[prefix as string].icon}
                alt={prefix}
                className="w-[20px] h-[20px]"
              />
              <div className="w-[1px] h-[20px] bg-gradient-to-b from-[rgba(113,117,151,0)] via-[rgba(113,117,151,1)] to-[rgba(113,117,151,0)] mr-[10px]"></div>
            </div>
          }
          iconRender={(visible) =>
            visible ? (
              <div>
                <div className="w-[15px] h-[14px] bg-[url('@/assets/auth/eye-close.png')] bg-contain bg-no-repeat"></div>
              </div>
            ) : (
              <div>
                <div className="w-[15px] h-[14px] bg-[url('@/assets/auth/password.png')] bg-contain bg-no-repeat"></div>
              </div>
            )
          }
        />
      )}
      {type === "otp" && (
        <div className="flex flex-col gap-[10px]">
          <Input.OTP
            className="h-[40px] rounded-[10px] text-[20px] leading-[24px] font-800 border-[0.5px] border-[#C3D0EC] px-[10px] custom-form-element"
            formatter={(str) => str.toUpperCase()}
            onChange={(text) => {
              console.log("onChange:", text);
            }}
          />
          <div className="text-center leading-[14px]">
            (60s) <span className="text-[#3887EE]">Resend</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomInput;
