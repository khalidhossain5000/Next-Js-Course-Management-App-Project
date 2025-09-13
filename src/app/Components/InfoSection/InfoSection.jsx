import Image from "next/image";
import React from "react";
import infoImg from "../../../assets/HomeImg/join.png";
import { IoBookOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { LuBadgeCheck } from "react-icons/lu";

const InfoSection = () => {
  return (
    <div className="container mx-auto py-12 lg:py-22 flex items-center flex-col lg:flex-row">
      <div className="contetns flex-1">
        <h3 className="font-bold text-lg lg:text-xl capitalize text-custom-accent-secondary">
          What’s New
        </h3>
        <h1 className="text-custom-text text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold leading-tight py-6 lg:py-12">
          Master the skills to drive your career
        </h1>
        <p className="text-[#685F78] text-center lg:text-left mx-auto font-semibold lg:max-w-6xl text-base md:text-lg  ">
          Master the skills to drive your career Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Eget aenean accumsan bibendum gravida
          maecenas augue elementum et neque. Suspendisse imperdiet.
        </p>
        {/* card contianer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
          {/* card1 */}
          <div
            className="flex items-center gap-6 justify-center bg-white rounded-lg  p-6 hover:shadow-xl shadow-md shadow-gray-300  transition duration-300 transform hover:-translate-y-2"
          >
            <IoBookOutline className="text-6xl text-custom-accent-secondary"/>
            {/* Name */}
            <h3 className="text-[#685F78] text-center lg:text-left mx-auto font-semibold lg:max-w-6xl text-base md:text-lg">
             Get certified with 100+ certification courses
            </h3>
          </div>
          {/* card2 */}
          <div
             
            className="flex gap-6 items-center justify-center bg-white rounded-lg  p-6 hover:shadow-xl shadow-md shadow-gray-300  transition duration-300 transform hover:-translate-y-2"
          >
            <FaRegUser className="text-6xl text-custom-accent-secondary"/>
            {/* Name */}
            <h3 className="text-[#685F78] text-center lg:text-left mx-auto font-semibold lg:max-w-6xl text-base md:text-lg">
              ContentStay motivated with engaging instructors
            </h3>
          </div>
          {/* card3 */}
          <div
             
            className="flex gap-6 items-center justify-center bg-white rounded-lg  p-6 hover:shadow-xl shadow-md shadow-gray-300  transition duration-300 transform hover:-translate-y-2"
          >
            <CiCloudOn className="text-6xl text-custom-accent-secondary"/>
            {/* Name */}
            <h3 className="text-[#685F78] text-center lg:text-left mx-auto font-semibold lg:max-w-6xl text-base md:text-lg">
              Keep up with in the latest in cloud
            </h3>
          </div>
          {/* card4 */}
          <div
             
            className="flex gap-6 items-center justify-center bg-white rounded-lg  p-6 hover:shadow-xl shadow-md shadow-gray-300  transition duration-300 transform hover:-translate-y-2"
          >
            <LuBadgeCheck className="text-6xl text-custom-accent-secondary"/>
            {/* Name */}
            <h3 className="text-[#685F78] text-center lg:text-left mx-auto font-semibold lg:max-w-6xl text-base md:text-lg">
              Build skills your way, from labs to courses
            </h3>
          </div>
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
