import Faq from "@/app/Components/FaqSections/Faq";
import FeaturedCourse from "@/app/Components/FeaturedCourse/FeaturedCourse";
import Featuredinstructors from "@/app/Components/Featuredinstructors/Featuredinstructors";
import HeroSection from "@/app/Components/HeroSection/HeroSection";
import InfoSection from "@/app/Components/InfoSection/InfoSection";
import Testimonial from "@/app/Components/TestimonialSLider/Testimonial";
import TopCategories from "@/app/Components/TopCategories/TopCategories";
import React from "react";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <TopCategories />
      <FeaturedCourse />
      <InfoSection />
      <Featuredinstructors />
      <Faq />
      <Testimonial />
    </div>
  );
};

export default HomePage;
