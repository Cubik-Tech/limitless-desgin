/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ProcessData } from "./processData";

const DesignProcess = () => {
  return (
    <div className="w-full">
      <div className="w-full mx-auto paddingX flex flex-col space-y-16">
        <h2 className="subHeadingSmText text-center aboutus_gradient_text ">
          Design Process
        </h2>
        <div className="flex flex-wrap w-full">
          {ProcessData.map((process, index) => {
            return (
              <div className="basis-1/4 pb-28 flex items-center " key={index}>
                <div className="w-1 h-4 aboutus_card_gradient" />
                <div className="flex flex-col items-start grow px-8 space-y-8">
                  <img
                    className="w-11 h-11"
                    alt="card_icon"
                    src={process.image}
                  />
                  <div className="flex flex-col space-y-4">
                    <h4 className="text-base font-bold color-[#F4F0FF]">
                      {process.heading}
                    </h4>
                    <p className="text-base font-normal">{process.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DesignProcess;
