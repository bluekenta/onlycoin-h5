import { useState } from "react";
import AllOrders from "./components/allOrders";
import FunctionList from "./components/functionList";
import MainCard from "./components/mainCard";
import Buy from "./components/modal/buy";
import AddPaymentMethod from "./components/modal/business";
import Business from "./components/modal/business";

const Home = () => {
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [addPaymentMethodModalOpen, setAddPaymentMethodModalOpen] =
    useState(false);
  const [businessModalOpen, setBusinessModalOpen] = useState(true);
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
      <Buy open={buyModalOpen} setOpen={setBuyModalOpen} />
      <AddPaymentMethod
        open={addPaymentMethodModalOpen}
        setOpen={setAddPaymentMethodModalOpen}
      />
      <Business open={businessModalOpen} setOpen={setBusinessModalOpen} />
    </>
  );
};

export default Home;
