"use client";

import React, { useState, useEffect, useRef } from "react";
import Logo from "../Logo";
import Link from "next/link";
import Button from "../Button";
import Image from "next/image";
const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const navRef = useRef();
  const toggleNav = () => {
    setIsOpenNav(!isOpenNav);
  };
  return (
    <div className="max-w-[1170px] mx-auto pt-[30px] flex justify-between items-center">
      <Logo />
      <button onClick={toggleNav} className="lg:hidden">
        <Image src="/assets/icons/menu.svg" alt="menu" width={30} height={30} />
      </button>
      <div className="hidden lg:flex items-center space-x-8">
        <Link href={"/"} className="font-medium text-primaryText text-[17px] underline-hover-after">
          Home
        </Link>
        <Link href={"/"} className="font-medium text-primaryText text-[17px] underline-hover-after">
          About
        </Link>
        <Link href={"/"} className="font-medium text-primaryText text-[17px] underline-hover-after">
          Services
        </Link>
        <Link href={"/"} className="font-medium text-primaryText text-[17px] underline-hover-after">
          Contact
        </Link>
      </div>
      <div className="hidden lg:flex items-center gap-10">
        <Button size="lg" label="Login" isGhost styles="hover:text-primary" />
        <Button size="lg" label="Sign up" isNormal styles="shadow-custom hover:bg-whiteHover" />
      </div>
      {isOpenNav && (
        <>
          <div className="fixed z-[99998] bg-black/50 inset-0" onClick={toggleNav}></div>
          <div className="z-[99999] fixed top-0 right-0 bottom-0 min-w-[300px] pt-[30px] flex flex-col bg-white items-center text-center">
            <button onClick={toggleNav} className="mr-auto ml-5 mb-5">
              <Image src="/assets/icons/close.svg" alt="close" width={30} height={30} />
            </button>
            <Link
              href={"/"}
              className="w-full font-medium text-primaryText text-[17px] p-5 border-b hover:border-primary hover:bg-whiteHover hover:text-primary transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="w-full font-medium text-primaryText text-[17px] p-5 border-b hover:border-primary hover:bg-whiteHover hover:text-primary transition-all duration-300"
            >
              About
            </Link>
            <Link
              href={"/"}
              className="w-full font-medium text-primaryText text-[17px] p-5 border-b hover:border-primary hover:bg-whiteHover hover:text-primary transition-all duration-300"
            >
              Services
            </Link>
            <Link
              href={"/"}
              className="w-full font-medium text-primaryText text-[17px] p-5 border-b hover:border-primary hover:bg-whiteHover hover:text-primary transition-all duration-300"
            >
              Contact
            </Link>
            <div className="flex flex-col items-center px-5 w-full mt-[30px]">
              <Button size="lg" label="Login" isGhost styles="w-full hover:text-primary" />
              <Button
                size="lg"
                label="Sign up"
                isNormal
                styles="shadow-custom hover:bg-whiteHover w-full"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
