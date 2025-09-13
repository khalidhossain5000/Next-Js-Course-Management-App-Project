import FeaturedCourse from '@/app/Components/FeaturedCourse/FeaturedCourse';
import HeroSection from '@/app/Components/HeroSection/HeroSection';
import TopCategories from '@/app/Components/TopCategories/TopCategories';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <TopCategories/>
            <FeaturedCourse/>
        </div>
    );
};

export default HomePage;