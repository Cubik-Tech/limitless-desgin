/* eslint-disable @next/next/no-img-element */
import React from "react";

const FeaturesSection = ({ tiles, image }) => {
  return (
    <div className="paddingX w-full">
      <div className="flex items-start space-x-6">
        <div className="w-1/2 grid grid-cols-2 gap-20">
          {tiles.map((tile, index) => {
            return (
              <div key={index} className="w-full flex flex-col space-y-3">
                <div className="flex items-center space-x-1">
                  <img
                    className="w-12 aspect-square"
                    alt="tile_image"
                    src={tile.image}
                  />
                  <h3 className="description_text font-bold ">
                    {tile.heading}
                  </h3>
                </div>
                <p className="w-full font-light">{tile.description}</p>
              </div>
            );
          })}
        </div>
        <div className="w-1/2 flex justify-end relative">
          <div className="eclipseback absolute right-0 w-7/12 h-96"></div>

          <img
            alt="Featured image"
            style={{ zIndex: 2 }}
            src={image}
            className="w-7/12"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
