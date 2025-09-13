import Image from 'next/image';
import React from 'react';
import bgImage from '../../../assets/BgImage/banner.png'
import bgIcon from'../../../assets/BgImage/course-bg.png'
const FeaturedCourse = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden lg:pt-6 pt-24">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={bgImage}
                  alt="Hero Background"
                  fill
                  className="object-cover object-center"
                  priority={true}
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-black/5 to-black/5"></div>
              </div>
              <div className="absolute inset-0">
                <Image
                  src={bgIcon}
                  alt="Hero Background"
                  fill
                  className="object-cover object-center"
                  priority={true}
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-black/5 to-black/5"></div>
              </div>

        </section>
    );
};

export default FeaturedCourse;