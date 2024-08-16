import CustomButton from "@/pages/components/button";
import CustomInput from "./components/CustomInput";

const RealNameAuthentication = () => {
  return (
    <div className="flex flex-col gap-[36px]">
      <div className="mt-[20px] flex flex-col gap-[16px] px-[20px]">
        <div className="h-[57.75px] rounded-[20px] gradient-bg-blue-shallow dark:bg-dark_bg_color flex justify-center items-center">
          <CustomInput label={"Nationality"} placeholder={"Cambodia"} />
        </div>

        <div className="h-[57.75px] rounded-[20px] gradient-bg-blue-shallow dark:bg-dark_bg_color flex justify-center items-center">
          <CustomInput
            label={"Real Name"}
            placeholder={"Please enter your name"}
          />
        </div>

        <div className="h-[57.75px] rounded-[20px] gradient-bg-blue-shallow dark:bg-dark_bg_color flex justify-center items-center">
          <CustomInput
            label={"Certificate Number"}
            placeholder={"Please enter the ID number"}
          />
        </div>
      </div>
      <div className="mx-[20px]">
        <CustomButton label={"Confirm"} action={() => console.log("")} />
      </div>
    </div>
  );
};

export default RealNameAuthentication;
