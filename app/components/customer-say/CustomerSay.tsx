import React from "react";
import Heading from "../Heading";
import Image from "next/image";

const CustomerSay = () => {
  return (
    <div className="md:mt-48 mt-24 flex flex-col">
      <div className="px-4">
        <Heading
          title="What Customer Say"
          subtitle="Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."
        />
      </div>
      <div className="mt-40 lg:mt-56 min-h-[483px] bg-primary w-full px-6">
        <div className="mx-auto flex flex-col items-center w-full lg:w-[901px] -translate-y-20 lg:translate-y-[-110px] bg-white border border-borderSecondary rounded-xl py-[57px] px-8 text-center">
          <h3 className="text-base text-primaryText text-center">
            Best Design and delivered in time
          </h3>
          <p className="text-base text-secondText mt-[47px] max-w-[716px] leading-[30px] tracking-[-0.16px]">
            Nay likely her length sooner thrown sex lively income. The expense windows adapted sir.
            Wrong widen drawn ample eat off doors money. Offending belonging promotion provision an
            be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding
            her. Six curiosity day assurance bed necessary.
          </p>
          <Image
            src={"/assets/icons/stars-5.svg"}
            width={100}
            height={17}
            alt="rate"
            className="mt-10"
          />
          <p className="text-sm text-primaryText mt-[26px]">Mansur</p>
          <p className="text-xs text-secondText mt-[9px]">CEO @ airbnb</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
