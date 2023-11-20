"use client";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import HeroSection from "./components/HomePage/HeroSection";
import { useRef, useState } from "react";
import ServicesDisplay from "./components/HomePage/ServicesDisplay";
import ToolsDisplay from "./components/HomePage/ToolsSections";
import ExcellenceSection from "./components/HomePage/ExcellenceSection";
import WhyChooseUs from "./components/HomePage/WhyChooseUsSection";
import Header from "./components/Base/Header";
import Footer from "./components/Base/Footer";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Component({ id, children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="w-full  ">
      <motion.div style={{ y }}>
        <div className="w-full " ref={ref}>
          {children}
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 200; // Adjust this threshold as needed

    // Change the image source when scrolling reaches a certain point
    if (scrollY > scrollThreshold) {
      setImageSrc("/images/graphic.png");
    } else {
      setImageSrc("/images/ui-ux.png");
    }

    // Determine when to unstick the section based on scroll progress
    const isScrollFinished = scrollY > scrollThreshold;

    // Set the sticky state
    setSticky(!isScrollFinished);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between relative ">
      <div className=" sticky top-0 w-full " style={{ zIndex: 500 }}>
        <div className="absolute w-full py-6">
          <Header />
        </div>
      </div>{" "}
      <HeroSection />{" "}
      <Component id={1}>
        <ServicesDisplay
          heading={"UI/UX Design"}
          image={"/images/services/ui-ux.png"}
          tags={[
            "Web Designing",
            "Mobile Responsive Designing",
            "App Designing",
          ]}
          content={[
            "Seamless and user-friendly digital experiences.",
            " Data-driven insights combined with creativity. ",
            "Intuitive interface design for optimal user engagement.",
            " Putting the user at the center of our design process.",
            " Aim to enhance navigation, engagement, and conversions.",
          ]}
          imgclassName={"w-full"}
        />
      </Component>
      <Component id={2}>
        <ServicesDisplay
          heading={"Graphic Design"}
          image={"/images/services/graphic.png"}
          tags={["3D and 2D Illustrations", "Artworks"]}
          content={[
            "Transforming ideas into visually stunning realities.",
            " Crafting marketing materials, social media graphics, and more. ",
            "Creating a visually captivating brand identity.",
            "Conveying your brand's message through compelling visuals.",
            " Making a memorable mark in the visually saturated world.",
          ]}
          imgclassName={"w-1/3"}
        />
      </Component>
      <Component id={3}>
        <ServicesDisplay
          heading={"Logo Design"}
          image={"/images/services/logo.png"}
          tags={["Website Logo Design", "Brand Logo Design"]}
          content={[
            "Craft logos that are powerful brand representations.",
            "Careful research, conceptualization, and execution.",
            "Logo as the unforgettable face of your brand.",
            "Unique and memorable logo designs.",
            "Leave a lasting impression on your audience.",
          ]}
          imgclassName={"w-2/3"}
        />
      </Component>
      <ToolsDisplay />
      <ExcellenceSection />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
