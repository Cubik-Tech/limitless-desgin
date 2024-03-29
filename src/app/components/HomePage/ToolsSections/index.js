import React from "react";
import SlidingComp from "./SlidingComp";

const ToolsDisplay = () => {
  return (
    <div className="w-full h-screen paddingX flex flex-col items-center justify-center ">
      <div className="flex max-md:flex-col items-center max-md:space-y-6 w-11/12 relative">
        <div className="w-1/2 max-md:w-full space-y-8 flex flex-col">
          <div className=" space-y-4 flex flex-col">
            <h2 className="gradienttext subHeadingtext">Cutting Edge Design</h2>
            <h3 className="gradienttext subHeadingxsText">
              Tools used in your Product
            </h3>
          </div>
          <p className="description_text font-medium w-10/12">
            {`Limitless Design turn your design dreams into reality. Our passion
            is your brand's success, and we believe in creating design that
            captivates and inspires. Time is of the essence, and your brand's
            visual identity is a key player in the journey to success.`}
          </p>
        </div>
        <div className="w-1/2 max-md:w-full relative flex flex-col items-center ml-auto space-y-10">
          <div className="w-10/12 max-sm:w-full max-sm:h-20 h-32 overflow-hidden relative">
            <SlidingComp
              images={[
                "/images/ourtools/canva.png",
                "/images/ourtools/figma.png",
                "/images/ourtools/sketch.png",
                "/images/ourtools/xd.png",
              ]}
            />
          </div>
          <div className="w-8/12 max-sm:w-11/12 max-sm:h-20 h-32  ">
            <SlidingComp
              images={[
                "/images/ourtools/behance.png",
                "/images/ourtools/in.png",
                "/images/ourtools/uxpin.png",
              ]}
            />
          </div>
          <div className="w-10/12 max-sm:w-full  h-32  max-sm:h-20">
            <SlidingComp
              images={[
                "/images/ourtools/acro.png",
                "/images/ourtools/blueplat.png",
                "/images/ourtools/photoshop.png",
                "/images/ourtools/illustrator.png",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsDisplay;
