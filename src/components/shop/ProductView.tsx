"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/shop/Navbar";
import Footer from "@/components/shop/Footer";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Product, getProductsByCollection } from "@/lib/products";
import ProductAccordion from "@/components/ProductAccordion";
import Link from "next/link";

// Company WhatsApp Number (International format without +)
const WHATSAPP_NUMBER = "918708461553";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

interface ProductViewProps {
  product: Product;
}

export default function ProductView({ product }: ProductViewProps) {
  // State for active image index
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Measurement State
  const [measurements, setMeasurements] = useState({
    shoulder: "",
    chest: "",
    waist: "",
    fullLength: "",
  });

  // Determine Product Type
  const collectionLower = product.collection.toLowerCase();
  const isWrapStyle = collectionLower.includes("wrap");
  const isIndoWestern = collectionLower.includes("indo");
  const isOldSareeRevamp = collectionLower.includes("old") || collectionLower.includes("revamp") || product.type === "sareerevamp";

  // Check screen size
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

  // Mobile Swipe Handler
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const SWIPE_THRESHOLD = 50;
    if (info.offset.x < -SWIPE_THRESHOLD) {
      // Swipe Left -> Next Image
      setActiveImageIndex((prev) => (prev + 1) % product.images.length);
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      // Swipe Right -> Previous Image
      setActiveImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  // Validation Logic
  const areMeasurementsValid = () => {
    if (isWrapStyle) return true;
    return (
      measurements.shoulder.trim() !== "" &&
      measurements.chest.trim() !== "" &&
      measurements.waist.trim() !== "" &&
      measurements.fullLength.trim() !== ""
    );
  };

  // WhatsApp Buy Now Handler
  const handleBuyNow = () => {
    // Safety checks
    if (!product || !product.name || !product.price) return;

    // Validation Check for IndoWestern / OldSareeRevamp
    if (!isWrapStyle && (isIndoWestern || isOldSareeRevamp)) {
      if (!areMeasurementsValid()) {
        alert("Please enter all required measurements before proceeding.");
        return;
      }
    }

    let message = `Hello StyleByDivya,\n\nI would like to buy the following product:\n\nProduct Name: ${product.name}\nCollection: ${product.collection}\nPrice: ₹ ${product.price.toLocaleString("en-IN")}`;

    if (isWrapStyle) {
      message += `\n\nSize: Free Size`;
    } else if (isIndoWestern || isOldSareeRevamp) {
       message += `\n\nMy Measurements:\nShoulder: ${measurements.shoulder}\nChest: ${measurements.chest}\nWaist: ${measurements.waist}\nFull Length: ${measurements.fullLength}`;
    }

    message += `\n\nPlease guide me with the next steps.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const relatedProducts = getProductsByCollection(product.collection)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen w-full bg-white flex flex-col">
      <Navbar />
      
      <section className="w-full bg-white py-10 md:py-16 flex-grow">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Left Column: Gallery */}
            <div className="flex flex-col gap-4">
              
              {/* Main Image Container */}
              <div className="relative w-full aspect-[3/4] bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                    drag={isMobile ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                  >
                    <Image
                      src={product.images[activeImageIndex]}
                      alt={`${product.name} - View ${activeImageIndex + 1}`}
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      draggable={false} // Prevent default drag behavior on desktop
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Mobile Pagination Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 md:hidden z-10">
                  {product.images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === activeImageIndex ? "bg-[#C6A756]" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Desktop Thumbnail Row */}
              <div className="hidden md:flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative w-20 h-24 flex-shrink-0 bg-gray-50 rounded overflow-hidden transition-all duration-300 ${
                      index === activeImageIndex 
                        ? "border-2 border-[#C6A756] scale-105 shadow-sm" 
                        : "border border-gray-100 hover:border-gray-300 opacity-80 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Product Info Section */}
            <div className="flex flex-col h-full">
              <div className="sticky top-24 space-y-8">
                
                {/* Product Header */}
                <div>
                  <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-black mb-2">
                    {product.name}
                  </h1>
                  <p className="text-xl md:text-2xl text-[#C6A756] font-medium">
                    ₹ {product.price.toLocaleString("en-IN")}
                  </p>
                  
                  {/* Stock Availability Tag */}
                  {product.inStock !== false ? (
                    <p className="mt-2 text-xs font-bold uppercase tracking-widest text-green-600">
                      🟢 In Stock
                    </p>
                  ) : (
                    <p className="mt-2 text-xs font-bold uppercase tracking-widest text-red-600">
                      🔴 Out of Stock
                    </p>
                  )}

                  {/* WrapStyle Badge */}
                  {isWrapStyle && (
                    <p className="text-xs uppercase tracking-widest text-[#C6A756] mt-2">
                      Free Sized – Compatible to all body types
                    </p>
                  )}
                </div>

                {/* Short Description */}
                <div className="text-gray-600 leading-relaxed">
                  <p>{product.description}</p>
                  <p className="mt-2 text-sm">
                    Handcrafted with precision and designed for elegance. This piece embodies the essence of luxury and comfort.
                  </p>
                </div>

                {/* Conditional Measurement Form */}
                <div className="py-4 border-t border-gray-100 border-b mb-4">
                  {isWrapStyle ? (
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-[#C6A756] rounded-full"></span>
                      <p className="text-black font-medium tracking-wide">
                        Free Size — <span className="text-gray-500 font-normal">Designed to fit comfortably.</span>
                      </p>
                    </div>
                  ) : (isIndoWestern || isOldSareeRevamp) ? (
                    <div className="space-y-4">
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-black">
                        Enter Your Measurements
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {/* Shoulder */}
                        <div>
                          <label className="block text-xs uppercase tracking-wide text-gray-700 font-medium mb-1">Shoulder</label>
                          <input 
                            type="text"
                            value={measurements.shoulder}
                            onChange={(e) => setMeasurements({...measurements, shoulder: e.target.value})}
                            className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C6A756] focus:border-[#C6A756] transition text-sm"
                            placeholder='e.g. 14"'
                          />
                        </div>
                        {/* Chest */}
                        <div>
                          <label className="block text-xs uppercase tracking-wide text-gray-700 font-medium mb-1">Chest</label>
                          <input 
                            type="text"
                            value={measurements.chest}
                            onChange={(e) => setMeasurements({...measurements, chest: e.target.value})}
                            className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C6A756] focus:border-[#C6A756] transition text-sm"
                            placeholder='e.g. 34"'
                          />
                        </div>
                        {/* Waist */}
                        <div>
                          <label className="block text-xs uppercase tracking-wide text-gray-700 font-medium mb-1">Waist</label>
                          <input 
                            type="text"
                            value={measurements.waist}
                            onChange={(e) => setMeasurements({...measurements, waist: e.target.value})}
                            className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C6A756] focus:border-[#C6A756] transition text-sm"
                            placeholder='e.g. 28"'
                          />
                        </div>
                        {/* Full Length */}
                        <div>
                          <label className="block text-xs uppercase tracking-wide text-gray-700 font-medium mb-1">Full Length</label>
                          <input 
                            type="text"
                            value={measurements.fullLength}
                            onChange={(e) => setMeasurements({...measurements, fullLength: e.target.value})}
                            className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C6A756] focus:border-[#C6A756] transition text-sm"
                            placeholder='e.g. 40"'
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-4">
                  <button className="w-full py-4 bg-black text-white font-medium uppercase tracking-widest hover:bg-gray-900 transition-colors">
                    Add to Cart
                  </button>
                  <button 
                    onClick={handleBuyNow}
                    className="w-full py-4 border border-[#C6A756] text-black font-medium uppercase tracking-widest hover:bg-[#C6A756] hover:text-white transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
                
                {/* Additional Info Accordions */}
                <div className="pt-8 border-t border-gray-100">
                  
                  {/* Size Guide - Conditional */}
                  {!isWrapStyle && (
                    <ProductAccordion title="Size Guide">
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left text-gray-600">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                              <th className="px-3 py-2">Size</th>
                              <th className="px-3 py-2">Shoulder</th>
                              <th className="px-3 py-2">Chest</th>
                              <th className="px-3 py-2">Waist</th>
                              <th className="px-3 py-2">Length</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white border-b">
                              <td className="px-3 py-2 font-medium">S</td>
                              <td className="px-3 py-2">14"</td>
                              <td className="px-3 py-2">34"</td>
                              <td className="px-3 py-2">28"</td>
                              <td className="px-3 py-2">40"</td>
                            </tr>
                            <tr className="bg-white border-b">
                              <td className="px-3 py-2 font-medium">M</td>
                              <td className="px-3 py-2">15"</td>
                              <td className="px-3 py-2">36"</td>
                              <td className="px-3 py-2">30"</td>
                              <td className="px-3 py-2">40"</td>
                            </tr>
                            <tr className="bg-white border-b">
                              <td className="px-3 py-2 font-medium">L</td>
                              <td className="px-3 py-2">16"</td>
                              <td className="px-3 py-2">38"</td>
                              <td className="px-3 py-2">32"</td>
                              <td className="px-3 py-2">41"</td>
                            </tr>
                            <tr className="bg-white">
                              <td className="px-3 py-2 font-medium">XL</td>
                              <td className="px-3 py-2">17"</td>
                              <td className="px-3 py-2">40"</td>
                              <td className="px-3 py-2">34"</td>
                              <td className="px-3 py-2">41"</td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="text-xs text-gray-400 mt-2 italic">
                          * All measurements in inches. For custom sizing, use the form above.
                        </p>
                      </div>
                    </ProductAccordion>
                  )}

                  <ProductAccordion title="What This Product Includes">
                    <ul className="list-disc pl-5 space-y-1">
                      {product.includes?.length > 0 ? (
                        product.includes.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>Premium packaging box</li>
                      )}
                    </ul>
                  </ProductAccordion>

                  <ProductAccordion title="Fabric & Care">
                    {product.fabricCare?.length > 0 ? (
                      <ul className="list-disc pl-5 space-y-1">
                        {product.fabricCare.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className="space-y-2">
                        <p>Made from high-quality fabrics sourced ethically. We recommend dry cleaning only.</p>
                      </div>
                    )}
                  </ProductAccordion>

                  <ProductAccordion title="Delivery & Returns">
                    <div className="space-y-3">
                      <div>
                        <strong className="block text-black text-xs uppercase mb-1">Delivery</strong>
                        <p>5–10 business days. Each piece is handcrafted with precision, ensuring the highest quality before it reaches you.</p>
                      </div>
                      <div>
                        <strong className="block text-black text-xs uppercase mb-1">Returns</strong>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>No return on customized products.</li>
                          <li>7-day return policy on standard sizes.</li>
                          <li>Exchange allowed for size issues.</li>
                        </ul>
                      </div>
                    </div>
                  </ProductAccordion>

                  <ProductAccordion title="FAQs">
                    <div className="space-y-4">
                      {product.faqs?.length > 0 ? (
                        product.faqs.map((faq, index) => (
                          <div key={index}>
                            <p className="font-medium text-black mb-1">{faq.question}</p>
                            <p>{faq.answer}</p>
                          </div>
                        ))
                      ) : (
                        <p>No FAQs available for this product.</p>
                      )}
                    </div>
                  </ProductAccordion>
                  
                  <ProductAccordion title="Reviews">
                    <div className="py-4 text-center bg-gray-50 rounded">
                      <p className="text-gray-500 italic text-xs">Reviews coming soon.</p>
                    </div>
                  </ProductAccordion>

                </div>

              </div>
            </div>

          </div>

          {/* Below Grid Sections */}
          <div className="mt-16 md:mt-24 border-t border-gray-200 pt-16 space-y-16">
            
            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div>
                <h3 className="text-2xl font-serif text-black text-center mb-12 uppercase tracking-widest">You May Also Like</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                   {relatedProducts.map((item) => (
                     <Link
                       key={item.id}
                       href={`/shop/${item.collection}/${slugify(item.id)}`}
                       className="group cursor-pointer"
                     >
                        <div className="w-full aspect-[3/4] bg-gray-100 mb-4 overflow-hidden relative">
                          <Image 
                            src={item.images[0]} 
                            alt={item.name} 
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                          />
                        </div>
                        <h4 className="text-center font-medium uppercase tracking-wide text-sm text-gray-800">
                          {item.name}
                        </h4>
                        <p className="text-center text-[#C6A756] text-sm mt-1">
                          ₹ {item.price.toLocaleString("en-IN")}
                        </p>
                     </Link>
                   ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}
