import Image from "next/image";
import React from "react";
import infoImg from "../../../assets/HomeImg/join.png";
import { IoBookOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { LuBadgeCheck } from "react-icons/lu";
import { Fade, JackInTheBox } from "react-awesome-reveal";

const InfoSection = () => {
  return (
    <div className="container mx-auto py-12 lg:py-24 flex items-center flex-col lg:flex-row gap-6 lg:gap-12">
      <div className="contetns flex-1">
        <h3 className="text-center lg:text-left font-bold text-lg lg:text-xl capitalize text-custom-accent-secondary px-3 xl:px-0" >
          What’s New
        </h3>
        <h1 className="text-custom-text text-sm text-center lg:text-left md:text-2xl lg:text-3xl xl:text-5xl font-semibold leading-tight py-6 lg:py-12 ">
          <Fade cascade damping={1e-1} triggerOnce>
            Master the skills to drive your career
          </Fade>
        </h1>
        <p className="text-[#685F78]  text-center lg:text-left mx-auto font-semibold lg:max-w-6xl text-base md:text-lg  ">
          Unlock the essential skills that will accelerate your professional growth. Learn practical techniques in communication, leadership, and problem-solving that top employers value. 
        </p>
        {/* card contianer */}
        <div className="px-6 xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
          <JackInTheBox 
           triggerOnce
          delay={200}
          duration={2000}
          >
          {/* card1 */}
          <div className="flex items-center gap-6 justify-center bg-white rounded-lg  p-6 hover:shadow-xl shadow-md shadow-gray-300  transition duration-300 transform hover:-translate-y-2">
            <IoBookOutline className="text-6xl text-custom-accent-secondary" />
            {/* Name */}
            <h3 className="text-[#685F78] text-center lg:text-left mx-auto font-semibold lg:max-w-6xl text-base md:text-lg">
              Get certified with 100+ certification courses
            </h3>
          </div>
          </JackInTheBox>
          {/* card2 */}
          <JackInTheBox 
           triggerOnce
          delay={200}
          duration={2000}
          >
          <div className="flex gap-6 items-center justify-center bg-white rounded-lg  p-6 hover:shadow-xl shadow-md shadow-gray-300  transition duration-300 transform hover:-translate-y-2">
            <FaRegUser className="text-6xl text-custom-accent-secondary" />
            {/* Name */}
            <h3 className="text-[#685F78] text-center lg:text-left mx-auto font-semibold lg:max-w-6xl text-base md:text-lg">
              ContentStay motivated with engaging instructors
            </h3>
          </div>
          </JackInTheBox>
          {/* card3 */}
          <JackInTheBox 
           triggerOnce
          delay={200}
          duration={2000}
          >
          <div className="flex gap-6 items-center justify-center bg-white rounded-lg  p-6 hover:shadow-xl shadow-md shadow-gray-300  transition duration-300 transform hover:-translate-y-2">
            <CiCloudOn className="text-6xl text-custom-accent-secondary" />
            {/* Name */}
            <h3 className="text-[#685F78] text-center lg:text-left mx-auto font-semibold lg:max-w-6xl text-base md:text-lg">
              Keep up with in the latest in cloud
            </h3>
          </div>
          </JackInTheBox>
          {/* card4 */}
          <JackInTheBox 
           triggerOnce
          delay={200}
          duration={2000}
          >
          <div className="flex gap-6 items-center justify-center bg-white rounded-lg  p-6 hover:shadow-xl shadow-md shadow-gray-300  transition duration-300 transform hover:-translate-y-2">
            <LuBadgeCheck className="text-6xl text-custom-accent-secondary" />
            {/* Name */}
            <h3 className="text-[#685F78] text-center lg:text-left mx-auto font-semibold lg:max-w-6xl text-base md:text-lg">
              Build skills your way, from labs to courses
            </h3>
          </div>
          </JackInTheBox>
        </div>
      </div>
      <div className="imgs flex-1">
        <Image
          src={infoImg}
          alt={"info image here"}
          width={1100}
          height={100}
          className=" object-cover"
        />
      </div>
    </div>
  );
};

export default InfoSection;
