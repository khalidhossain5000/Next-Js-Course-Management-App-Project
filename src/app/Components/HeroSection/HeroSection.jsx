import React from "react";
import bgImage from "../../../assets/BgImage/banner.png";
import Image from "next/image";
import bannerImg from "../../../assets/HomeImg/object.png";
const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full max-w-7xl mx-auto px-6 lg:px-24">
        {/* Left Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-5">
          <h5 className="text-[#685F78] font-bold text-lg lg:text-xl capitalize">
            The Leader in Online Learning
          </h5>
          <h1 className="text-custom-text text-xl md:text-2xl lg:text-3xl xl:text-5xl font-extrabold leading-tight" >
            Engaging & <br /> Accessible  Online Courses For All
          </h1>
          <p className="text-[#685F78] font-semibold lg:max-w-lg text-base md:text-lg">
            Trusted by over 15K Users <br />
worldwide since 2022
          </p>
          <div className="pt-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
              Get Started Now
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 hidden lg:block relative w-full h-96 lg:h-[550px]">
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
