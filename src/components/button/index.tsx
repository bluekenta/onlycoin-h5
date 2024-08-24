import classnames from "classnames";
import React from "react";
import Icons from "../icons";

interface IProps {
  cn?: string;
  children: string | React.ReactNode;
  onClick?: () => void;
}

const PrimaryButton = (props: IProps) => {
  return (
    <div
      className={classnames(
        props.cn,
        "h-[48px] flex justify-center items-center bg-primary rounded-[12px] text-[16px] leading-[19px] font-semibold text-secondary"
      )}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export const TransparentButton = (props: IProps) => {
  return (
    <div
      className={classnames(
        props.cn,
        "h-[48px] flex justify-center items-center border-[1px] border-border_inactive rounded-[12px] bg-transparent"
      )}
    >
      {props.children}
    </div>
  );
};

export const WalletButton = (props: IProps & { type: string }) => {
  return (
    <div
      className={classnames(
        props.cn,
        "h-[48px] flex justify-center items-center border-[1px] border-border_inactive rounded-[12px] bg-transparent"
      )}
      onClick={props.onClick}
    >
      <div className="flex items-center gap-[6px]">
        <Icons type={props.type} className="w-[24px] h-[24px]" />
        <p className="text-[15px] font-medium leading-[16px]">
          {props.children}
        </p>
      </div>
    </div>
  );
};

export default PrimaryButton;
