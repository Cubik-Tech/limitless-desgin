/* eslint-disable @next/next/no-img-element */
import React from "react";

const OurMission = () => {
  return (
    <div className="w-full">
      <div className="w-full mx-auto paddingX flex flex-col sm:space-y-16 max-sm:space-y-12">
        <h2 className="subHeadingSmText text-center aboutus_gradient_text ">
          Our Mission
        </h2>
        <div className="w-full flex max-sm:flex-col-reverse justify-between  sm:space-x-6">
          <div className="sm:w-2/3 max-sm:w-full flex flex-col sm:space-y-12 max-sm:space-y-8">
            <h3 className="subHeadingxsText aboutus_gradient_text sm:w-2/3 max-sm:w-full max-sm:text-center">
              Empowering businesses through innovative design solutions.
            </h3>
            <p className="description_text sm:w-11/12 max-sm:w-full max-sm:text-center">
              {` At the heart of our mission is a commitment to helping our clients
              stand out in a crowded digital landscape. We strive to create
              designs that not only look beautiful but also drive results.
              Bridging the realms of creativity and strategy, we see each
              project as a collaboration, weaving your insights into the fabric
              of our designs. Our commitment extends beyond aesthetics; it's
              about pushing the boundaries of innovation to make a meaningful
              impact`}
            </p>
          </div>
          <div className="sm:w-1/4 max-sm:w-1/2 max-sm:mx-auto max-sm:mb-6">
            <img
              src="/images/aboutus-keynote.png"
              alt="our mission illustration"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
