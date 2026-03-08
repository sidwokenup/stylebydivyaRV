import HeroVideo from "@/sections/landing/HeroVideo";
import AboutSection from "@/sections/about/AboutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Women Fashion Brand | StyleByDivya",
  description: "Explore StyleByDivya, a luxury women’s fashion brand offering elegant and modern clothing designed for style and confidence.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="relative w-full">
      <HeroVideo />
      <AboutSection />
    </main>
  );
}
