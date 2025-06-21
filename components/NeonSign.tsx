'use client';

import { useEffect, useRef, useState } from 'react';
import { Edu_SA_Beginner } from 'next/font/google';

const eduSa = Edu_SA_Beginner({
  subsets: ['latin'],
  weight: '400',
});

type NeonSignProps = {
  text: string;
  delayMs?: number;
};

export default function NeonSign({ text, delayMs = 400 }: NeonSignProps) {
  const signRef = useRef<HTMLHeadingElement | null>(null);
  const [isFlickering, setIsFlickering] = useState(false);
  const [shouldGlow, setShouldGlow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) {
          setTimeout(() => {
            setIsFlickering(true);
            setTimeout(() => {
              setIsFlickering(false);
              setShouldGlow(true);
            }, 200); // fast flicker for 1.5s then glow
          }, delayMs);
        }
      },
      { threshold: 0.5 }
    );

    const current = signRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [delayMs]);

  const glowClass = isFlickering
    ? 'neon-flicker-fast'
    : shouldGlow
    ? 'neon-glow'
    : '';


  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
<h1
  ref={signRef}
  className={`text-[64px] text-white transition-all duration-1000 ease-out ${glowClass}`}
>
  {text}
</h1>

      <style jsx>{`
 .neon-glow {
  text-shadow:
    0 0 4px #ffffff,
    0 0 10px #ffffff,
    0 0 20px #ff00ff,
    0 0 30px #ff00ff,
    0 0 40px #ff00ff;
  animation: smooth-flicker 3s infinite ease-in-out;
}

.neon-flicker-fast {
  text-shadow:
    0 0 2px #ffffff,
    0 0 6px #ff00ff,
    0 0 10px #ff00ff;
  animation: quick-flicker 0.15s infinite;
}

@keyframes quick-flicker {
  0%, 100% {
    opacity: 0;
  }
  30% {
    opacity: 0.3;
  }
  60% {
    opacity: 0.7;
  }
}

      `}</style>
    </div>
  );
}
