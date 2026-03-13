import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import Navbar from "@/components/shop/Navbar";
import Footer from "@/components/shop/Footer";
import { Metadata } from "next";
import ProductGrid from "@/components/shop/ProductGrid";

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

        <div className="mt-8">
          <ProductGrid products={filteredProducts} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
