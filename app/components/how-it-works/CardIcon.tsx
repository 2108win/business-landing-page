import Image from "next/image";
import React from "react";

type CardIconProps = {
  icon: string;
  title?: string;
  isActive?: boolean;
};

const CardIcon: React.FC<CardIconProps> = ({ icon, title, isActive }) => {
  return (
    <div
      className={`flex flex-col gap-5 pb-6 items-center relative ${
        isActive &&
        "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-[3px] after:bg-primary"
      } `}
    >
      <Image src={icon} alt="icon" width={68} height={68} className="min-w-[68px] min-h-[68px]" />
      <h3 className="text-[20px] lg:text-[24px] text-center text-primaryText font-medium">
        {title}
      </h3>
    </div>
  );
};

export default CardIcon;
