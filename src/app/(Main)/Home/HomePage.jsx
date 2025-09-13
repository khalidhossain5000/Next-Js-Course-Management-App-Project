import FeaturedCourse from '@/app/Components/FeaturedCourse/FeaturedCourse';
import Featuredinstructors from '@/app/Components/Featuredinstructors/Featuredinstructors';
import HeroSection from '@/app/Components/HeroSection/HeroSection';
import InfoSection from '@/app/Components/InfoSection/InfoSection';
import TopCategories from '@/app/Components/TopCategories/TopCategories';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <TopCategories/>
            <FeaturedCourse/>
            <InfoSection/>
            <Featuredinstructors/>
        </div>
    );
};

export default HomePage;