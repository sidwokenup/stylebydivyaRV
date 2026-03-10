"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function HeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add listener
    window.addEventListener("resize", checkMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Video source path relative to public folder is NOT possible directly with src/assets
  // In Next.js, static assets should be in the public directory or imported.
  // Since the user asked to use videos from src/assets, we need to import them
  // or they need to be moved to public. 
  // IMPORTANT: Next.js App Router doesn't serve files from src/assets automatically unless imported.
  // However, importing mp4 files might require specific loader config or they might be too large.
  // Best practice is usually public folder, but user specified src/assets.
  // I will assume for now we can import them if they are handled by Next.js or I should move them to public?
  // User instructions: "Videos are located in: src/assets/Main_screenVideo-1/"
  // I will try to import them to get the bundled path.
  
  // Actually, importing large video files in client component might be heavy if bundled base64 (unlikely for mp4 default).
  // Usually file-loader/url-loader handles this giving a path.
  // Let's try importing. If that fails or is not optimal, we'll need a different strategy.
  // BUT: Next.js default config might not handle video imports out of the box without setup?
  // Let's check next.config.ts again. It was minimal.
  // Standard Next.js way: put in public. 
  // But I must follow "Videos are located in: src/assets/Main_screenVideo-1/".
  // I'll try to use `require` or `import`.
  
  // NOTE: If the files are large, this might be problematic. 
  // However, for the purpose of this task, I will attempt to import.
  // If I can't import, I might need to move them to public via a command.
  // Given "Videos are located in src/assets...", I'll try to reference them. 
  // Wait, I cannot reference src/assets from a string path in <video src="..."> unless I import it.
  
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Hidden SEO Heading */}
      <h1 className="sr-only">StyleByDivya Luxury Fashion Collection</h1>

      {/* Video Background */}
      <div className="absolute inset-0">
         {/* 
           We use a key to force re-render when device changes to ensure correct source is loaded 
           and avoid downloading both videos if possible (though browser might still preload).
           Actually, simply switching src might be enough.
         */}
        <video
          ref={videoRef}
          key={isMobile ? "mobile" : "desktop"}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          // We will use a placeholder src initially or handled via imports below
        >
             <source src={isMobile ? "/videos/mobile_intro_v2.mp4" : "/videos/desktop_introvideo.mp4?v=1"} type="video/mp4" />
             Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text visibility if needed, keeping it subtle */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Center Content: Shop Now Button */}
      <div className="absolute left-1/2 top-[60%] z-10 -translate-x-1/2 -translate-y-1/2">
        <Link href="/shop">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group relative overflow-hidden px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium tracking-widest uppercase text-sm hover:bg-white/20 transition-colors duration-300"
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
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
          {isMuted ? (
            // Muted Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          ) : (
            // Unmuted Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
