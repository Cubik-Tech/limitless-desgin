"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import useWindowDimensions from "@/app/hooks/useWindowDimension";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const { width } = useWindowDimensions();
  const [loading, setLoading] = useState(true);

  const [changeColor, setChangeColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is more than 30vh
      if (window.scrollY > 0.3 * window.innerHeight) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    };

    // Add a scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

  useEffect(() => {
    if (typeof window !== "undefined" && width > 0) {
      setLoading(false);
    }
  }, [window, width]);

  return (
    !loading && (
      <div className="w-full relative py-3 ">
        {width > 768 ? (
          <div
            className={
              "flex items-center justify-center space-x-24 text-[18px] font-semibold  w-max mx-auto px-16 py-3 rounded-full " +
              (changeColor && "bg-black")
            }
          >
            <Link href="/">Home</Link>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center items-center rounded-md  text-white ">
                  <span>Services</span>
                  <img
                    alt=""
                    src={"/images/downarrow.svg"}
                    className="-mr-1 ml-2 h-3 w-3 "
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  style={{ zIndex: 50 }}
                  className="absolute left-0 mt-2 w-max origin-top-right "
                >
                  <div className="flex flex-col space-y-4 mt-2">
                    <Menu.Item>
                      <Link
                        href={"/services/ui-ux"}
                        className={`text-white group flex w-full  hover:text-blue-100  `}
                      >
                        UI/UX Designing
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link
                        href={"/services/graphic"}
                        className={`text-white group flex w-full  hover:text-blue-100  `}
                      >
                        Graphic Designing
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link
                        href={"/services/logo"}
                        className={`text-white group flex w-full  hover:text-blue-100  `}
                      >
                        Logo Designing
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link
                        href={"/services/print"}
                        className={`text-white group flex w-full  hover:text-blue-100  `}
                      >
                        Print Designing
                      </Link>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Link href="/about-us">About us</Link>
            <Link href="/contact-us">Get in Touch</Link>
          </div>
        ) : (
          <MobileHeader />
        )}
      </div>
    )
  );
};

export default Header;
