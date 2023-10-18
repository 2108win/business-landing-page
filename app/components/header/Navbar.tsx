import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import Button from "../Button";

const Navbar = () => {
  return (
    <div className="max-w-[1170px] mx-auto pt-[30px] flex justify-between items-center">
      <Logo />
      <div className="hidden md:flex items-center space-x-8">
        <Link href={"/"} className="font-medium text-primaryText text-[17px]">
          Home
        </Link>
        <Link href={"/"} className="font-medium text-primaryText text-[17px]">
          About
        </Link>
        <Link href={"/"} className="font-medium text-primaryText text-[17px]">
          Services
        </Link>
        <Link href={"/"} className="font-medium text-primaryText text-[17px]">
          Contact
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-10">
        <Button size="lg" label="Login" isGhost />
        <Button size="lg" label="Sign up" isNormal styles="shadow-custom hover:bg-whiteHover" />
      </div>
    </div>
  );
};

export default Navbar;
