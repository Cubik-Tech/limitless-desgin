/* eslint-disable @next/next/no-img-element */
import React from "react";

const ServicesDisplay = ({ heading, image, tags, content, imgclassName }) => {
  return (
    <div className="w-full h-screen paddingX flex flex-col items-center justify-center space-y-20 ">
      <div className="w-11/12  flex items-center justify-center mt-16">
        <div className="flex items-center">
          <div className="flex flex-col items-start w-1/2 space-y-8 my-4">
            <h2 className="gray_gradient_text subHeadingSmText">
              We Offer{" "}
              <span className="gradienttext  subHeadingtext">{heading}</span>
            </h2>
            <div className="description_text font-medium flex flex-col space-y-3">
              {/* Seamless and user-friendly digital experiences.
              <br />
              <br /> Data-driven insights combined with creativity.
              <br />
              <br /> Intuitive interface design for optimal user engagement.{" "}
              <br />
              <br />
              Putting the user at the center of our design process.
              <br />
              <br /> Aim to enhance navigation, engagement, and conversions. */}
              {content.map((cont, index) => {
                return <p key={index}>{cont}</p>;
              })}
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center relative">
            <div className="eclipseback absolute left-1/2 -translate-x-1/2 w-full h-96"></div>
            <img
              style={{ zIndex: 2 }}
              src={image}
              alt=""
              className={imgclassName}
            />
          </div>
        </div>
      </div>
      <div className="w-10/12 flex items-center space-x-12 justify-center paddingX gradient_border py-4 description_text font-bold">
        {tags.map((tag, index) => (
          <span key={index} className="gradienttext">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServicesDisplay;
