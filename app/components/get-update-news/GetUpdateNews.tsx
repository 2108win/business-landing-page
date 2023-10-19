import React from "react";
import Button from "../Button";

const GetUpdateNews = () => {
  return (
    <div className="md:mt-32 mt-16 flex flex-col bg-primary pt-[30px] pb-[45px] text-center items-center px-4 w-full max-w-[1170px] mx-auto rounded-2xl">
      <h3 className="text-white text-4xl md:text-[48px] md:leading-[64px] font-medium">
        Get your updated news
      </h3>
      <p className="text-white mt-[26px] text-base md:text-[18px] font-medium">
        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
        embarrassing.
      </p>
      <div className="mt-[47px] flex md:p-3 p-2 pl-6 md:pl-6 gap-4 border border-borderPrimary bg-white shadow-custom rounded-full w-full max-w-[430px]">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full bg-transparent outline-none font-medium text-base leading-5 text-secondText placeholder-secondText"
        />
        <Button size="md" label="Send" isPrimary styles="w-[120px] uppercase" />
      </div>
    </div>
  );
};

export default GetUpdateNews;
