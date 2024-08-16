import BankCard from "@/pages/components/bankCard/bankCard";
import CustomButton from "@/pages/components/button";

const SwitchAccount = () => {
  const accounts = [
    {
      id: 1,
      asset: 0,
      assetToBTC: 0,
      active: true,
    },
    {
      id: 2,
      asset: 0,
      assetToBTC: 0,
    },
  ];
  return (
    <div className="m-[20px] flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[20px]">
        {accounts.map((account) => (
          <BankCard key={account.id} {...account} />
        ))}
      </div>
      <CustomButton label={"Confirm"} action={() => console.log("")} />
    </div>
  );
};

export default SwitchAccount;
