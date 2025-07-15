"use client";

import {
  beers,
  classicCocktails,
  happyHour,
  premiumSpirits,
  signatureCocktails,
  signatureShooters,
  spirits,
  wines,
} from "@/data/drinks";
import React, { useState } from "react";

const tabs = [
  "Happy Hour",
  "Signature Cocktails",
  "Signature Shooters",
  "Beers",
  "Wine",
  "Spirits",
  "Premium Spirits",
  "Classic Cocktails",
];

const DrinkMenu = () => {
  const [activeTab, setActiveTab] = useState("Happy Hour");

  const renderContent = () => {
    switch (activeTab) {
      case "Happy Hour":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {happyHour.map((section) => (
              <div
                key={section.category}
                className="p-4 rounded-xl bg-gray-800/20 border border-gray-800"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg text-violet-500">
                    {section.category}
                  </h3>
                  <span className="font-semibold bg-violet-500 text-gray-200 px-3 py-1 rounded-full text-sm">
                    {section.price}
                  </span>
                </div>
                <ul className="text-white mt-2">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case "Signature Cocktails":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureCocktails.map((cocktail) => (
              <div
                key={cocktail.name}
                className="p-4 rounded-xl bg-gray-800/20 border border-gray-800"
              >
                <h3 className="text-violet-500 font-semibold">
                  {cocktail.name}
                </h3>
                <p className="text-gray-200 text-sm">{cocktail.description}</p>
              </div>
            ))}
          </div>
        );
      case "Signature Shooters":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureShooters.map((shooter) => (
              <div
                key={shooter.name}
                className="p-4 rounded-xl bg-gray-800/20 border border-gray-800"
              >
                <h3 className="text-violet-500 font-semibold">
                  {shooter.name}
                </h3>
                <p className="text-gray-200 text-sm">{shooter.description}</p>
              </div>
            ))}
          </div>
        );
      case "Beers":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beers.map((section) => (
              <div
                key={section.category}
                className="p-4 bg-gray-800/20 rounded-xl border border-gray-800"
              >
                <h3 className="text-yellow-500 font-bold mb-4">
                  {section.category}
                </h3>
                <ul className="text-white text-sm mt-1 grid grid-cols-2 gap-2">
                  {section.items.map((item) => (
                    <li key={item} className="">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case "Wine":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wines.map((wine) => (
              <div
                key={wine.name}
                className="p-4 rounded-xl bg-gray-800/20 border border-gray-800"
              >
                <h3 className="text-violet-500 font-bold">{wine.name}</h3>
                <p className="text-gray-200 text-sm">
                  {wine.options.join(", ")}
                </p>
              </div>
            ))}
          </div>
        );
      case "Spirits":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {spirits.map((section) => (
              <div
                key={section.category}
                className="flex flex-col h-full p-4 rounded-xl bg-gray-800/20 border border-gray-800"
              >
                <h3 className="text-violet-500 font-bold mb-2">
                  {section.category}
                </h3>
                <ul className="text-gray-200 text-sm space-y-1">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      case "Premium Spirits":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {premiumSpirits.map((spirit) => (
              <div
                key={spirit.name}
                className="p-4 rounded-xl bg-gray-800/20 border border-gray-800"
              >
                <h3 className="text-violet-500 font-semibold">{spirit.name}</h3>
                <p className="text-gray-300 text-sm">{spirit.type}</p>
              </div>
            ))}
          </div>
        );
      case "Classic Cocktails":
        return (
          <>
            {classicCocktails.map((section) => (
              <div key={section.category} className="mb-4">
                <ul className="text-white text-sm mt-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="p-4 rounded-xl bg-gray-800/20 border border-gray-800"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-8 md:mt-12 lg:mt-16 text-gray-200">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition cursor-pointer ${
              activeTab === tab
                ? "bg-pink-600 text-white"
                : "text-gray-300 hover:bg-pink-600 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default DrinkMenu;
