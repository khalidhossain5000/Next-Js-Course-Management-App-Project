"use client";

import React, { useState, useEffect } from "react";
import Select from "react-select";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "@/app/Hooks/useAxios";
import toast from "react-hot-toast";

// Sample categories for React-Select
const categories = [
  { value: "web-development", label: "Web Development" },
  { value: "data-science", label: "Data Science" },
  { value: "graphic-design", label: "Graphic Design" },
  { value: "marketing", label: "Marketing" },
];

const UpdateCoursePage = () => {
  const axiosInstance = useAxios();
  const params = useParams();
  const router = useRouter();
  const courseId = params.id;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [profilePic, setProfilePic] = useState("");

  const queryClient = useQueryClient();

  // Fetch single course using TanStack Query
  const {
    data: courseData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["course", courseId],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/courses/${courseId}`);
      return res.data;
    },
  });

  // Mutation for updating course
  const updateCourseMutation = useMutation({
    mutationFn: async (updatedCourse) => {
      const res = await axiosInstance.patch(
        `/api/courses/${courseId}`,
        updatedCourse
      );
      return res.data;
    },
    onSuccess: () => {
      toast.success("Course updated successfully!");
      queryClient.invalidateQueries(["course", courseId]);
      router.push("/Dashboard/AllCourses"); // redirect after update
    },
    onError: (error) => {
      console.error(error);
      toast.error("Failed to update course");
    },
  });

  const handleCourseUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = Object.fromEntries(new FormData(form).entries());

    const finalCourseData = {
      ...updatedData,
      courseImage:
        profilePic ||
        courseData.courseImage ||
        "https://i.ibb.co/zVB99J4d/DEFAULT.jpg",
      courseCategory: selectedCategory?.value || courseData.courseCategory,
    };

    updateCourseMutation.mutate(finalCourseData);
  };

  const handleCourseImage = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const imagUploadUrl = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`;
    const res = await fetch(imagUploadUrl, {
      method: "POST",
      body: formData,
    }).then((r) => r.json());

    setProfilePic(res.data.url);
  };

  useEffect(() => {
    if (courseData) {
      setSelectedCategory({
        value: courseData.courseCategory,
        label: courseData.courseCategory.replace("-", " ").toUpperCase(),
      });
      setProfilePic(courseData.courseImage);
    }
  }, [courseData]);

  if (isLoading) return <p>Loading course data...</p>;
  if (error) return <p>Failed to load course</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-custom-text">
        Update Course
      </h1>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
        <form onSubmit={handleCourseUpdate} className="space-y-6">
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
              defaultValue={courseData.courseName}
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
              onChange={handleCourseImage}
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-custom-accent-primary file:text-white hover:file:bg-custom-accent-secondary"
            />
            {profilePic && (
              <Image
                src={profilePic}
                alt="Course Image"
                width={150}
                height={150}
                className="mt-2 rounded-md"
              />
            )}
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
              defaultValue={courseData.instructorName}
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
              defaultValue={courseData.coursePrice}
              placeholder="Enter price"
              className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:border-custom-accent-secondary focus:ring focus:ring-custom-accent-secondary focus:ring-opacity-30"
            />
          </div>
          {/* Description */}
          <div>
            <label
              htmlFor="courseDescription"
              className="block text-sm font-medium text-custom-text"
            >
              Description
            </label>
            <textarea
              id="courseDescription"
              name="courseDescription"
              placeholder="Enter course description"
              className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:border-custom-accent-secondary focus:ring focus:ring-custom-accent-secondary focus:ring-opacity-30 resize-none"
              rows={4}
            />
          </div>

          {/* Update Button */}
          <div>
            <button
              type="submit"
              className="px-6 py-3 bg-custom-accent-secondary text-white rounded-lg font-medium hover:bg-custom-accent-primary transition-colors cursor-pointer"
            >
              Update Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoursePage;
