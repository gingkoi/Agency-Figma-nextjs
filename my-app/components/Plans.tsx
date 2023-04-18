import React from "react";
import GreenCard from "./plans/GreenCard";
import PurpleCard from "./plans/PurpleCard";

const Plans = () => {
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
    <section>
      <div className="text-white py-20">
        <div className="bg-white h-1 absolute left-0 right-0" />
        <h3 className="text-center my-16 lg:text-7xl text-4xl font-black italic">
          PRICING PLANS
        </h3>
        <div className="border-2 border-white rounded-3xl p-5 py-20">
          <div className="text-center mb-10 space-y-5">
            <h4 className="lg:text-5xl text-3xl font-semibold">
              Plans for all sizes
            </h4>
            <p className="lg:text-xl">
              Simple, transparent pricing that grows with you. Try any plan free
              for 30 days.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 mx-2">
            <GreenCard
              plan={plans[0].plan}
              price={plans[0].price}
              features={plans[0].features}
            />
            <PurpleCard
              plan={plans[1].plan}
              price={plans[1].price}
              features={plans[1].features}
            />
            <GreenCard
              plan={plans[2].plan}
              price={plans[2].price}
              features={plans[2].features}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
