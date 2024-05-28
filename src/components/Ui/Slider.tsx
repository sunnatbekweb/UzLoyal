"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import sliderimage from "@/publiccarousel_image.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/srcstyles/swiper.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        475: {
          slidesPerView: 2,
        },

        768: {
          slidesPerView: 3,
        },

        1240: {
          slidesPerView: 4,
        },
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-[320px] h-[300px] grid place-content-center object-cover bg-[rgba(16,25,46,.644)] overflow-hidden shadow-md shadow-black relative my-5">
          <Image
            width={430}
            height={250}
            src={sliderimage.src}
            className="absolute top-0 left-0 -z-10"
            alt="Slider image"
          />
          <h2 className="text-[22px] text-center text-white px-[30px]">
            Registration of permitting procedures for a foreign worker
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[320px] h-[300px] grid place-content-center object-cover bg-[rgba(16,25,46,.644)] overflow-hidden shadow-md shadow-black relative my-5">
          <Image
            width={430}
            height={250}
            src={sliderimage.src}
            className="absolute top-0 left-0 -z-10"
            alt="Slider image"
          />
          <h2 className="text-[22px] text-center text-white px-[30px]">
            Registration of permitting procedures for a foreign worker
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[320px] h-[300px] grid place-content-center object-cover bg-[rgba(16,25,46,.644)] overflow-hidden shadow-md shadow-black relative my-5">
          <Image
            width={430}
            height={250}
            src={sliderimage.src}
            className="absolute top-0 left-0 -z-10"
            alt="Slider image"
          />
          <h2 className="text-[22px] text-center text-white px-[30px]">
            Registration of permitting procedures for a foreign worker
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[320px] h-[300px] grid place-content-center object-cover bg-[rgba(16,25,46,.644)] overflow-hidden shadow-md shadow-black relative my-5">
          <Image
            width={430}
            height={250}
            src={sliderimage.src}
            className="absolute top-0 left-0 -z-10"
            alt="Slider image"
          />
          <h2 className="text-[22px] text-center text-white px-[30px]">
            Registration of permitting procedures for a foreign worker
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[320px] h-[300px] grid place-content-center object-cover bg-[rgba(16,25,46,.644)] overflow-hidden shadow-md shadow-black relative my-5">
          <Image
            width={430}
            height={250}
            src={sliderimage.src}
            className="absolute top-0 left-0 -z-10"
            alt="Slider image"
          />
          <h2 className="text-[22px] text-center text-white px-[30px]">
            Registration of permitting procedures for a foreign worker
          </h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
