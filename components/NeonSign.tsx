"use client";

import { useEffect, useRef, useState } from "react";
import { Quicksand, Neonderthaw, Audiowide } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "700",
});

const neonderthaw = Neonderthaw({
  subsets: ["latin"],
  weight: "400",
});

const audioWide = Audiowide({
  weight: "400",
  subsets: ["latin"], // ✅ required
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
      className="relative flex items-center justify-center h-[150px] md:h-[200px]" // optional height to help test scroll
    >
      <h1
        className={`text-5xl md:text-[64px] text-white transition-all duration-700 z-10 ${
          isVisible ? "neon-glow" : ""
        } ${audioWide.className}`}
      >
        {text}
      </h1>

      <div className="absolute flex justify-center items-center w-full h-28 m-auto">
        <div
          className={`w-[30%] h-10 md:h-12 rounded-full blur-3xl transition-all duration-700 ${
            isVisible ? "glow-fade-in bg-[#ff00ff]" : "opacity-0"
          }`}
        />
      </div>

      <style jsx>{`
        .neon-glow {
          text-shadow: 1px 1px 0 #f481bf, 3px 3px 0 #ff00ff, 0 0 5px #f75a8e,
            0 0 40px #ff00ff, 0 0 56px #ff00ff;
        }

        .glow-fade-in {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}
