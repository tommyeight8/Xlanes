"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretDown, FaCaretRight, FaCaretUp } from "react-icons/fa";

type AccordionItemProps = {
  title: string;
  content: React.ReactNode;
};

export default function AccordionItem({ title, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-400 last:border-b-0">
      <button
        className="flex items-center justify-between w-full py-4 text-left cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 text-shadow-2xs">
          <span>
            {isOpen ? (
              <FaCaretDown
                className={`text-lg transition-colors duration-200 ${
                  isOpen ? "text-zinc-900" : "text-gray-50"
                }`}
              />
            ) : (
              <FaCaretRight
                className={`text-lg transition-colors duration-200 ${
                  isOpen ? "text-zinc-900" : "text-gray-50"
                }`}
              />
            )}
          </span>
          <span
            className={`font-medium transition-colors duration-200 ${
              isOpen ? "text-zinc-900" : "text-gray-50"
            }`}
          >
            {title}
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-md text-gray-50 text-shadow-2xs">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
