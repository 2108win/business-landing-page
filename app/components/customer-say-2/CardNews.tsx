import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardNewsProps = {
  isNew?: boolean;
  image?: string;
  title: string;
  description: string;
  link?: string;
};

const CardNews: React.FC<CardNewsProps> = ({ isNew, image, title, description, link }) => {
  return (
    <div className="h-[500px] w-full lg:w-[450px] rounded-xl overflow-hidden relative">
      {isNew && (
        <div className="z-10 absolute top-0 right-5 bg-white text-primaryText pt-[25px] px-[30px] pb-[30px] font-medium uppercase rounded-b-xl">
          New
        </div>
      )}
      {image && <Image src={image} alt={title} fill className="object-cover" />}
      <div className="absolute right-6 left-6 bottom-5 h-auto bg-white rounded-xl px-[30px] py-5">
        <h4 className="text-[20px] font-medium leading-5 text-primaryText">{title}</h4>
        <p className="text-[16px] font-normal text-secondText mt-5 mb-[29px]">{description}</p>
        {link && (
          <Link
            href={link}
            className="text-[14px] font-medium text-primaryText leading-[14px] uppercase underline underline-offset-4"
          >
            Read More
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardNews;
