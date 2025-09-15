"use client";
import React, { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import authBg from "../../../assets/AuthImg/login-bg.png";
import authImg from "../../../assets/AuthImg/login-img.png";
import Image from "next/image";
import logo from "../../../assets/logo/logo.jpg";
import axios from "axios";

import toast from "react-hot-toast";
import SocialLogin from "@/app/Components/SocialLogin/SocialLogin";
import { signIn } from "next-auth/react";
import useAxios from "@/app/Hooks/useAxios";
import Link from "next/link";
const page = () => {
  const [profilePic, setProfilePic] = useState("");
  //   const [passwordError, setPasswordError] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const axiosInstance = useAxios();
useEffect(() => {
    document.title = "Register| Dream LMS";
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const form = e.target;

    // Get form values
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // Prepare user info for register API
    const userInfo = {
      name,
      email,
      password,
      profileImage: profilePic,
    };

    setLoading(true);

    try {
      const res = await axiosInstance.post("/api/auth/register", userInfo);

      const data = res.data;
      

      if (res.status === 201) {
        toast.success("Registration successful!");

        const result = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });

    

        if (!result.error) {
          toast.success("Login successful!");
          window.location.href = "/"; 
        } else {
          toast.error(result.error); // Login error
        }
      } else {
        // Registration error
        toast.error(data.error || "Registration failed");
      }

      setLoading(false); //  Loading stop
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!"); // Catch block error
      setLoading(false); // Stop loading even on error
    }
  };
  
  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    if (image) {
      setPreviewUrl(URL.createObjectURL(image));
    }
    const formData = new FormData();
    formData.append("image", image);

    const imagUploadUrl = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`;

    const res = await axios.post(imagUploadUrl, formData);
    setProfilePic(res.data.data.url);
  };

  return (
    <section className="relative w-full lg:h-screen overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={authBg}
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority={true}
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-black/5 to-black/5"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full   px-3">
        {/* Left Text Content */}
        <div className="flex-1  relative w-full h-96 xl:h-[400px] 2xl:h-[500px]">
          <Image
            src={authImg}
            alt="Hero Side Graphic"
            width={400}
            height={300}
            className="object-contain mx-auto"
            priority={true}
          />
          <h1 className="text-custom-text text-xl md:text-2xl lg:text-3xl xl:text-5xl font-extrabold relative text-center py-3 lg:py-9">
            Welcome to Dreams LMS.
          </h1>
          <p className="text-sm text-gray-500 font-semibold max-w-lg text-center mx-auto mb-6">
            Platform designed to help organizations, educators, and learners
            manage, deliver, and track learning and training activities.
          </p>
        </div>

        {/* Right Side Image */}

        <div className="w-full flex-1 mx-auto h-full p-12  bg-[#ffffff] ">
          <div className="logoandback flex flex-col lg:flex-row justify-between">
            <Image src={logo} alt="Logo" width={200} className="w-9/12lg:w-full"/>
            <div className="back text-center lg:text-right pt-6 lg:pt-0">
              <Link href={'/'}>Back Home</Link>
            </div>
          </div>
          <h2 className="pt-6 text-2xl font-bold mb-6 text-center lg:text-left">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label
                className="block mb-1 font-medium text-[#685f78]"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-[#e9ecef] rounded px-3 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            {/* Image Upload */}
            <div>
              <div>
                {previewUrl ? (
                  <div
                    className="w-full rounded-lg border p-2 flex items-center gap-3"
                    style={{
                      background: "var(--color-light-secondary)",
                      borderColor: "rgba(0,0,0,0.12)",
                    }}
                  >
                    <img
                      src={previewUrl}
                      alt="Selected preview"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <span className="text-xs opacity-80">
                      Preview of your selected image
                    </span>
                  </div>
                ) : null}
              </div>
              <label
                className="text-[#685f78] block mb-1 font-medium"
                htmlFor="profileImage"
              >
                Profile Image
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full border border-[#e9ecef] rounded px-3 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              />
            </div>
            {/* Email */}
            <div>
              <label
                className="text-[#685f78] block mb-1 font-medium"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-[#e9ecef] rounded px-3 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                className="text-[#685f78] block mb-1 font-medium"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-[#e9ecef] rounded px-3 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-custom-accent-primary text-white py-[9px] px-4  lg:py-4 items-center rounded-[55px] text-sm font-semibold  w-full text-center"
            >
              {loading ? (
                <ImSpinner9 className="animate-spin m-auto" />
              ) : (
                "CREATE ACCOUNT"
              )}
            </button>

            <p className="pt-3 text-lg text-gray-500 font-bold">
              Already have an account?{" "}
              <span className="text-custom-accent-secondary">Login</span>
            </p>
            <SocialLogin />
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
