"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

// Define card data structure
interface CardData {
  id: number;
  title: string;
  desktopSrc: any;
  mobileSrc: any;
  alt: string;
}

// Import assets statically to let Next.js handle optimization
// We will use require as per previous pattern or standard imports if possible.
// Using require to ensure path resolution works similarly to video section if needed,
// but for Images, standard import is better for Next.js optimization.
// Let's try standard imports first, assuming configured alias or relative path.
// If alias @/assets works, great.

import desktopAbout from "@/assets/Desktop About Section/desktop_about.png";
import desktopWrapStyle from "@/assets/Desktop About Section/desktop_wrapstyle.png";
import desktopIndoWestern from "@/assets/Desktop About Section/desktop_indowestern.png";
import desktopOldSaree from "@/assets/Desktop About Section/desktop_oldsaree.png";

import mobileAbout from "@/assets/Mobile About Section/mobile_aboutcard.png";
import mobileWrapStyle from "@/assets/Mobile About Section/mobile_wrapstyle.png";
import mobileIndoWestern from "@/assets/Mobile About Section/mobile_indowestern.png";
import mobileOldSaree from "@/assets/Mobile About Section/mobile_oldsaree.png";

const CARDS: CardData[] = [
  {
    id: 0,
    title: "About",
    desktopSrc: desktopAbout,
    mobileSrc: mobileAbout,
    alt: "About StyleByDivya",
  },
  {
    id: 1,
    title: "Wrap Style",
    desktopSrc: desktopWrapStyle,
    mobileSrc: mobileWrapStyle,
    alt: "Wrap Style Collection",
  },
  {
    id: 2,
    title: "Indo-Western",
    desktopSrc: desktopIndoWestern,
    mobileSrc: mobileIndoWestern,
    alt: "Indo-Western Collection",
  },
  {
    id: 3,
    title: "Old Saree",
    desktopSrc: desktopOldSaree,
    mobileSrc: mobileOldSaree,
    alt: "Old Saree Revamp",
  },
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % CARDS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
  }, []);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const SWIPE_THRESHOLD = 50;
    if (info.offset.x < -SWIPE_THRESHOLD) {
      handleNext();
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      handlePrev();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const currentCard = CARDS[activeIndex];

  return (
    <section id="about" className="relative w-full bg-white py-20 md:py-28">
      
      {/* Scroll Reveal Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-8 md:gap-12"
      >
        
        {/* Main Card Container */}
        <div className="relative w-full flex items-center justify-center">
          
          {/* Left Arrow (Desktop Only) */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-4 z-20 p-4 text-gray-800 hover:text-black transition-colors rounded-full hover:bg-gray-100"
            aria-label="Previous card"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Card Display Area */}
          <div className="relative w-full max-w-sm md:max-w-4xl flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.4, ease: "easeInOut" }, // Optimized for smoothness
                  opacity: { duration: 0.3 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                className="relative w-full flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden"
              >
                <div className="relative w-full rounded-2xl shadow-xl bg-gray-50 overflow-hidden">
                  {/* Image Rendering Logic */}
                  <Image
                    src={isMobile ? currentCard.mobileSrc : currentCard.desktopSrc}
                    alt={currentCard.alt}
                    width={1200}
                    height={1600}
                    className="w-full h-auto object-contain select-none pointer-events-none" // Prevent image dragging interference
                    priority // Load active card immediately
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                  
                  {/* Optional Title Overlay (if needed based on design, keeping minimal for now) */}
                  {/* <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent text-white">
                    <h3 className="text-2xl font-light tracking-wide">{currentCard.title}</h3>
                  </div> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow (Desktop Only) */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-4 z-20 p-4 text-gray-800 hover:text-black transition-colors rounded-full hover:bg-gray-100"
            aria-label="Next card"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>

        {/* Navigation Dots (Optional for better UX on mobile) */}
        <div className="flex gap-2 justify-center mt-4">
          {CARDS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={clsx(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === activeIndex ? "bg-black w-6" : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Shop Now Button */}
        <div className="mt-12 md:mt-16">
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative overflow-hidden px-10 py-3 bg-black text-white font-medium tracking-widest uppercase text-sm hover:bg-gray-900 transition-colors duration-300 shadow-lg"
            >
              <span className="relative z-10">Shop Now</span>
            </motion.button>
          </Link>
        </div>

      </motion.div>
    </section>
  );
}
