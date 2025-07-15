import DrinkMenu from "@/components/DrinkMenu";
import BookEvent from "@/components/BookEvent";
import Image from "next/image";
import React from "react";
import EventForm from "@/components/EventForm";

const page = () => {
  return (
    <div className="p-4 w-full flex justify-center items-center flex-col mb-12">
      <div className="max-w-[900px] mt-8">
        <div className="relative rounded-2xl bg-gray-700 overflow-hidden flex">
          <div
            className="absolute bottom-2 z-10 md:bottom-0 md:relative w-fit md:w-1/2 
          p-0 bg-transparent md:bg-gradient-to-br from-violet-700 to-pink-600 md:p-10"
          >
            <div className="text-left max-w-md bg-gradient-to-br from-violet-700/80 to-pink-600/80  md:bg-transparent p-2">
              <p className="font-light text-gray-50 text-md md:text-xl uppercase">
                Book Now
              </p>
              <h3 className="text-2xl md:text-4xl font-semibold text-gray-50 uppercase">
                Events & Celebrations
              </h3>
              <p className="mt-4 text-gray-200 text-sm hidden md:flex">
                Excite your staff/team/friends, and family members and throw
                your next special event at XLanes LA. From Corporate Events,
                Corporate Buyouts, Birthdays, Social Events, Kid, Teen, and
                Adult Parties. We can customize a package that fits your needs.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-54 md:h-auto relative">
            <Image
              src="/images/events-1.webp"
              alt="drinks"
              fill
              className="object-cover object-[center_25%] md:object-top"
            />
          </div>
        </div>
        <div className="max-w-[900px]">
          <EventForm />
        </div>
      </div>
    </div>
  );
};

export default page;
