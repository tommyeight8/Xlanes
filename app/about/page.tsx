import NeonSign from "@/components/NeonSign";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/about-bg.webp')",
      }}
      className="min-h-screen w-full flex justify-center items-center py-12 px-4 pb-16
      bg-fixed bg-no-repeat bg-cover bg-center bg-gradient-to-br from-violet-600 to-pink-600"
    >
      <div className="max-w-[900px] w-full rounded-2xl bg-white/10 backdrop-blur-md shadow-lg px-8 pt-0 pb-8 border border-white/20">
        <About />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <NeonSign text="About Us" />
      {/* <h3 className="text-4xl text-violet-600 text-center my-8 font-semibold">
        About Us
      </h3> */}
      <div className="w-full h-96 rounded-2xl overflow-hidden relative">
        <Image
          src="/images/bowlingMain-1.webp"
          alt="about us banner"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col gap-6 text-gray-50 text-shadow-2xs mt-8">
        <p>
          Our entertainment center is the ultimate destination for anyone
          looking for a good time. With 30 bowling lanes, arcade games, a full
          sports bar, a separate restaurant area, billiards, darts, 4 private
          karaoke rooms, 3 private VIP bowling rooms, and more, we have
          everything you need to create unforgettable memories.
        </p>
        <p>
          From the moment you step foot in our center, you’ll be transported to
          a world of fun and entertainment. Our state-of-the-art facilities are
          designed to cater to all ages, ensuring that everyone has a great
          time. Whether you’re looking to bowl a perfect game, beat the high
          score on your favorite arcade game, or relax with friends and family,
          there’s something for everyone at our center.
        </p>
        <p>
          Our friendly and professional staff are always on hand to help you
          with anything. From setting up your bowling lanes to recommending the
          best menu or drink items, we’re committed to providing you with the
          best possible experience at XLanes. And with our commitment to safety
          and cleanliness, you can rest assured that you’re in good hands. So
          why wait? Come and experience the ultimate family-friendly
          entertainment center in Downtown Los Angeles. Parking validation is
          available!
        </p>
      </div>
    </>
  );
};

export default page;
