/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Drawer from "./Drawer";
import Link from "next/link";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" flex items-center w-full px-3 justify-end  relative">
      <button onClick={() => setIsOpen(true)}>
        <img
          src="/images/menu.png"
          className="!h-6 !w-6  !aspect-square"
          alt="menu icon"
        />
      </button>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col divide-y text-black items-center justify-center h-full">
          <Link href="/" className="w-full py-4 text-center">
            Home
          </Link>
          <Link href="/about-us" className="w-full py-4 text-center">
            About us
          </Link>
          <Link href="/contact-us" className="w-full py-4 text-center">
            Get in Touch
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileHeader;
