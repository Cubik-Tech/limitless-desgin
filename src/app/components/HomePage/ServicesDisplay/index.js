/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

const ServicesDisplay = () => {
  const [heading, setHeading] = useState("UI/UX Design");
  const [image, setImage] = useState("/images/services/ui-ux.png");
  const [tags, setTags] = useState([
    "Web Designing",
    "Mobile Responsive Designing",
    "App Designing",
  ]);
  const [imgclassName, setImgclassName] = useState("w-full");
  const [content, setContent] = useState([
    "Seamless and user-friendly digital experiences.",
    " Data-driven insights combined with creativity. ",
    "Intuitive interface design for optimal user engagement.",
    " Putting the user at the center of our design process.",
    " Aim to enhance navigation, engagement, and conversions.",
  ]);
  const [showClassNames, setShowClassNames] = useState("");
  const [contentIndex, setContentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // You can adjust the scroll threshold as needed
      const scrollThreshold1 = 2.3 * window?.innerHeight;
      const scrollThreshold2 = 3.3 * window?.innerHeight;

      // Get the current scroll position
      const scrollY = window.scrollY || window.pageYOffset;
      const sectionHeight = window?.innerHeight;
      const scrollPercentage = (scrollY / sectionHeight) * 100;

      if (sectionHeight) {
        console.log(scrollPercentage, "percent");
        // Update content based on scroll position
        if (
          (scrollPercentage >= 180 && scrollPercentage < 220) ||
          (scrollPercentage >= 280 && scrollPercentage < 320)
        ) {
          setShowClassNames("slide-up-animation");
        } else {
          setShowClassNames("slide-up-animation active");
        }
      }
      // Update content based on scroll position

      if (scrollPercentage > 320) {
        setHeading("Logo Design");
        setImage("/images/services/logo.png");
        setTags(["Website Logo Design", "Brand Logo Design"]);
        setImgclassName("w-2/3");
        setContent([
          "Craft logos that are powerful brand representations.",
          "Careful research, conceptualization, and execution.",
          "Logo as the unforgettable face of your brand.",
          "Unique and memorable logo designs.",
          "Leave a lasting impression on your audience.",
        ]);
        setContentIndex(2);
      } else if (scrollPercentage > 220) {
        setHeading("Graphic Design");
        setImage("/images/services/graphic.png");
        setTags(["3D and 2D Illustrations", "Artworks"]);
        setImgclassName("w-1/3");
        setContent([
          "Transforming ideas into visually stunning realities.",
          " Crafting marketing materials, social media graphics, and more. ",
          "Creating a visually captivating brand identity.",
          "Conveying your brand's message through compelling visuals.",
          " Making a memorable mark in the visually saturated world.",
        ]);
        setContentIndex(1);
      } else {
        setHeading("UI/UX Design");
        setImage("/images/services/ui-ux.png");
        setTags([
          "Web Designing",
          "Mobile Responsive Designing",
          "App Designing",
        ]);
        setImgclassName("w-full");
        setContent([
          "Seamless and user-friendly digital experiences.",
          " Data-driven insights combined with creativity. ",
          "Intuitive interface design for optimal user engagement.",
          " Putting the user at the center of our design process.",
          " Aim to enhance navigation, engagement, and conversions.",
        ]);
        setContentIndex(0);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  console.log(contentIndex, showClassNames);

  return (
    <div className="w-full h-[400vh] relative paddingX   ">
      <div className="lg:w-11/12 w-full top-0 flex flex-col items-center justify-center sticky sm:h-screen mx-auto max-sm:space-y-12 sm:space-y-20 transition-all duration-500">
        <div className="w-full flex items-center justify-center sm:mt-16">
          <div className="flex max-sm:flex-col items-center max-sm:space-y-6">
            <div className="flex flex-col items-start max-sm:w-full w-7/12 sm:space-y-8 max-sm:space-y-6 my-4">
              <h2 className="gray_gradient_text subHeadingSmText">
                We Offer{" "}
                <span
                  className={
                    "gradienttext  subHeadingtext transition-all duration-500 " +
                    showClassNames
                  }
                >
                  {heading}
                </span>
              </h2>
              <div className="description_text font-medium flex flex-col sm:space-y-3 max-sm:space-y-2">
                {content.map((cont, index) => {
                  return (
                    <p key={index} className={showClassNames}>
                      {cont}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-5/12 max-sm:w-full flex items-center justify-center relative">
              <div className="eclipseback absolute left-1/2 -translate-x-1/2 w-full h-96"></div>
              <img
                style={{ zIndex: 2 }}
                src={image}
                alt=""
                className={`${imgclassName}  ${showClassNames}`}
              />
            </div>
          </div>
        </div>
        <div className="w-10/12 max-sm:w-full max-sm:flex-col flex items-center max-sm:space-y-4  sm:space-x-12 justify-center sm:paddingX max-sm:px-3 gradient_border sm:rounded-full max-sm:rounded-xl max-sm:py-10 py-3 description_text font-bold">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={"gradienttext text-center " + showClassNames}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDisplay;
