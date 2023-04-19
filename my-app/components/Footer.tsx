import React from "react";

const Footer = () => {
  return (
    <section id="contact">
      <div className="text-white bg-black">
        <div className="bg-white h-1 absolute left-0 right-0" />
        <div className="lg:max-w-[1400px] w-screen px-5 lg:mx-auto">
          <div className="grid lg:grid-cols-2 py-20">
            <div>
              <div className="space-y-10">
                <h5 className="text-6xl font-medium lg:text-left text-center">
                  Connect with us
                </h5>
                <p className="text-xl lg:text-left text-center">
                  We’d love to hear from you. Please fill out this form or shoot
                  us an email.
                </p>
              </div>
              <div className="grid md:grid-cols-2 my-10 gap-12">
                <div className="space-y-3">
                  <img src="/footer/mail.svg" alt="mail icon" />
                  <p className="font-medium text-2xl">Email</p>
                  <p className="text-lg">Our friendly team is here to help.</p>
                  <p className="font-bold text-primaryPurple cursor-pointer">
                    <p>hi@untitledui.com</p>
                  </p>
                </div>
                <div className="space-y-3">
                  <img src="/footer/message.svg" alt="Message icon" />
                  <p className="font-medium text-2xl">Book a session</p>
                  <p className="text-lg">Book a session with calendly</p>
                  <p className="font-bold text-primaryGreen cursor-pointer">
                    <p className="hover:underline">Book now</p>
                  </p>
                </div>
                <div className="space-y-3">
                  <img src="/footer/location.svg" alt="Location icon" />
                  <p className="font-medium text-2xl">Office</p>
                  <p className="text-lg">Come say hello at our office HQ.</p>
                  <div className="font-bold text-primaryGreen cursor-pointer">
                    <p>100 Smith Street Collingwood VIC 3066 AU</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <img src="/footer/phone.svg" alt="Phone icon" />
                  <p className="font-medium text-2xl">Phone</p>
                  <p className="text-lg">Mon-Fri from 8am to 5pm.</p>
                  <div className="font-bold text-primaryPurple cursor-pointer">
                    <p>+1 (555) 000-0000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end md:justify-center">
              <img src="/footer/calender.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
