/* eslint-disable @next/next/no-img-element */
"use client";
import useWindowDimensions from "@/app/hooks/useWindowDimension";
import React from "react";

const HeroSection = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="w-full h-full sm:py-48 max-sm:py-12 relative overflow-hidden flex items-center">
      {width > 640 && (
        <img
          className="w-full h-full absolute top-0 left-0 bottom-0 right-0"
          alt="About Us Hero"
          src="/images/about-us.png"
        />
      )}
      <div
        style={{ zIndex: 2 }}
        className="sm:w-[80%] max-sm:w-full mx-auto h-full flex flex-col justify-center items-center paddingX space-y-12"
      >
        <h1 className="text-center services_herotext">
          Supporting companies with the best tools
        </h1>
        <p className="text-center sm:text-[24px] max-sm:text-[18px] font-medium">
          At Limitless Design, we believe in the power of design to transform
          ideas into impactful experiences. Our dedicated team of passionate
          designers is here to bring your vision to life, combining creativity
          with strategic thinking.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
