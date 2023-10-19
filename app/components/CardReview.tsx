import Image from "next/image";
import React from "react";

type CardReviewProps = {
  avatar: string;
  reviewText: string;
  description?: string;
  iconRate?: string;
  styleCustom?: any;
};

const CardReview: React.FC<CardReviewProps> = ({
  avatar,
  reviewText,
  description,
  iconRate,
  styleCustom,
}) => {
  return (
    <div
      style={styleCustom}
      className={`
    lg:absolute flex px-[22px] py-[17px] rounded-lg shadow-custom bg-white gap-[18px] z-50 lg:max-w-[336px]
  `}
    >
      <div className="flex flex-col justify-between">
        <Image src={avatar} width={68} height={68} alt="avatar" className="rounded-full" />
        {iconRate && <Image src={iconRate} width={50} height={10} alt="icon-rate" />}
      </div>
      <div className="flex flex-col gap-3 flex-1">
        <p className="text-primaryText text-base font-medium">{reviewText}</p>
        <p className="text-secondText text-sm font-medium">{description}</p>
      </div>
    </div>
  );
};

export default CardReview;
