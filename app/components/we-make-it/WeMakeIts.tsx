import React from "react";
import Heading from "../Heading";
import CardNumber from "./CardNumber";
import Image from "next/image";
import CardReview from "../CardReview";

const WeMakeIts = () => {
  return (
    <div className="md:mt-32 mt-16 flex flex-col px-4 mx-auto">
      <Heading
        title="We Make your Business Bright"
        subtitle="Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."
      />
      <div className="flex flex-col lg:flex-row mt-10 lg:mt-20 items-center gap-20 lg:gap-28">
        <div className="grid grid-cols-2 justify-items-start gap-16">
          <CardNumber number="1500+" title="Projects Done" />
          <CardNumber number="2000+" title="Happy Customers" />
          <CardNumber number="3000+" title="Cup of Coffee" />
          <CardNumber number="1890" title="Projects in Queue" />
        </div>
        <div className="max-w-[600px] flex flex-col gap-5 relative after:absolute after:content-[''] after:-right-8 after:-bottom-8 xl:after:-right-[60px] lg:after:-bottom-[60px] after:bg-primary after:w-5/6 after:h-2/3 lg:after:max-w-[534px] lg:after:max-h-[544px] scale-90 xl:scale-100">
          <Image
            src="/assets/images/business-image.png"
            width={534}
            height={723}
            alt="business"
            className="relative z-10 w-[400px] xl:w-[534px]"
          />
          <CardReview
            styles="lg:right-[-5%] xl:right-[-10%] 2xl:right-[-20%]"
            styleCustom={{ top: "55%" }}
            avatar="/assets/images/avatar-2.png"
            reviewText="Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile."
            description="Linda, Project Manager"
            iconRate="/assets/icons/stars-4p5.svg"
          />
          <CardReview
            styleCustom={{ left: "-20%", top: "90%" }}
            avatar="/assets/images/avatar-3.png"
            reviewText="Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile."
            description="Linda, Project Manager"
            iconRate="/assets/icons/stars-5.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default WeMakeIts;
