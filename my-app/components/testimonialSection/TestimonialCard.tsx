"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

const TestimonialCard = ({
  name,
  email,
  message,
  avatar,
  avatarAlt,
  picture,
  pictureAlt,
}: {
  name: string;
  email: string;
  message: string;
  avatar: string;
  avatarAlt: string;
  picture: string;
  pictureAlt: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="grid lg:grid-cols-2 border border-white rounded-3xl"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
    >
      <div className="lg:p-16 p-5 space-y-5">
        <div className="flex items-center space-x-5">
          <img
            src={`${avatar}`}
            alt={avatarAlt}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <p className="text-2xl font-bold">{name}</p>
            <p className="text-primaryGreen">{email}</p>
          </div>
        </div>
        <p className="text-xl text-justify lg:text-left">{message}</p>
      </div>
      <div className="md:rounded-3xl w-full">
        <img
          src={`${picture}`}
          alt={pictureAlt}
          className="lg:rounded-3xl rounded-b-3xl w-full"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
