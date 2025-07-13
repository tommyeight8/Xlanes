"use client";
import React from "react";

export default function RetroGridLinesOnly({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Top grid (violet) */}
      <div
        className="absolute z-10 top-[-120px] left-[-500px] right-[-500px] bottom-[60%] opacity-60 pointer-events-none"
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

      {/* Bottom grid (pink) */}
      <div
        className="absolute z-10 bottom-[-120px] left-[-500px] right-[-500px] top-[60%] opacity-60 pointer-events-none"
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

      {/* Optional content slot */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
