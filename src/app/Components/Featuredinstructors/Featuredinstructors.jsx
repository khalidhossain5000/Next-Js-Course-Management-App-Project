import Image from "next/image";
import React from "react";
import bgImage from "../../../assets/BgImage/banner.png";
import { instructors } from "./data";
import { Fade, Slide  } from "react-awesome-reveal";

const Featuredinstructors = () => {
  return (
    <section className="relative w-full lg:pt-6 ">
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
      {/* Background Image end*/}
      {/* Main Content */}
      <div className=" relative z-10 h-full container mx-auto">
        {/*  Text Content */}
        <div className="pt-12 lg:pt-22 text-center lg:text-left space-y-3 lg:space-y-5 ">
          <h1 className="text-custom-text text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight text-center">
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              Featured Instructor
            </Fade>
          </h1>
          <p className="text-[#685F78] font-semibold lg:max-w-6xl text-base md:text-lg text-center mx-auto">
            <Slide direction="up" duration={1000} delay={200} triggerOnce>
              Learn from industry experts who bring real-world experience into
              the classroom. Our instructors are dedicated to helping you gain
              practical skills, build confidence, and achieve your career goals.
            </Slide>
          </p>
        </div>
        {/* INSTRUCTORS GRID */}
        <div className="px-3 lg:px-0 py-12 lg:py-22 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Slide triggerOnce  direction="left" cascade damping={0.2}  duration={2000}>
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg duration-300 overflow-hidden"
            >
              <div className="relative w-full h-64 hover:scale-105 transition duration-500">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-custom-text ">
                  {instructor.name}
                </h3>
                <p className="text-[#685F78] text-center mx-auto font-semibold lg:max-w-6xl text-base md:text-lg ">
                  Instructor
                </p>
                <p className="text-custom-accent-secondary font-lg mt-3">
                  {instructor.courseQuantity} Courses
                </p>
              </div>
            </div>
          ))}
          </Slide >
        </div>
      </div>
    </section>
  );
};

export default Featuredinstructors;
