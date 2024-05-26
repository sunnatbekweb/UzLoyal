"use client";
import Link from "next/link";
import cardImage from "@/publicarticleCard_image.jpeg";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/srcstyles/cardSwiper.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const CardSlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="rounded-xl overflow-hidden pb-[60px]">
          <div>
            <Image width={430} height={250} src={cardImage.src} alt="Card image" />
          </div>
          <div className="py-[30px]">
            <ul className="flex items-center gap-x-10 text-[#bebebe] text-lg mb-5">
              <li>2023-12-05</li>
              <li className="list-disc">Xushnudbek Xudoyberdiyev</li>
            </ul>
            <h2 className="text-[#1e2e3e] text-[26px] font-medium mb-[25px] leading-9">
              <Link href="">Onix and Tracker cars withdrawn from sale</Link>
            </h2>
            <Link href="" className="read_more-btn">
              Read more
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-xl overflow-hidden pb-[60px]">
          <div>
            <Image width={430} height={250} src={cardImage.src} alt="Card image" />
          </div>
          <div className="py-[30px]">
            <ul className="flex items-center gap-x-10 text-[#bebebe] text-lg mb-5">
              <li>2023-12-05</li>
              <li className="list-disc">Xushnudbek Xudoyberdiyev</li>
            </ul>
            <h2 className="text-[#1e2e3e] text-[26px] font-medium mb-[25px] leading-9">
              <Link href="">Onix and Tracker cars withdrawn from sale</Link>
            </h2>
            <Link href="" className="read_more-btn">
              Read more
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-xl overflow-hidden pb-[60px]">
          <div>
            <Image width={430} height={250} src={cardImage.src} alt="Card image" />
          </div>
          <div className="py-[30px]">
            <ul className="flex items-center gap-x-10 text-[#bebebe] text-lg mb-5">
              <li>2023-12-05</li>
              <li className="list-disc">Xushnudbek Xudoyberdiyev</li>
            </ul>
            <h2 className="text-[#1e2e3e] text-[26px] font-medium mb-[25px] leading-9">
              <Link href="">Onix and Tracker cars withdrawn from sale</Link>
            </h2>
            <Link href="" className="read_more-btn">
              Read more
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-xl overflow-hidden pb-[60px]">
          <div>
            <Image width={430} height={250} src={cardImage.src} alt="Card image" />
          </div>
          <div className="py-[30px]">
            <ul className="flex items-center gap-x-10 text-[#bebebe] text-lg mb-5">
              <li>2023-12-05</li>
              <li className="list-disc">Xushnudbek Xudoyberdiyev</li>
            </ul>
            <h2 className="text-[#1e2e3e] text-[26px] font-medium mb-[25px] leading-9">
              <Link href="">Onix and Tracker cars withdrawn from sale</Link>
            </h2>
            <Link href="" className="read_more-btn">
              Read more
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-xl overflow-hidden pb-[60px]">
          <div>
            <Image width={430} height={250} src={cardImage.src} alt="Card image" />
          </div>
          <div className="py-[30px]">
            <ul className="flex items-center gap-x-10 text-[#bebebe] text-lg mb-5">
              <li>2023-12-05</li>
              <li className="list-disc">Xushnudbek Xudoyberdiyev</li>
            </ul>
            <h2 className="text-[#1e2e3e] text-[26px] font-medium mb-[25px] leading-9">
              <Link href="">Onix and Tracker cars withdrawn from sale</Link>
            </h2>
            <Link href="" className="read_more-btn">
              Read more
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CardSlider;
