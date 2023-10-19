import React from "react";
import Heading from "../Heading";
import CardNews from "./CardNews";

const CustomerSay2 = () => {
  return (
    <div className="md:mt-32 mt-16 flex flex-col px-4">
      <Heading
        title="What Customer Say"
        subtitle="Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."
      />
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 justify-items-center mx-auto w-full lg:w-fit gap-5">
        <CardNews
          isNew
          image="/assets/images/say-image-1.png"
          title="Distrusts fulfilled happiness unwilling as explained of difficult."
          description="Spot to many it four bred soon well to. Or am promotion in no departure abilities. Whatever landlord yourself at by pleasure of children be."
          link="/"
        />
        <CardNews
          isNew
          image="/assets/images/say-image-2.png"
          title="Distrusts fulfilled happiness unwilling as explained of difficult."
          description="Spot to many it four bred soon well to. Or am promotion in no departure abilities. Whatever landlord yourself at by pleasure of children be."
          link="/"
        />
      </div>
    </div>
  );
};

export default CustomerSay2;
