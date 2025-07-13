// components/FullscreenSwiper.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function FullscreenSwiper() {
  return (
    <div style={{ height: "calc(100vh - 115px)" }} className="w-full">
      <Swiper
        // modules={[Pagination, Autoplay]}
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        // speed={500}
        className="w-full h-full"
        // loop={true}
      >
        <SwiperSlide>
          <div className="relative w-full h-full bg-red-500 flex items-center justify-center text-white text-4xl">
            <div className="absolute top-[75%] right-0 z-10 p-4 bg-gradient-to-r from-violet-700/70 to-pink-700/70  pr-10">
              <h3 className="text-4xl font-bold uppercase text-gray-200">
                30 Bowling Lanes
              </h3>
            </div>
            <Image
              src="/images/XlanesBowlingMain.png"
              alt="Bowling"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full bg-blue-500 flex items-center justify-center text-white text-4xl">
            <div className="absolute top-[75%] right-0 z-10 p-4 bg-gradient-to-r from-violet-700/70 to-pink-700/70  pr-10">
              <h3 className="text-4xl font-bold uppercase text-gray-200">
                Private Karaoke Rooms
              </h3>
            </div>
            <Image
              src="/images/KaraokeMain.png"
              alt="Bowling"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full bg-green-500 flex items-center justify-center text-white text-4xl">
            <div className="absolute top-[75%] right-0 z-10 p-4 bg-gradient-to-r from-violet-700/70 to-pink-700/70  pr-10">
              <h3 className="text-4xl font-bold uppercase text-gray-200">
                6 Pro Pool Tables
              </h3>
            </div>
            <Image
              src="/images/BilliardsMain.png"
              alt="Bowling"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full bg-blue-500 flex items-center justify-center text-white text-4xl">
            <div className="absolute top-[75%] right-0 z-10 p-4 bg-gradient-to-r from-violet-700/70 to-pink-700/70  pr-10">
              <h3 className="text-4xl font-bold uppercase text-gray-200">
                Full Sports Bar
              </h3>
            </div>
            <Image
              src="/images/BarMain.png"
              alt="Bowling"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
