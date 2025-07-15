import { IconExclamationCircle } from "@tabler/icons-react";
import React from "react";

const Bowling = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
      {/* Westwood Room */}
      <div className="border-4 border-pink-600 shadow-[0_0_15px_#ec4899] rounded-2xl overflow-hidden flex flex-col">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-200 mb-2">Per Game</h3>
        </div>
        <div className="p-6">
          <p className="text-gray-100 mb-2">
            <strong>Walk-Ins only</strong> – 2hrs max
          </p>
          <p className="text-pink-500 text-xs mb-4 flex items-center p-1 rounded-md bg-pink-500/20 border border-pink-500 gap-2">
            <IconExclamationCircle size={24} /> Per-game rates are not available
            on holidays.
          </p>
          <div className="text-gray-100">
            <strong>Mon - Thu </strong>$10 Per game/per person
          </div>
        </div>
      </div>

      {/* Brentwood Room */}
      <div className="border-4 border-pink-600 shadow-[0_0_15px_#ec4899] rounded-2xl overflow-hidden flex flex-col">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-200 mb-2">
            General Lanes
          </h3>
        </div>
        <div className="p-6">
          <p className="text-gray-100 mb-2">
            <strong>Mon - Thu</strong> – $50/Hr per lane
          </p>
          <p className="text-gray-100 mb-2">
            <strong>Sun</strong> – $55/Hr per lane
          </p>
          <p className="text-gray-100 mb-2">
            <strong>Fri - Sat</strong> – $65/Hr per lane
          </p>
        </div>
      </div>

      {/* Mulholland Room */}
      <div className="border-4 border-pink-600 shadow-[0_0_15px_#ec4899] rounded-2xl overflow-hidden flex flex-col">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-200 mb-2">
            Shoes & Socks
          </h3>
        </div>
        <div className="p-6">
          <p className="text-gray-100 mb-2">
            <strong>Shoe Rental</strong> – $5
          </p>
          <p className="text-gray-100 mb-2">
            <strong>Socks</strong> – $4.50
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bowling;
