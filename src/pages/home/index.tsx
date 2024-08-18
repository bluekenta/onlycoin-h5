import AllOrders from "./allOrders";
import FunctionList from "./functionList";
import MainCard from "./mainCard";

const Home = () => {
  return (
    <>
      <section className="relative mx-[16px] my-[15px] px-[16px] pt-[17px] pb-[19px] rounded-[10px] bg-primary bg-no-repeat bg-contain">
        <MainCard />
      </section>
      <section className="flex justify-between items-center gap-[14px] mx-[16px]">
        <FunctionList />
      </section>
      <section className="flex flex-col my-[20px] mx-[16px]">
        <AllOrders />
      </section>
    </>
  );
};

export default Home;
