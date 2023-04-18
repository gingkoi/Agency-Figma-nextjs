import React from "react";

const PicRight = ({
  title,
  message,
  img,
  alt,
}: {
  title: string;
  message: string;
  img: string;
  alt: string;
}) => {
  return (
    <div className="grid lg:grid-cols-2 lg:justify-items-end lg:items-center gap-10 lg:gap-0">
      <div className="lg:space-y-10 space-y-5">
        <h3 className="lg:text-7xl md:text-4xl text-3xl font-bold text-center lg:text-left">
          {title}
        </h3>
        <p className="lg:text-xl px-5 lg:px-0 text-justify lg:text-left">
          {message}
        </p>
        <div className="flex justify-center lg:justify-start">
          <button
            className={`lg:py-4 lg:px-7 py-3 px-5 bg-primaryGreen rounded-full text-black custom_shadow border-2 border-black flex items-center space-x-3 hover:scale-105 duration-300`}
          >
            <p className="font-bold lg:text-xl text-base">LEARN MORE</p>
            <img src="/button/block.svg" className="lg:w-10 w-7" />
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center lg:justify-end">
        <img src={`${img}`} />
      </div>
    </div>
  );
};

export default PicRight;
