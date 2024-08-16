import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";

const SecurityCenter = () => {
  const navigate = useNavigate();
  const items = [
    {
      title: "Google Autenticator",
      url: "./google-authenticator",
    },
    {
      title: "Login Password",
      url: "./login-password",
    },
    {
      title: "Transaction Password",
      url: "./setting-transaction-password",
    },
    {
      title: "Add new account",
      url: "./add-new-account",
    },
  ];
  return (
    <div className="mt-[20px] mx-[20px] rounded-[10px] gradient-bg-blue-shallow dark:bg-dark_bg_color flex flex-col">
      {items.map((item, index) => (
        <div key={index} className="" onClick={() => navigate(item.url)}>
          <div className="px-[10px] py-[5px] flex justify-between items-center">
            <div className="leading-[14px] ">{item.title}</div>
            <div className="w-[24px] h-[24px] bg-[url('@/assets/profile/right-light.png')] dark:bg-[url('@/assets/profile/right-dark.png')] bg-contain bg-no-repeat"></div>
          </div>
          {index < items.length - 1 && (
            <div className="h-[1px] mx-[10px] bg-[rgba(47,60,107,0.1)] dark:bg-[rgba(255,255,255,0.1)]"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SecurityCenter;
