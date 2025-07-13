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
        <div className="w-full h-auto max-w-[1100px] m-auto flex gap-24 py-12">
          <div className="w-1/2 flex flex-col gap-8">
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
          <div className="w-1/2 h-96 relative rounded-2xl overflow-hidden">
            <Image
              src="/images/bowling-group.jpg"
              alt="group image"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div
          className="flex relative h-72 w-full max-w-[1100px] m-auto rounded-2xl overflow-hidden 
        bg-gradient-to-tl from-violet-600 to-pink-600"
        >
          {/* Text block on the left */}
          <div className="flex-1 flex items-center pl-10">
            <div className="text-left max-w-md">
              <p className="font-light text-gray-50 text-3xl uppercase">
                Book Your
              </p>
              <h3 className="text-5xl font-semibold text-gray-50 uppercase">
                VIP ROOM
              </h3>
              <p className="mt-4 text-gray-200">
                VIP rooms are secluded from the rest of the lanes. Food &
                Beverage minimums are only applied to Friday & Saturday
                reservations.
              </p>
            </div>
          </div>

          {/* Image on the right */}
          <div className="w-[600px] h-full relative">
            <Image
              src="/images/mulholland.png"
              alt="mulholland vip"
              fill
              className="object-cover object-right z-0"
            />
          </div>
        </div>
        <div className="w-full max-w-[1100px] m-auto py-6 flex flex-col gap-12 items-center">
          <VIP />
          <button
            className="capitalize text-xl border border-pink-600 text-pink-600 px-6 py-2 
          rounded-4xl hover:text-gray-100 hover:bg-pink-600 transition duration-200 cursor-pointer
          flex items-center gap-2"
          >
            Download our event information proposal <IconDownload />
          </button>

          {/* <NeonButton text={`Download our event information proposal`} /> */}
        </div>
      </div>
      <div className="relative py-4 md:py-8 overflow-hidden">
        <NeonSign text="Arcade" />
        <div className="w-full h-auto max-w-[1100px] m-auto my-12">
          <Arcade />
        </div>
      </div>
      <div className="py-4 md:py-8">
        <NeonSign text="BILLIARDS" />

        <div className="w-full h-auto max-w-[1100px] m-auto my-12">
          <Billiards />
        </div>
      </div>
      <div className="py-4 md:py-8">
        <NeonSign text="PARTY" />
      </div>
    </>
  );
}
