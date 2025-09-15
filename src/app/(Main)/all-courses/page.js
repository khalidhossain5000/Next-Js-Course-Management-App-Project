"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Select from "react-select";
const AllCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
  const categories = [
    { value: "web-development", label: "Web Development" },
    { value: "data-science", label: "Data Science" },
    { value: "graphic-design", label: "Graphic Design" },
    { value: "marketing", label: "Marketing" },
  ];
  const filteredCourses = courses.filter(course =>
  course.courseName.toLowerCase().includes(searchQuery.toLowerCase())
);
  return (
    <section className=" my-22">
      <div className="py-9 lg:py-16 bg-gradient-to-tr from-[#fde0de] via-[#e7f3fa] to-[#e0f1ff]">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-center text-gray-950 font-bold">
          All Courses
        </h3>
      </div>

      <div className="container flex flex-col lg:flex-row gap-6 p-6 mx-auto">
        {/* Sidebar */}
        <div className="lg:w-1/4 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-[#191919] mb-4">
            Filter Courses
          </h2>
          <div className="space-y-6">
            {/* search box */}
            <div className="flex items-center max-w-md mx-auto my-6">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FiSearch className="w-5 h-5" />
                </div>
              </div>
            </div>
            {/* Category Filter */}
            <div className="border-t border-t-gray-300 pt-5">
              <label className="block text-sm font-semibold text-[#191919] mb-2">
                Category
              </label>
              <Select
                options={categories}
                // value={categoryFilter}
                // onChange={setCategoryFilter}
                placeholder="Select a category"
                className="text-[#191919]"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    borderColor: "#342777",
                    boxShadow: "none",
                    "&:hover": { borderColor: "#12023B" },
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected ? "#342777" : "white",
                    color: state.isSelected ? "white" : "#191919",
                  }),
                }}
              />
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 2xl:grid-cols-3">
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
                      <span className="font-medium">
                        {course?.instructorName}
                      </span>
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
      </div>
    </section>
  );
};

export default AllCourses;
