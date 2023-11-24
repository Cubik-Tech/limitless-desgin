import React from "react";

export default function Drawer({
  children,
  isOpen,
  setIsOpen,
  direction = "right",
  lg,
  clip = "half",
}) {
  return (
    <main
      className={
        " fixed overflow-hidden  z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : direction === "right"
          ? " transition-all delay-500 opacity-0 translate-x-full  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ") +
        (lg ? " lg:block  " : "lg:hidden ")
      }
      style={{ zIndex: 3000 }}
    >
      <section
        className={
          "  max-w-lg  absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen
            ? " translate-x-0 "
            : direction === "right"
            ? " translate-x-full "
            : " -translate-x-full ") +
          (direction === "right" ? " right-0 " : " left-0 ") +
          (clip === "half" ? " w-3/4 " : " w-3/4 sm:w-full")
        }
      >
        <article className="relative  max-w-lg  pt-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
