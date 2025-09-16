import React from "react";
import bgImage from "../../../assets/BgImage/banner.png";
import Image from "next/image";
import bannerImg from "../../../assets/HomeImg/object.png";
import { FaStar } from "react-icons/fa6";
import { Fade, Flip } from "react-awesome-reveal";

const HeroSection = () => {
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

      {/* Main Content */}
     
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full container mx-auto px-3">
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-3 lg:space-y-5 ">
            <h5 className="text-[#685F78] font-medium lg:font-bold text-lg lg:text-xl capitalize">
              The Leader in Online Learning
            </h5>

            <h1 className="text-custom-text text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-extrabold  ">
              <Fade cascade damping={1e-1} triggerOnce>
                Engaging & Accessible Online
              </Fade>
            </h1>
            <h1 className="text-custom-text text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-extrabold ">
              <Fade cascade damping={1e-1} triggerOnce>
                Courses For All
              </Fade>
            </h1>
            <p className="text-[#685F78] md:font-semibold lg:max-w-lg text-base md:text-lg">
              Courses For All Trusted by over 15K Users <br />
              worldwide since 2022
            </p>
            <div className="pt-3 flex items-center justify-center lg:justify-start">
              <h2 className="text-custom-text text-xl md:text-2xl lg:text-3xl xl:text-5xl font-extrabold mr-6 md:mr-9 lg:mr-10">
                0+
              </h2>
              <div className="flex items-center">
                <h2 className="text-custom-text text-xl md:text-2xl lg:text-3xl xl:text-5xl font-extrabold mr-3">
                  4.5
                </h2>
                <FaStar className="text-amber-500 text-xl" />
                <FaStar className="text-amber-500 text-xl" />
                <FaStar className="text-amber-500 text-xl" />
                <FaStar className="text-amber-500 text-xl" />
                <FaStar className="text-amber-500 text-xl" />
              </div>
            </div>
          </div>

          {/* Right Side Image */}

          <div className="flex-1  relative w-full h-96 xl:h-[550px] 2xl:h-[700px]">
            <Image
              src={bannerImg}
              alt="Hero Side Graphic"
              fill
              className="object-contain"
              priority={true}
            />
          </div>
        </div>
      
    </section>
  );
};

export default HeroSection;
