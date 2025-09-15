import Faq from '@/app/Components/FaqSections/Faq';
import FeaturedCourse from '@/app/Components/FeaturedCourse/FeaturedCourse';
import Featuredinstructors from '@/app/Components/Featuredinstructors/Featuredinstructors';
import HeroSection from '@/app/Components/HeroSection/HeroSection';
import InfoSection from '@/app/Components/InfoSection/InfoSection';
import Testimonial from '@/app/Components/TestimonialSLider/Testimonial';
import TopCategories from '@/app/Components/TopCategories/TopCategories';
import React from 'react';
// app/page.tsx
export const metadata = {
  title: "Home | Dream LMS",
  description:
    "Welcome to Dream LMS Home. Browse and learn courses online with our full-stack Next.js course management app.",
  openGraph: {
    title: "Home | Dream LMS",
    description:
      "Welcome to Dream LMS Home. Browse and learn courses online with our full-stack Next.js course management app.",
    type: "website",
  },
};
const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <TopCategories/>
            <FeaturedCourse/>
            <InfoSection/>
            <Featuredinstructors/>
            <Faq/>
            <Testimonial/>
        </div>
    );
};

export default HomePage;