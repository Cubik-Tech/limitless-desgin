import React from "react";
import HeroSection from "../components/aboutus/HeroSection/Hero";
import OurMission from "../components/aboutus/OurMission";
import DesignProcess from "../components/aboutus/DesignProcess";
import ContactSection from "../components/Services/ContactSection";
import ServiceHead from "../(services-pages)/services/Base/ServiceHead";
import ServiceFoot from "../(services-pages)/services/Base/ServiceFoot";

const AboutUsPage = () => {
  return (
    <div>
      <ServiceHead />
      <div className="w-full flex flex-col space-y-40">
        <HeroSection />
        <OurMission />
        <DesignProcess />
        <ContactSection />
      </div>
      <ServiceFoot />
    </div>
  );
};

export default AboutUsPage;
