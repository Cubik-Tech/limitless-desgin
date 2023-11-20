/* eslint-disable @next/next/no-img-element */
import React from "react";

const KeyPoints = ({ image }) => {
  return (
    <div className="paddingX w-full py-12">
      <div className="w-full relative   flex  items-center justify-center ">
        <div className="w-full">
          <img alt="keypoint_image" src={image} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default KeyPoints;
