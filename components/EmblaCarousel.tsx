// components/EmblaCarousel.tsx
"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButtons";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  images: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ images, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((src, index) => (
            <div
              className="embla__slide flex-[0_0_33.3333%] relative h-64 px-2"
              key={index}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                className="rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrow buttons on top right */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center mt-4">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`embla__dot ${
              index === selectedIndex ? "embla__dot--selected" : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default EmblaCarousel;
