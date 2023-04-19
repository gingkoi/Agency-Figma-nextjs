import React from "react";
import TestimonialCard from "./testimonialSection/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Olivia Rhye",
      email: "olivia@untitledui.com",
      message:
        "My favourite part was seeing how quickly they could bring our ideas to life. I would throw out some random ideas on a Friday and a few days later we’d have something out in the world and used by our users, which was really awesome and gratifying.",
      avatar: "/avatar/avatar1_small.svg",
      altAvater: "Avatar",
      picture: "/avatar/avatar1_big.svg",
      altPicture: "Olivia Rhye",
    },
    {
      name: "Micheal Davidson",
      email: "CEO at Riverdog Daycare",
      message:
        "I’ve worked on a variety of software products in the past and there’s always a huge translation between the person making the product and those using the product. Minimum has been really great at getting into our shoes and helping us figure out what was going to work.",
      avatar: "/avatar/avatar2_small.png",
      altAvater: "Avatar",
      picture: "/avatar/avatar2_big.png",
      altPicture: "Micheal Davidson",
    },
    {
      name: "Maria James",
      email: "Founder at 1V.GG",
      message:
        "Out of any of the no-code agencies that we chatted with, Minimum was the only one that was really innovative and pushed the boundaries of what’s possible within the platforms.",
      avatar: "/avatar/avatar3_small.png",
      altAvater: "Avatar",
      picture: "/avatar/avatar3_big.png",
      altPicture: "Maria James",
    },
  ];
  return (
    <section id="testimonials">
      <div className="text-white py-20">
        <div className="bg-white h-1 absolute left-0 right-0" />
        <h2 className="text-center my-16 lg:text-7xl text-4xl font-black italic">
          TESTIMONIALS
        </h2>
        <div className="space-y-10">
          {testimonials.map((item, index) => (
            <TestimonialCard
              name={item.name}
              email={item.email}
              message={item.message}
              avatar={item.avatar}
              avatarAlt={item.altAvater}
              picture={item.picture}
              pictureAlt={item.altPicture}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
