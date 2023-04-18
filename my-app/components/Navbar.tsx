"use client";
import React, { useState } from "react";
import { styles } from "./styles/styleSheet";

const Navbar = () => {
  const [nav, useNav] = useState(false);
  const handleClick = () => {
    useNav(!nav);
  };
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Agency",
      href: "/",
    },
    {
      name: "Pricing",
      href: "/",
    },
    {
      name: "Contact",
      href: "/",
    },
  ];
  return (
    <div className=" flex justify-between items-center text-white py-12">
      <div>
        <img src="/navbar/logo.svg" />
      </div>
      <div className="hidden lg:flex items-center space-x-20">
        <p
          className={`${styles.button} text-3xl font-bold hover:scale-105 duration-300`}
        >
          Home
        </p>
        <p className="font-bold text-3xl hover:text-primaryGreen duration-300">
          Agency
        </p>
        <p className="font-bold text-3xl hover:text-primaryGreen duration-300">
          Pricing
        </p>
        <p className="font-bold text-3xl hover:text-primaryGreen duration-300">
          Contact
        </p>
      </div>
      <div className="hidden lg:block">
        <img src="/navbar/moon.svg" />
      </div>
      <div className="lg:hidden">
        <img src="/hamburger.svg" className="w-12 h-12" onClick={handleClick} />
      </div>
      <div
        className={
          nav
            ? `fixed z-10 bg-black/90 top-0 left-0 w-[100%] h-screen flex flex-col justify-center items-center text-3xl space-y-10 font-bold ease-in duration-200`
            : `left-[-100%] z-10 fixed`
        }
      >
        {links.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
        <img
          src="/close.svg"
          alt="close"
          className="w-12"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
