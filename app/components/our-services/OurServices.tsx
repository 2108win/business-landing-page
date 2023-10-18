import React from "react";
import Heading from "../Heading";
import Card from "./Card";

const OurServices = () => {
  return (
    <div className="md:mt-24 mt-16 h-full flex flex-col gap-8 md:gap-10 px-4">
      <Heading
        title="Our Services"
        subtitle="Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-[30px] md:gap-y-[40px] w-full md:w-fit mx-auto">
        <Card
          icon="/assets/icons/jump-star.svg"
          title="Branding Idendity"
          description="Our support team will get assistance from AI-powered."
        />
        <Card
          icon="/assets/icons/globe.svg"
          title="Branding consult"
          description="Our support team will get assistance from AI-powered."
        />
        <Card
          icon="/assets/icons/image.svg"
          title="web development"
          description="Our support team will get assistance from AI-powered."
        />
        <Card
          icon="/assets/icons/analyse.svg"
          title="market anlysis"
          description="Our support team will get assistance from AI-powered."
        />
      </div>
    </div>
  );
};

export default OurServices;
