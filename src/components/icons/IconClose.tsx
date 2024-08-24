import { SvgIconProps } from ".";

const IconClose = (props: SvgIconProps) => {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9998 19.9998L3.99999 3.99996"
        stroke="#888888"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4.00015 19.9998L20 3.99996"
        stroke="#888888"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconClose;
