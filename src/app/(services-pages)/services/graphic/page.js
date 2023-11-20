/* eslint-disable @next/next/no-img-element */
import CTASection from "@/app/components/Services/CTASection";
import ContactSection from "@/app/components/Services/ContactSection";
import FeaturesSection from "@/app/components/Services/FeaturesSection";
import HeadlineSection from "@/app/components/Services/HeadlineSection";
import HeroSection from "@/app/components/Services/HeroSection";
import KeyPoints from "@/app/components/Services/KeyPointsSection";
import { WebContent } from "@/app/static/webcontent";
import React from "react";

const GraphicDesigning = () => {
  return (
    <div className="w-full flex flex-col space-y-20">
      <div>
        <HeroSection
          heading={"Graphic  Designing"}
          tags={[
            "2D illustrations",
            "3D illustrations",
            "Artworks",
            "Social Media",
            "Brand Elevation",
          ]}
        >
          <div className="w-full mx-auto ">
            <img
              alt="ui-ux-hero"
              src="/images/services/graphic-header.png"
              className="w-full"
            />
          </div>
        </HeroSection>
        <CTASection />
      </div>
      <HeadlineSection
        heading={"Graphic Design at your Fingertips"}
        description={
          "We curate teams of top creative talent and designers from our global network, tailored to your business needs. Each member is selected for their subject matter expertise and extensive team experience"
        }
      />
      <FeaturesSection
        image={"/images/services/graphic/right-image.png"}
        tiles={WebContent.services_features.Graphic}
      />
      <KeyPoints image={"/images/services/graphic/keypoint.png"} />
      <ContactSection />
    </div>
  );
};

export default GraphicDesigning;
