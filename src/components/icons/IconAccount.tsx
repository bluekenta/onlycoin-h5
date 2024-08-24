import { SvgIconProps } from "./";

const IconAccount = (props: SvgIconProps) => {
  return (
    <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="3.33337"
        y="6.5"
        width="18"
        height="13"
        rx="2"
        stroke={props.fill ? props.fill : props.active ? "#9FE870" : "#666666"}
        strokeWidth="2"
      />
      <path
        d="M7.33337 15.5H7.34337"
        stroke={props.fill ? props.fill : props.active ? "#9FE870" : "#666666"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4.33337 11.5H21.3334"
        stroke={props.fill ? props.fill : props.active ? "#9FE870" : "#666666"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconAccount;
