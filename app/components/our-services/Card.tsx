import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  icon: string;
};

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="max-w-[360px] flex flex-col items-center justify-center px-14 py-10 rounded-2xl hover:shadow-custom border border-borderPrimary bg-white transition-all duration-300">
      <Image src={icon} alt="icon" width={50} height={50} />
      <h3 className="text-[20px] text-center text-grayDarkText font-bold uppercase mt-8">
        {title}
      </h3>
      <p className="text-grayText text-center leading-5 text-[14px] mt-[25px]">{description}</p>
    </div>
  );
};

export default Card;
