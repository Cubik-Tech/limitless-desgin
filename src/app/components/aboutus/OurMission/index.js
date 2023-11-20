/* eslint-disable @next/next/no-img-element */
import React from "react";

const OurMission = () => {
  return (
    <div className="w-full">
      <div className="w-full mx-auto paddingX flex flex-col space-y-16">
        <h2 className="subHeadingSmText text-center aboutus_gradient_text ">
          Our Mission
        </h2>
        <div className="w-full flex justify-between space-x-6">
          <div className="w-2/3 flex flex-col space-y-12">
            <h3 className="subHeadingxsText aboutus_gradient_text w-2/3">
              Empowering businesses through innovative design solutions.
            </h3>
            <p className="description_text w-11/12">
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
          <div className="w-1/4">
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
