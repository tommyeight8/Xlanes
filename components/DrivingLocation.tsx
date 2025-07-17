"use client";
import React, { useRef } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function DrivingLocation() {
  const ref = useRef(null);

  return (
    <div>
      <BackgroundGradient
        className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 
          flex flex-col lg:flex-row gap-6"
      >
        <div className="flex-col w-full lg:w-1/3">
          <p className="uppercase text-2xl font-semibold mb-2 text-zinc-800">
            Located in Downtown Los Angeles!
          </p>

          <p className="text-sm text-zinc-800 dark:text-neutral-400">
            We’re located on the third floor of the Little Tokyo Galleria in a
            massive 50,000 Square Feet Entertainment space. Parking validation
            available! Stop by today and enjoy everything XLanes LA has to offer
            in our fun, spacious venue!
          </p>
        </div>
        <div className="w-full lg:w-2/3">
          <iframe
            title="XLanes LA Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.855571213487!2d-118.24088768478266!3d34.04509768060962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c639a6f4292d%3A0xff6517f71cd550c9!2sXLanes%20LA!5e0!3m2!1sen!2sus!4v1710780323409!5m2!1sen!2sus"
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            style={{ border: 0, borderRadius: "16px" }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </BackgroundGradient>
    </div>
  );
}
