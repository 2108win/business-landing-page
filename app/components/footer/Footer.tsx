import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../Logo";

const Footer = () => {
  return (
    <div className="md:mt-44 mt-24">
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[40px] lg:gap-[50px] xl:gap-[100px] max-w-[1170px] mx-auto">
        <div className="md:col-span-2 flex flex-col gap-[33px]">
          <Logo />
          <p className="text-secondText font-medium text-lg">
            We use multi-mic and echo cancellation technology so that everyone can use device.
          </p>
        </div>
        <div className="flex flex-col gap-[30px] md:gap-[50px]">
          <div className="text-[24px] font-medium text-primaryText">Resources</div>
          <ul className="flex flex-col gap-[29px] p-0 m-0">
            <li className="underline-hover-after w-fit cursor-pointer text-[22px] leading-none font-normal text-secondText">
              Feature
            </li>
            <li className="underline-hover-after w-fit cursor-pointer text-[22px] leading-none font-normal text-secondText">
              Pricing
            </li>
            <li className="underline-hover-after w-fit cursor-pointer text-[22px] leading-none font-normal text-secondText">
              Login
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[30px] md:gap-[50px]">
          <div className="text-[24px] font-medium text-primaryText">Legal</div>
          <ul className="flex flex-col gap-[29px] p-0 m-0">
            <li className="underline-hover-after w-fit cursor-pointer text-[22px] leading-none font-normal text-secondText">
              Terms of Use
            </li>
            <li className="underline-hover-after w-fit cursor-pointer text-[22px] leading-none font-normal text-secondText">
              Privace Policy
            </li>
            <li className="underline-hover-after w-fit cursor-pointer text-[22px] leading-none font-normal text-secondText">
              Legal Notice
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[30px] md:gap-[50px]">
          <div className="text-[24px] font-medium text-primaryText">Links</div>
          <ul className="flex flex-col gap-[29px] p-0 m-0">
            <li className="underline-hover-after w-fit cursor-pointer text-[22px] leading-none font-normal text-secondText">
              Feedback
            </li>
            <li className="underline-hover-after w-fit cursor-pointer text-[22px] leading-none font-normal text-secondText">
              Privace Policy
            </li>
            <li className="underline-hover-after w-fit cursor-pointer text-[22px] leading-none font-normal text-secondText">
              Legal Notice
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full py-[11px] text-center bg-primary mt-10 text-sm font-normal text-whiteText">
        Copyright Win_Lax 2023, All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
