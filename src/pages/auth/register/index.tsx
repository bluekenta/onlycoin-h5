import { useState } from "react";
import AuthTab from "../tab";
import classnames from "classnames";
import CustomButton from "@/pages/components/button";
import CustomInput from "@/pages/components/input";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [active, setActive] = useState<string>("email");
  const [method, setMethod] = useState<string | undefined>();
  const navigate = useNavigate();
  return (
    <div className="px-[20px]">
      <div className="text-[20px] font-bold leading-[23px] gradient-text-3">
        Register an Account
      </div>
      <div className="flex flex-col gap-[10px] mt-[20px]">
        <AuthTab
          active={active}
          setActive={(active: string) => {
            setActive(active);
            setMethod("");
          }}
        />
        {active === "email" && (
          <CustomInput
            name="email"
            label="email"
            placeholder="Enter your email"
            prefix="email"
          />
        )}
        {active === "phone" && (
          <CustomInput
            name="phone"
            label="phone"
            placeholder="Enter your phone"
            prefix="phone"
          />
        )}
        {!method && (
          <>
            <CustomInput
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              prefix="password"
            />
            <CustomInput
              type="password"
              name="password"
              label="Confirm Password"
              placeholder="Confirm your password"
              prefix="password"
            />
          </>
        )}
        {method === "otp" && <CustomInput type="otp" name="otp" label="OTP" />}
        {!method && (
          <div className="flex flex-col gap-[10px]">
            <div className="leading-[14px] ">
              Forget password? There is two option here.
            </div>
            <div className="flex justify-between gap-[16px]">
              <div
                className={classnames(
                  "flex-1 h-[29px] flex justify-center items-center gradient-border-1 leading-[14px] rounded-[4px]"
                )}
                onClick={() => setMethod("otp")}
              >
                Continue with OTP
              </div>
              <div
                className={classnames(
                  "flex-1 h-[29px] flex justify-center items-center gradient-border-1 leading-[14px] rounded-[4px]"
                )}
                onClick={() => console.log("")}
              >
                Continue with Face ID
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-[20px] ">
        <CustomButton label={"Register"} action={() => console.log("")} />
      </div>
      <div
        className="flex justify-end leading-[14px] text-[#FF6060] mt-[25px]"
        onClick={() => navigate("/login")}
      >
        Sign in
      </div>
    </div>
  );
};

export default ForgotPassword;
