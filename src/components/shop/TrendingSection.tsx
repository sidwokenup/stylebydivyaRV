import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

// Select specific products for the Trending section
// We can use IDs to pick exactly which ones we want
const TRENDING_IDS = [
  "celestial-pearl",
  "aabha",
  "the-valentina-top",
  "noor-e-ruhani",
  "the-odyssey-drape-skirt",
  "divya's-brown-wrap-dress"
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {TRENDING_PRODUCTS.map((product) => {
             if (!product) return null;
             
             return (
              <Link
                key={product.id}
                href={`/shop/${product.collection}/${product.id}`}
                className="group cursor-pointer block"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[3/4] bg-white overflow-hidden mb-4 rounded-sm shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-sm md:text-base font-medium text-black tracking-wider uppercase group-hover:text-[#D4AF37] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-[#C6A756] font-medium mt-1 text-sm md:text-base">
                    ₹ {product.price.toLocaleString("en-IN")}
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
