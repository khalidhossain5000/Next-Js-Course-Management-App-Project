"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const Coursedetails = () => {
  const { id } = useParams();
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
  const course = courses?.find((c) => c._id === id);
  console.log("this is coruse", course, id, courses);
  return (
    <section className="mt-12 lg:mt-32">
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        {/* Header with Gradient */}
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center py-6 bg-gradient-to-r from-[#fef8f7] via-[#eaf2f9] to-[#deedff] bg-clip-text text-custom-text">
            {course.courseName}
          </h1>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-6">
          {/* Course Image */}
          <div className="w-full h-96 overflow-hidden rounded-lg mb-6">
            <img
              src={course.courseImage}
              alt={course.courseName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Course Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column: Description */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Course Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {course.courseDescription}
              </p>
            </div>

            {/* Right Column: Details */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Course Details
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <span className="font-medium">Course ID:</span> {course._id}
                  </li>
                  <li>
                    <span className="font-medium">Category:</span>{" "}
                    {course.courseCategory
                      .replace("-", " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </li>
                  <li>
                    <span className="font-medium">Instructor:</span>{" "}
                    {course.instructorName}
                  </li>
                  <li>
                    <span className="font-medium">Price:</span> $
                    {course.coursePrice}
                  </li>
                </ul>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coursedetails;
