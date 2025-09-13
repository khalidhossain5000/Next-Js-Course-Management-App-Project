import Image from "next/image";
import React from "react";
import bgImage from "../../../assets/BgImage/banner.png";
import bgIcon from "../../../assets/BgImage/course-bg.png";
import { coursesData } from "./Data"; // adjust path

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
      {/* Background Image end */}
      {/* Main Content */}
      <div className="relative z-10 h-full container mx-auto pt-12 lg:pt-16">
        <div className=" text-center lg:text-left space-y-3 lg:space-y-5 ">
          <h1 className="text-custom-text text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight text-center">
            Featured Courses
          </h1>
          <p className="text-[#685F78] text-center mx-auto font-semibold lg:max-w-6xl text-base md:text-lg  ">
            Explore our top courses carefully curated to help you advance your
            skills and achieve your learning goals. Find courses in technology,
            business, design, and more.
          </p>
        </div>
        {/* COURSE CONTAINER START */}
        <div className="pt-12 lg:pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Course Image */}
              <Image
                src={course.courseImage}
                alt={course.courseName}
                width={400}
                height={200}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Course Info */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {course.courseName}
                </h3>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>{course.lessonTime}</span>
                  <span className="mx-2">|</span>
                  <span className="text-yellow-500">{course.rating} ★</span>
                </div>
                <div className="flex items-center mt-4">
                  <Image
                    src={course.instructorImage}
                    alt={course.instructorName}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    {course.instructorName}
                  </span>
                </div>
              </div>

              {/* Buy Now Button */}
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#413655] text-white py-2 px-6 rounded-full text-sm font-semibold shadow-md hover:bg-[#322c46] transition-colors duration-300">
                {course.buyNowButton}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourse;
