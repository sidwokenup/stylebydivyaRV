import React from "react";
import Image from "next/image";

export default function CustomDressSection() {
  const WHATSAPP_NUMBER = "918708461553";
  const whatsappMessage = encodeURIComponent("Hi, I want to design a custom dress with StyleByDivya.");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section className="py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Visual */}
          <div className="relative h-[500px] md:h-[600px] w-full rounded-lg overflow-hidden shadow-xl group order-2 lg:order-1">
            <Image
              src="/assets/Dream/Dreams.png"
              alt="Fashion Design Sketching"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
          </div>

          {/* Right Side: Content & Steps */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4 text-black tracking-wide leading-tight">
              Make Your Dream Dress With Us
            </h2>
            <p className="text-gray-500 text-lg mb-12 leading-relaxed tracking-wide">
              From idea to reality — we design, craft, and deliver your custom outfit.
            </p>

            <div className="space-y-8 mb-12">
              {/* Step 1 */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm text-[#C6A756] group-hover:scale-110 transition-transform duration-300">
                  <span className="font-serif font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium text-black mb-2">Book a Call</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Connect with our team to discuss your dream dress idea, inspiration, colors, or event.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm text-[#C6A756] group-hover:scale-110 transition-transform duration-300">
                  <span className="font-serif font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium text-black mb-2">Design & Sketch</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Our designer prepares a custom dress sketch and suggests improvements to enhance the final design.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm text-[#C6A756] group-hover:scale-110 transition-transform duration-300">
                  <span className="font-serif font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium text-black mb-2">Crafting Your Dress</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    The outfit is crafted by skilled artisans using premium fabrics and intricate finishing.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm text-[#C6A756] group-hover:scale-110 transition-transform duration-300">
                  <span className="font-serif font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium text-black mb-2">Delivered to Your Doorstep</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    The completed dress is carefully packaged and delivered safely to your doorstep.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-[#C6A756] text-black font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 shadow-lg transform hover:-translate-y-1 rounded-sm text-sm md:text-base w-full md:w-auto text-center"
              >
                Start Designing Your Dress
              </a>
              <p className="text-xs text-gray-400 mt-4 tracking-wider uppercase font-light">
                Personal design consultation • Premium fabrics • Delivered across India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
