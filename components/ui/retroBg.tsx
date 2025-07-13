// RetroBackground.tsx
"use client";
import React from "react";

export default function RetroBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-screen overflow-hidden text-white font-sans">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#101010] via-purple-600 p-24" />

      {/* Top grid (ceiling) */}
      <div
        className="absolute z-10 top-[-120px] left-[-500px] right-[-500px] bottom-[90%] opacity-90 pointer-events-none"
        style={{
          backgroundSize: "90px 90px",
          backgroundImage: `
            linear-gradient(
              0deg,
              transparent 24%,
              #a855f7 25%,
              #a855f7 26%,
              transparent 27%,
              transparent 74%,
              #a855f7 75%,
              #a855f7 76%,
              transparent 77%
            ),
            linear-gradient(
              90deg,
              transparent 24%,
              #a855f7 25%,
              #a855f7 26%,
              transparent 27%,
              transparent 74%,
              #a855f7 75%,
              #a855f7 76%,
              transparent 77%
            )`,
          transform:
            "perspective(400px) rotateX(-75deg) scale(1.4) translateY(-20%)",
        }}
      />

      {/* Bottom grid (floor) */}
      <div
        className="absolute z-10 bottom-[-120px] left-[-500px] right-[-500px] top-[60%] opacity-80 pointer-events-none"
        style={{
          backgroundSize: "90px 90px",
          backgroundImage: `
            linear-gradient(
              0deg,
              transparent 24%,
              #ec4899 25%,
              #ec4899 26%,
              transparent 27%,
              transparent 74%,
              #ec4899 75%,
              #ec4899 76%,
              transparent 77%
            ),
            linear-gradient(
              90deg,
              transparent 24%,
              #ec4899 25%,
              #ec4899 26%,
              transparent 27%,
              transparent 74%,
              #ec4899 75%,
              #ec4899 76%,
              transparent 77%
            )`,
          transform:
            "perspective(400px) rotateX(75deg) scale(1.4) translateY(20%)",
        }}
      />

      {/* Stronger vignette with #101010 */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, #101010 100%)",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, #101010 100%)",
          maskRepeat: "no-repeat",
          maskSize: "cover",
          backgroundColor: "#101010",
          opacity: 1,
        }}
      />

      {/* Foreground content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
}
