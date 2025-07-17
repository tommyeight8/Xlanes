"use client";
import {
  IconLocation,
  IconLocationPin,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  RiTwitterXFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";
import { FaCar } from "react-icons/fa";

function AnimatedBanner() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      className="absolute left-1/2 -translate-x-1/2 top-4 md:top-8 text-center rounded-4xl flex items-center leading-none gap-2 justify-center 
       w-[90%] sm:w-auto p-1 md:p-2 bg-gradient-to-l from-pink-600 to-violet-600 text-white border-2 border-pink-600"
    >
      <span
        className="text-sm h-6 w-6 md:w-10 md:h-10 bg-gray-200 flex justify-center 
      items-center rounded-full flex-shrink-0
"
      >
        <FaCar className="text-purple-700 w-[18px] h-[18px] sm:w-6 sm:h-6" />
      </span>
      <span className="text-xs md:text-sm">
        We’re in the Little Tokyo Galleria on the 3rd Floor. (Parking Validation
        Available)
      </span>
    </motion.div>
  );
}

const Footer = () => {
  return (
    <div className="w-full h-auto pt-16 p-8 m-auto relative">
      <AnimatedBanner />
      <div className="flex flex-col justify-between lg:flex-row gap-8 text-gray-300 py-18 border-zinc-900 border-0 md:border-t">
        <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 lg:gap-0 lg:flex-col w-full lg:w-[30%] text-sm">
          <div className="relative w-28 h-28 flex shrink-0">
            <Image
              src="/images/neon-logo-sm.png"
              alt="xlanes logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="max-w-2xl lg:hidden">
            Our friendly and professional staff are always on hand to help you
            with anything. From setting up your bowling lanes to recommending
            the best menu or drink items, we’re committed to providing you with
            the best possible experience at XLanes.
          </div>
          <div className="hidden lg:flex max-w-2xl">
            Our friendly and professional staff are always on hand to help you
            with anything. From setting up your bowling lanes to recommending
            the best menu or drink items, we’re committed to providing you with
            the best possible experience at XLanes.
          </div>
        </div>
        <div className="flex flex-wrap gap-8 md:gap-6 md:justify-between w-full lg:w-[70%]">
          <div className="flex flex-col gap-4 text-sm">
            <h3 className="text-pink-600">Our Company</h3>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-300 hover:text-gray-50 transition duration-200 cursor-pointer">
                Home
              </li>
              <Link href="/about">
                <li className="text-gray-300 hover:text-gray-50 transition duration-200 cursor-pointer">
                  About
                </li>
              </Link>
              <Link href="/faq">
                <li className="text-gray-300 hover:text-gray-50 transition duration-200 cursor-pointer">
                  FAQ
                </li>
              </Link>
              <li className="text-gray-300 hover:text-gray-50 transition duration-200 cursor-pointer">
                Bowling Rates
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <h3 className="text-pink-600">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <Link href="/sports-bar">
                <li className="text-gray-300 hover:text-gray-50 transition duration-200 cursor-pointer">
                  Sports Bar
                </li>
              </Link>
              <li className="text-gray-300 hover:text-gray-50 transition duration-200 cursor-pointer">
                Bowling
              </li>
              <li className="text-gray-300 hover:text-gray-50 transition duration-200 cursor-pointer">
                Blogs
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <h3 className="text-pink-600">Business Hours</h3>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-400">
                <span className="font-semibold text-gray-50">Mon - Thu</span>
                {"  "}
                5:00 PM - 11:30 PM
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-gray-50">Fri</span>
                {"  "} 5:00 PM - 2:00 AM
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-gray-50">Sat</span>
                {"  "} 11:30 AM - 2:00 AM
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-gray-50">Sun</span>
                {"  "} 11:30 AM - 11:30 PM
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <h3 className="text-pink-600">Information</h3>
            <ul className="flex flex-col gap-3">
              <li
                className="text-gray-200 flex
              items-center gap-2
            "
              >
                <IconMapPin
                  size={18}
                  className="text-pink-600 w-[18px] h-[18px]"
                />{" "}
                333 S. Alameda St #300 Los Angeles, CA 90013
              </li>
              <li
                className="text-gray-200 flex
              items-center gap-2"
              >
                <IconMail size={18} className="text-pink-600" />
                Info@XLanesLA.com
              </li>
              <li
                className="text-gray-200 flex
              items-center gap-2"
              >
                <IconMail size={18} className="text-pink-600" />
                Events@XLanesLA.com
              </li>{" "}
              <li
                className="text-gray-200 flex
              items-center gap-2"
              >
                <IconPhone size={18} className="text-pink-600" />
                (213) 229-8910
              </li>
              <div className="flex gap-4 text-zinc-900 mt-2">
                <Link
                  href=""
                  className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center 
                hover:bg-gray-50 transition duration-200 cursor-pointer"
                >
                  <RiTwitterXFill size={21} />
                </Link>
                <Link
                  href=""
                  className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center 
                hover:bg-gray-50 transition duration-200 cursor-pointer"
                >
                  <RiFacebookFill size={21} />
                </Link>
                <Link
                  href=""
                  className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center 
                hover:bg-gray-50 transition duration-200 cursor-pointer"
                >
                  <RiInstagramFill size={21} />
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <div className="flex gap-4 py-4">
          <Link
            href=""
            className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center 
            hover:bg-gray-50 hover:text-white transition duration-200 cursor-pointer"
          >
            <RiTwitterXFill size={21} />
          </Link>
          <Link
            href=""
            className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center 
            hover:bg-gray-50 hover:text-white transition duration-200 cursor-pointer"
          >
            <RiFacebookFill size={21} />
          </Link>
          <Link
            href=""
            className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center 
            hover:bg-gray-50 hover:text-white transition duration-200 cursor-pointer"
          >
            <RiInstagramFill size={21} />
          </Link>
        </div>
      </div> */}
      <div className="border-t border-zinc-900 text-zinc-700 text-center text-xs pt-4">
        © 2025 XLanesLA. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
