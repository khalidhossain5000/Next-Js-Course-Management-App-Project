import React from "react";
import heroImage from "../../../assets/HomeImg/about.jpg";
import { FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import Image from "next/image";
import img1 from "../../../assets/InstructorImg/user-08-1.jpg";
import img2 from "../../../assets/InstructorImg/user-07-1.jpg";
import img3 from "../../../assets/InstructorImg/user-01-4.jpg";
import img4 from "../../../assets/InstructorImg/profile2.jpg";
const Aboutus = () => {
  return (
    <section className=" my-22">
      <div className="py-9 lg:py-16 bg-gradient-to-tr from-[#fde0de] via-[#e7f3fa] to-[#e0f1ff]">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-center text-gray-950 font-bold">
          About Us
        </h3>
      </div>

      <div className="container mx-auto">
        <div className="bg-white">
          {/* HERO */}
          <section className="relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-32 grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="w-full overflow-hidden flex items-center justify-center p-6">
                  <Image
                    src={heroImage}
                    width={200}
                    height={200}
                    alt="hero imag e"
                    className="w-full rounded-tl-4xl lg:rounded-tl-[220px] lg:rounded-br-[220px] rounded-br-4xl"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <p className="inline-block px-3 py-1 text-custom-accent-secondary rounded-full text-sm font-semibold lg:text-xl lg:font-bold">
                  About Us
                </p>
                <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight text-custom-text">
                  Empowering Learning, Inspiring Growth
                </h1>
                <p className="text-gray-600 max-w-2xl">
                  We deliver practical, project-based courses designed by
                  working professionals. Join thousands of learners who gained
                  real-world skills and accelerated their careers.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-5 py-3 bg-custom-accent-secondary text-white rounded-lg font-medium hover:bg-custom-accent-primary transition">
                    Explore Courses
                  </button>
                  <button className="px-5 py-3 bg-white border border-gray-200 text-custom-text rounded-lg font-medium hover:shadow">
                    Contact Us
                  </button>
                </div>
                <div className="flex flex-col  gap-6 mt-4 lg:mt-12 ">
                  <div className="flex items-center gap-6">
                    <p className="text-2xl font-bold text-custom-accent-secondary">
                      24k+
                    </p>
                    <p className="text-sm lg:text-xl text-gray-500">
                      Students enrolled
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="text-2xl font-bold text-custom-accent-secondary">
                      120+
                    </p>
                    <p className="text-sm text-gray-500 lg:text-xl">
                      Expert instructors
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="text-2xl font-bold text-custom-accent-secondary">
                      500+
                    </p>
                    <p className="text-sm text-gray-500 lg:text-xl">
                      Live sessions & projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -mb-12 flex justify-center">
              <div className="bg-white shadow-lg rounded-2xl px-6 py-4 w-11/12 lg:w-3/4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-gray-600">
                    Ready to start? Browse our most popular courses.
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-custom-accent-secondary text-white rounded-md">
                      Browse Courses
                    </button>
                    <button className="px-4 py-2 border rounded-md">
                      Request Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT CONTENT */}
          <section className="container mx-auto px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10">
              {/* Card 1 */}
              <div className="bg-gradient-to-tr from-[#fff] via-[#f2eefd] to-[#ece7fc] rounded-xl p-6 flex flex-col items-start space-x-4 shadow-md hover:shadow-lg transition">
                <div className="bg-purple-100 rounded-full p-4">
                  <FaBookOpen className="text-purple-600 text-2xl" />
                </div>
                <div className="pt-3 space-y-5">
                  <h3 className="text-xl md:text-2xl text-gray-950 font-bold pt-6">
                    Flexible Learning
                  </h3>
                  <p className="text-gray-500 text-lg mt-1">
                    We believe that high-quality education should be accessible
                    to everyone. Our pricing form in models are designed.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-tr from-[#fff] via-[#fff0f3] to-[#ffeaee] rounded-xl p-6 flex flex-col items-start space-x-4 shadow-md hover:shadow-lg transition">
                <div className="bg-pink-100 rounded-full p-4 relative z-10">
                  <MdOutlineWorkspacePremium className="text-pink-500 text-2xl" />
                </div>
                <div className="pt-3 space-y-5">
                  <h3 className="text-xl md:text-2xl text-gray-950 font-bold pt-6">
                    Lifetime Access
                  </h3>
                  <p className="text-gray-500 text-lg mt-1">
                    When you enroll in our courses, you're not just signing up
                    for a temporary learning to experience you're making.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-tr from-[#fff] via-[#f6feff] to-[#e9fafe] rounded-xl p-6 flex flex-col items-start space-x-4 shadow-md hover:shadow-lg transition">
                <div className="bg-blue-100 rounded-full p-4 relative z-10">
                  <FaChalkboardTeacher className="text-blue-500 text-2xl" />
                </div>
                <div className="pt-3 space-y-5">
                  <h3 className="text-xl md:text-2xl text-gray-950 font-bold pt-6">
                    Expert Instruction
                  </h3>
                  <p className="text-gray-500 text-lg mt-1">
                    Our instructors are seasoned professionals with years of
                    experience in their respective fields & Experts advice
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="bg-gray-50 py-12">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="py-6 bg-white rounded-lg shadow">
                  <p className="text-3xl font-bold text-custom-accent-secondary">
                    24k+
                  </p>
                  <p className="text-sm text-gray-500">Students</p>
                </div>
                <div className="py-6 bg-white rounded-lg shadow">
                  <p className="text-3xl font-bold text-custom-accent-secondary">
                    120+
                  </p>
                  <p className="text-sm text-gray-500">Instructors</p>
                </div>
                <div className="py-6 bg-white rounded-lg shadow">
                  <p className="text-3xl font-bold text-custom-accent-secondary">
                    500+
                  </p>
                  <p className="text-sm text-gray-500">Courses</p>
                </div>
                <div className="py-6 bg-white rounded-lg shadow">
                  <p className="text-3xl font-bold text-custom-accent-secondary">
                    95%
                  </p>
                  <p className="text-sm text-gray-500">Satisfaction</p>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section className="container mx-auto px-6 lg:px-8 py-16">
            <h3 className="text-xl font-semibold text-custom-text mb-6">
              Why Learners Choose Us
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="w-12 h-12 rounded-md bg-custom-accent-primary text-white flex items-center justify-center mb-4">
                  ★
                </div>
                <h4 className="font-semibold mb-2">Expert instructors</h4>
                <p className="text-sm text-gray-500">
                  Active professionals teaching practical skills.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="w-12 h-12 rounded-md bg-custom-accent-primary text-white flex items-center justify-center mb-4">
                  ⚙
                </div>
                <h4 className="font-semibold mb-2">Project-based learning</h4>
                <p className="text-sm text-gray-500">
                  Complete real projects and build experience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="w-12 h-12 rounded-md bg-custom-accent-primary text-white flex items-center justify-center mb-4">
                  💬
                </div>
                <h4 className="font-semibold mb-2">Community support</h4>
                <p className="text-sm text-gray-500">
                  Peer groups, Q&A and mentorship channels.
                </p>
              </div>
            </div>
          </section>

          {/* INSTRUCTORS GRID */}
          <section className="container mx-auto px-6 lg:px-8 py-16">
            <h3 className="text-xl font-semibold text-custom-text mb-6">
              Featured Instructors
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Instructor card x4 (replace images & names) */}
              <div className="bg-white rounded-2xl shadow p-6 text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src={img1}
                    width={200}
                    height={200}
                    alt="hero imag e"
                    className="w-full rounded-tl-4xl lg:rounded-tl-[220px] lg:rounded-br-[220px] rounded-br-4xl"
                  />
                </div>
                <h4 className="mt-4 font-semibold">Jane Doe</h4>
                <p className="text-sm text-gray-500">Senior Developer</p>
                <p className="mt-2 text-custom-accent-secondary font-semibold">
                  8 Courses
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-6 text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src={img2}
                    width={200}
                    height={200}
                    alt="hero imag e"
                    className="w-full rounded-tl-4xl lg:rounded-tl-[220px] lg:rounded-br-[220px] rounded-br-4xl"
                  />
                </div>
                <h4 className="mt-4 font-semibold">John Smith</h4>
                <p className="text-sm text-gray-500">Product Designer</p>
                <p className="mt-2 text-custom-accent-secondary font-semibold">
                  5 Courses
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-6 text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src={img3}
                    width={200}
                    height={200}
                    alt="hero imag e"
                    className="w-full rounded-tl-4xl lg:rounded-tl-[220px] lg:rounded-br-[220px] rounded-br-4xl"
                  />
                </div>
                <h4 className="mt-4 font-semibold">Amina Khan</h4>
                <p className="text-sm text-gray-500">Data Scientist</p>
                <p className="mt-2 text-custom-accent-secondary font-semibold">
                  6 Courses
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-6 text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src={img4}
                    width={200}
                    height={200}
                    alt="hero imag e"
                    className="w-full rounded-tl-4xl lg:rounded-tl-[220px] lg:rounded-br-[220px] rounded-br-4xl"
                  />
                </div>
                <h4 className="mt-4 font-semibold">Carlos Lee</h4>
                <p className="text-sm text-gray-500">Marketing Lead</p>
                <p className="mt-2 text-custom-accent-secondary font-semibold">
                  4 Courses
                </p>
              </div>
            </div>
          </section>

          {/* CTA BANNER */}
          <section className="bg-custom-secondary py-12 text-white">
            <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold">Start learning today</h3>
                <p className="text-gray-200">
                  Join thousands of students building career-ready skills.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-5 py-3 bg-custom-accent-secondary rounded-md">
                  Get Started
                </button>
                <button className="px-5 py-3 border border-white rounded-md">
                  Contact Sales
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
