import React from "react";
import PicRight from "./offerSection/PicRight";
import PicLeft from "./offerSection/PicLeft";

const Offers = () => {
  const items = [
    {
      title: "Pair programming on gather town",
      message:
        "Pair programming on gather town is a great way to collaborate with team members or learn from a peer. With Gather Town's customizable virtual environments, you can create a collaborative coding space and share your screen with your partner. This allows you to work together on the same codebase in real-time, which can improve code quality, reduce errors, and increase productivity",
      image: "/offer/coding.svg",
      alt: "Coding",
    },
    {
      title: "Performance and Security Fix",
      message:
        "Maintaining website performance and security is critical for any business, even those that operate mainly through a no-code website. Without proper optimization and security measures, your website can become sluggish and vulnerable to cyber-attacks and breaches.",
      image: "/offer/robot.svg",
      alt: "Robot",
    },
    {
      title: "Advanced Concept of Bubble",
      message:
        "Bubble is a no-code platform that allows users to create complex web applications and websites. With its advanced visual programming environment. Bubble offers an intuitive drag-and-drop interface that helps users build robust web applications without the need for prior coding knowledge. Bubble incorporates features like data structures, custom events, workflows and integrations with 3rd-party software, and more to help users develop impressive web applications",
      image: "/offer/dashboard.svg",
      alt: "Dashboard",
    },
    {
      title: "End to End testing",
      message:
        "End-to-End (E2E) testing is an essential part of website development as it ensures that the website works as expected from the user's perspective. With the rise of no-code platforms, E2E testing has also become accessible to non-technical users. No code E2E testing tools allow users to create and run automated tests without writing a single line of code.",
      image: "/offer/user.svg",
      alt: "User",
    },
  ];
  return (
    <section id="agency">
      <div className="text-white py-10">
        <div className="bg-white h-1 absolute left-0 right-0" />
        <h2 className="text-center my-16 text-7xl font-black italic">OFFERS</h2>
        <div className="space-y-10">
          <PicRight
            title={items[0].title}
            message={items[0].message}
            img={items[0].image}
            alt={items[0].alt}
          />
          <PicLeft
            title={items[1].title}
            message={items[1].message}
            img={items[1].image}
            alt={items[1].alt}
          />
          <PicRight
            title={items[2].title}
            message={items[2].message}
            img={items[2].image}
            alt={items[2].alt}
          />
          <PicLeft
            title={items[3].title}
            message={items[3].message}
            img={items[3].image}
            alt={items[3].alt}
          />
        </div>
        <div className="flex justify-center mt-20">
          <img src="/banner.svg" alt="Banner" />
        </div>
      </div>
    </section>
  );
};

export default Offers;
