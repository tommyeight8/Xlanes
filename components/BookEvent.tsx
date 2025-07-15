"use client";

import {
  burgersAndSandwiches,
  entreesAndPastas,
  salads,
  pizza,
  beveragesAndMore,
  happyHour,
} from "@/data/food";
import React, { useState } from "react";
import { Input } from "./ui/input";

const tabs = [
  "Happy Hour",
  "Pizzas",
  "Burgers & Sandwiches",
  "Entrees & Pastas",
  "Salads",
  "Beverages & Desserts",
];

const BookEvent = () => {
  const [activeTab, setActiveTab] = useState("Happy Hour");

  const renderContent = () => {
    switch (activeTab) {
      case "Happy Hour":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {happyHour.map((section, i) => (
              <div
                key={i}
                className="relative p-4 rounded-xl bg-gray-800/20 border border-gray-800"
              >
                <div
                  className="font-bold text-lg h-10 w-10 rounded-full bg-pink-600 text-gray-200
                  flex justify-center items-center absolute top-2 right-2"
                >
                  {section.price}
                </div>
                <ul className="text-white mt-2 space-y-1">
                  {section.options.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      case "Burgers & Sandwiches":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {burgersAndSandwiches.map((item) => (
              <div
                key={item.name}
                className="p-4 bg-gray-800/20 rounded-xl border border-gray-800"
              >
                <h3 className="text-yellow-500 font-bold mb-2">{item.name}</h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        );

      case "Entrees & Pastas":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {entreesAndPastas.map((item) => (
              <div
                key={item.name}
                className="p-4 bg-gray-800/20 rounded-xl border border-gray-800"
              >
                <h3 className="text-yellow-500 font-bold mb-2">{item.name}</h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        );

      case "Salads":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {salads.map((item) => (
              <div
                key={item.name}
                className="p-4 bg-gray-800/20 rounded-xl border border-gray-800"
              >
                <h3 className="text-green-400 font-bold mb-2">{item.name}</h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        );

      case "Pizzas":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pizza.map((item) => (
              <div
                key={item.name}
                className="p-4 bg-gray-800/20 rounded-xl border border-gray-800"
              >
                <h3 className="text-red-400 font-bold mb-2">{item.name}</h3>
                <p className="text-gray-200 text-sm">
                  {item.name.toLowerCase().includes("build your own") ? (
                    <>
                      <span className="text-red-400 text-xs font-semibold">
                        {item.description}
                      </span>
                    </>
                  ) : (
                    item.description
                  )}
                </p>

                {item?.descriptionB && (
                  <p className="text-gray-200 text-sm">{item.descriptionB}</p>
                )}
              </div>
            ))}
          </div>
        );

      case "Beverages & Desserts":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beveragesAndMore.map((item) => (
              <div
                key={item.name}
                className="p-4 bg-gray-800/20 rounded-xl border border-gray-800"
              >
                <h3 className="text-blue-400 font-bold mb-2">{item.name}</h3>
                <p className="text-gray-200 text-sm">
                  {item.description.split("•").map((part, index) => (
                    <span key={index}>
                      {index > 0 && (
                        <span className="text-gray-600 mx-1">
                          &nbsp;•&nbsp;
                        </span>
                      )}
                      {part.trim()}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="mt-16">
      <Input />
    </div>
  );
};

export default BookEvent;
