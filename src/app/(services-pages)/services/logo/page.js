/* eslint-disable @next/next/no-img-element */
import CTASection from "@/app/components/Services/CTASection";
import ContactSection from "@/app/components/Services/ContactSection";
import FeaturesSection from "@/app/components/Services/FeaturesSection";
import HeadlineSection from "@/app/components/Services/HeadlineSection";
import HeroSection from "@/app/components/Services/HeroSection";
import KeyPoints from "@/app/components/Services/KeyPointsSection";
import { WebContent } from "@/app/static/webcontent";
import React from "react";

const LogoDesigning = () => {
  return (
    <div className="w-full flex flex-col space-y-20">
      <div>
        <HeroSection
          heading={"Logo Designing"}
          tags={[
            "2D illustrations",
            "3D illustrations",
            "Artworks",
            "Social Media",
            "Brand Elevation",
          ]}
        >
          <div className="w-full mx-auto flex flex-col items-center justify-center relative">
            <img
              alt="logo-hero-top"
              src="/images/services/logo/herologo.svg"
              className="sm:w-3/12 max-sm:w-6/12 absolute top-0"
            />
            <img
              alt="logo-hero"
              src="/images/services/logo/heroshadow.png"
              className="w-full max-sm:mt-6"
            />
          </div>
        </HeroSection>
        <CTASection />
      </div>
      <HeadlineSection
        heading={"Crafting Creative Logos"}
        description={
          "We curate teams of top creative talent and designers from our global network, tailored to your business needs. Each member is selected for their subject matter expertise and extensive team experience"
        }
      />
      <FeaturesSection
        image={"/images/services/logo/right-image.png"}
        tiles={WebContent.services_features.Logo}
      />
      <KeyPoints image={"/images/services/logo/keypoint.png"} />
      <ContactSection />
    </div>
  );
};

export default LogoDesigning;
