import DrinkMenu from "@/components/DrinkMenu";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="py-12 px-4 w-full flex justify-center items-center flex-col mb-12">
      <div className="w-full max-w-[1100px]">
        <div
          className="flex relative h-48 md:h-64 lg:h-72 w-full rounded-2xl overflow-hidden 
                bg-gradient-to-br from-pink-500 to-pink-600"
        >
          <div
            className="md:w-1/2 absolute bottom-2 z-10 md:relative flex-1 flex items-center pl-4 lg:pl-10
                  bg-gradient-to-br from-pink-500/80 to-pink-600/80 md:bg-transparent py-2 px-4"
          >
            <div className="text-left max-w-xl lg:max-w-md">
              <p className="font-light text-gray-50 text-md md:text-xl lg:text-3xl uppercase">
                For All Foodie
              </p>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-50 uppercase">
                Full Restaurant
              </h3>
              <p className="mt-4 text-gray-200 text-sm lg:text-md pr-2 hidden md:flex">
                Whether you’re looking for a quick bite or a delightful dining
                experience, we have something for everyone. Enjoy our delicious
                food while you hit up the lanes.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full relative">
            <Image
              src="/images/drinks-banner.webp"
              alt="mulholland vip"
              fill
              className="object-cover object-right z-0"
            />
          </div>
        </div>

        <div>
          <DrinkMenu />
        </div>
      </div>
    </div>
  );
};

export default page;
