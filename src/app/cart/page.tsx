"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shop/Navbar";
import Footer from "@/components/shop/Footer";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const WHATSAPP_NUMBER = "918708461553";

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
    <main className="min-h-screen w-full bg-white flex flex-col">
      <Navbar />

      <section className="py-20 md:py-24 bg-gray-50 flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-black mb-12 text-center">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-100 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <p className="text-gray-500 mb-8 text-lg">Your cart is empty</p>
              <Link
                href="/shop"
                className="inline-block px-10 py-4 bg-[#C6A756] text-black font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 rounded-sm shadow-md"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Cart Items List */}
              <div className="flex-grow space-y-6">
                {cartItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-center sm:items-start transition-all hover:shadow-md"
                  >
                    {/* Image */}
                    <div className="relative w-32 h-40 flex-shrink-0 bg-gray-50 rounded-sm overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100px, 150px"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-grow flex flex-col sm:flex-row justify-between w-full gap-4">
                      <div className="space-y-2 text-center sm:text-left">
                        <h3 className="text-lg font-medium text-black line-clamp-2">{item.name}</h3>
                        <p className="text-sm text-gray-500 uppercase tracking-wide">{item.collection}</p>
                        <p className="text-[#C6A756] font-medium text-lg">₹ {item.price.toLocaleString("en-IN")}</p>
                      </div>

                      <div className="flex flex-col items-center sm:items-end gap-4">
                        {/* Quantity Control */}
                        <div className="flex items-center border border-gray-200 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="w-10 text-center font-medium text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm text-red-500 hover:text-red-700 underline underline-offset-4 transition-colors flex items-center gap-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary (Sticky) */}
              <div className="w-full lg:w-[350px] flex-shrink-0">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 sticky top-24">
                  <h3 className="text-xl font-serif font-medium text-black mb-6 border-b border-gray-100 pb-4">
                    Cart Summary
                  </h3>
                  
                  <div className="space-y-4 mb-8 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>₹ {getCartTotal().toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery</span>
                      <span className="text-green-600 font-medium">Free</span>
                    </div>
                    <div className="flex justify-between text-black font-bold text-lg pt-4 border-t border-gray-100">
                      <span>Total</span>
                      <span>₹ {getCartTotal().toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white text-center font-medium uppercase tracking-widest rounded-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mb-4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.698c1.009.592 1.973.913 3.29.913 3.18 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.769-5.767-5.769zm9.754 4.968c.335-5.327-3.746-9.629-9.109-9.629-5.086 0-9.244 4.157-9.244 9.241 0 2.691 1.15 5.092 2.985 6.862l-2.063 7.529 7.781-2.052c1.606.855 3.998 1.302 6.168.601 5.48-1.77 8.58-7.264 3.482-12.552zm-10.022 14.267c-1.919 0-3.748-.63-5.301-1.71l-3.651.956.975-3.524c-1.127-1.719-1.724-3.77-1.722-5.888 0-5.922 4.817-10.74 10.74-10.74 5.919-.002 10.74 4.815 10.741 10.739-.002 5.922-4.82 10.74-10.782 10.74zm5.52-8.355c-.303-.155-1.795-.884-2.072-.985-.277-.102-.48-.153-.682.151-.202.305-.782.986-.958 1.186-.176.203-.354.227-.657.073-.303-.152-1.28-.47-2.435-1.502-.893-.793-1.494-1.774-1.67-2.077-.176-.304-.019-.468.132-.619.137-.136.302-.353.454-.53.151-.177.202-.3.302-.502.101-.202.051-.378-.025-.53-.076-.151-.682-1.649-.934-2.257-.247-.594-.499-.513-.682-.523-.176-.009-.378-.009-.58-.009-.202 0-.53.076-.807.38-.277.304-1.059 1.059-1.059 2.581 0 1.522 1.109 2.99 1.263 3.193.152.202 2.183 3.325 5.287 4.663 3.104 1.338 3.104.891 3.66 .835.555-.056 1.795-.733 2.048-1.441.252-.709.252-1.311.177-1.441-.076-.13-.277-.203-.58-.354z"/>
                    </svg>
                    Place Order on WhatsApp
                  </a>
                  
                  <Link
                    href="/shop"
                    className="block w-full py-4 bg-white border border-black text-black text-center font-medium uppercase tracking-widest rounded-sm hover:bg-black hover:text-white transition-colors"
                  >
                    Continue Shopping
                  </Link>

                  <p className="text-xs text-center text-gray-400 mt-4">
                    Secure checkout via WhatsApp. We will confirm your order details manually.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mobile Sticky Checkout Bar */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-50 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase">Total</p>
            <p className="text-lg font-bold text-black">₹ {getCartTotal().toLocaleString("en-IN")}</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-6 py-3 rounded-sm font-medium uppercase tracking-wider text-sm flex items-center gap-2 shadow-sm"
          >
            Place Order
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.698c1.009.592 1.973.913 3.29.913 3.18 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.769-5.767-5.769zm9.754 4.968c.335-5.327-3.746-9.629-9.109-9.629-5.086 0-9.244 4.157-9.244 9.241 0 2.691 1.15 5.092 2.985 6.862l-2.063 7.529 7.781-2.052c1.606.855 3.998 1.302 6.168.601 5.48-1.77 8.58-7.264 3.482-12.552zm-10.022 14.267c-1.919 0-3.748-.63-5.301-1.71l-3.651.956.975-3.524c-1.127-1.719-1.724-3.77-1.722-5.888 0-5.922 4.817-10.74 10.74-10.74 5.919-.002 10.74 4.815 10.741 10.739-.002 5.922-4.82 10.74-10.782 10.74zm5.52-8.355c-.303-.155-1.795-.884-2.072-.985-.277-.102-.48-.153-.682.151-.202.305-.782.986-.958 1.186-.176.203-.354.227-.657.073-.303-.152-1.28-.47-2.435-1.502-.893-.793-1.494-1.774-1.67-2.077-.176-.304-.019-.468.132-.619.137-.136.302-.353.454-.53.151-.177.202-.3.302-.502.101-.202.051-.378-.025-.53-.076-.151-.682-1.649-.934-2.257-.247-.594-.499-.513-.682-.523-.176-.009-.378-.009-.58-.009-.202 0-.53.076-.807.38-.277.304-1.059 1.059-1.059 2.581 0 1.522 1.109 2.99 1.263 3.193.152.202 2.183 3.325 5.287 4.663 3.104 1.338 3.104.891 3.66 .835.555-.056 1.795-.733 2.048-1.441.252-.709.252-1.311.177-1.441-.076-.13-.277-.203-.58-.354z"/>
            </svg>
          </a>
        </div>
      )}

      <Footer />
    </main>
  );
}
