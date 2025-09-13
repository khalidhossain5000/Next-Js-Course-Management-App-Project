"use client";

import React, { useState } from "react";
import Select from "react-select";
import Image from "next/image";

// Sample categories for React-Select
const categories = [
  { value: "web-development", label: "Web Development" },
  { value: "mobile-development", label: "Mobile Development" },
  { value: "data-science", label: "Data Science" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
];

const  AddCourse = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-custom-text">
        Add New Course
      </h1>

      {/* Form Container */}
      <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
        <form className="space-y-6">
          {/* Course Name */}
          <div>
            <label
              htmlFor="courseName"
              className="block text-sm font-medium text-custom-text"
            >
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              placeholder="Enter course name"
              className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:border-custom-accent-secondary focus:ring focus:ring-custom-accent-secondary focus:ring-opacity-30"
            />
          </div>

          {/* Course Image Upload */}
          <div>
            <label
              htmlFor="courseImage"
              className="block text-sm font-medium text-custom-text"
            >
              Course Image
            </label>
            <input
              type="file"
              id="courseImage"
              name="courseImage"
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-custom-accent-primary file:text-white hover:file:bg-custom-accent-secondary"
            />
          </div>

          {/* Course Category */}
          <div>
            <label
              htmlFor="courseCategory"
              className="block text-sm font-medium text-custom-text mb-1"
            >
              Course Category
            </label>
            <Select
              id="courseCategory"
              name="courseCategory"
              options={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
              placeholder="Select category"
              className="text-sm"
            />
          </div>

          {/* Instructor Name */}
          <div>
            <label
              htmlFor="instructorName"
              className="block text-sm font-medium text-custom-text"
            >
              Instructor Name
            </label>
            <input
              type="text"
              id="instructorName"
              name="instructorName"
              placeholder="Enter instructor name"
              className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:border-custom-accent-secondary focus:ring focus:ring-custom-accent-secondary focus:ring-opacity-30"
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="coursePrice"
              className="block text-sm font-medium text-custom-text"
            >
              Price ($)
            </label>
            <input
              type="number"
              id="coursePrice"
              name="coursePrice"
              placeholder="Enter price"
              className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:border-custom-accent-secondary focus:ring focus:ring-custom-accent-secondary focus:ring-opacity-30"
            />
          </div>

          {/* Submit Button Placeholder */}
          <div>
            <button
              type="button"
              className="px-6 py-3 bg-custom-accent-secondary text-white rounded-lg font-medium hover:bg-custom-accent-primary transition-colors"
            >
              Save Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default  AddCourse;
