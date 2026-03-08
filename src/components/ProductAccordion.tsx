"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductAccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function ProductAccordion({ title, children }: ProductAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left group"
      >
        <span 
          className={`text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
            isOpen ? "text-[#C6A756]" : "text-black group-hover:text-[#C6A756]"
          }`}
        >
          {title}
        </span>
        <span 
          className={`text-xl font-light transition-colors duration-300 ${
            isOpen ? "text-[#C6A756]" : "text-black group-hover:text-[#C6A756]"
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600 leading-relaxed text-sm">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
