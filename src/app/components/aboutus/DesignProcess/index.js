/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { ProcessData } from "./processData";
import useWindowDimensions from "@/app/hooks/useWindowDimension";

const DesignProcess = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="w-full">
      <div className="w-full mx-auto paddingX flex flex-col space-y-16">
        <h2 className="subHeadingSmText text-center aboutus_gradient_text ">
          Design Process
        </h2>
        <div className="flex max-sm:flex-col flex-wrap w-full">
          {ProcessData.map((process, index) => {
            return (
              <div
                className="sm:basis-1/4 max-sm:basis-full sm:pb-28 max-sm:pb-16 flex items-center "
                key={index}
              >
                {width > 640 && (
                  <div className="w-1 h-4 aboutus_card_gradient" />
                )}{" "}
                <div className="flex flex-col items-start grow sm:px-8 space-y-8">
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
