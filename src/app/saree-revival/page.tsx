import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/shop/Navbar";
import Footer from "@/components/shop/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Saree Revival | StyleByDivya",
  description:
    "Give your cherished saree a second life. Convert it into a custom lehenga, suit, or designer outfit crafted specially for you.",
  openGraph: {
    title: "Saree Revival | StyleByDivya",
    description:
      "Transform your old saree into a new masterpiece. Custom outfits like lehenga, suit sets, and anarkalis.",
    url: "https://stylebydivya.in/saree-revival",
    type: "website",
  },
};

export default function SareeRevival() {
  const WHATSAPP_NUMBER = "918708461553";
  const whatsappMessage = encodeURIComponent(
    "Hi StyleByDivya, I want to revive my saree into a custom outfit."
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden flex items-center justify-center">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          {/* Replace this with actual image/video later */}
          <div className="w-full h-full bg-gray-300 relative">
             {/* Desktop Image */}
             <div className="hidden md:block w-full h-full relative">
               <Image
                  src="/assets/saree-revival/hero-image.png"
                  alt="Saree Revival Hero"
                  fill
                  className="object-cover object-[center_top]"
                  priority
               />
             </div>
             {/* Mobile Image */}
             <div className="block md:hidden w-full h-full relative">
               <Image
                  src="/assets/saree-revival/hero-image-mobile.png"
                  alt="Saree Revival Hero Mobile"
                  fill
                  className="object-cover object-center"
                  priority
               />
             </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-6 tracking-wide drop-shadow-lg">
            Transform Your Saree Into <br className="hidden md:block" /> A New Masterpiece
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide mb-10 text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Give your cherished saree a second life. <br />
            Convert it into a custom lehenga, suit, or designer outfit crafted specially for you.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 bg-[#C6A756] text-black font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-lg transform hover:-translate-y-1 text-sm md:text-base"
            >
              Start Customization
            </a>
            <Link
              href="#transformations"
              className="w-full md:w-auto px-8 py-4 border border-white text-white font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
            >
              See Transformations
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-black tracking-wide">
              How Saree Revival Works
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base tracking-wide">
              A simple process to transform your cherished saree into a custom designer outfit.
            </p>
          </div>

          {/* Steps Grid / Carousel */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {/* Step 1 */}
            <div className="min-w-[85%] md:min-w-0 bg-gray-50 p-8 rounded-lg shadow-sm snap-center flex flex-col items-center text-center group hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C6A756" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-medium mb-3 text-black">1. Share Your Saree</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Send us photos or a short video of your saree on WhatsApp to get started.
              </p>
            </div>

            {/* Step 2 */}
            <div className="min-w-[85%] md:min-w-0 bg-gray-50 p-8 rounded-lg shadow-sm snap-center flex flex-col items-center text-center group hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C6A756" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-medium mb-3 text-black">2. Choose Your Design</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Select what you want to create — lehenga, suit set, anarkali, or a custom outfit.
              </p>
            </div>

            {/* Step 3 */}
            <div className="min-w-[85%] md:min-w-0 bg-gray-50 p-8 rounded-lg shadow-sm snap-center flex flex-col items-center text-center group hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C6A756" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-medium mb-3 text-black">3. Discuss With Us</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our team will guide you on styling, measurements, and design possibilities.
              </p>
            </div>

            {/* Step 4 */}
            <div className="min-w-[85%] md:min-w-0 bg-gray-50 p-8 rounded-lg shadow-sm snap-center flex flex-col items-center text-center group hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C6A756" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-medium mb-3 text-black">4. Receive Your Custom Outfit</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Your saree will be transformed into a beautifully tailored outfit crafted just for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAREE TRANSFORMATIONS SECTION */}
      <section id="transformations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-black tracking-wide">
              Saree Transformations
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base tracking-wide">
              See how cherished sarees are transformed into beautiful custom outfits.
            </p>
          </div>

          {/* Transformation Grid / Carousel */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 gap-8 pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {/* Card 1 */}
            <div className="min-w-[90%] md:min-w-0 bg-white rounded-lg shadow-sm overflow-hidden snap-center border border-gray-100 group hover:shadow-md transition-all duration-300">
              <div className="relative h-[400px] flex">
                {/* Before Image */}
                <div className="w-1/2 relative border-r border-white/20">
                  <div className="absolute top-4 left-4 z-10 bg-black/70 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm backdrop-blur-sm">
                    Before
                  </div>
                  <Image
                    src="/assets/saree-revival/before/aabha.jpeg"
                    alt="Original Saree"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, 25vw"
                  />
                </div>
                
                {/* Center Divider Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#C6A756" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                   </svg>
                </div>

                {/* After Image */}
                <div className="w-1/2 relative">
                  <div className="absolute top-4 right-4 z-10 bg-[#C6A756] text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm shadow-sm">
                    After
                  </div>
                  <Image
                    src="/assets/saree-revival/after/aabha.png"
                    alt="Transformed Outfit"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, 25vw"
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-serif font-medium text-black">Saree → Lehenga</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="min-w-[90%] md:min-w-0 bg-white rounded-lg shadow-sm overflow-hidden snap-center border border-gray-100 group hover:shadow-md transition-all duration-300">
              <div className="relative h-[400px] flex">
                <div className="w-1/2 relative border-r border-white/20">
                  <div className="absolute top-4 left-4 z-10 bg-black/70 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm backdrop-blur-sm">
                    Before
                  </div>
                  <Image
                    src="/saree-revival/before/saree2.jpg"
                    alt="Original Saree"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, 25vw"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#C6A756" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                   </svg>
                </div>
                <div className="w-1/2 relative">
                  <div className="absolute top-4 right-4 z-10 bg-[#C6A756] text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm shadow-sm">
                    After
                  </div>
                  <Image
                    src="/saree-revival/after/saree2.jpg"
                    alt="Transformed Outfit"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, 25vw"
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-serif font-medium text-black">Saree → Anarkali</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="min-w-[90%] md:min-w-0 bg-white rounded-lg shadow-sm overflow-hidden snap-center border border-gray-100 group hover:shadow-md transition-all duration-300">
              <div className="relative h-[400px] flex">
                <div className="w-1/2 relative border-r border-white/20">
                  <div className="absolute top-4 left-4 z-10 bg-black/70 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm backdrop-blur-sm">
                    Before
                  </div>
                  <Image
                    src="/saree-revival/before/saree3.jpg"
                    alt="Original Saree"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, 25vw"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#C6A756" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                   </svg>
                </div>
                <div className="w-1/2 relative">
                  <div className="absolute top-4 right-4 z-10 bg-[#C6A756] text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm shadow-sm">
                    After
                  </div>
                  <Image
                    src="/saree-revival/after/saree3.jpg"
                    alt="Transformed Outfit"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, 25vw"
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-serif font-medium text-black">Saree → Suit Set</h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="min-w-[90%] md:min-w-0 bg-white rounded-lg shadow-sm overflow-hidden snap-center border border-gray-100 group hover:shadow-md transition-all duration-300">
              <div className="relative h-[400px] flex">
                <div className="w-1/2 relative border-r border-white/20">
                  <div className="absolute top-4 left-4 z-10 bg-black/70 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm backdrop-blur-sm">
                    Before
                  </div>
                  <Image
                    src="/saree-revival/before/saree4.jpg"
                    alt="Original Saree"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, 25vw"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#C6A756" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                   </svg>
                </div>
                <div className="w-1/2 relative">
                  <div className="absolute top-4 right-4 z-10 bg-[#C6A756] text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm shadow-sm">
                    After
                  </div>
                  <Image
                    src="/saree-revival/after/saree4.jpg"
                    alt="Transformed Outfit"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, 25vw"
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-serif font-medium text-black">Saree → Indo Western</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN CREATE SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-black tracking-wide">
              What You Can Create
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base tracking-wide">
              Transform your saree into a completely new outfit crafted for your style.
            </p>
          </div>

          {/* Outfit Types Grid / Carousel */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {/* Lehenga */}
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi StyleByDivya, I want to convert my saree into a Lehenga.")}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="min-w-[80%] md:min-w-0 bg-white rounded-lg shadow-sm overflow-hidden snap-center group hover:shadow-lg transition-all duration-300 border border-gray-50 cursor-pointer block"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/assets/products/saree-revival/Aabha/A1.png"
                  alt="Lehenga"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-serif font-medium text-black group-hover:text-[#C6A756] transition-colors">Lehenga</h3>
              </div>
            </a>

            {/* Suit Set */}
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi StyleByDivya, I want to convert my saree into a Suit Set.")}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="min-w-[80%] md:min-w-0 bg-white rounded-lg shadow-sm overflow-hidden snap-center group hover:shadow-lg transition-all duration-300 border border-gray-50 cursor-pointer block"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/assets/products/saree-revival/Noor-e-Ruhani/Noor1_.png"
                  alt="Suit Set"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-serif font-medium text-black group-hover:text-[#C6A756] transition-colors">Suit Set</h3>
              </div>
            </a>

            {/* Anarkali */}
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi StyleByDivya, I want to convert my saree into an Anarkali.")}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="min-w-[80%] md:min-w-0 bg-white rounded-lg shadow-sm overflow-hidden snap-center group hover:shadow-lg transition-all duration-300 border border-gray-50 cursor-pointer block"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/assets/products/saree-revival/Phoolsaaz/Ps1.png"
                  alt="Anarkali"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-serif font-medium text-black group-hover:text-[#C6A756] transition-colors">Anarkali</h3>
              </div>
            </a>

            {/* Indo Western */}
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi StyleByDivya, I want to convert my saree into an Indo Western Outfit.")}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="min-w-[80%] md:min-w-0 bg-white rounded-lg shadow-sm overflow-hidden snap-center group hover:shadow-lg transition-all duration-300 border border-gray-50 cursor-pointer block"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/assets/products/saree-revival/Revive Grace/Rg1.png"
                  alt="Indo Western"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-serif font-medium text-black group-hover:text-[#C6A756] transition-colors">Indo Western</h3>
              </div>
            </a>

            {/* Sharara */}
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi StyleByDivya, I want to convert my saree into a Sharara.")}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="min-w-[80%] md:min-w-0 bg-white rounded-lg shadow-sm overflow-hidden snap-center group hover:shadow-lg transition-all duration-300 border border-gray-50 cursor-pointer block"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/assets/products/saree-revival/Viraasat Varnika/Vv1.png"
                  alt="Sharara"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-serif font-medium text-black group-hover:text-[#C6A756] transition-colors">Sharara</h3>
              </div>
            </a>

            {/* Crop Top Lehenga */}
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi StyleByDivya, I want to convert my saree into a Crop Top Lehenga.")}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="min-w-[80%] md:min-w-0 bg-white rounded-lg shadow-sm overflow-hidden snap-center group hover:shadow-lg transition-all duration-300 border border-gray-50 cursor-pointer block"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/assets/products/saree-revival/Revive Grace/Rg2.png"
                  alt="Crop Top Lehenga"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-serif font-medium text-black group-hover:text-[#C6A756] transition-colors">Crop Top Lehenga</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-gray-50 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-black tracking-wide leading-tight">
            Give Your Saree A Second Life
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Your cherished saree can become a beautiful new outfit. <br className="hidden md:block" />
            Send us a photo and let our designers transform it into something extraordinary.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi StyleByDivya, I want to revive my saree into a custom outfit. I will share the saree photos here.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-[#C6A756] text-black font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 shadow-xl rounded-full text-base md:text-lg transform hover:-translate-y-1"
            >
              Start Your Saree Revival
            </a>
            <p className="text-sm text-gray-400 mt-2">
              You can send photos or videos of your saree directly on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
