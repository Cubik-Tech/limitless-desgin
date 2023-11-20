/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const Header = () => {
  return (
    <div className="w-full relative py-3">
      <div className="flex items-center justify-center space-x-24 text-[18px] font-semibold">
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
                  <button
                    className={`text-white group flex w-full  hover:text-blue-100  `}
                  >
                    UI/UX Designing
                  </button>
                </Menu.Item>

                <Menu.Item>
                  <button
                    className={`text-white group flex w-full  hover:text-blue-100  `}
                  >
                    Graphic Designing
                  </button>
                </Menu.Item>

                <Menu.Item>
                  <button
                    className={`text-white group flex w-full  hover:text-blue-100  `}
                  >
                    Logo Designing
                  </button>
                </Menu.Item>

                <Menu.Item>
                  <button
                    className={`text-white group flex w-full  hover:text-blue-100  `}
                  >
                    Print Designing
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <Link href="/about-us">About us</Link>
        <Link href="/contact-us">Get in Touch</Link>
      </div>
    </div>
  );
};

export default Header;
