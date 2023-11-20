/* eslint-disable @next/next/no-img-element */
import CTASection from "@/app/components/Services/CTASection";
import ContactSection from "@/app/components/Services/ContactSection";
import FeaturesSection from "@/app/components/Services/FeaturesSection";
import HeadlineSection from "@/app/components/Services/HeadlineSection";
import HeroSection from "@/app/components/Services/HeroSection";
import KeyPoints from "@/app/components/Services/KeyPointsSection";
import { WebContent } from "@/app/static/webcontent";
import React from "react";

const PrintDesigning = () => {
  return (
    <div className="w-full flex flex-col space-y-20">
      <div>
        <HeroSection
          heading={"Print Designing"}
          tags={[
            "Accessories",
            "Packaging",
            "Business Cards",
            "Magazines",
            "Apparels",
          ]}
        >
          <div className="w-full mx-auto ">
            <img
              alt="print-hero"
              src="/images/services/print/hero-image.png"
              className="w-8/12 mx-auto"
            />
          </div>
        </HeroSection>
        <CTASection />
      </div>
      <HeadlineSection
        heading={"High - Quality Print Design Services"}
        description={
          "We curate teams of top creative talent and designers from our global network, tailored to your business needs. Each member is selected for their subject matter expertise and extensive team experience"
        }
      />
      <FeaturesSection
        image={"/images/services/print/right-image.png"}
        tiles={WebContent.services_features.Print}
      />
      <KeyPoints image={"/images/services/print/keypoint.png"} />
      <ContactSection />
    </div>
  );
};

export default PrintDesigning;
