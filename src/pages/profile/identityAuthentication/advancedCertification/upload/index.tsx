import { ChangeEvent, useRef, useState } from "react";

interface props {
  title: string;
  description?: string;
}

const Upload = ({ title, description }: props) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = (): void => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col text-[#020723] dark:text-white">
      <div className="leading-[14px]">{title}</div>
      {description && (
        <div className="ml-[5px] mt-[3px] text-[8px] leading-[9px] ">
          {description}
        </div>
      )}
      <div className="mt-[15px] flex gap-[40px]">
        <div
          className="flex-1 h-[80px] gradient-bg-blue-shallow dark:bg-dark_bg_color rounded-[12px] flex justify-center items-center"
          onClick={handleButtonClick}
        >
          <div className="w-[52px] h-[30px] bg-[url('@/assets/profile/certification-user.png')] dark:bg-[url('@/assets/profile/certification-user.png')] bg-contain bg-no-repeat">
            {previewUrl && (
              <img src={previewUrl} alt="img" className="w-full h-full" />
            )}
          </div>
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <div className="flex-1 h-[80px] gradient-bg-blue-shallow dark:bg-dark_bg_color rounded-[12px] flex justify-center items-center">
          <div className="w-[33px] h-[30px] bg-[url('@/assets/profile/certification-camera.png')] dark:bg-[url('@/assets/profile/certification-camera.png')] bg-contain bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
