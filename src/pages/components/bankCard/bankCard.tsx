interface props {
  id: number;
  asset: number;
  assetToBTC: number;
  active?: boolean;
}

const BankCard = ({ id, asset, assetToBTC, active }: props) => {
  return (
    <div
      key={id}
      className={
        "h-[128px] rounded-[10px] flex justify-center items-center bg-contain bg-no-repeat " +
        (active
          ? "bg-[url('@/assets/profile/bank-account-active.png')]"
          : " bg-[url('@/assets/profile/bank-account.png')]")
      }
    >
      <div className="px-[10px] w-full flex justify-between items-center">
        <div className="flex flex-col gap-[20px] text-white">
          <div className="leading-[14px] ">Total assets converted(BTC)</div>
          <div className="flex gap-[5px] items-end">
            <div className="text-[20px] leading-[23px]">{asset.toFixed(8)}</div>
            <div className="leading-[14px]">≈{assetToBTC.toFixed(8)}</div>
          </div>
        </div>
        <div className="w-[65px] h-[65px] bg-[url('@/assets/profile/btc-icon.png')] bg-contain bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default BankCard;
