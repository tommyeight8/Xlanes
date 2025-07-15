import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const Navbar = () => {
  return (
    <div className="bg-[#101010] flex flex-col justify-between sticky top-0 z-[9999]">
      {/* Top Row */}
      <div className="w-full m-auto flex items-center justify-between py-1 px-21 gap-4">
        {/* Logo */}
        <Image
          src="/images/neon-logo-sm.png"
          alt="xlanes logo"
          width={70}
          height={70}
          className="object-contain"
        />

        {/* Marquee */}
        <div className="flex-1 mx-4 overflow-hidden">
          <div className="font-thin text-4xl text-zinc-600 h-[48px]">
            <Marquee
              speed={50}
              gradient={false}
              className="overflow-hidden h-full items-center"
            >
              <h3 className="flex items-center gap-4 leading-[48px]">
                {[
                  "BOWLING",
                  "ARCADE",
                  "KARAOKE",
                  "BILLIARDS",
                  "EAT",
                  "PLAY",
                ].map((word, index, array) => (
                  <span key={index} className="flex items-center">
                    {word}
                    {index < array.length - 1 && (
                      <span className="mx-4 h-2 w-2 rounded-full bg-zinc-800">
                        &nbsp;
                      </span>
                    )}
                  </span>
                ))}
              </h3>
            </Marquee>
          </div>
        </div>

        {/* Reservation Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href={"/"}
            className="text-xs bg-pink-600 hover:bg-pink-700 transition duration-200 cursor-pointer text-white px-4 py-2 rounded-4xl"
          >
            Bowling Reservation
          </Link>
          <Link
            href={"/"}
            className="text-xs bg-pink-600 hover:bg-pink-700 transition duration-200 cursor-pointer text-white px-4 py-2 rounded-4xl"
          >
            Karaoke Reservation
          </Link>
        </div>
      </div>

      {/* Bottom Nav Menu */}
      <div className="w-full p-3 flex justify-center bg-[#1a1a1a] border-t border-b border-zinc-800">
        <ul className="text-sm flex items-center gap-8 text-gray-300 tracking-wide">
          <li className="transition duration-200 hover:text-white cursor-pointer uppercase">
            Home
          </li>
          <li>
            <a
              href="/#bowling"
              className="transition duration-200 hover:text-white cursor-pointer uppercase"
            >
              Bowling
            </a>
          </li>
          <li>
            <a
              href="/#arcade"
              className="transition duration-200 hover:text-white cursor-pointer uppercase"
            >
              Arcade
            </a>
          </li>
          <li>
            <a
              href="/#billiards"
              className="transition duration-200 hover:text-white cursor-pointer uppercase"
            >
              Billiards
            </a>
          </li>
          <li>
            <a
              href="/#karaoke"
              className="transition duration-200 hover:text-white cursor-pointer uppercase"
            >
              Karaoke
            </a>
          </li>
          <Link href={"/food"}>
            <li className="transition duration-200 hover:text-white cursor-pointer uppercase">
              Food
            </li>
          </Link>
          <Link href={"/drinks"}>
            <li className="transition duration-200 hover:text-white cursor-pointer uppercase">
              Drinks
            </li>
          </Link>
          <Link href="/events">
            <li className="transition duration-200 hover:text-white cursor-pointer uppercase">
              Book an Event
            </li>
          </Link>
          <li className="transition duration-200 hover:text-white cursor-pointer uppercase">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
