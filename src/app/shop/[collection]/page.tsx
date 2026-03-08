import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import Navbar from "@/components/shop/Navbar";
import Footer from "@/components/shop/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

interface CollectionPageProps {
  params: Promise<{
    collection?: string;
  }>;
}

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { collection } = await params;

  if (!collection) return {};

  const normalizedCollection = collection.toLowerCase().replace(/-/g, " ");
  // Capitalize each word for title
  const title = normalizedCollection.replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `${title} Collection`,
    description: `Discover our exclusive ${normalizedCollection} collection at StyleByDivya. Elegant and timeless fashion pieces crafted for you.`,
    alternates: {
      canonical: `/shop/${collection}`,
    },
    openGraph: {
      title: `${title} Collection | StyleByDivya`,
      description: `Explore the ${normalizedCollection} collection. Luxury fashion designed for elegance and confidence.`,
      url: `https://stylebydivya.in/shop/${collection}`,
    },
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { collection } = await params;

  // If param missing → 404
  if (!collection) {
    notFound();
  }

  const normalizedCollection = collection.toLowerCase();

  // Dynamically derive available collections from product data
  const availableCollections = [
    ...new Set(products.map((p) => p.collection.toLowerCase())),
  ];

  // Validate collection
  if (!availableCollections.includes(normalizedCollection)) {
    notFound();
  }

  // Filter products for this collection
  const filteredProducts = products.filter(
    (p) => p.collection.toLowerCase() === normalizedCollection
  );

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 py-16 flex-1">
        <h1 className="text-3xl md:text-4xl font-serif text-black text-center mb-12 tracking-wide capitalize">
          {normalizedCollection.replace("-", " ")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
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

                {/* Free Size Badge (Wrapstyle Only) */}
                {product.type === "wrapstyle" && (
                    <span className="absolute top-3 left-3 bg-[#C6A756] text-white text-xs px-3 py-1 uppercase tracking-wide z-10">
                      FREE SIZE
                    </span>
                )}
              </div>

              <div className="space-y-2 text-center">
                  <h3 className="mt-4 text-base md:text-lg font-medium text-black transition-colors duration-300 group-hover:text-[#C6A756]">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-[#C6A756] font-medium">
                    ₹ {product.price.toLocaleString("en-IN")}
                  </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
