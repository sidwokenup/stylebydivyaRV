import React from "react";
import Image from "next/image";
import { HAPPY_CUSTOMERS } from "@/data/happyCustomers";

export default function HappyCustomersSection() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-black tracking-wide">
            Happy Customers
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base tracking-wide">
            Real people. Real transformations. Real celebrations.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              
              {/* Left: Customer Image */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="relative aspect-[3/4] md:aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/assets/customers/chetna.jpg"
                    alt={HAPPY_CUSTOMERS[0].name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right: Review Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <div className="text-6xl text-gray-200 font-serif leading-none mb-4 md:mb-6">❝</div>
                <p className="text-gray-600 text-lg md:text-xl italic leading-relaxed mb-8">
                  {HAPPY_CUSTOMERS[0].review}
                </p>
                
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-xl font-serif font-medium text-black mb-1">{HAPPY_CUSTOMERS[0].name}</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">{HAPPY_CUSTOMERS[0].location}</p>
                  <p className="text-sm text-[#C6A756] font-medium">Occasion: {HAPPY_CUSTOMERS[0].occasion}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation (Visual Only for MVP) */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              className="w-12 h-12 rounded-full border border-gray-400 bg-white text-black flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              disabled
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              className="w-12 h-12 rounded-full border border-gray-400 bg-white text-black flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              disabled
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
