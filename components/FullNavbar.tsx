"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { Menu, X } from "lucide-react"; // or any other icon library you prefer
import { motion, AnimatePresence } from "framer-motion";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black flex flex-col justify-between sticky top-0 z-[9999] border-b border-gray-800">
      {/* Top Row */}
      <div className="w-full m-auto flex items-center justify-between py-1 px-4 sm:px-8 gap-4">
        {/* Logo */}
        <div className="relative w-14 h-14 md:w-16 md:h-16">
          <Image
            src="/images/neon-logo-sm.png"
            alt="xlanes logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Marquee */}
        <div className="flex-1 mx-4 overflow-hidden hidden sm:block">
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
                      <span className="mx-4 h-2 w-2 rounded-full bg-zinc-800" />
                    )}
                  </span>
                ))}
              </h3>
            </Marquee>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <Menu size={32} />
        </button>

        {/* Reservation Buttons */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <a
            href="https://alleytrak.com/app/client/4425"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-pink-600 hover:bg-pink-700 transition duration-200 text-white px-4 py-2 rounded-4xl"
          >
            Bowling Reservation
          </a>
          <a
            href="https://alleytrak.com/app/client/4425"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-pink-600 hover:bg-pink-700 transition duration-200 text-white px-4 py-2 rounded-4xl"
          >
            Karaoke Reservation
          </a>
        </div>
      </div>

      {/* Bottom Nav Menu (Desktop Only) */}
      <div className="w-full p-3 justify-center bg-[#0f0f0f] border-t  border-gray-800 hidden lg:flex">
        <ul className="text-sm flex items-center gap-8 text-gray-300 tracking-wide">
          {[
            ["Home", "/"],
            ["Bowling", "/#bowling"],
            ["Arcade", "/#arcade"],
            ["Billiards", "/#billiards"],
            ["Karaoke", "/#karaoke"],
            ["Food", "/food"],
            ["Drinks", "/drinks"],
            ["Book an Event", "/events"],
            ["Contact Us", "/#contact"],
          ].map(([label, href], i) => (
            <li key={i}>
              <Link
                href={href}
                className="uppercase hover:text-white transition duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#101010] z-[9999] flex flex-col items-center justify-center text-white text-lg gap-2 lg:hidden"
          >
            <div className="absolute top-4 left-4 flex items-center gap-2 shrink-0">
              <a
                href="https://alleytrak.com/app/client/4425"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-pink-600 hover:bg-pink-700 transition duration-200 text-white px-4 py-2 rounded-4xl"
              >
                Bowling Reservation
              </a>
              <a
                href="https://alleytrak.com/app/client/4425"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-pink-600 hover:bg-pink-700 transition duration-200 text-white px-4 py-2 rounded-4xl"
              >
                Karaoke Reservation
              </a>
            </div>
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-pink-600 cursor-pointer"
            >
              <X size={32} />
            </button>

            {/* Mobile nav links */}
            {[
              ["Home", "/"],
              ["Bowling", "/#bowling"],
              ["Arcade", "/#arcade"],
              ["Billiards", "/#billiards"],
              ["Karaoke", "/#karaoke"],
              ["Food", "/food"],
              ["Drinks", "/drinks"],
              ["Book an Event", "/events"],
              ["Contact Us", "/#contact"],
            ].map(([label, href], i) => (
              <Link
                key={i}
                href={href}
                className="uppercase text-gray-300 hover:text-[#101010] text-lg md:text-2xl px-4 py-2 hover:bg-pink-600 transition duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="flex gap-4 text-zinc-400 mt-2">
              <Link
                href=""
                className="h-10 w-10 rounded-full flex justify-center items-center 
                hover:bg-gray-50 hover:text-zinc-900 transition duration-200 cursor-pointer"
              >
                <RiTwitterXFill size={21} />
              </Link>
              <Link
                href=""
                className="h-10 w-10 rounded-full flex justify-center items-center 
                hover:bg-gray-50 hover:text-zinc-900 transition duration-200 cursor-pointer"
              >
                <RiFacebookFill size={21} />
              </Link>
              <Link
                href=""
                className="h-10 w-10 rounded-full flex justify-center items-center 
                hover:bg-gray-50 hover:text-zinc-900 transition duration-200 cursor-pointer"
              >
                <RiInstagramFill size={21} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
