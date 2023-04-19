"use client";
import React, { useState, useEffect } from "react";
import { styles } from "./styles/styleSheet";
import { Link } from "react-scroll/modules";

const Navbar = () => {
  const [nav, useNav] = useState(false);
  const [color, setColor] = useState("transparent");

  const closeNav = () => {
    useNav(false);
  };
  const handleClick = () => {
    useNav(!nav);
  };
  const links = [
    {
      name: "Home",
      id: "hero",
      offset: 50,
    },
    {
      name: "Agency",
      id: "agency",
      offset: -30,
    },
    {
      name: "Pricing",
      id: "pricing",
      offset: 180,
    },
    {
      name: "Contact",
      id: "contact",
      offset: -50,
    },
  ];

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#000000");
      } else {
        setColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div className="w-screen">
      <div
        style={{
          backgroundColor: `${color}`,
        }}
        className=" flex justify-between items-center text-white py-8 fixed top-0 z-50 w-full lg:px-[200px] px-10 duration-300 ease-in"
      >
        <Link
          to="hero"
          duration={500}
          offset={0}
          smooth={true}
          className="cursor-pointer"
        >
          <img
            src="/navbar/logo.svg"
            className="hover:scale-105 duration-300"
          />
        </Link>
        <div className="hidden lg:flex items-center space-x-20">
          <Link
            className={`${styles.button} text-3xl font-bold hover:scale-105 duration-300 cursor-pointer`}
            to="hero"
            duration={500}
            offset={100}
            smooth={true}
          >
            Home
          </Link>
          <Link
            className="font-bold text-3xl hover:text-primaryGreen duration-300 cursor-pointer"
            to="agency"
            duration={500}
            offset={-30}
            smooth={true}
          >
            Agency
          </Link>
          <Link
            className="font-bold text-3xl hover:text-primaryGreen duration-300 cursor-pointer"
            to="pricing"
            duration={500}
            offset={280}
            smooth={true}
          >
            Pricing
          </Link>
          <Link
            className="font-bold text-3xl hover:text-primaryGreen duration-300 cursor-pointer"
            to="contact"
            duration={500}
            offset={0}
            smooth={true}
          >
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex space-x-5 font-bold text-xl items-center">
          <div>Login</div>
          <div
            className={`lg:py-2 lg:px-7 py-3 px-5 bg-primaryPurple rounded-full text-white custom_shadow2 border-2 border-black flex justify-center space-x-3 hover:scale-105 duration-300 font-bold lg:text-lg text-base`}
          >
            Free Trial
          </div>
        </div>
        <div className="lg:hidden">
          <img
            src="/hamburger.svg"
            className="w-12 h-12"
            onClick={handleClick}
          />
        </div>
        <div
          className={
            nav
              ? `fixed z-10 bg-black/95 top-0 left-0 w-[100%] h-screen flex flex-col justify-center items-center text-3xl space-y-10 font-bold ease-in duration-200`
              : `left-[-100%] z-10 fixed duration-300 ease-in h-screen`
          }
        >
          {links.map((item, index) => (
            <Link
              to={item.id}
              duration={500}
              offset={item.offset}
              smooth={true}
              key={index}
              onClick={closeNav}
            >
              {item.name}
            </Link>
          ))}
          <img
            src="/close.svg"
            alt="close"
            className="w-12"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
