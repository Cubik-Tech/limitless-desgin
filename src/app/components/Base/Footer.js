/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-40 paddingX">
      <div id="blob"></div>
      <div id="blob-blur"></div>
      <div className="flex items-center w-10/12 mx-auto flex-col space-y-12">
        <div className="w-full relative flex items-center">
          <div className="eclipseback absolute left-1/2 -translate-x-1/2 w-1/2 h-[500px] !rounded-full"></div>
          <img
            style={{ zIndex: 2 }}
            src="/images/footertext.png"
            className="w-full "
            alt="Footer brand image "
          />
        </div>

        <div className="w-full flex items-center justify-end">
          <p className="description_text">Address: Delhi, India</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
