// pages/index.tsx
import Script from "next/script";
import NeonSign from "@/components/NeonSign";
import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
import VIP from "@/components/VIP";
import { IconDownload } from "@tabler/icons-react";
import { Arcade } from "@/components/Arcade";
import Billiards from "@/components/Billiards";

import { NeonButton } from "@/components/NeonButton";
import Bowling from "@/components/Bowling";
import BowlingTabs from "@/components/BowlingTabs";
import Karaoke from "@/components/Karaoke";

export default function Home() {
  return (
    <>
      {/* Mailchimp Embed Script */}
      <Script
        src="https://form-assets.mailchimp.com/snippet/account/203094514?site=37891d9f23c2140372e493aa3"
        strategy="afterInteractive"
      />
      <Hero />
      <div className="p-4 md:p-8 flex flex-col gap-4">
        <NeonSign text="BOWLING" />
        <div
          id="bowling"
          className="w-full h-auto max-w-[1100px] m-auto flex flex-col md:flex-row gap-12 md:gap-18 lg:gap-24 md:py-10 lg:py-12"
        >
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <h3 className="text-4xl font-bold uppercase text-gray-200">
              Reserve A Lane Online
            </h3>
            <p className="text-gray-300">
              ID checks begin at 7:00 PM THU-SUN. All guests must be 18 or older
              with a valid government-issued ID for entry. Friday/Saturday
              (after 9:00 PM) – All guests must be 21 or older with a valid ID
              for entry. Dress Code Policy for Friday & Saturday: No Caps
              (Dressy hats are allowed) | No Visors | No Beanies | No Baggy
              Pants.
            </p>
            <Link
              href={"/"}
              className="text-lg bg-pink-600 hover:bg-pink-700 transition duration-200 
              text-white px-6 py-2 rounded-4xl w-fit"
            >
              Reserve Now
            </Link>
          </div>
          <div className="w-full md:w-1/2 h-96 relative rounded-2xl overflow-hidden">
            <Image
              src="/images/bowling-group.jpg"
              alt="group image"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <BowlingTabs />
      </div>
      <div id="arcade" className="relative px-4 md:px-8 overflow-hidden">
        <NeonSign text="Arcade" />
        <div className="w-full h-auto max-w-[1100px] m-auto my-12">
          <Arcade />
        </div>
      </div>
      <div id="billiards" className="px-4 md:px-8">
        <NeonSign text="BILLIARDS" />
        <div className="w-full h-auto max-w-[1100px] m-auto my-12">
          <Billiards />
        </div>
      </div>
      <div id="karaoke" className="px-4 md:px-8">
        <NeonSign text="Karaoke" />
        <div className="w-full h-auto max-w-[1100px] m-auto my-12">
          <Karaoke />
        </div>
      </div>
    </>
  );
}
