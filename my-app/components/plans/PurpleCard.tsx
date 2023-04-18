import React from "react";

const PurpleCard = ({
  plan,
  price,
  features,
}: {
  plan: string;
  price: number;
  features: any;
}) => {
  return (
    <div className="border-2 border-white rounded-3xl p-12">
      <div className="flex flex-col justify-center items-center space-y-5">
        <img src="/plans/purpleThunder.svg" alt="" />
        <p className="text-primaryPurple font-bold text-3xl text-center">
          {plan}
        </p>
        <p className="text-5xl font-bold">${`${price}`}/mth</p>
        <p className="text-primaryPurple">Billed annually.</p>
      </div>
      <div className="my-6 space-y-2">
        {features.map((item: string, index: number) => (
          <div className="flex items-center space-x-2" key={index}>
            <img src="/plans/purpleTick.svg" alt="PurpleTick" />
            <p className="text-lg">{item}</p>
          </div>
        ))}
      </div>
      <div>
        <div
          className={`lg:py-2 lg:px-7 py-3 px-5 bg-primaryPurple rounded-full text-white custom_shadow2 border-2 border-black flex justify-center space-x-3 hover:scale-105 duration-300 font-bold lg:text-lg text-base`}
        >
          Get Started
        </div>
      </div>
    </div>
  );
};

export default PurpleCard;
