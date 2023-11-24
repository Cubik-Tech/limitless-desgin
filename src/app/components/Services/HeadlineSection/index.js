import React from "react";

const HeadlineSection = ({ heading, description }) => {
  return (
    <div className="paddingX w-full">
      <div className="sm:w-1/2 w-full flex flex-col items-start space-y-6">
        <h2 className="subHeadingSmText headline_gradient_text">{heading}</h2>
        <p className="description_text">{description}</p>
      </div>
    </div>
  );
};

export default HeadlineSection;
