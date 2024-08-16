import { useClipboard } from "@/hooks";
import CustomButton from "@/pages/components/button";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import QRCode from "qrcode.react";

const GoogleAuthenticator = () => {
  const mfa = "POD4P7RWDHVW33AT";
  const { copy, copied } = useClipboard();
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="mt-[15px] mx-[15px]">
      <div className="text-[9px] leading-[11px]">
        How to Download open Google Authenticator, scan the QR code below or
        manually enter the secret key to add a verification token.
      </div>
      <div className="mt-[16px] mx-auto w-[147px] h-[147px] p-[8px] gradient-bg-blue-shallow dark:bg-dark_bg_color">
        <QRCode value={mfa} style={{ height: "100%", width: "100%" }} />
      </div>
      <div className="mt-[16px] flex justify-center leading-[14px] font-bold">
        {mfa}
      </div>
      <div
        className="mt-[8px] flex justify-center leading-[12px] gradient-text-2"
        onClick={() => copy(mfa)}
      >
        {!copied ? "Copy Key" : "Copied"}
      </div>
      <div className="mt-[160px] flex items-start gap-[4px]">
        <Checkbox onChange={onChange} className="w-[14px] h-[14px]"></Checkbox>
        <div className="text-[9px] leadding-[11px]">
          I have stored the key properly and it will not be retrieved if it is
          lost.
        </div>
      </div>
      <div className="mt-[13px]">
        <CustomButton label={"Next"} action={() => console.log("")} />
      </div>
    </div>
  );
};

export default GoogleAuthenticator;
