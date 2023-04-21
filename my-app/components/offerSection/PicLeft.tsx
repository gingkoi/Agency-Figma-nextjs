"use client";
import React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PicLeft = ({
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
        className="grid lg:grid-cols-2 lg:justify-items-end lg:items-center gap-10 lg:gap-0"
      >
        <div className="flex w-full justify-center lg:justify-start order-last lg:order-first">
          <img src={`${img}`} alt={alt} />
        </div>
        <div className="lg:space-y-10 space-y-5">
          <h3 className="lg:text-7xl md:text-4xl text-3xl font-bold text-center lg:text-right">
            {title}
          </h3>
          <p className="lg:text-xl px-5 lg:px-0 text-justify lg:text-right">
            {message}
          </p>
          <div className="flex justify-center lg:justify-end">
            <button
              className={`lg:py-4 lg:px-7 py-3 px-5 bg-primaryGreen rounded-full text-black custom_shadow border-2 border-black flex items-center space-x-3 hover:scale-105 duration-300`}
            >
              <p className="font-bold lg:text-xl text-base">LEARN MORE</p>
              <img
                src="/button/block.svg"
                className="lg:w-10 w-7"
                alt="code block"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicLeft;
