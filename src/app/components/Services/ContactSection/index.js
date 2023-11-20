/* eslint-disable @next/next/no-img-element */
import React from "react";

const description = `At Limitless Design, we're dedicated to your success. Our client-centric approach means we listen, collaborate, and create to bring your vision to life. Let's make your project a standout success!"`;

const ContactSection = ({
  headstart = "Lets create something ",
  subheading = "Extraordinary Together",
  content = description,
}) => {
  return (
    <div className="paddingX w-full">
      <div className="flex items-start w-11/12 mx-auto space-x-6">
        <div className="w-1/2">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-2">
              <h4 className="subHeadingxsText">{headstart}</h4>
              <h3 className="subHeadingtext headline_gradient_text">
                {subheading}
              </h3>
            </div>
            <p className="text-2xl pr-10">{content}</p>
            <button className="relative !mt-16 w-max items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative font-bold text-xl w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-800">
                Get in Touch
              </span>
              <span className="absolute inset-0 border-2 border-gray-500 rounded-full"></span>
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end relative">
          <img
            alt="Contact Abstract"
            style={{ zIndex: 2 }}
            src={"/images/services/contact.svg"}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
