"use client";
import Image from "next/image";
import React from "react";
import bgImage from "../../../assets/BgImage/banner.png";
import bgIcon from "../../../assets/BgImage/course-bg.png";
import insImg from "../../../assets/InstructorImg/user-01-4.jpg";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Skeleton, Box } from "@mui/material";

const FeaturedCourse = () => {
  // Fetch all courses
  const {
    data: courses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allCourses"],
    queryFn: async () => {
      const res = await axios.get("/api/courses");
      return res.data;
    },
  });
  console.log(courses, "this is courses in home page featured section ");
  return (
    <section className="relative w-full py-6 lg:py-24">
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
        <div className="pt-12 lg:py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {!courses
            ? // Skeleton Loader দেখানো
              [...Array(6)].map((_, i) => (
                <Box
                  key={i}
                  className="relative bg-white rounded-lg shadow-lg overflow-hidden group p-6"
                >
                  {/* Course Image Skeleton */}
                  <Skeleton
                    variant="rectangular"
                    height={200}
                    className="w-full rounded-xl mb-4"
                  />
                  {/* Course Name Skeleton */}
                  <Skeleton
                    variant="text"
                    height={30}
                    width="80%"
                    className="mb-2"
                  />
                  {/* Price Skeleton */}
                  <Skeleton variant="text" height={25} width="40%" />
                  {/* Instructor Skeleton */}
                  <div className="flex items-center mt-4 gap-2">
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="text" height={25} width="60%" />
                  </div>
                  {/* Button Skeleton */}
                  <Skeleton
                    variant="rectangular"
                    height={40}
                    width="100%"
                    className="mt-4 rounded-full"
                  />
                </Box>
              ))
            : courses.slice(0, 6).map((course, i) => (
                <div
                  key={i}
                  className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 p-6"
                >
                  {/* Course Image */}
                  <Image
                    src={course.courseImage}
                    alt={course.courseName}
                    width={600}
                    height={200}
                    className="w-full rounded-xl shadow-xl mx-auto h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Course Info */}
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {course.courseName.length > 30
                        ? course.courseName.slice(0, 30) + "..."
                        : course.courseName}
                    </h3>

                    <div className="flex items-center mt-2 text-[#685F78] font-bold text-lg lg:text-xl py-6 justify-between">
                      <h2>
                        <span className="text-custom-text">Price : </span>
                        {course.coursePrice}
                      </h2>
                      <button className="bg-custom-accent-primary text-white py-[7px] px-4 flex items-center rounded-[55px] text-sm font-semibold gap-2 mr-3 cursor-pointer">
                        {course?.courseCategory}
                      </button>
                    </div>
                  </div>
                  {/* BUTTON AND TEXT */}
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center  mt-4">
                      <Image
                        src={insImg}
                        alt={course.instructorName}
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-white"
                      />
                      <div>
                        <span className="ml-2 text-lg font-medium text-[#685F78]">
                          {course.instructorName}
                        </span>
                        <h3 className="ml-2 text-sm font-medium text-custom-text">
                          Instructor
                        </h3>
                      </div>
                    </div>
                    {/* Buy Now Button */}
                    <button className=" bottom-4 left-1/2 transform -translate-x-1/2 bg-[#413655] text-white py-2 px-6 rounded-full text-sm font-semibold shadow-md hover:bg-[#322c46] transition-colors duration-300 cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                  {/* view more btn */}
                  <div className=" text-center pt-3 lg:pt-9">
                    <Link href={`/courses/${course._id}`}>
                      <button className="bg-custom-accent-secondary text-white py-[7px] px-4 rounded-[55px] text-sm font-semibold gap-2 cursor-pointer w-9/12 mx-auto">
                        View More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourse;
