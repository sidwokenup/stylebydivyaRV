"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Desktop Images
import desktopSlide1 from "@/assets/desktop_mainscreen_crousel/desk_lux_re.jpeg";
import desktopSlide2 from "@/assets/desktop_mainscreen_crousel/flat20.jpeg";
import desktopSlide3 from "@/assets/desktop_mainscreen_crousel/Desk_new_arr.jpeg";

// Mobile Images
import mobileSlide1 from "@/assets/Mobile_mainscreen_crousel/luxry_redeifned.jpeg";
import mobileSlide2 from "@/assets/Mobile_mainscreen_crousel/Flatoff.png";
import mobileSlide3 from "@/assets/Mobile_mainscreen_crousel/New Arrivals.jpeg";

const SLIDES = [
  {
    id: 1,
    mobileImage: mobileSlide1,
    desktopImage: desktopSlide1,
    title: "Luxury Redefined",
    subtitle: "Discover timeless elegance",
    cta: "Shop Now",
    link: "#trending",
  },
  {
    id: 2,
    mobileImage: mobileSlide2,
    desktopImage: desktopSlide2,
    title: "Flat 20% Off",
    subtitle: "Limited time festive sale",
    cta: "View Offers",
    link: "#offers",
  },
  {
    id: 3,
    mobileImage: mobileSlide3,
    desktopImage: desktopSlide3,
    title: "New Arrivals",
    subtitle: "Indo-Western Collection",
    cta: "Explore New",
    link: "#new-arrivals",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Screen size detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Event listener
    window.addEventListener("resize", checkMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [handleNext]);

  // Swipe handling
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
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] bg-black overflow-hidden group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.4, ease: "easeInOut" },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src={isMobile ? SLIDES[activeIndex].mobileImage : SLIDES[activeIndex].desktopImage}
              alt={SLIDES[activeIndex].title}
              fill
              className="object-cover object-[center_20%] md:object-top pointer-events-none scale-125"
              priority
              sizes="(max-width: 768px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Centered Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-6xl font-serif text-white mb-4 tracking-wider drop-shadow-lg"
            >
              {SLIDES[activeIndex].title}
            </motion.h2>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base md:text-xl text-gray-200 mb-8 tracking-wide font-light drop-shadow-md"
            >
              {SLIDES[activeIndex].subtitle}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link href={SLIDES[activeIndex].link}>
                <button className="px-8 py-3 border border-[#D4AF37] text-white font-medium uppercase tracking-widest text-sm hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                  {SLIDES[activeIndex].cta}
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows (Desktop Only) */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100 duration-300"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100 duration-300"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1);
              setActiveIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-[#D4AF37] w-6" : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
