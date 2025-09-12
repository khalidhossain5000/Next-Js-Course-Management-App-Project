"use client";
import React, { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import authBg from "../../../assets/AuthImg/login-bg.png";
import authImg from "../../../assets/AuthImg/login-img.png";
import Image from "next/image";
import logo from "../../../assets/logo/logo.jpg";
import { signIn } from "next-auth/react";

import toast from "react-hot-toast";
const page = () => {
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })
    if (result.error) {
        setLoading(false)
      setError("Invalid email or password")
    } else {
        setLoading(false)
        toast.success("Logi n sucess")
      window.location.href = "/" // সফল হলে home এ redirect
    }
  };
console.log(error);
  return (
    <section className="relative w-full h-screen overflow-hidden ">
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
          <h1 className="text-custom-text text-xl md:text-2xl lg:text-3xl xl:text-5xl font-extrabold relative text-center py-6 lg:py-9">
            Welcome to Dreams LMS.
          </h1>
          <p className="text-sm text-gray-500 font-semibold max-w-lg text-center mx-auto">
            Platform designed to help organizations, educators, and learners
            manage, deliver, and track learning and training activities.
          </p>
        </div>

        {/* Right Side Image */}

        <div className="w-full flex-1 mx-auto h-full p-12 lg:p-16 bg-[#ffffff] p">
          <div className="logoandback flex justify-between">
            <Image src={logo} alt="Logo" width={200} />
            <div className="back">
              <h2>Back Home</h2>
            </div>
          </div>
          <h2 className="pt-22 text-2xl font-bold mb-6 text-center lg:text-left">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
{error && <p className="text-red-500 font-semibold">{error}</p>}

            {/* Submit */}
            <button
              type="submit"
              className="bg-custom-accent-primary text-white py-[9px] px-4  lg:py-4 items-center rounded-[55px] text-sm font-semibold  w-full text-center"
            >
              {loading ? (
                <ImSpinner9 className="animate-spin m-auto" />
              ) : (
                "Sign In"
              )}
            </button>
            <p className="pt-3 text-lg text-gray-500 font-bold">
              Don't have an account?{" "}
              <span className="text-custom-accent-secondary">Register</span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
