import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SoundsSection from "@/components/SoundsSection";
import ProductSection from "@/components/ProductSection";
import ThirdPageSection from "@/components/ThirdPageSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <SoundsSection />
        <ProductSection />
        <ThirdPageSection />
      </div>
    </main>
  );
};

export default Index;
