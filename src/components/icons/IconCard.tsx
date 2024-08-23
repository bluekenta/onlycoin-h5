import { SvgIconProps } from ".";

const IconCard = (props: SvgIconProps) => {
  return (
    <svg
      className={props.className}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="30"
        height="30"
        rx="8"
        transform="matrix(1 0 0 -1 0 30)"
        fill="#333333"
      />
      <rect
        x="6"
        y="9"
        width="18"
        height="13"
        rx="2"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M10 18H10.01"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M7 14H24" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export const IconVISACard = (props: SvgIconProps) => {
  return (
    <svg
      className={props.className}
      viewBox="0 0 39 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.776 0.875982L9.516 12.846H6.193L3.82 3.29298C3.676 2.70598 3.547 2.48998 3.087 2.24298C2.337 1.83898 1.096 1.45898 0 1.22298L0.079 0.875982H5.428C6.11 0.875982 6.718 1.32198 6.86 2.09598L8.087 9.02398L11.473 0.877982H14.776V0.875982ZM27.684 8.93698C27.742 5.77898 23.295 5.60398 23.346 4.19298C23.362 3.76298 23.784 3.30798 24.694 3.19098C25.144 3.13198 26.386 3.08798 27.784 3.72498L28.372 1.18698C27.4329 0.838833 26.4396 0.659407 25.438 0.656982C22.331 0.656982 20.121 2.28298 20.071 4.61298C20.026 6.33598 21.594 7.29698 22.779 7.86998C23.995 8.45698 24.401 8.83198 24.389 9.35698C24.369 10.16 23.396 10.515 22.49 10.529C20.91 10.553 19.998 10.108 19.272 9.77298L18.666 12.396C19.395 12.726 20.746 13.017 22.153 13.031C25.456 13.033 27.64 11.427 27.684 8.93698ZM35.835 12.846H38.742L36.372 0.875982H33.688C33.084 0.875982 32.57 1.22098 32.338 1.75398L27.465 12.846H30.766L31.446 11.058H35.48L35.835 12.846ZM32.386 8.60398L34.103 4.11098L34.993 8.60398H32.386ZM19.27 0.875982L16.5 12.846H13.357L16.125 0.875982H19.27Z"
        fill="#1434CB"
      />
    </svg>
  );
};

export const IconMasterCard = (props: SvgIconProps) => {
  return (
    <svg
      className={props.className}
      viewBox="0 0 30 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6509 1.92395H10.7759V16.076H18.6509V1.92395Z"
        fill="#FF5F00"
      />
      <path
        d="M11.2759 9C11.2742 7.63705 11.5828 6.29161 12.1783 5.06563C12.7738 3.83965 13.6405 2.7653 14.7129 1.924C13.3852 0.880478 11.7907 0.231545 10.1116 0.0513749C8.43252 -0.128795 6.73663 0.167067 5.21776 0.905147C3.69889 1.64323 2.41831 2.79374 1.5224 4.2252C0.626479 5.65666 0.151367 7.3113 0.151367 9C0.151367 10.6887 0.626479 12.3434 1.5224 13.7748C2.41831 15.2063 3.69889 16.3568 5.21776 17.0949C6.73663 17.8329 8.43252 18.1288 10.1116 17.9486C11.7907 17.7685 13.3852 17.1195 14.7129 16.076C13.6411 15.2342 12.7748 14.1598 12.1793 12.9339C11.5839 11.708 11.2749 10.3628 11.2759 9Z"
        fill="#EB001B"
      />
      <path
        d="M29.2749 8.99998C29.2748 10.6886 28.7997 12.3431 27.9038 13.7745C27.0079 15.2059 25.7274 16.3563 24.2086 17.0944C22.6898 17.8325 20.994 18.1284 19.315 17.9483C17.636 17.7682 16.0416 17.1194 14.7139 16.076C15.785 15.2336 16.6509 14.1591 17.2463 12.9333C17.8418 11.7076 18.1511 10.3627 18.1511 8.99998C18.1511 7.63729 17.8418 6.29238 17.2463 5.06664C16.6509 3.84091 15.785 2.76635 14.7139 1.92398C16.0416 0.880602 17.636 0.231792 19.315 0.0517012C20.994 -0.12839 22.6898 0.167504 24.2086 0.905566C25.7274 1.64363 27.0079 2.79408 27.9038 4.22545C28.7997 5.65682 29.2748 7.31136 29.2749 8.99998ZM28.4139 14.576V14.286H28.5309V14.228H28.2329V14.287H28.3499V14.577L28.4139 14.576ZM28.9919 14.576V14.227H28.8999L28.7959 14.467L28.6909 14.227H28.5989V14.577H28.6639V14.313L28.7619 14.54H28.8289L28.9269 14.312V14.576H28.9919Z"
        fill="#F79E1B"
      />
    </svg>
  );
};

export const IconBankCard = (props: SvgIconProps) => {
  return (
    <svg
      className={props.className}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="30"
        height="30"
        rx="8"
        transform="matrix(1 0 0 -1 0 30)"
        fill="#333333"
      />
      <g clip-path="url(#clip0_192_4142)">
        <path
          d="M9.2 12.5V19.2M12.9 12.5V19.2M17.1 12.5V19.2M20.8 12.5V19.2M7.5 20.5V21.2C7.5 21.7 7.5 21.9 7.6 22.1C7.7 22.3 7.8 22.4 8 22.5C8.2 22.6 8.4 22.6 8.9 22.6H21.2C21.7 22.6 21.9 22.6 22.1 22.5C22.3 22.4 22.4 22.3 22.5 22.1C22.6 21.9 22.6 21.7 22.6 21.2V20.5C22.6 20 22.6 19.8 22.5 19.6C22.4 19.4 22.3 19.3 22.1 19.2C21.9 19.1 21.7 19.1 21.2 19.1H8.8C8.3 19.1 8.1 19.1 7.9 19.2C7.7 19.3 7.6 19.4 7.5 19.6C7.5 19.8 7.5 20 7.5 20.5ZM14.7 7.60002L8.5 8.90002C8.2 9.00002 8 9.10002 7.8 9.20002C7.7 9.20002 7.6 9.40002 7.6 9.50002C7.5 9.70002 7.5 9.90002 7.5 10.2V11.1C7.5 11.6 7.5 11.8 7.6 12C7.7 12.2 7.8 12.3 8 12.4C8.2 12.5 8.4 12.5 8.9 12.5H21.2C21.7 12.5 21.9 12.5 22.1 12.4C22.3 12.3 22.4 12.2 22.5 12C22.6 11.8 22.6 11.6 22.6 11.1V10.2C22.6 9.80002 22.6 9.60002 22.5 9.50002C22.4 9.40002 22.3 9.20002 22.2 9.20002C22 9.10002 21.8 9.00002 21.5 8.90002L15.3 7.60002C15.2 7.60002 15.1 7.60002 15.1 7.60002H15C14.9 7.50002 14.8 7.50002 14.7 7.60002Z"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0_192_4142">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(6 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IconSEPACard = (props: SvgIconProps) => {
  return (
    <svg
      width="28"
      height="18"
      className={props.className}
      viewBox="0 0 28 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="28" height="18" fill="url(#pattern0_192_4154)" />
      <defs>
        <pattern
          id="pattern0_192_4154"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_192_4154"
            transform="matrix(0.0113636 0 0 0.0176768 0 -0.0126263)"
          />
        </pattern>
        <image
          id="image0_192_4154"
          width="88"
          height="58"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export const IconPersonalCard = (props: SvgIconProps) => {
  return (
    <svg
      className={props.className}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="30"
        height="30"
        rx="8"
        transform="matrix(1 0 0 -1 0 30)"
        fill="#333333"
      />
      <circle
        cx="14.9999"
        cy="10.4167"
        r="3.66667"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.82144 21.1138C9.40528 18.3403 12.1657 16.8334 14.9999 16.8334V16.8334C17.8341 16.8334 20.5946 18.3403 21.1784 21.1138C21.2564 21.4843 21.3195 21.8656 21.3611 22.2519C21.4203 22.801 20.9689 23.25 20.4166 23.25H9.58325C9.03097 23.25 8.57954 22.801 8.6387 22.2519C8.68031 21.8656 8.74343 21.4843 8.82144 21.1138Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconCard;
