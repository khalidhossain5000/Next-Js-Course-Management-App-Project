"use client"; // Must be top for Next.js 15+

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { testimonials } from "./Data"; // make sure image paths are in /public

const Testimonial = () => {
  return (
    <section className="py-12 lg:py-24 bg-gradient-to-tr from-[#fbdfde] via-[#e5f5fd] to-[#daebff]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-custom-text text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight text-center">
            What Our Students Say
          </h2>
          <p className="text-[#685F78] text-center mx-auto font-semibold lg:max-w-6xl text-base md:text-lg  ">
            Hear from our learners about their experiences and how our courses
            have helped them achieve their goals.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true} // ← ADD THIS HERE
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
              1280: { slidesPerView: 1 },
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="bg-gradient-to-b from-[#57504d] to-[#bbbbbb] rounded-2xl shadow-lg p-9 text-center hover:shadow-xl transition duration-300 relative max-w-6xl mx-auto">
                  {/* Message */}
                  <p className="text-white py-12 text-xl font-bold leading-tight text-center max-w-3xl mx-auto">
                    {t.message}
                  </p>
                  {/* Avatar */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={100}
                      height={96}
                      className="rounded-md object-cover z-10 relative"
                    />
                  </div>

                  {/* Name & Position */}
                  <h4 className="text-xl text-custom-text font-medium">
                    {t.name}
                  </h4>
                  <p className="text-lg py-3 text-white">{t.position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-sm cursor-pointer z-20 text-custom-text   hover:bg-custom-accent-secondary transition duration-500">
            <HiChevronLeft className="w-6 h-6" />
          </div>
          <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-white  p-2 rounded-sm cursor-pointer z-20 text-custom-text hover:bg-custom-accent-secondary transition duration-500">
            <HiChevronRight className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
