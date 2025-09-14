"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllCourses = () => {
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
  console.log('this is courses',courses);
  return (
    <section className=" my-22">
      <div className="py-9 lg:py-16 bg-gradient-to-tr from-[#fde0de] via-[#e7f3fa] to-[#e0f1ff]">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-center text-gray-950 font-bold">
          All Courses
        </h3>
      </div>
      <div className="container  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {courses?.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            {/* Course Image */}
            <div className="relative h-48">
              <Image
                src={course?.courseImage}
                alt={course?.courseName}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={false}
              />
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#191919] mb-2">
                {course?.courseName}
              </h3>
              <p className="text-sm text-gray-600 mb-3 capitalize">
                {course?.courseCategory.replace("-", " ")}
              </p>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                {course?.courseDescription}
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">
                    Instructor:{" "}
                    <span className="font-medium">{course?.instructorName}</span>
                  </p>
                  <p className="text-lg font-bold text-[#ff4667]">
                    ${course?.coursePrice}
                  </p>
                </div>
                <Link href={`/courses/${course?._id}`}>
                    <button className="bg-[#342777] text-white px-4 py-2 rounded-md hover:bg-[#12023B] transition-colors duration-300 cursor-pointer">
                  View Course
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllCourses;
