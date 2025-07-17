"use client";

import AccordionGroup from "@/components/AccordionGroup";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/faq-bg.png')",
      }}
      className="min-h-screen w-full flex justify-center items-center py-12 px-4 pb-16
      bg-fixed bg-no-repeat bg-cover bg-center bg-gradient-to-br from-violet-600 to-pink-600"
    >
      <div className="max-w-[900px] w-full rounded-2xl bg-white/10 backdrop-blur-md shadow-lg p-8 border border-white/20">
        <h3 className="text-center text-gray-50 uppercase text-2xl md:text-3xl font-semibold mb-8">
          Frequently Asked Questions
        </h3>
        <AccordionGroup />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-48 h-48 md:h-64 md:w-64 relative m-auto">
            <Image
              src="/images/bowling-n-pins.webp"
              alt="bowling n pins"
              fill
              className="m-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
