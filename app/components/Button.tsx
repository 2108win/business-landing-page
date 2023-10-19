import Image from "next/image";
import React from "react";

type ButtonProps = {
  type?: "button" | "submit";
  label: string;
  styles?: string;
  isPrimary?: boolean;
  isNormal?: boolean;
  isGhost?: boolean;
  size: "sm" | "md" | "lg";
  icon?: string;
  styleCustom?: any;
};

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  styles,
  isPrimary,
  isNormal,
  isGhost,
  size,
  icon,
  styleCustom,
}) => {
  return (
    <button
      type={type}
      style={styleCustom}
      className={`py-3 md:py-5 flex items-center justify-center rounded-full font-medium transition-all duration-300 leading-5
    ${
      isPrimary &&
      `px-8 md:px-12 bg-primary hover:bg-primaryHover border border-transparent text-white hover:shadow-custom`
    }
    ${
      isNormal &&
      `px-8 md:px-12 bg-bgWhite hover:bg-bgWhiteHover text-primaryText border border-borderPrimary hover:shadow-custom`
    }
    ${isGhost && `px-0 bg-transparent text-primaryText`}
    ${size === "sm" && `py-[12px] md:py-[14px] text-[12px] md:text-[14px]`}
    ${size === "md" && `py-[15px] md:py-[17px] text-[14px] md:text-[16px]`}
    ${size === "lg" && `py-[17px] md:py-[19px] text-[14px] md:text-[16px]`}
    ${styles} 
    `}
    >
      {icon && <Image width={20} height={20} src={icon} alt="icon" className="mr-2" />}
      {label}
    </button>
  );
};

export default Button;
