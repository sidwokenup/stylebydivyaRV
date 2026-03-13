import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { calculateDiscount } from "@/lib/utils/calculateDiscount";

// Select specific products for the Trending section
// We can use IDs to pick exactly which ones we want
const TRENDING_IDS = [
  "celestial-pearl",
  "aabha",
  "the-valentina-top",
  "noor-e-ruhani",
  "the-odyssey-drape-skirt",
  "divyas-versatile-brown-wrap-dress"
];

// Filter products based on the IDs and preserve the order
const TRENDING_PRODUCTS = TRENDING_IDS.map(id => 
  products.find(p => p.id === id)
).filter(Boolean); // Remove any undefined entries if ID not found

export default function TrendingSection() {
  return (
    <section id="trending" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-black tracking-[0.2em] uppercase">
            Trending
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        {/* Product Grid / Carousel */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-x-6 gap-y-10 pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {TRENDING_PRODUCTS.map((product) => {
             if (!product) return null;
             
             return (
              <Link
                key={product.id}
                href={`/shop/${product.collection}/${product.id}`}
                className="group cursor-pointer block min-w-[70%] sm:min-w-0 snap-center"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[3/4] bg-white overflow-hidden mb-4 rounded-sm shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                  {/* Discount Badge */}
                  {product.discount && product.discount > 0 && (
                    <div className="absolute top-2 left-2 bg-[#C6A756] text-white text-[10px] px-2 py-0.5 rounded shadow-sm z-10 font-medium tracking-wide">
                      {product.discount}% OFF
                    </div>
                  )}
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 70vw, (max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-sm md:text-base font-medium text-black tracking-wider uppercase group-hover:text-[#D4AF37] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="mt-1 flex items-center justify-center gap-2">
                    {product.discount && product.discount > 0 ? (
                      <>
                        <span className="text-gray-400 line-through text-xs md:text-sm">
                          ₹ {product.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-[#C6A756] font-medium text-sm md:text-base">
                          ₹ {calculateDiscount(product.price, product.discount).toLocaleString("en-IN")}
                        </span>
                      </>
                    ) : (
                      <span className="text-[#C6A756] font-medium text-sm md:text-base">
                        ₹ {product.price.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">
                    {product.category}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
