import React from "react";

type CardNumberProps = {
  number: string;
  title: string;
};

const CardNumber: React.FC<CardNumberProps> = ({ number, title }) => {
  return (
    <div className="pl-[25px] relative after:content-[''] after:absolute after:left-0 after:w-[3px] after:h-full after:bg-primary flex flex-col gap-[50px]">
      <h3 className="text-[40px] lg:text-[60px] text-primaryText font-bold">{number}</h3>
      <p className="text-[20px] lg:mt-10 font-medium leading-[26px] text-secondText max-w-[90px]">
        {title}
      </p>
    </div>
  );
};

export default CardNumber;
