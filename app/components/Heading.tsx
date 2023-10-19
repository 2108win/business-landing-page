import React from "react";

type HeadingProps = {
  title: string;
  subtitle?: string;
};

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl text-center md:text-[65px] text-primaryText relative after:absolute after:content-[''] after:w-[166px] after:block after:h-[3px] after:bg-primary after:-bottom-5 after:left-1/2 after:-translate-x-1/2">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-16 text-[14px] md:text-[16px] text-secondText leading-5 text-center max-w-[851px]">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
