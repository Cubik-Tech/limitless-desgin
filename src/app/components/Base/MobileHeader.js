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
        <div className="flex flex-col divide-y">
          <Link href="/">Home</Link>
          <Link href="/about-us">About us</Link>
          <Link href="/contact-us">Get in Touch</Link>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileHeader;
