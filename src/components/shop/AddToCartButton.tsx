"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/products";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

export default function AddToCartButton({ product, className = "" }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    
    // Simulate a small delay for better UX feel (or just immediate)
    setTimeout(() => {
      addToCart(product);
      setIsAdding(false);
    }, 300);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding || !product.inStock}
      className={`
        w-full py-4 px-8 
        bg-black text-white 
        font-medium uppercase tracking-widest 
        hover:bg-[#C6A756] hover:text-black 
        transition-all duration-300 
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center gap-2
        ${className}
      `}
    >
      {isAdding ? (
        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : !product.inStock ? (
        "Out of Stock"
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          Add to Cart
        </>
      )}
    </button>
  );
}
