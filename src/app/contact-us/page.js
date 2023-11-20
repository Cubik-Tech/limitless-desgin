/* eslint-disable @next/next/no-img-element */
import React from "react";

const InputCombo = ({ name, placeholder, handleChange, value }) => {
  return (
    <div className="flex flex-col space-y-4">
      <label for={name} className="capitalize description_text px-2">
        {name}
      </label>
      <input
        placeholder={placeholder}
        className="outline-none border-b-2 border-[#787878] bg-transparent py-2 px-2 focus:border-blue-50"
      />
    </div>
  );
};

const InfoTab = ({ icon, info }) => {
  return (
    <div className="flex items-center space-x-2">
      <img alt="" className="h-5 w-5" src={icon} />
      <a href="/">{info}</a>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full relative flex">
        <div className="w-1/2 h-full">
          <img
            className="w-full h-full"
            alt="contact cover"
            src="/images/contact.png"
          />
        </div>
        <div className="w-1/2 pt-24 pb-10 px-16 flex flex-col justify-between h-full">
          <div className="flex flex-col w-10/12 pb-12 space-y-8 grow justify-between relative">
            <h1 className="subHeadingxsText">Hi, have a project in mind?</h1>
            <InputCombo name={"name"} placeholder={"Type here"} />
            <InputCombo name={"email"} placeholder={"abc@gmail.com"} />
            <InputCombo
              name={"title/Idea"}
              placeholder={"e. g. ecommerce website design "}
            />
            <div className="flex flex-col space-y-4">
              <label for={"Brief"} className="capitalize description_text px-2">
                Brief Details
              </label>
              <textarea
                rows={4}
                placeholder={"give a brief about the work"}
                className="outline-none border-b-2 border-[#787878] bg-transparent py-2 px-2 focus:border-blue-50"
              />
            </div>
            <button className="relative mx-auto w-max items-center justify-start inline-block px-7 py-3 overflow-hidden font-bold rounded-full group">
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative  w-full  text-white font-semibold transition-colors duration-200 ease-in-out group-hover:text-gray-800">
                Submit
              </span>
              <span className="absolute inset-0 border-2 border-gray-500 rounded-full"></span>
            </button>
          </div>
          <div className="w-full flex items-center justify-between">
            <InfoTab icon={"/images/location.svg"} info={"New Delhi, India"} />
            <InfoTab
              icon={"/images/email.svg"}
              info={"contact@cubiktech.com"}
            />
            <InfoTab icon={"/images/phone.svg"} info={"+911234567890"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
