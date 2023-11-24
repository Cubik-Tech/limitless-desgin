/* eslint-disable @next/next/no-img-element */
import React from "react";

const ReasonComponent = ({ heading, content }) => {
  return (
    <div className="flex items-start space-x-3 sm:w-[500px] mx-5">
      <div className="w-16">
        <img alt="logo" className="w-full" src="/images/logo/small.png" />
      </div>
      <div className="flex flex-col space-y-1 sf-fro-font">
        <h3 className="gradienttext text-[24px] font-bold ">{heading}</h3>
        <p className="description_text font-medium">{content}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="w-full sm:h-screen paddingXSm flex flex-col items-center justify-center">
      <div className="flex max-sm:flex-col max-sm:space-y-6  w-full relative sm:space-x-12">
        <div className="relative w-full flex flex-col items-end space-y-16  py-4">
          <ReasonComponent
            heading={"On-Time Guarantee"}
            content={
              "We are committed to delivering your designs on or before the promised deadline."
            }
          />
          <p className="max-sm:hidden light_gray_gradient_text font-bold text-[80px] py-3 tracking-wide">
            Lightning Fast
          </p>
          <ReasonComponent
            heading={"Swift Revisions"}
            content={
              "Require modifications? We swiftly implement changes to ensure your projects stay on course, no delays."
            }
          />
        </div>
        <div className="w-[600px] relative max-sm:hidden">
          <div
            style={{ zIndex: 10 }}
            className="w-full relative flex group items-center justify-center p-1 cursor-pointer"
          >
            <img src="/images/bolt.png" alt="" className="w-full h-full" />
            <img
              src="/images/bolteffect.png"
              alt=""
              className="w-full h-full absolute top-0 left-0 hidden group-hover:block"
            />
          </div>
        </div>
        <div className="relative w-full flex flex-col items-start space-y-16 py-4 ">
          <ReasonComponent
            heading={"Rapid Turnaround"}
            content={
              "We prioritize speed without sacrificing quality, delivering your designs in record time."
            }
          />
          <p className="max-sm:hidden light_gray_gradient_text font-bold text-[80px] py-3 tracking-wide">
            Design Delivery
          </p>
          <ReasonComponent
            heading={"Streamlined Process"}
            content={
              "Our efficient workflow ensures your projects move swiftly from concept to completion."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
