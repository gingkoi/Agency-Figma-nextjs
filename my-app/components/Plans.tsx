"use client";
import React, { useState } from "react";
import GreenCard from "./plans/GreenCard";
import PurpleCard from "./plans/PurpleCard";

const Plans = () => {
  const [toggle, setToggle] = useState(false);
  const toggleClass = " transform translate-x-5";
  const handleClick = () => {
    setToggle(!toggle);
  };
  const plans = [
    {
      plan: "Basic Plan",
      price: 10,
      features: [
        "Access to all basic features",
        "Basic reporting and analytics",
        "Up to 10 individual users",
        "20GB individual data each user",
        "Basic chat and email support",
      ],
    },
    {
      plan: "Business Plan",
      price: 20,
      features: [
        "200+ integrations",
        "Advance reporting and analytics",
        "Up to 20 individual users",
        "40GB individual data each user",
        "Priority chat and email support",
      ],
    },
    {
      plan: "Enterprise Plan",
      price: 40,
      features: [
        "Advanced custom fields",
        "Advanced custom fields",
        "Unlimited individual users",
        "Unlimited individual users",
        "Personalised+priority service",
      ],
    },
  ];
  return (
    <section id="pricing">
      <div className="text-white py-20">
        <div className="bg-white h-1 absolute left-0 right-0" />
        <h3 className="text-center my-16 lg:text-7xl text-4xl font-black italic">
          PRICING PLANS
        </h3>
        <div className="border-2 border-white rounded-3xl p-5 py-20">
          <div className="text-center mb-10 space-y-7">
            <h4 className="lg:text-5xl text-3xl font-semibold">
              Plans for all sizes
            </h4>
            <p className="lg:text-xl">
              Simple, transparent pricing that grows with you. Try any plan free
              for 30 days.
            </p>
            <div className="flex items-center space-x-4 justify-center">
              <div>
                <div
                  className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-primaryPurple rounded-full p-1 cursor-pointer"
                  onClick={handleClick}
                >
                  {/* Switch */}
                  <div
                    className={
                      "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                      (toggle ? toggleClass : null)
                    }
                  />
                </div>
              </div>
              <p>Annual pricing (save 20%)</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 mx-2">
            <GreenCard
              plan={plans[0].plan}
              price={toggle ? plans[0].price : 12}
              features={plans[0].features}
              toggle={toggle}
            />
            <PurpleCard
              plan={plans[1].plan}
              price={toggle ? plans[1].price : 24}
              features={plans[1].features}
              toggle={toggle}
            />
            <GreenCard
              plan={plans[2].plan}
              price={toggle ? plans[2].price : 48}
              features={plans[2].features}
              toggle={toggle}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
