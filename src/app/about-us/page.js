import React from "react";
import HeroSection from "../components/aboutus/HeroSection/Hero";
import OurMission from "../components/aboutus/OurMission";
import DesignProcess from "../components/aboutus/DesignProcess";
import ContactSection from "../components/Services/ContactSection";

const AboutUsPage = () => {
  return (
    <div className="w-full flex flex-col space-y-40">
      <HeroSection />
      <OurMission />
      <DesignProcess />
      <ContactSection />
    </div>
  );
};

export default AboutUsPage;
