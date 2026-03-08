import Link from "next/link";
import Image from "next/image";

// Using existing assets as model cutouts (using object-contain to prevent cropping)
import model1 from "@/assets/Collec_crousel/wrap_collec.png";
import model2 from "@/assets/Collec_crousel/Indo-western_collec.png";
import model3 from "@/assets/Collec_crousel/saree_collec.png";

const COLLECTIONS = [
  {
    id: 1,
    title: "Wrap Style",
    image: model1,
    href: "/shop/wrapstyles",
    alt: "Wrap Style Collection Model",
  },
  {
    id: 2,
    title: "Indo-Western",
    image: model2,
    href: "/shop/indo-western",
    alt: "Indo-Western Collection Model",
  },
  {
    id: 3,
    title: "Saree Revival",
    image: model3,
    href: "/shop/saree-revival",
    alt: "Saree Revival Collection Model",
  },
];

export default function CollectionSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Model Cutout Carousel / Grid */}
        <div className="
          flex 
          overflow-x-auto 
          snap-x 
          snap-mandatory 
          gap-6 
          pb-8 
          -mx-4 px-4 
          md:grid 
          md:grid-cols-3 
          md:gap-12 
          md:overflow-visible 
          md:mx-0 
          md:px-0 
          scrollbar-hide
        ">
          {COLLECTIONS.map((item) => (
            <Link 
              key={item.id} 
              href={item.href}
              className="
                flex-shrink-0 
                w-[85vw] 
                sm:w-[60vw] 
                md:w-auto 
                snap-center 
                group 
                cursor-pointer
                relative
              "
            >
              <div className="relative w-full aspect-[3/4] md:aspect-[2/3] overflow-hidden rounded-lg bg-gray-50 transition-transform duration-500 md:group-hover:scale-[1.02]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain object-bottom transition-transform duration-700 md:group-hover:scale-105"
                  sizes="(max-width: 768px) 85vw, 33vw"
                  priority={item.id === 1} // Load first image immediately
                />
                
                {/* Mobile Title Overlay - LUXURY GOLD UPDATE */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-max max-w-[90%] text-center md:hidden">
                  <div className="bg-black/20 backdrop-blur-sm px-6 py-2 rounded border border-white/10 shadow-lg">
                    <span className="block text-[#D4AF37] font-serif text-lg tracking-widest uppercase font-medium drop-shadow-md">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Desktop Title Below Image - LUXURY GOLD UPDATE */}
              <div className="hidden md:flex justify-center mt-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                 <div className="bg-white/5 backdrop-blur-sm px-6 py-2 rounded border border-gray-100/50">
                    <span className="text-[#D4AF37] font-serif text-xl tracking-widest uppercase font-medium border-b border-[#D4AF37]/30 pb-1">
                      {item.title}
                    </span>
                 </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Section Heading */}
        <div className="text-center mt-8 md:mt-16">
          <h2 className="text-3xl md:text-4xl font-serif text-black tracking-[0.2em] uppercase">
            Collection
          </h2>
          <div className="w-12 h-0.5 bg-black mx-auto mt-6"></div>
        </div>
      </div>
    </section>
  );
}
