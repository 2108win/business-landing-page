import React from "react";

type DecoratorProps = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

const Decorator: React.FC<DecoratorProps> = ({ top, left, right, bottom }) => {
  return (
    <div
      className={`absolute z-[1] w-80 h-80 bg-orange-400 rounded-full blur-[300px] 
      ${top && `top-[${top}px]`}
      ${left && `left-[${left}px]`}
      ${right && `right-[${right}px]`}
      ${bottom && `bottom-[${bottom}px]`}
      `}
    />
  );
};

export default Decorator;
