"use client";
import React, { useRef } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Image from "next/image";
import {
  IconArrowLeft,
  IconArrowRight,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { PiUsersBold } from "react-icons/pi";

import { useInView } from "framer-motion";

const images = [
  "/images/karaoke-1.jpg",
  "/images/karaoke-3.jpg",
  "/images/karaoke-2.jpg",
];

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div>
      <div className="w-full max-w-4xl mx-auto overflow-hidden">
        {/* Carousel */}
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex gap-4">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="flex-[0_0_75%] md:flex-[0_0_50%] relative h-54 md:h-72 px-2"
              >
                <Image
                  src={src}
                  alt={`Room ${idx + 1}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Buttons (stacked on right) */}
      <div className="flex gap-2 justify-end mt-4">
        <button
          onClick={scrollPrev}
          className="cursor-pointer transition duration-200 hover:bg-zinc-800 hover:text-white text-zinc-600 border border-zinc-600 rounded-full h-8 w-8 flex justify-center items-center text-sm shadow"
        >
          <IconChevronLeft />
        </button>
        <button
          onClick={scrollNext}
          className="cursor-pointer transition duration-200 hover:bg-zinc-800 hover:text-white text-zinc-600 border border-zinc-600 rounded-full h-8 w-8 flex justify-center items-center text-sm shadow"
        >
          <IconChevronRight />
        </button>
      </div>
    </div>
  );
};

export default function Karaoke() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div>
      <BackgroundGradient
        className="rounded-[22px] p-4 sm:p-10 bg-[#101010] dark:bg-zinc-900 
          flex flex-col lg:flex-row gap-6"
      >
        <div className="w-full flex-col md:flex-row lg:w-1/3">
          <p className="uppercase text-2xl font-semibold mb-2 text-gray-200">
            Sing Your Heart Out!
          </p>

          <p className="text-sm text-gray-300 dark:text-neutral-400">
            Host an unforgettable karaoke event in one of our four unique rooms.
            You and your friends can unleash your inner superstar with the
            latest tracks and top-notch sound systems. Reserve your room online
            now to take the stage like a pro!
          </p>

          <div className="flex md:flex-row gap-2 md:gap-4">
            <div className="w-full lg:w-1/2">
              <button className="rounded-full pl-4 p-1 text-white flex items-center space-x-1 bg-gradient-to-l bg-violet-600 to-pink-600 mt-4 text-xs font-bold">
                <span className="capitalize">Rooms</span>
                <span className="bg-violet-500 rounded-full text-xs h-6 w-6 flex justify-center items-center text-white">
                  1
                </span>
                <span className="bg-violet-500 rounded-full text-xs h-6 w-6 flex justify-center items-center text-white">
                  2
                </span>
                <span className="bg-violet-500 rounded-full text-xs h-6 w-6 flex justify-center items-center text-white">
                  3
                </span>
              </button>
              <p className="text-xs text-gray-400 ml-2 mt-2 flex items-center gap-1">
                <PiUsersBold size={16} />
                Max capacity 12
              </p>
              <div className="text-gray-200 text-sm w-full p-3 rounded-xl bg-gray-600/20 mt-4 flex flex-col gap-2">
                <p className="flex justify-between p-1 px-2 bg-gray-700 rounded-md">
                  <span>Mon - Thu</span>
                  <span className="font-semibold">$50/hr</span>
                </p>
                <p className="flex justify-between p-1 px-2 bg-gray-700 rounded-md">
                  <span>Fri - Sat</span>
                  <span className="font-semibold">$90/hr</span>
                </p>
                <p className="flex justify-between p-1 px-2 bg-gray-700 rounded-md">
                  <span>Sun</span>
                  <span className="font-semibold">$80/hr</span>
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <button className="rounded-full pl-4 p-1 text-white flex items-center space-x-1 bg-gradient-to-l bg-violet-600 to-pink-600 mt-4 text-xs font-bold">
                <span className="capitalize">Room</span>
                <span className="bg-violet-500 rounded-full text-xs h-6 w-6 flex justify-center items-center text-white">
                  4
                </span>
              </button>
              <p className="text-xs text-gray-400 ml-2 mt-2 flex items-center gap-1">
                <PiUsersBold size={16} />
                Max capacity 20
              </p>
              <div className="text-gray-200 text-sm w-full p-3 rounded-xl bg-gray-600/20 mt-4 flex flex-col gap-2">
                <p className="flex justify-between p-1 px-2 bg-gray-700 rounded-md">
                  <span>Mon - Thu</span>
                  <span className="font-semibold">$100/hr</span>
                </p>
                <p className="flex justify-between p-1 px-2 bg-gray-700 rounded-md">
                  <span>Fri - Sun</span>
                  <span className="font-semibold">$150/hr</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <ImageCarousel />
        </div>
      </BackgroundGradient>
    </div>
  );
}
