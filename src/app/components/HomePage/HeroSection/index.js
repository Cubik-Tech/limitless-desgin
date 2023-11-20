/* eslint-disable @next/next/no-img-element */
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center  relative">
      <img
        style={{ zIndex: 10 }}
        src="/images/Background.png"
        alt=""
        className="h-full w-full absolute left-0 bottom-0"
      />

      <img
        style={{ zIndex: 30 }}
        src="/images/Hills.png"
        alt=""
        className="h-full w-full absolute left-0 top-0"
      />
      <img
        style={{ zIndex: 35 }}
        src="/images/Overlay.png"
        alt=""
        className="h-full w-full absolute left-0 top-0 mix-blend-soft-light	"
      />
      <div style={{ zIndex: 25 }}>
        <h1 className="gradienttext herotext -translate-y-40">
          Limitless Design
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
