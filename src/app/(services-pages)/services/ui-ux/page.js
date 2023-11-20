/* eslint-disable @next/next/no-img-element */
import CTASection from "@/app/components/Services/CTASection";
import ContactSection from "@/app/components/Services/ContactSection";
import FeaturesSection from "@/app/components/Services/FeaturesSection";
import HeadlineSection from "@/app/components/Services/HeadlineSection";
import HeroSection from "@/app/components/Services/HeroSection";
import KeyPoints from "@/app/components/Services/KeyPointsSection";
import { WebContent } from "@/app/static/webcontent";
import React from "react";

const UIUXDesigning = () => {
  return (
    <div className="w-full flex flex-col space-y-40">
      <div>
        <HeroSection
          heading={"UI/UX Designing"}
          tags={[
            "Desktop",
            "Mobile Responsive",
            "Tablet Responsive",
            "Website Redesigning",
            "Application Designing",
          ]}
        >
          <div className="w-8/12 mx-auto ">
            <img
              alt="ui-ux-hero"
              src="/images/services/ui-ux-header.png"
              className="w-full"
            />
          </div>
        </HeroSection>
        <CTASection />
      </div>
      <HeadlineSection
        heading={"Expert Talents in your Product"}
        description={
          "We curate teams of top creative talent and designers from our global network, tailored to your business needs. Each member is selected for their subject matter expertise and extensive team experience"
        }
      />
      <FeaturesSection
        image={"/images/services/ui-ux/right-image.png"}
        tiles={WebContent.services_features.UIUX}
      />
      <KeyPoints image={"/images/services/ui-ux/keypoint.png"} />
      <ContactSection />
    </div>
  );
};

export default UIUXDesigning;
