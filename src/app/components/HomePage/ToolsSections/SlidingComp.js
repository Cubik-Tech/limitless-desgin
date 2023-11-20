/* eslint-disable @next/next/no-img-element */
import React from "react";

const SlidingComp = ({ images }) => {
  return (
    <div className="carousel-container ">
      <div
        className="absolute inset-y-0 left-0 -translate-x-1/4 w-36 rounded-full bg-black blur-xl bg-opacity-75"
        style={{ zIndex: 2 }}
      ></div>
      <div
        style={{ zIndex: 2 }}
        className="absolute inset-y-0 right-0 w-36 translate-x-1/4 rounded-full bg-black blur-xl bg-opacity-75"
      ></div>
      <div className="carousel-track ">
        {images.map((image, i) => {
          return (
            <div key={i} className="carousel-card">
              <img className="w-[80px] aspect-square " alt="" src={image} />
            </div>
          );
        })}
        {images.map((image, i) => {
          return (
            <div key={i} className="carousel-card">
              <img className="w-[80px] aspect-square " alt="" src={image} />
            </div>
          );
        })}
        {/* <div className="carousel-card">
          <img
            className="w-[80px] aspect-square "
            alt=""
            src="/images/ourtools/canva.png"
          />
        </div>
        <div className="carousel-card">
          <img
            className="w-[80px] aspect-square "
            alt=""
            src="/images/ourtools/figma.png"
          />
        </div>{" "}
        <div className="carousel-card">
          <img
            className="w-[80px] aspect-square "
            alt=""
            src="/images/ourtools/sketch.png"
          />
        </div>{" "}
        <div className="carousel-card">
          <img
            className="w-[80px] aspect-square "
            alt=""
            src="/images/ourtools/xd.png"
          />
        </div>{" "}
        <div className="carousel-card">
          <img
            className="w-[80px] aspect-square "
            alt=""
            src="/images/ourtools/canva.png"
          />
        </div>
        <div className="carousel-card">
          <img
            className="w-[80px] aspect-square "
            alt=""
            src="/images/ourtools/figma.png"
          />
        </div>{" "}
        <div className="carousel-card">
          <img
            className="w-[80px] aspect-square "
            alt=""
            src="/images/ourtools/sketch.png"
          />
        </div>{" "}
        <div className="carousel-card">
          <img
            className="w-[80px] aspect-square "
            alt=""
            src="/images/ourtools/xd.png"
          />
        </div> */}
      </div>
      {/* <div class="slidingFrame2 flex flex-nowrap items-center space-x-8 w-full">
        <img
          className="w-1/4 aspect-square "
          alt=""
          src="/images/ourtools/canva.png"
        />
        <img
          className="w-1/4 aspect-square "
          alt=""
          src="/images/ourtools/figma.png"
        />
        <img
          className="w-1/4 aspect-square "
          alt=""
          src="/images/ourtools/sketch.png"
        />
        <img
          className="w-1/4 aspect-square "
          alt=""
          src="/images/ourtools/xd.png"
        />
      </div>{" "} */}
    </div>
  );
};

export default SlidingComp;
