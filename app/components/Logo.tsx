import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-5">
      <Image src={"/assets/images/logo.png"} alt="logo" width={40} height={40} />
      <span className="font-bold text-[25px] text-primaryText">Digi.Business</span>
    </Link>
  );
};

export default Logo;
