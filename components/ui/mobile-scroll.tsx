"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import Image from "next/image";

export const PhoneScroll = ({
  src,
  title,
  badge,
}: {
  src?: string;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.1, isMobile ? 1 : 1.2]);
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [1.1, isMobile ? 1 : 1.2]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1200]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.3], [-15, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex min-h-[200vh] shrink-0 transform flex-col items-center justify-start py-20"
    >
      <motion.h2
        style={{ translateY: textTransform, opacity: textOpacity }}
        className="mb-10 text-center text-2xl font-semibold text-neutral-800 dark:text-white"
      >
        {title || "Mobile view"}
      </motion.h2>

      <PhoneShell
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
        badge={badge}
      />
    </div>
  );
};

const PhoneShell = ({
  src,
  scaleX,
  scaleY,
  rotate,
  translate,
  badge,
}: {
  src?: string;
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  badge?: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{ scaleX, scaleY, rotateX: rotate, translateY: translate }}
      className="relative h-[500px] w-[250px] rounded-[2.5rem] border-[6px] border-black bg-neutral-900 shadow-2xl"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
        {src && (
          <Image
            src={src}
            alt="Phone screen"
            fill
            className="rounded-[2rem] object-cover"
          />
        )}
      </div>
      <div className="absolute top-0 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rounded-b-xl bg-black" />
      {badge && <div className="absolute bottom-4 left-4 z-20">{badge}</div>}
    </motion.div>
  );
};
