import React from "react";
import Button from "../Button";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="relative px-4">
      {/* navbar */}
      <Navbar />
      {/* hero */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-5 md:mt-10">
        <div className="flex flex-col break-words max-w-[645px] gap-10">
          <div className="flex flex-col gap-5 md:gap-[30px]">
            <h1 className="text-5xl md:text-[100px] font-none text-primaryText leading-normal md:leading-[82px]">
              Growing your{" "}
              <span className="text-6xl md:text-[100px] font-black text-primary">Business</span>
            </h1>
            <p className="text-[16px] text-secondText leading-5 max-w-[565px]">
              Relation so in confined smallest children unpacked delicate. Why sir end believe
              uncivil respect. Always get adieus nature day course for common. My little garret
              repair to desire he esteem.
            </p>
          </div>
          <div className="flex md:p-3 p-2 pl-4 gap-4 border border-borderPrimary bg-white shadow-custom rounded-full md:pl-10">
            <input
              type="text"
              placeholder="Search your services"
              className="w-full bg-transparent outline-none font-medium text-base leading-5 text-secondText placeholder:uppercase placeholder-secondText uppercase"
            />
            <Button size="md" label="Search" isPrimary styles="uppercase" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-y-6 md:gap-x-8 justify-items-center w-full md:w-fit mx-auto">
            <Button
              size="lg"
              isNormal
              label="airbnb"
              icon="/assets/icons/brand-airbnb.svg"
              styles="w-full md:w-[210px] border-borderSecondary hover:border-borderPrimary text-grayText"
            />
            <Button
              size="lg"
              isNormal
              label="dropbox"
              icon="/assets/icons/dropbox.svg"
              styles="w-full md:w-[210px] border-borderSecondary hover:border-borderPrimary text-grayText"
            />
            <Button
              size="lg"
              isNormal
              label="microsoft"
              icon="/assets/icons/microsoft.svg"
              styles="w-full md:w-[210px] border-borderSecondary hover:border-borderPrimary text-grayText"
            />
            <Button
              size="lg"
              isNormal
              label="stripe"
              icon="/assets/icons/stripe.svg"
              styles="w-full md:w-[210px] border-borderSecondary hover:border-borderPrimary text-grayText"
            />
          </div>
        </div>
        <div className="relative after:absolute after:content-[url('/assets/images/bg-hero-image.png')] after:block after:bg-no-repeat after:bg-cover after:w-fit after:h-fit after:right-0 after:top-0 md:after:top-[30%] md:after:translate-x-[20%] after:bg-[center_right_10%]">
          <Image
            src="/assets/images/hero-image.png"
            width={555}
            height={876.519}
            alt="hero"
            className="relative z-10 "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
