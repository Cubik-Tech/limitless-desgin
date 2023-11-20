/* eslint-disable @next/next/no-img-element */
import React from "react";
import GetStartedCTA from "../../CTAs/GetStartedCTA";

const ExcellenceSection = () => {
  return (
    <div className="w-full h-screen paddingX flex flex-col items-center justify-center">
      <div className="flex items-center w-full relative ">
        <div className="w-1/2 relative">
          <img
            alt="Excellence"
            src="/images/excellence.png"
            className="w-10/12"
          />
        </div>
        <div className="w-1/2 px-6 space-y-8 flex flex-col">
          <div className=" space-y-4 flex flex-col">
            <h3 className="subHeadingxsText">Design Excellence Empowers</h3>
            <h2 className="gray_gradient_text subHeadingtext">
              Product Success
            </h2>
          </div>
          <p className="description_text font-medium w-10/12 ">
            {`  At Limitless Design, our unwavering commitment to design excellence
            fuels your product's success. With creativity and precision, we
            empower your products to stand out, ensuring they achieve limitless
            potential and prosperity.`}
          </p>
          {/* <button className="gradient_border w-max px-8 py-3 !mt-12">
            Get Started
          </button> */}
          <GetStartedCTA />
        </div>
      </div>
    </div>
  );
};

export default ExcellenceSection;
