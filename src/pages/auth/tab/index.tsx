import classnames from "classnames";

interface props {
  active: string;
  setActive: (active: string) => void;
}

const AuthTab = ({ active, setActive }: props) => {
  return (
    <div className="flex justify-between gap-[16px]">
      <div
        className={classnames(
          "flex-1 h-[39px] flex justify-center items-center border-[0.5px] border-[#C3D0EC] dark:border-[#5A5D73] leading-[14px] rounded-[10px]",
          { "bg-white dark:bg-[#232744]": active === "email" }
        )}
        onClick={() => setActive("email")}
      >
        By Email
      </div>
      <div
        className={classnames(
          "flex-1 h-[39px] flex justify-center items-center border-[0.5px] border-[#C3D0EC] dark:border-[#5A5D73] leading-[14px] rounded-[10px]",
          { "bg-white dark:bg-[#232744]": active === "phone" }
        )}
        onClick={() => setActive("phone")}
      >
        By Phone Number
      </div>
    </div>
  );
};

export default AuthTab;
