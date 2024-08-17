import FunctionList from "./functionList";

const Home = () => {
  return (
    <>
      <section className="w-full px-[16px] mt-[15px]">
        <div className="rounded-[10px] h-[122px] bg-primary bg-no-repeat bg-contain px-[10px] pt-[10px] pb-[17px] flex gap-[10px] items-center">
          <div className="flex flex-col gap-[8px] flex-1">
            <div className="text-white  text-base leading-[14px]">
              $35,696 USDT
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[15px]">
        <FunctionList />
      </section>
    </>
  );
};

export default Home;
