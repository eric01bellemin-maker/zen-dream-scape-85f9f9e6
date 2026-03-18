import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SoundsSection from "@/components/SoundsSection";
import ProductSection from "@/components/ProductSection";
import ThirdPageSection from "@/components/ThirdPageSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SoundsSection />
      <ProductSection />
      <ThirdPageSection />
    </div>
  );
};

export default Index;
