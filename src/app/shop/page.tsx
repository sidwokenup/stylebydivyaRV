import Navbar from "@/components/shop/Navbar";
import HeroCarousel from "@/components/shop/HeroCarousel";
import CollectionSection from "@/components/shop/CollectionSection";
import TrendingSection from "@/components/shop/TrendingSection";
import Footer from "@/components/shop/Footer";

export default function ShopPage() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col">
      <Navbar />
      <HeroCarousel />
      <CollectionSection />
      <TrendingSection />
      <Footer />
    </main>
  );
}
