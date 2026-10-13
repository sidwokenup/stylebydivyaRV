"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (desktopVideoRef.current) desktopVideoRef.current.muted = nextMuted;
    if (mobileVideoRef.current) mobileVideoRef.current.muted = nextMuted;
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Hidden SEO Heading */}
      <h1 className="sr-only">StyleByDivya Luxury Fashion Collection</h1>

      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Desktop Video (Screen width >= 768px) */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <video
            ref={desktopVideoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            poster="/videos/desktop_intro_poster.webp"
            className="w-full h-full object-cover"
          >
            <source src="/videos/desktop_intro_opt.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Mobile Video (Screen width < 768px) */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <video
            ref={mobileVideoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            poster="/videos/mobile_intro_poster.webp"
            className="w-full h-full object-cover"
          >
            <source src="/videos/mobile_intro_opt.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Overlay for subtle contrast */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Center Content: Shop Now Button */}
      <div className="absolute left-1/2 top-[60%] z-10 -translate-x-1/2 -translate-y-1/2">
        <Link href="/shop">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group relative overflow-hidden px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium tracking-widest uppercase text-sm hover:bg-white/20 transition-colors duration-300 cursor-pointer"
          >
            <span className="relative z-10">Shop Now</span>
          </motion.button>
        </Link>
      </div>

      {/* Mute Toggle Button - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
