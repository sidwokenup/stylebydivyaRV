"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import { calculateDiscount } from "@/lib/utils/calculateDiscount";
import { motion, AnimatePresence } from "framer-motion";

interface ProductGridProps {
  products: Product[];
  hideFilters?: boolean;
}

const CATEGORIES = ["All", "Tops", "Skirt", "Outfits", "Couple Combo", "Trouser"];

export default function ProductGrid({ products, hideFilters = false }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Category Filter */}
      {!hideFilters && (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wide transition-all duration-300 border ${
                selectedCategory === category
                  ? "bg-[#C6A756] text-white border-[#C6A756]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#C6A756] hover:text-[#C6A756]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/shop/${product.collection}/${product.id}`}
                className="group block"
              >
                <div className="w-full aspect-[3/4] bg-white overflow-hidden mb-4 relative rounded-sm">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />

                  {/* Stock Badge */}
                  {product.inStock === false && (
                    <span className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 uppercase tracking-wide z-10">
                      Out of Stock
                    </span>
                  )}

                  {/* Discount Badge */}
                  {product.discount && product.discount > 0 && (
                    <div className="absolute top-3 left-3 bg-[#C6A756] text-white text-xs px-2 py-1 rounded z-20 font-medium">
                      {product.discount}% OFF
                    </div>
                  )}

                  {/* Category Badge (Optional Enhancement) */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] px-2 py-1 uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.category}
                  </div>

                  {/* Free Size Badge (Wrapstyle Only) */}
                  {product.type === "wrapstyle" && (
                    <span
                      className={`absolute ${
                        product.discount && product.discount > 0
                          ? "top-12"
                          : "top-3"
                      } left-3 bg-black/70 text-white text-xs px-3 py-1 uppercase tracking-wide z-10`}
                    >
                      FREE SIZE
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-center">
                  <h3 className="mt-4 text-base md:text-lg font-medium text-black transition-colors duration-300 group-hover:text-[#C6A756]">
                    {product.name}
                  </h3>

                  <div className="mt-1 flex items-center justify-center gap-2">
                    {product.discount && product.discount > 0 ? (
                      <>
                        <span className="text-gray-400 line-through text-sm">
                          ₹ {product.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-[#C6A756] font-medium text-lg">
                          ₹{" "}
                          {calculateDiscount(
                            product.price,
                            product.discount
                          ).toLocaleString("en-IN")}
                        </span>
                      </>
                    ) : (
                      <span className="text-[#C6A756] font-medium text-lg">
                        ₹ {product.price.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                  
                   {/* Category Label below title */}
                   <p className="text-xs text-gray-400 uppercase tracking-widest">
                      {product.category}
                   </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {filteredProducts.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
                <button 
                    onClick={() => setSelectedCategory("All")}
                    className="mt-4 text-[#C6A756] underline underline-offset-4"
                >
                    View all products
                </button>
            </div>
        )}
      </div>
    </div>
  );
}
