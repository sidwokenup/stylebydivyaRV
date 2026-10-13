"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

// Define card data structure
interface CardData {
  id: number;
  title: string;
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
}

const CARDS: CardData[] = [
  {
    id: 0,
    title: "About",
    desktopSrc: "/assets/Desktop About Section/desktop_about.webp",
    mobileSrc: "/assets/Mobile About Section/mobile_aboutcard.webp",
    alt: "About StyleByDivya",
  },
  {
    id: 1,
    title: "Wrap Style",
    desktopSrc: "/assets/Desktop About Section/desktop_wrapstyle.webp",
    mobileSrc: "/assets/Mobile About Section/mobile_wrapstyle.webp",
    alt: "Wrap Style Collection",
  },
  {
    id: 2,
    title: "Indo-Western",
    desktopSrc: "/assets/Desktop About Section/desktop_indowestern.webp",
    mobileSrc: "/assets/Mobile About Section/mobile_indowestern.webp",
    alt: "Indo-Western Collection",
  },
  {
    id: 3,
    title: "Old Saree",
    desktopSrc: "/assets/Desktop About Section/desktop_oldsaree.webp",
    mobileSrc: "/assets/Mobile About Section/mobile_oldsaree.webp",
    alt: "Old Saree Revamp",
  },
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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
            className="hidden md:flex absolute left-4 z-20 p-4 text-gray-800 hover:text-black transition-colors rounded-full hover:bg-gray-100 cursor-pointer"
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
                  x: { type: "tween", duration: 0.4, ease: "easeInOut" },
                  opacity: { duration: 0.3 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                className="relative w-full flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden"
              >
                <div className="relative w-full rounded-2xl shadow-xl bg-gray-50 overflow-hidden">
                  {/* Mobile Image */}
                  <div className="block md:hidden">
                    <Image
                      src={currentCard.mobileSrc}
                      alt={currentCard.alt}
                      width={720}
                      height={960}
                      className="w-full h-auto object-contain select-none pointer-events-none"
                      loading="lazy"
                      sizes="100vw"
                    />
                  </div>
                  {/* Desktop Image */}
                  <div className="hidden md:block">
                    <Image
                      src={currentCard.desktopSrc}
                      alt={currentCard.alt}
                      width={1200}
                      height={1600}
                      className="w-full h-auto object-contain select-none pointer-events-none"
                      loading="lazy"
                      sizes="80vw"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow (Desktop Only) */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-4 z-20 p-4 text-gray-800 hover:text-black transition-colors rounded-full hover:bg-gray-100 cursor-pointer"
            aria-label="Next card"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>

        {/* Navigation Dots */}
        <div className="flex gap-2 justify-center mt-4">
          {CARDS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={clsx(
                "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer",
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
              className="group relative overflow-hidden px-10 py-3 bg-black text-white font-medium tracking-widest uppercase text-sm hover:bg-gray-900 transition-colors duration-300 shadow-lg cursor-pointer"
            >
              <span className="relative z-10">Shop Now</span>
            </motion.button>
          </Link>
        </div>

      </motion.div>
    </section>
  );
}
