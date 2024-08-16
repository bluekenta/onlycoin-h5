import { useConst } from "@/hooks";
import FunctionList from "./functionList";

const Home = () => {
  const { title } = useConst();
  return (
    <div className="relative flex flex-col h-full">
      <div className="h-[206px] bg-contain bg-no-repeat">
        <div className="flex justify-between items-center px-[20px] pt-[18px]">
          <div className="flex gap-[9px] items-center">
            <div className="text-lg font-bold text-white leading-[16px]">
              {title}
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="w-[20px] h-[2px] bg-white"></div>
            <div className="w-[16px] h-[2px] bg-white"></div>
            <div className="w-[12px] h-[2px] bg-white"></div>
          </div>
        </div>
      </div>
      <div className="absolute px-[20px] top-[70px] w-full">
        <div className="rounded-[10px] h-[122px] bg-primary bg-no-repeat bg-contain px-[10px] pt-[10px] pb-[17px] flex gap-[10px] items-center">
          <div className="flex flex-col gap-[8px] flex-1">
            <div className="text-white  text-base leading-[14px]">
              $35,696 USDT
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[15px]">
        <FunctionList />
      </div>
    </div>
  );
};

export default Home;
