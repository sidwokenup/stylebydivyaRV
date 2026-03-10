import Navbar from "@/components/shop/Navbar";
import HeroCarousel from "@/components/shop/HeroCarousel";
import CollectionSection from "@/components/shop/CollectionSection";
import TrendingSection from "@/components/shop/TrendingSection";
import CustomDressSection from "@/components/shop/CustomDressSection";
import HappyCustomersSection from "@/components/shop/HappyCustomersSection";
import Footer from "@/components/shop/Footer";

export default function ShopPage() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col">
      <Navbar />
      <HeroCarousel />
      <CollectionSection />
      <TrendingSection />
      <CustomDressSection />
      <HappyCustomersSection />
      <Footer />
    </main>
  );
}
