import React from "react";
import { categoriesData } from "./CategoiresData";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";
const TopCategories = () => {
  return (
    <div className="py-12 lg:py-24">
      <h1 className="text-custom-text text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight text-center">
        <Fade 
        direction="up"
        duration={1000}
        delay={200}
        triggerOnce
        >
        Top Category
        </Fade>
      </h1>
      <p className="text-[#685F78] text-center mx-auto lg:font-semibold lg:max-w-6xl text-base md:text-lg pt-6 px-3 lg:px-0">
        <Slide 
        direction="up"
        duration={1000}
        delay={200}
        triggerOnce
        >
        Discover our most popular categories carefully curated for you. Explore
        trending topics, in-demand courses, and resources to help you grow your
        skills and knowledge. Stay ahead with the content that matters most.
        </Slide>
      </p>
      <div className="pt-12 lg:pt-24 container mx-auto categoies-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-6 xl:px-0">
        <Slide direction="up" cascade damping={0.2} triggerOnce>
        {categoriesData.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center justify-center bg-white rounded-lg  p-6 hover:shadow-xl shadow-md shadow-gray-300 hover:bg-[#413655] transition-colors duration-300 hover:text-white"
          >
            {/* Image */}
            <div className="w-24 h-24 mb-4">
              <Image
                src={cat?.image}
                alt="Hero Side Graphic"
                width={100}
                height={50}
                className="object-contain"
                priority={true}
              />
            </div>

            {/* Name */}
            <h3 className="text-lg lg:text-xl font-semibold text-center py-3 md:py-4 lg:py-5">{cat?.name}</h3>

            {/* Quantity */}
            <p className=" text-center">{cat?.quantity} courses</p>
          </div>
        ))}
        </Slide>
      </div>
    </div>
  );
};

export default TopCategories;
