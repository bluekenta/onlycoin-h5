import { useState } from "react";
import AllOrders from "./components/allOrders";
import FunctionList from "./components/functionList";
import MainCard from "./components/mainCard";
import CModal from "@/components/cModal";

const Home = () => {
  const [modal2Open, setModal2Open] = useState(true);
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
      <CModal
        open={modal2Open}
        setOpen={(val) => setModal2Open(val)}
        title={"Test Modal"}
      >
        <div className="h-[300px] flex justify-center items-center">
          Test Modal
        </div>
      </CModal>
    </>
  );
};

export default Home;
