import React from "react";
import Heading from "../Heading";
import CardIcon from "./CardIcon";
import Button from "../Button";

const HowItWorks = () => {
  const styleCustom = {
    paddingRight: "0px",
    paddingLeft: "0px",
  };

  return (
    <div className="md:mt-40 mt-16 flex flex-col px-4">
      <Heading
        title="How It Works"
        subtitle="Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."
      />
      <div className="flex flex-col lg:flex-row mt-20 lg:mt-44 gap-20 lg:gap-48 justify-center items-center lg:items-start">
        <div className="grid grid-cols-2 justify-items-center lg:grid-cols-1 gap-10 lg:gap-[100px] lg:w-1/3">
          <CardIcon isActive={true} icon="/assets/icons/account.svg" title="Create Account" />
          <CardIcon icon="/assets/icons/requirements.svg" title="Upload requirements" />
          <CardIcon icon="/assets/icons/search.svg" title="Search Services" />
          <CardIcon icon="/assets/icons/apply.svg" title="Apply" />
        </div>
        <div className="flex flex-col lg:w-2/3">
          <h3 className="text-[26px] text-black font-medium">How to create account?</h3>
          <p className="text-[16px] mt-5 lg:mt-10 font-normal leading-[26px] text-secondText max-w-[420px] lg:max-w-520px">
            And produce say the ten moments parties. Simple innate summer fat appear basket his
            desire joy. Outward clothes promise at gravity do excited. Sufficient particular
            impossible by reasonable oh expression is. Yet preference connection unpleasant yet
            melancholy but end appearance. And excellence partiality estimating terminated day
            everything.
            <br />
            <br />
            Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible
            judgment settling outweigh. Worse linen an of civil jokes leave offer. Parties all
            clothes removal cheered calling prudent her. And residence for met the estimable
            disposing. Mean if he they been no hold mr. Is at much do made took held help. Latter
            person am secure of estate genius at.
          </p>
          <div className="mt-12 lg:mt-24 flex flex-col lg:flex-row gap-5">
            <Button
              size="md"
              isPrimary
              label="Create Account"
              styles="uppercase lg:w-[199px]"
              styleCustom={styleCustom}
            />
            <Button
              size="md"
              isNormal
              label="learn More"
              styles="uppercase border-primaryText lg:w-[199px]"
              styleCustom={styleCustom}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
