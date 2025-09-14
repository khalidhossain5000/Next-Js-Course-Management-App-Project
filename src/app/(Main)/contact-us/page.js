'use client'
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
    const handleContact=(e)=>{
        e.preventDefault();
        toast.success("Message sent successfully!")
    }
  return (
    <section className=" my-22">
      <div className="py-9 lg:py-16 bg-gradient-to-tr from-[#fde0de] via-[#e7f3fa] to-[#e0f1ff]">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-center text-gray-950 font-bold">
          Contact Us
        </h3>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 py-12">
        {/* Card 1*/}
        <div className="bg-white rounded-xl p-6 flex flex-col lg:flex-row items-center space-x-4 shadow-md hover:shadow-lg transition">
          <div className="bg-[#392c7d] rounded-xl p-4 relative z-10">
            <FaLocationDot className="text-white text-2xl" />
          </div>
          <div className="pt-1">
            <h3 className="text-xl md:text-2xl text-gray-950 font-bold pt-6">
              Address
            </h3>
            <p className="text-gray-500 text-lg mt-1">
              1364 Still Water Dr, AK 99801
            </p>
          </div>
        </div>
        {/* Card 2*/}
        <div className="bg-white rounded-xl p-6 flex flex-col lg:flex-row items-center space-x-4 shadow-md hover:shadow-lg transition">
          <div className="bg-[#392c7d] rounded-xl p-4 relative z-10">
            <FaPhone className="text-white text-2xl" />
          </div>
          <div className="">
            <h3 className="text-xl md:text-2xl text-gray-950 font-bold pt-6">
              Phone
            </h3>
            <p className="text-gray-500 text-lg mt-1">+1 (907) 789-7623</p>
          </div>
        </div>
        {/* Card 3*/}
        <div className="bg-white rounded-xl p-6 flex flex-col lg:flex-row items-center space-x-4 shadow-md hover:shadow-lg transition">
          <div className="bg-[#392c7d] rounded-xl p-4 relative z-10">
            <FaEnvelope className="text-white text-2xl" />
          </div>
          <div className="">
            <h3 className="text-xl md:text-2xl text-gray-950 font-bold pt-6">
              E-mail Address
            </h3>
            <p className="text-gray-500 text-lg mt-1">contact@example.com</p>
          </div>
        </div>
      </div>

      {/* info section and contact us form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12  container mx-auto">
        {/* Left Content */}
        <div className="flex flex-col justify-center bg-[#f8f8f8] p-6 lg:p-9">
          <button className="px-6 py-2 bg-pink-100 text-pink-600 rounded-full w-fit mb-4 font-medium">
            Contact Us
          </button>
          <h2 className="text-3xl font-bold mb-4">
            Get in touch with us today
          </h2>
          <p className="text-gray-600 max-w-md">
            Get in touch with us to explore how our LMS solution can enhance
            your e-learning experience. We’re here to help you build a seamless
            and engaging learning platform!
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
          <h3 className="text-xl font-semibold mb-6">Send Us Message</h3>
          <form onSubmit={handleContact} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300  rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300  rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300  rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Your Message
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-medium py-3 rounded-full hover:bg-pink-600 transition cursor-pointer"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>

      {/* map */}
      <div className="container mx-auto">
        <div className="w-full h-[400px] pt-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.698682263777!2d90.40760871543143!3d23.79317879291286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70e72f8b6d1%3A0x5670e555c54f07b8!2sDhaka!5e0!3m2!1sen!2sbd!4v1692791433442!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
      </div>
    </section>
  );
};

export default Contact;
