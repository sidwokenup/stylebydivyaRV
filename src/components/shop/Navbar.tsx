"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Effect to handle back button behavior when drawer is open
  useEffect(() => {
    // If drawer is open, push a new state to history
    if (isMobileMenuOpen) {
      window.history.pushState({ menuOpen: true }, "");
    }

    // Function to handle the popstate event (back button press)
    const handlePopState = (event: PopStateEvent) => {
      // If we are currently open, close the drawer and prevent navigation
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        // We don't need to prevent default here as popstate is already happening
        // But logic is: if user presses back, we just close the menu.
        // If the user presses back AGAIN, they will navigate away normally because menu is closed.
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "COLLECTION", href: "/shop" },
    { name: "ABOUT", href: "/#about" },
    { name: "TRENDING", href: "#trending" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Left: Logo */}
          <div className="flex-shrink-0 z-50">
            <Link href="/" className="font-serif text-xl md:text-2xl tracking-widest hover:text-[#D4AF37] transition-colors duration-300">
              StyleByDivya
            </Link>
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#D4AF37] px-3 py-2 rounded-md text-sm font-medium tracking-wider transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-6 z-50">
            <Link 
              href="/login" 
              className="hidden md:block hover:text-[#D4AF37] transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
            >
              Login
            </Link>
            
            <button 
              className="group relative hover:text-[#D4AF37] transition-colors duration-300" 
              aria-label="Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              {/* Cart Badge Placeholder */}
              <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden hover:text-[#D4AF37] transition-colors duration-300 p-1" 
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-full sm:w-80 bg-black z-50 shadow-2xl flex flex-col pt-24 px-8 md:hidden"
            >
              {/* Close Button (Redundant but good for UX inside drawer) */}
              <div className="absolute top-5 right-6">
                 <button 
                  onClick={toggleMobileMenu}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                 >
                   <span className="sr-only">Close</span>
                   {/* Icon handled by main toggle button, but we can keep layout clean */}
                 </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-8 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={toggleMobileMenu}
                    className="text-2xl font-serif tracking-widest text-white hover:text-[#D4AF37] transition-colors duration-300 border-b border-white/10 pb-4"
                  >
                    {link.name}
                  </Link>
                ))}
                
                <Link
                  href="/login"
                  onClick={toggleMobileMenu}
                  className="text-lg font-medium uppercase tracking-widest text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 mt-4"
                >
                  Login / Signup
                </Link>
              </div>
              
              {/* Drawer Footer info */}
              <div className="mt-auto mb-12 text-center text-xs text-gray-500 uppercase tracking-widest">
                StyleByDivya © {new Date().getFullYear()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
