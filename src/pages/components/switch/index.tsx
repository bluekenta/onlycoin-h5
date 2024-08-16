import classnames from "classnames";
interface props {
  activeTab: number;
  setActiveTab: (activeTab: number) => void;
  tabs: React.ReactNode[];
}
const CommonSwitch = ({ activeTab, setActiveTab, tabs }: props) => {
  return (
    <div className="flex w-[280px] h-[36px] gradient-bg-blue-shallow dark:bg-[#2F3C6B] rounded-[20px]">
      {tabs.map((item, index) => (
        <div
          key={index}
          className={classnames(
            "h-[36px] flex-1 rounded-[20px] text-lg text-[#020723] dark:text-white leading-[16px] font-bold flex justify-center items-center text-wrap text-center",
            {
              "!text-white gradient-bg-blue": activeTab === index,
            }
          )}
          onClick={() => setActiveTab(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default CommonSwitch;
