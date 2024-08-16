import CustomButton from "@/pages/components/button";
import Upload from "./upload";

const AdvancedCertification = () => {
  return (
    <div className="mt-[15px] px-[20px] flex flex-col gap-[36px]">
      <div className="flex flex-col gap-[28px]">
        <Upload title={"1. Please Upload the front photo of the ID"} />
        <Upload title={"2. Please Upload the back photo of the certificate"} />
        <Upload
          title={"3. Please upload a hand held ID photo"}
          description={
            "Make sure the photo is clear without watermark and the upper body is intact."
          }
        />
      </div>
      <CustomButton label={"Next"} action={() => console.log("")} />
    </div>
  );
};

export default AdvancedCertification;
