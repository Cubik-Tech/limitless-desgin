"use client";

import useWindowDimensions from "@/app/hooks/useWindowDimension";
import React from "react";

const HeroSection = ({ heading, tags, children }) => {
  const { width } = useWindowDimensions();

  return (
    <div className="paddingXXs w-full">
      <div className="w-full relative border border-[#fff] rounded-lg pb-12  flex flex-col items-center justify-center space-y-12">
        <div className="relative flex items-center justify-center pt-12 w-full">
          <div className="graylight_heading_backdrop absolute left-1/2 -translate-x-1/2 top-0" />

          <h1 className="services_herotext services_hero_gradient">
            {heading}
          </h1>
        </div>
        <div className="flex max-sm:flex-col max-sm:w-fit sm:items-center justify-center max-sm:space-y-6 sm:space-x-8">
          {tags.map((tag, index) => {
            return (
              <div key={index}>
                {index === 0 && width > 640 ? (
                  <p className="services_tag_gradient_text description_text">
                    {tag}
                  </p>
                ) : (
                  <div className="flex items-center space-x-8">
                    <div className="h-4 w-4 tagcircle_gradient rounded-full" />
                    <p className="services_tag_gradient_text description_text">
                      {tag}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
