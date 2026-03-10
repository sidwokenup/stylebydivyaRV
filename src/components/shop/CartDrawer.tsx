"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { cartItems, isCartOpen, toggleCart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        if (isCartOpen) toggleCart();
      }
    };

    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen, toggleCart]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  const WHATSAPP_NUMBER = "918708461553"; // Using the number from previous context

  const generateWhatsAppMessage = () => {
    let message = "Hello StyleByDivya,\n\nI would like to place an order.\n\n*Order Details:*\n\n";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n   Price: ₹${item.price.toLocaleString("en-IN")}\n   Quantity: ${item.quantity}\n\n`;
    });

    message += `*Total: ₹${getCartTotal().toLocaleString("en-IN")}*\n`;
    message += "Delivery: Free\n\n";
    message += "Please guide me for payment and delivery.";

    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-xl font-serif font-medium text-black tracking-wide">Your Cart ({cartItems.length})</h2>
              <button
                onClick={toggleCart}
                className="p-2 text-gray-400 hover:text-black transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 mb-6">Your cart is empty</p>
                  <button
                    onClick={toggleCart}
                    className="text-[#C6A756] hover:text-black font-medium transition-colors uppercase tracking-widest text-sm underline underline-offset-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    {/* Image */}
                    <div className="relative w-20 h-24 flex-shrink-0 bg-gray-50 rounded-sm overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-medium text-black line-clamp-2 pr-2">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">₹ {item.price.toLocaleString("en-IN")}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-gray-200 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 text-gray-500 hover:bg-gray-50 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="text-xs font-medium w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-gray-500 hover:bg-gray-50 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-100 px-6 py-6 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Subtotal</span>
                  <span className="text-lg font-medium text-black">₹ {getCartTotal().toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-gray-500">Delivery</span>
                  <span className="text-sm text-green-600 font-medium">Free</span>
                </div>
                
                <div className="space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-[#25D366] hover:bg-[#128C7E] text-white text-center font-medium uppercase tracking-widest rounded-sm transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.698c1.009.592 1.973.913 3.29.913 3.18 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.769-5.767-5.769zm9.754 4.968c.335-5.327-3.746-9.629-9.109-9.629-5.086 0-9.244 4.157-9.244 9.241 0 2.691 1.15 5.092 2.985 6.862l-2.063 7.529 7.781-2.052c1.606.855 3.998 1.302 6.168.601 5.48-1.77 8.58-7.264 3.482-12.552zm-10.022 14.267c-1.919 0-3.748-.63-5.301-1.71l-3.651.956.975-3.524c-1.127-1.719-1.724-3.77-1.722-5.888 0-5.922 4.817-10.74 10.74-10.74 5.919-.002 10.74 4.815 10.741 10.739-.002 5.922-4.82 10.74-10.782 10.74zm5.52-8.355c-.303-.155-1.795-.884-2.072-.985-.277-.102-.48-.153-.682.151-.202.305-.782.986-.958 1.186-.176.203-.354.227-.657.073-.303-.152-1.28-.47-2.435-1.502-.893-.793-1.494-1.774-1.67-2.077-.176-.304-.019-.468.132-.619.137-.136.302-.353.454-.53.151-.177.202-.3.302-.502.101-.202.051-.378-.025-.53-.076-.151-.682-1.649-.934-2.257-.247-.594-.499-.513-.682-.523-.176-.009-.378-.009-.58-.009-.202 0-.53.076-.807.38-.277.304-1.059 1.059-1.059 2.581 0 1.522 1.109 2.99 1.263 3.193.152.202 2.183 3.325 5.287 4.663 3.104 1.338 3.104.891 3.66 .835.555-.056 1.795-.733 2.048-1.441.252-.709.252-1.311.177-1.441-.076-.13-.277-.203-.58-.354z"/>
                    </svg>
                    Checkout on WhatsApp
                  </a>
                  
                  <Link
                    href="/cart"
                    onClick={toggleCart}
                    className="block w-full py-3 bg-black hover:bg-gray-800 text-white text-center font-medium uppercase tracking-widest rounded-sm transition-colors shadow-sm"
                  >
                    View Cart
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
