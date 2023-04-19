import React from "react";
import { styles } from "./styles/styleSheet";

const Hero = () => {
  return (
    <section id="hero">
      <div className="w-full flex justify-center relative py-[150px]">
        <img
          src="/hero/hero.svg"
          className="w-[320px] md:w-[600px] lg:w-[900px]"
        />
        <div className="max-w-[700px] absolute lg:bottom-[5%] bottom-0 left-0 z-5">
          <h1 className="text-white font-black lg:text-7xl md:text-4xl text-xl">
            BORN TO <br />{" "}
            <span className="italic lg:ml-20 md:ml-10 ml-3">CODE</span> <br />{" "}
            RAISED TO <span className="text-primaryGreen">NO</span>
            <span className="text-primaryPurple">CODE</span>
          </h1>
        </div>
      </div>
      <div className="w-full justify-center flex">
        <button
          className={`lg:py-5 lg:px-7 py-3 px-5 bg-primaryGreen rounded-full text-black custom_shadow border-2 border-black flex items-center space-x-3 hover:scale-105 duration-300`}
        >
          <p className="font-bold lg:text-xl text-base">BUILD WITH US</p>
          <img src="/button/block.svg" className="lg:w-10 w-7" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
