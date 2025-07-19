// components/FullscreenSwiper.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function AnimatedHeading({ text, active }: { text: string; active: boolean }) {
  const controls = useAnimation();

  useEffect(() => {
    if (active) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.2, // longer duration
          ease: [0.08, 0.82, 0.17, 1],
          delay: 0.2, // slight delay
        },
      });
    } else {
      controls.set({ x: 200, opacity: 0 }); // animate from farther right
    }
  }, [active, controls]);

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }} // start farther off-screen
      animate={controls}
      className="absolute top-[75%] right-0 z-10 p-4 bg-gradient-to-r from-violet-700/70 to-purple-700/70 pr-10"
    >
      <h3 className="text-right text-3xl lg:text-6xl font-semibold uppercase text-gray-100 tracking-wide drop-shadow-md">
        {text}
      </h3>
    </motion.div>
  );
}

export default function FullscreenSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-auto mobile-h-minus-78">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={500}
        className="w-full h-full"
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        <SwiperSlide>
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatedHeading
              text="30 Bowling Lanes"
              active={activeIndex === 0}
            />
            <Image
              src="/images/bowlingMain-2.webp"
              alt="Bowling"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatedHeading
              text="Private Karaoke Rooms"
              active={activeIndex === 1}
            />
            <Image
              src="/images/karaokeMain-3.webp"
              alt="Karaoke"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatedHeading
              text="6 Pro Pool Tables"
              active={activeIndex === 2}
            />
            <Image
              src="/images/BilliardsMain.png"
              alt="Billiards"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatedHeading
              text="Full Sports Bar"
              active={activeIndex === 3}
            />
            <Image
              src="/images/barMain-2.webp"
              alt="Sports Bar"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
