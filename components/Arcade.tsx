"use client";
import React from "react";
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

const images = [
  "/images/arcade-2.jpg",
  "/images/arcade.jpg",
  "/images/arcade-2.jpg",
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

export function Arcade() {
  return (
    <div>
      <BackgroundGradient
        className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 
      flex gap-8"
      >
        <div className="w-1/3">
          <p className="uppercase text-2xl font-semibold mt-4 mb-2 dark:text-neutral-200">
            Get Ready, Go!
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Blow off some steam on our state-of-the-art Arcade Center. It’s
            non-stop gaming fun with both new and classic games.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-gradient-to-l bg-violet-500 to-pink-500 mt-4 text-xs font-bold dark:bg-zinc-800">
            <span className="capitalize">new game card</span>
            <span className="bg-violet-400 rounded-full text-xs h-6 w-6 flex justify-center items-center text-white">
              $1
            </span>
          </button>
          <div className="text-gray-600 w-full max-w-[220px] p-3 rounded-2xl bg-gray-100 mt-4 flex flex-col gap-2">
            <p className="flex justify-between p-1 px-2 bg-gray-200 rounded-md">
              <span>25 Credits</span>
              <span className="font-semibold">$5</span>
            </p>
            <p className="flex justify-between p-1 px-2 bg-gray-200 rounded-md">
              <span>50 Credits</span>
              <span className="font-semibold">$10</span>
            </p>
            <p className="flex justify-between p-1 px-2 bg-gray-200 rounded-md">
              <span>100 Credits</span>
              <span className="font-semibold">$20</span>
            </p>
          </div>
        </div>
        <div className="w-2/3">
          <ImageCarousel />
        </div>
      </BackgroundGradient>
    </div>
  );
}
