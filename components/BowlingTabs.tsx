"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";
import Bowling from "./Bowling";
import VIP from "./VIP";

const BowlingTabs = () => {
  const [activeTab, setActiveTab] = useState<"bowling" | "vip">("bowling");

  return (
    <div className="w-full max-w-[1100px] mx-auto my-12 flex flex-col gap-8 items-center">
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("bowling")}
          className={`cursor-pointer px-6 py-2 rounded-full text-lg font-medium transition duration-200 ${
            activeTab === "bowling"
              ? "bg-pink-600 border border-pink-600 text-white"
              : "text-pink-600 border border-pink-600 hover:bg-pink-600 hover:text-white transition duration-150"
          }`}
        >
          Bowling Rates
        </button>
        <button
          onClick={() => setActiveTab("vip")}
          className={`cursor-pointer px-6 py-2 rounded-full text-lg font-medium transition duration-200 ${
            activeTab === "vip"
              ? "bg-pink-600 border border-pink-600 text-white"
              : "text-pink-600 border border-pink-600 hover:bg-pink-600 hover:text-white transition duration-150"
          }`}
        >
          VIP Rooms
        </button>
      </div>

      {/* Animated Content */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          {activeTab === "bowling" && (
            <motion.div
              key="bowling"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-12 items-center"
            >
              <Bowling />
            </motion.div>
          )}

          {activeTab === "vip" && (
            <motion.div
              key="vip"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-12 items-center"
            >
              {/* Banner */}
              <div
                className="flex relative h-48 md:h-64 lg:h-72 w-full rounded-2xl 
              overflow-hidden bg-gradient-to-tl from-purple-700 to-pink-600"
              >
                <div className="absolute bottom-2 z-10 md:relative flex-1 flex items-center pl-4 lg:pl-10">
                  <div className="text-left max-w-xl lg:max-w-md">
                    <p className="font-light text-gray-50 text-lg lg:text-3xl uppercase">
                      Book Your
                    </p>
                    <h3 className="text-4xl lg:text-5xl font-semibold text-gray-50 uppercase">
                      VIP ROOM
                    </h3>
                    <p className="mt-4 text-gray-200 text-sm lg:text-md pr-2 hidden md:flex">
                      VIP rooms are secluded from the rest of the lanes. Food &
                      Beverage minimums are only applied to Friday & Saturday
                      reservations.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-[500px] lg:w-[600px] h-full relative">
                  <Image
                    src="/images/mulholland.png"
                    alt="mulholland vip"
                    fill
                    className="object-cover object-right z-0"
                  />
                </div>
              </div>

              <VIP />

              <button
                className="capitalize text-sm md:text-xl border border-pink-600 text-pink-600 px-6 py-2 
                rounded-4xl hover:text-gray-100 hover:bg-pink-600 transition duration-200 cursor-pointer
                flex items-center gap-2"
              >
                Download our event information proposal{" "}
                <IconDownload className="w-4 h-4 lg:h-6 lg:w-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BowlingTabs;
