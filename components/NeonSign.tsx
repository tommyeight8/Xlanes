"use client";

import { useEffect, useRef, useState } from "react";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "700",
});

type NeonSignProps = {
  text: string;
};

export default function NeonSign({ text }: NeonSignProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.7 }
    );

    const current = containerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center h-[200px]" // optional height to help test scroll
    >
      <h1
        className={`text-[64px] text-white transition-all duration-700 z-10 ${
          isVisible ? "neon-glow" : ""
        } ${quicksand.className}`}
      >
        {text}
      </h1>

      <div className="absolute flex justify-center items-center w-full h-28 m-auto">
        <div
          className={`w-[30%] h-12 rounded-full blur-2xl transition-all duration-700 ${
            isVisible
              ? "glow-fade-in bg-gradient-to-l from-[#ff00ff] to-[#ff00ff]"
              : "opacity-0"
          }`}
        />
      </div>

      <style jsx>{`
        .neon-glow {
          text-shadow: 2px 2px 0 #f481bf, 4px 4px 0 #ff00ff, 0 0 6px #f75a8e,
            0 0 40px #ff00ff, 0 0 32px #ff00ff;
        }

        .glow-fade-in {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}
