interface props {
  label: string;
  action: () => void;
}
const CustomButton = ({ label, action }: props) => {
  return (
    <div
      className="w-full h-[40px] rounded-[10px] gradient-bg-blue flex justify-center items-center text-[16px] font-bold leading-[18px] text-white"
      onClick={action}
    >
      {label}
    </div>
  );
};
export default CustomButton;
