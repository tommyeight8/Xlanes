"use client";

import React from "react";

interface NeonButtonProps {
  text: string;
  onClick?: () => void;
  neonColor?: string; // default neon color
  bgColor?: string; // default background
}

export const NeonButton: React.FC<NeonButtonProps> = ({
  text,
  onClick,
  neonColor = "hsl(317, 100%, 54%)",
  bgColor = "hsl(323, 21%, 16%)",
}) => {
  return (
    <button
      onClick={onClick}
      className="text-pink-600 relative px-6 py-2 text-xl cursor-pointer border-2 border-pink-600 rounded-4xl transition-all duration-200"
      onMouseEnter={(e) => {
        const before = e.currentTarget.querySelector(
          ".neon-reflection"
        ) as HTMLElement;
        const after = e.currentTarget.querySelector(
          ".neon-flare"
        ) as HTMLElement;
        if (before && after) {
          before.style.opacity = "1";
          after.style.opacity = "1";
        }
      }}
      onMouseLeave={(e) => {
        const before = e.currentTarget.querySelector(
          ".neon-reflection"
        ) as HTMLElement;
        const after = e.currentTarget.querySelector(
          ".neon-flare"
        ) as HTMLElement;
        if (before && after) {
          before.style.opacity = "0.7";
          after.style.opacity = "0";
        }
      }}
    >
      {text}
      {/* ::before - glow reflection */}
      <span className="neon-reflection pointer-events-none absolute top-[120%] left-0 w-full h-full" />
      {/* ::after - flare glow */}
      <span
        className="neon-flare absolute inset-0 -z-10 rounded-4xl transition-opacity duration-100"
        style={{
          boxShadow: `0 0 2em 0.5em ${neonColor}`,
          backgroundColor: neonColor,
          opacity: 0,
        }}
      />
    </button>
  );
};
