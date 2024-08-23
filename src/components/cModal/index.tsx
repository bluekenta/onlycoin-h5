import { Button, Modal } from "antd";
import Icons from "../icons";

interface props {
  title: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: (val: boolean) => void;
}

const CModal = ({ title, children, open, setOpen }: props) => {
  return (
    <Modal centered open={open} footer={[]} onCancel={() => setOpen(false)}>
      <div className="w-full flex flex-col text-white">
        <div className="h-[60px] border-b-[1px] border-solid border-[#BCBFBA] border-opacity-20 flex justify-between items-center px-[14px]">
          <div className="text-[22px] leading-[33px] font-600">{title}</div>
          <Button
            className="!w-[24px] !h-[24px] !bg-[#171717] border-none"
            onClick={() => setOpen(false)}
          >
            <Icons type="close" className="!w-[24px] !h-[24px]" />
          </Button>
        </div>
        {children}
      </div>
    </Modal>
  );
};

export default CModal;
