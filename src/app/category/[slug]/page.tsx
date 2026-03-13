import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import Navbar from "@/components/shop/Navbar";
import Footer from "@/components/shop/Footer";
import ProductGrid from "@/components/shop/ProductGrid";
import { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const CATEGORY_MAP: Record<string, string> = {
  tops: "Tops",
  skirt: "Skirt",
  trouser: "Trouser",
  outfits: "Outfits",
  "couple-combo": "Couple Combo",
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = CATEGORY_MAP[slug];

  if (!categoryName) return {};

  return {
    title: `${categoryName} Collection | StyleByDivya`,
    description: `Shop our exclusive ${categoryName} collection. Premium quality and elegant designs.`,
    alternates: {
      canonical: `/category/${slug}`,
    },
    openGraph: {
      title: `${categoryName} Collection | StyleByDivya`,
      description: `Explore our latest ${categoryName} designs. Handcrafted for elegance.`,
      url: `https://stylebydivya.in/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = CATEGORY_MAP[slug];

  if (!categoryName) {
    notFound();
  }

  // Filter products by category
  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 py-16 flex-1">
        <h1 className="text-3xl md:text-4xl font-serif text-black text-center mb-12 tracking-wide uppercase">
          {categoryName}
        </h1>

        {/* Reusing ProductGrid but without the internal filter buttons since we are on a specific category page */}
        {/* We can pass just the filtered products. The ProductGrid component currently has internal state for filtering. */}
        {/* To make it cleaner, we might want to update ProductGrid to accept an initialCategory or hide filters if needed. */}
        {/* For now, we will use the filtered list. The ProductGrid defaults to "All" of the passed products. */}
        
        <ProductGrid products={filteredProducts} hideFilters={true} />
      </section>

      <Footer />
    </main>
  );
}
